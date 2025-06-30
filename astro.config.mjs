// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: "https://prima-pizza-capbreton.fr",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Génère les pages avec des URLs propres
    format: "directory"
  },
  compressHTML: true,
});