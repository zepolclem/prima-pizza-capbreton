# Prima Pizza Capbreton - Site Web Modernisé

Site web moderne et optimisé pour Prima Pizza, pizzeria à Capbreton et Hossegor.

## 🚀 Améliorations Implémentées

### 📈 SEO et Performance

#### Meta Tags Avancés
- **Description** : Meta description optimisée sous 160 caractères
- **Keywords** : Mots-clés ciblés pour le référencement local
- **Viewport** : Configuration responsive optimisée
- **Robots** : Indexation contrôlée
- **Canonical URLs** : Prévention du contenu dupliqué

#### Open Graph et Twitter Cards
- **Open Graph** : Intégration complète pour Facebook/LinkedIn
- **Twitter Cards** : Cards optimisées pour Twitter
- **Images** : Utilisation des favicons existants pour le partage social
- **Localisation** : Métadonnées en français (fr_FR)

#### JSON-LD Structured Data
- **LocalBusiness** : Données structurées pour Google Business
- **Adresse** : 77 avenue Georges Pompidou, 40130 Capbreton
- **Horaires** : Mardi-Dimanche 18h30-22h, Fermé le lundi
- **Téléphone** : 05 58 74 94 95
- **Géolocalisation** : Coordonnées GPS de Capbreton
- **Menu** : Référence à la carte des pizzas

#### Sitemap et Robots.txt
- **Sitemap XML** : `/sitemap.xml` avec toutes les pages
- **Robots.txt** : Configuration d'indexation optimisée
- **Référencement** : Sitemap déclaré dans robots.txt

### 🎨 UI/UX Mobile-First

#### Design Responsive
- **Grille adaptative** : Cards pizza en 1-2-3 colonnes selon l'écran
- **Breakpoints Tailwind** : `sm:`, `md:`, `lg:` pour tous les composants
- **Container Pattern** : `container mx-auto px-4` partout
- **Espacement cohérent** : Système d'espacement uniforme

#### Boutons Touch-Friendly
- **Taille minimale** : 44×44px pour tous les boutons
- **Zones tactiles** : Zones de tap étendues
- **Feedback visuel** : Hover et focus states
- **Animations** : Transitions fluides et scale effects

#### Hero Section Optimisée
- **Hiérarchie visuelle** : Titres responsive (2xl à 5xl)
- **Call-to-Action** : Boutons proéminents "Commander" et "Voir carte"
- **Contenu scannable** : Texte structuré et lisible
- **Espacement mobile** : Padding adaptatif

### ♿ Accessibilité

#### Standards WCAG
- **Langue** : `lang="fr"` sur l'élément HTML
- **Rôles ARIA** : `role="banner"`, `role="article"`, etc.
- **Labels** : `aria-label` sur tous les éléments interactifs
- **Navigation** : Structure sémantique avec `<nav>`, `<main>`, `<section>`

#### Contraste et Lisibilité
- **Couleurs** : Contrastes respectant les standards
- **Polices** : Tailles adaptatives et lisibles
- **Focus** : Indicateurs de focus visibles
- **Réduction mouvement** : Support `prefers-reduced-motion`

### ⚡ Performance

#### Optimisations CSS
- **Critical CSS** : Styles critiques inline dans `<head>`
- **CSS différé** : Chargement non-bloquant des styles
- **Preconnect** : Connexions anticipées pour Google Fonts
- **Variables CSS** : Système de design tokens

#### Optimisations Images
- **Alt attributes** : Descriptions significatives
- **Formats optimisés** : PNG/SVG pour les favicons
- **Lazy loading** : Prêt pour les futures images

## 📱 Structure Responsive

### Mobile (320px+)
- Navigation empilée
- Boutons pleine largeur
- Cartes pizza en colonne unique
- Textes adaptés (text-sm)

### Tablet (640px+)
- Navigation horizontale
- Grille 2 colonnes pour les pizzas
- Boutons côte à côte
- Textes standards (text-base)

### Desktop (1024px+)
- Grille 3 colonnes pour les pizzas
- Espacements généreux
- Effets hover avancés
- Typographie large

## 🛠️ Technologies Utilisées

- **Astro** : Framework web moderne
- **Tailwind CSS** : Utilitaires CSS
- **React** : Composants interactifs
- **TypeScript** : Typage statique
- **Vercel** : Hébergement et déploiement

## 🎯 Fonctionnalités Principales

### En-tête Moderne
- Logo responsive avec hiérarchie claire
- Informations importantes (adresse, horaires)
- Bouton d'appel proéminent et accessible
- Design sticky avec shadow

### Grille de Pizzas
- Cards avec design moderne
- Prix mis en évidence
- Boutons "Commander" sur chaque carte
- Animations hover subtiles
- Informations structurées

### Section Hero
- Message d'accueil impactant
- Deux call-to-action principaux
- Design avec gradient de fond
- Responsive et optimisé mobile

### Pied de Page
- Liens légaux
- Navigation claire
- Design épuré

## 📊 Métriques SEO

### Mots-clés Ciblés
- Pizza Capbreton
- Livraison pizza Hossegor
- Pizzeria artisanale
- Pizzas à emporter
- Ingrédients frais

### Données Structurées
- LocalBusiness validé
- Horaires d'ouverture
- Informations de contact
- Géolocalisation
- Menu référencé

### Performance
- CSS critique inline
- Chargement différé
- Preconnect optimisé
- Images optimisées

## 🚀 Déploiement

```bash
# Installation
pnpm install

# Développement
pnpm dev

# Build
pnpm build

# Preview
pnpm preview
```

## 📞 Contact

**Prima Pizza**
- 📍 77 avenue Georges Pompidou, 40130 Capbreton
- 📞 05 58 74 94 95
- 🕐 18h30-22h (Fermé le lundi)
- 🍕 Pizzas à emporter et livraison

---

*Site développé avec les meilleures pratiques SEO, performance et accessibilité.*
