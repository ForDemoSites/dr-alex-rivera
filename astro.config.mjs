import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Replace with the real production URL once the Cloudflare Pages project
// (or a custom domain) is known. It drives the canonical URL, Open Graph
// URLs, JSON-LD identifiers and the sitemap.
const SITE_URL = 'https://dr-alex-rivera.pages.dev';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
