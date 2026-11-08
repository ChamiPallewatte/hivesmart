/**
 * Cloudflare D1 Database Direct Interface
 * Ultra-fast, zero-overhead edge SQLite queries with safe fallback.
 */

import { getAllPosts, getPostBySlug, INITIAL_BLOG_POSTS, type StaticBlogPost } from './initial-posts';

export interface NewPostPayload {
  title: string;
  slug: string;
  description: string;
  content: string;
  categoryName: string;
  author?: string;
  readingTime?: number;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * Retrieve blog articles from Cloudflare D1 with instant fallback to static articles.
 */
export async function getBlogArticles(d1Binding?: any): Promise<StaticBlogPost[]> {
  if (d1Binding && typeof d1Binding.prepare === 'function') {
    try {
      // Ensure BlogPost table exists in D1
      await d1Binding
        .prepare(
          `CREATE TABLE IF NOT EXISTS BlogPost (
            id TEXT PRIMARY KEY,
            slug TEXT UNIQUE,
            title TEXT,
            description TEXT,
            content TEXT,
            featuredImage TEXT,
            author TEXT,
            readingTime INTEGER,
            published INTEGER DEFAULT 1,
            publishedAt TEXT,
            updatedAt TEXT,
            seoTitle TEXT,
            seoDescription TEXT,
            categoryName TEXT
          )`
        )
        .run();

      const result = await d1Binding
        .prepare('SELECT * FROM BlogPost ORDER BY publishedAt DESC')
        .all();

      if (result && result.results && result.results.length > 0) {
        const d1Posts: StaticBlogPost[] = result.results.map((r: any) => ({
          id: r.id,
          slug: r.slug,
          title: r.title,
          description: r.description,
          content: r.content,
          featuredImage: r.featuredImage || '/images/blog/custom-web-dev.svg',
          author: r.author || 'HiveSmart Team',
          readingTime: Number(r.readingTime) || 5,
          published: Boolean(r.published),
          publishedAt: r.publishedAt || new Date().toISOString(),
          updatedAt: r.updatedAt || new Date().toISOString(),
          seoTitle: r.seoTitle || r.title,
          seoDescription: r.seoDescription || r.description,
          category: {
            name: r.categoryName || 'Website Development',
            slug: (r.categoryName || 'website-development').toLowerCase().replace(/[^a-z0-9]+/g, '-')
          },
          tags: []
        }));

        // Merge with initial posts if not already present
        const combined = [...d1Posts];
        for (const staticP of INITIAL_BLOG_POSTS) {
          if (!combined.some((p) => p.slug === staticP.slug)) {
            combined.push(staticP);
          }
        }
        return combined;
      }
    } catch (err) {
      console.warn('[HiveSmart DB] D1 query warning, using static fallback:', err);
    }
  }

  return getAllPosts();
}

/**
 * Retrieve a single blog article by slug
 */
export async function getBlogArticleBySlug(slug: string, d1Binding?: any): Promise<StaticBlogPost | undefined> {
  if (d1Binding && typeof d1Binding.prepare === 'function') {
    try {
      const row = await d1Binding
        .prepare('SELECT * FROM BlogPost WHERE slug = ? LIMIT 1')
        .bind(slug)
        .first();

      if (row) {
        return {
          id: row.id,
          slug: row.slug,
          title: row.title,
          description: row.description,
          content: row.content,
          featuredImage: row.featuredImage || '/images/blog/custom-web-dev.svg',
          author: row.author || 'HiveSmart Team',
          readingTime: Number(row.readingTime) || 5,
          published: Boolean(row.published),
          publishedAt: row.publishedAt || new Date().toISOString(),
          updatedAt: row.updatedAt || new Date().toISOString(),
          seoTitle: row.seoTitle || row.title,
          seoDescription: row.seoDescription || row.description,
          category: {
            name: row.categoryName || 'Website Development',
            slug: (row.categoryName || 'website-development').toLowerCase().replace(/[^a-z0-9]+/g, '-')
          },
          tags: []
        };
      }
    } catch (err) {
      console.warn(`[HiveSmart DB] D1 lookup for '${slug}' warning:`, err);
    }
  }

  return getPostBySlug(slug);
}

/**
 * Creates and persists a new blog post into Cloudflare D1 and runtime memory.
 */
export async function createBlogPost(data: NewPostPayload, d1Binding?: any): Promise<StaticBlogPost> {
  const author = data.author?.trim() || 'HiveSmart Team';
  const readingTime = Number(data.readingTime) || Math.max(3, Math.ceil(data.content.split(/\s+/).length / 200));
  const now = new Date().toISOString();
  const id = `post-${Date.now()}`;
  const seoTitle = data.seoTitle?.trim() || data.title;
  const seoDescription = data.seoDescription?.trim() || data.description;

  if (d1Binding && typeof d1Binding.prepare === 'function') {
    try {
      await d1Binding
        .prepare(
          `CREATE TABLE IF NOT EXISTS BlogPost (
            id TEXT PRIMARY KEY,
            slug TEXT UNIQUE,
            title TEXT,
            description TEXT,
            content TEXT,
            featuredImage TEXT,
            author TEXT,
            readingTime INTEGER,
            published INTEGER DEFAULT 1,
            publishedAt TEXT,
            updatedAt TEXT,
            seoTitle TEXT,
            seoDescription TEXT,
            categoryName TEXT
          )`
        )
        .run();

      await d1Binding
        .prepare(
          `INSERT OR REPLACE INTO BlogPost (id, slug, title, description, content, featuredImage, author, readingTime, published, publishedAt, updatedAt, seoTitle, seoDescription, categoryName)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?)`
        )
        .bind(
          id,
          data.slug,
          data.title,
          data.description,
          data.content,
          '/images/blog/custom-web-dev.svg',
          author,
          readingTime,
          now,
          now,
          seoTitle,
          seoDescription,
          data.categoryName
        )
        .run();

      console.log(`[HiveSmart DB] Post '${data.slug}' inserted into Cloudflare D1.`);
    } catch (err) {
      console.warn('[HiveSmart DB] D1 write failed, storing in memory:', err);
    }
  }

  const created: StaticBlogPost = {
    id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    content: data.content,
    featuredImage: '/images/blog/custom-web-dev.svg',
    author,
    readingTime,
    published: true,
    publishedAt: now,
    updatedAt: now,
    seoTitle,
    seoDescription,
    category: {
      name: data.categoryName,
      slug: data.categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    },
    tags: data.tags || []
  };

  INITIAL_BLOG_POSTS.unshift(created);
  return created;
}

/**
 * Deletes a post by slug from D1 and memory
 */
export async function deleteBlogPost(slug: string, d1Binding?: any): Promise<boolean> {
  if (d1Binding && typeof d1Binding.prepare === 'function') {
    try {
      await d1Binding.prepare('DELETE FROM BlogPost WHERE slug = ?').bind(slug).run();
    } catch (err) {
      console.warn('[HiveSmart DB] D1 delete failed:', err);
    }
  }

  const index = INITIAL_BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (index !== -1) {
    INITIAL_BLOG_POSTS.splice(index, 1);
    return true;
  }
  return false;
}
