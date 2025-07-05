import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "static",
  adapter: vercel(),

  webAnalytics: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});