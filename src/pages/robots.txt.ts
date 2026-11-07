import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../config/site';

export const GET: APIRoute = async () => {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: ${SITE_CONFIG.url}/sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};

