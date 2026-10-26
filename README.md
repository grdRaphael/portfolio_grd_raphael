# Portfolio — Raphaël Grondin

Portfolio de développeur web full-stack, réalisé pour le projet 8 de la formation Développeur Web d'OpenClassrooms.

**Démo en ligne : [à ajouter après la mise en ligne sur Vercel]**

## Ce que présente le site

- **Accueil** en une page à ancres : présentation, pitch, compétences, projets, parcours et contact.
- **Projets** filtrables par catégorie, avec un aperçu (image puis vidéo) qui suit la souris et le clavier.
- **Une fiche par projet** (`/projet/:id`) : contexte, objectifs, stack, compétences, résultats, perspectives, captures et liens.
- **Un formulaire de contact** validé et accessible, envoyé avec Formspree.
- **Une page 404** pour toute adresse inconnue.

## Stack

| Outil | Rôle |
|---|---|
| React 19 + TypeScript | Interface en composants, données typées |
| Vite | Serveur de développement et construction |
| React Router | Une adresse par fiche projet |
| Sass | Design system : variables et mixins |
| Vercel | Hébergement, avec réécriture des adresses vers `index.html` (`vercel.json`) |
| Formspree | Envoi des messages du formulaire de contact, sans serveur à héberger |

Aucune bibliothèque d'interface ni d'animation : tout est en React et en CSS.

## Lancer le projet

```bash
npm install
npm run dev       # serveur de développement
npm run build     # vérification TypeScript puis construction dans dist/
npm run preview   # tester la version construite
npm run lint      # ESLint
```

## Organisation

```
data/                contenu du site en JSON (projets, compétences, parcours)
public/projets/      couvertures, captures et vidéos de chaque projet (WebP / WebM)
public/logos/        logos des technologies (Devicon)
public/icons/        icônes des compétences (Simple Icons, Phosphor)
src/styles/          _variables.scss (couleurs, verre, arrondis) et _mixins.scss
src/types/           type TypeScript d'un projet
src/components/      un dossier par composant (.tsx + .scss)
src/pages/           Home, ProjectPage (/projet/:id), Error (404)
```

## Choix techniques

- **Glassmorphism lisible** : les couleurs des lueurs du fond ont été choisies pour que le texte blanc garde un contraste d'au moins 4,5:1 (WCAG AA). Deux niveaux de verre, et un verre presque opaque pour les visiteurs qui demandent plus de contraste (`prefers-contrast`).
- **Accessibilité** : lien d'évitement, focus visible, balises de repère (`header`, `nav`, `main`, `footer`), `aria-current` sur le lien de la section lue, `aria-pressed` sur les filtres, erreurs de formulaire reliées à leur champ, animations et vidéos coupées avec `prefers-reduced-motion`.
- **Performances** : images en WebP à la bonne taille, chargement différé (`loading="lazy"`), vidéos jamais chargées sur mobile, dimensions réservées pour éviter les décalages de mise en page.
- **SEO** : un `<h1>` par page, un `<title>` par fiche projet (géré nativement par React 19), une description et un `robots.txt`.
- **Contenu séparé du code** : ajouter un projet, c'est ajouter un objet dans `data/projects.json`.

## Résultats mesurés

| Outil | Résultat |
|---|---|
| Lighthouse (ordinateur, version construite) | Performance 100 · Accessibilité 100 · Bonnes pratiques 100 · SEO 92, corrigé par l'ajout d'un `robots.txt` (mesure en ligne à venir) |
| WAVE | 0 erreur |

## Crédits

Inspirations, sources et licences (police Manrope, logos Devicon et Simple Icons, icônes Phosphor) : voir [INSPIRATIONS.md](INSPIRATIONS.md).
