# 🍕 La Prima Pizza - Site Web

Site web de la pizzeria La Prima Pizza à Capbreton, développé avec Astro et TailwindCSS.

## 📋 Description

Site vitrine moderne pour La Prima Pizza, pizzeria artisanale située à Capbreton. Le site présente :

- **Page d'accueil** : Présentation de la pizzeria, menu complet des pizzas, informations de contact
- **Page mentions légales** : Informations légales requises
- **Design responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Interface moderne** : Utilisation de TailwindCSS pour un design épuré et professionnel

## 🚀 Technologies utilisées

- **[Astro](https://astro.build/)** - Framework web moderne
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- **TypeScript** - Typage statique

## 📦 Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd prima-pizza-capbreton-ws

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera disponible à l'adresse : `http://localhost:4321`

## 🛠️ Scripts disponibles

```bash
# Serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📁 Structure du projet

```
prima-pizza-capbreton-ws/
├── data/
│   └── pizzas.ts          # Données des pizzas
├── public/
│   └── favicon.svg        # Favicon du site
├── src/
│   └── pages/
│       ├── index.astro           # Page d'accueil
│       └── mentions-legales.astro # Page mentions légales
├── astro.config.mjs       # Configuration Astro
├── tailwind.config.js     # Configuration TailwindCSS
└── package.json
```

## 📞 Informations de contact

**La Prima Pizza**
- 📍 77 avenue Georges Pompidou, 40130 Capbreton
- ☎️ 05 58 74 94 95
- 🕐 18h30 - 22h (Fermé le lundi)

## 🎨 Design

Le site utilise une palette de couleurs centrée sur le rouge (couleur de la pizzeria) avec :
- Header rouge avec informations de contact
- Section hero avec dégradé rouge
- Cards blanches pour les pizzas avec accents rouges
- Footer sombre pour les informations de contact
- Design responsive avec breakpoints Tailwind

## 📝 Fonctionnalités

- ✅ Page d'accueil avec présentation complète
- ✅ Menu des pizzas avec prix dynamique depuis `data/pizzas.ts`
- ✅ Liens téléphone pour commande directe
- ✅ Navigation vers section menu
- ✅ Page mentions légales complète
- ✅ Design responsive (mobile-first)
- ✅ Optimisations SEO (meta tags, structure HTML sémantique)
- ✅ Performance optimisée (Astro + TailwindCSS)

## 🚀 Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant les sites statiques :
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- etc.

```bash
# Build de production
npm run build

# Le dossier dist/ contient les fichiers statiques à déployer
```

## 📄 Licence

© 2024 La Prima Pizza - Tous droits réservés

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
