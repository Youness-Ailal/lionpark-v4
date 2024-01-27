import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), sitemap()],
  site: "https://lionpark.ailal.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
});
