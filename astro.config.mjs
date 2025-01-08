// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // site: 'https://example.com',
    site: 'https://dorumuk.github.io',
    base: 'blog-for-you',
    integrations: [mdx(), sitemap(), tailwind()],
});