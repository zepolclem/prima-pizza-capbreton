// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelStatic from '@astrojs/vercel/static';
// https://astro.build/config
export default defineConfig({
  site: "https://prima-pizza-capbreton.fr",
  output: "static",
  adapter: vercelStatic({}),

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Génère les pages avec des URLs propres
    format: "directory"
  },

  compressHTML: true,
});