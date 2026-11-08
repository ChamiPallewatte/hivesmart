/**
 * Cloudflare D1 Database & Prisma ORM Interface
 * Handles runtime D1 bindings, migrations, and static fallback.
 */

import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';
import { getAllPosts, getPostBySlug, type StaticBlogPost } from './initial-posts';

let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(d1Binding?: any): PrismaClient | null {
  if (prismaInstance) return prismaInstance;

  if (d1Binding) {
    try {
      const adapter = new PrismaD1(d1Binding);
      prismaInstance = new PrismaClient({ adapter });
      return prismaInstance;
    } catch (err) {
      console.error('[HiveSmart DB] Error initializing Prisma D1 adapter:', err);
    }
  }

  return null;
}

/**
 * High-level Blog Service
 * Transparently queries Cloudflare D1 if available, otherwise falls back
 * to high-performance pre-compiled static post records.
 */
export async function getBlogArticles(d1Binding?: any): Promise<StaticBlogPost[]> {
  const db = getPrismaClient(d1Binding);

  if (db) {
    try {
      const posts = await db.blogPost.findMany({
        where: { published: true },
        include: {
          category: true,
          tags: {
            include: { tag: true }
          }
        },
        orderBy: { publishedAt: 'desc' }
      });

      if (posts && posts.length > 0) {
        return posts.map((p) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          description: p.description,
          content: p.content,
          featuredImage: p.featuredImage || '/images/blog/custom-web-dev.svg',
          author: p.author,
          readingTime: p.readingTime,
          published: p.published,
          publishedAt: p.publishedAt.toISOString(),
          updatedAt: p.updatedAt.toISOString(),
          seoTitle: p.seoTitle || p.title,
          seoDescription: p.seoDescription || p.description,
          category: {
            name: p.category?.name || 'General',
            slug: p.category?.slug || 'general'
          },
          tags: p.tags.map((t) => t.tag.name)
        }));
      }
    } catch (err) {
      console.warn('[HiveSmart DB] D1 query failed, using static fallback:', err);
    }
  }

  return getAllPosts();
}

export async function getBlogArticleBySlug(slug: string, d1Binding?: any): Promise<StaticBlogPost | undefined> {
  const db = getPrismaClient(d1Binding);

  if (db) {
    try {
      const p = await db.blogPost.findUnique({
        where: { slug },
        include: {
          category: true,
          tags: {
            include: { tag: true }
          }
        }
      });

      if (p) {
        return {
          id: p.id,
          slug: p.slug,
          title: p.title,
          description: p.description,
          content: p.content,
          featuredImage: p.featuredImage || '/images/blog/custom-web-dev.svg',
          author: p.author,
          readingTime: p.readingTime,
          published: p.published,
          publishedAt: p.publishedAt.toISOString(),
          updatedAt: p.updatedAt.toISOString(),
          seoTitle: p.seoTitle || p.title,
          seoDescription: p.seoDescription || p.description,
          category: {
            name: p.category?.name || 'General',
            slug: p.category?.slug || 'general'
          },
          tags: p.tags.map((t) => t.tag.name)
        };
      }
    } catch (err) {
      console.warn(`[HiveSmart DB] D1 query for slug '${slug}' failed:`, err);
    }
  }

  return getPostBySlug(slug);
}

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
 * Creates and persists a new blog post into Cloudflare D1 or in-memory fallback.
 */
export async function createBlogPost(data: NewPostPayload, d1Binding?: any): Promise<StaticBlogPost> {
  const author = data.author?.trim() || 'HiveSmart Team';
  const readingTime = Number(data.readingTime) || Math.max(3, Math.ceil(data.content.split(/\s+/).length / 200));
  const now = new Date().toISOString();
  const id = `post-${Date.now()}`;
  const seoTitle = data.seoTitle?.trim() || data.title;
  const seoDescription = data.seoDescription?.trim() || data.description;

  // Try direct D1 insertion if runtime binding is available
  if (d1Binding && typeof d1Binding.prepare === 'function') {
    try {
      const categorySlug = data.categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      // Ensure category exists in D1
      await d1Binding
        .prepare('INSERT OR IGNORE INTO BlogCategory (id, name, slug) VALUES (?, ?, ?)')
        .bind(`cat-${categorySlug}`, data.categoryName, categorySlug)
        .run();

      // Retrieve or confirm category ID
      const catRow = await d1Binding
        .prepare('SELECT id FROM BlogCategory WHERE slug = ? LIMIT 1')
        .bind(categorySlug)
        .first();

      const categoryId = catRow?.id || `cat-${categorySlug}`;

      // Insert Blog Post
      await d1Binding
        .prepare(
          `INSERT INTO BlogPost (id, slug, title, description, content, author, readingTime, published, publishedAt, updatedAt, seoTitle, seoDescription, categoryId, featuredImage)
           VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?)`
        )
        .bind(
          id,
          data.slug,
          data.title,
          data.description,
          data.content,
          author,
          readingTime,
          now,
          now,
          seoTitle,
          seoDescription,
          categoryId,
          '/images/blog/custom-web-dev.svg'
        )
        .run();

      console.log(`[HiveSmart DB] Successfully inserted post '${data.slug}' into Cloudflare D1.`);
    } catch (err) {
      console.warn('[HiveSmart DB] D1 insert failed, adding to static memory store:', err);
    }
  }

  // Also maintain in-memory representation so current worker instance immediately reflects it
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
 * Deletes a post from D1 and memory by slug
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


