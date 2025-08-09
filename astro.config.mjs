// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://example.com',
  site: "https://blog-big-wave.vercel.app",
  base: "blog-big-wave",
  integrations: [mdx(), sitemap(), tailwind()],
});
