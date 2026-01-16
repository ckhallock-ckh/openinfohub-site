

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://openinfohub.net",
  integrations: [sitemap()],
});
