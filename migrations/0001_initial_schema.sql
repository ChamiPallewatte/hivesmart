-- Migration: 0001_initial_schema.sql
-- Cloudflare D1 SQLite Schema for HiveSmart

CREATE TABLE IF NOT EXISTS "BlogCategory" (
    "id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "description" TEXT
);

CREATE TABLE IF NOT EXISTS "BlogPost" (
    "id" TEXT PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "featuredImage" TEXT,
    "author" TEXT NOT NULL DEFAULT 'HiveSmart Team',
    "readingTime" INTEGER NOT NULL DEFAULT 5,
    "published" INTEGER NOT NULL DEFAULT 1,
    "publishedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "categoryId" TEXT,
    FOREIGN KEY ("categoryId") REFERENCES "BlogCategory"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS "idx_blogpost_slug" ON "BlogPost"("slug");
CREATE INDEX IF NOT EXISTS "idx_blogpost_published" ON "BlogPost"("published");

CREATE TABLE IF NOT EXISTS "BlogTag" (
    "id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "BlogTagOnPost" (
    "postId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    PRIMARY KEY ("postId", "tagId"),
    FOREIGN KEY ("postId") REFERENCES "BlogPost"("id") ON DELETE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "BlogTag"("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "SiteSetting" (
    "key" TEXT PRIMARY KEY,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "AdminUser" (
    "id" TEXT PRIMARY KEY,
    "username" TEXT NOT NULL UNIQUE,
    "passwordHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

