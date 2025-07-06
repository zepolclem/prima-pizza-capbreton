import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react()
  ],

  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimisations pour les performances
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Séparer les dépendances pour un meilleur cache
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  },

  // Optimisations pour les performances
  build: {
    inlineStylesheets: 'auto', // Inline les petits CSS pour réduire les requêtes
    assets: 'assets', // Organiser les assets
  },

  // Préférer les images optimisées
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});