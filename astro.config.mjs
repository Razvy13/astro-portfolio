import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: SITE_URL,
  base: "/astro-portfolio",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
