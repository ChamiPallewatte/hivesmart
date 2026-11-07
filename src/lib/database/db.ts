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

