import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hivesmart.io',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
