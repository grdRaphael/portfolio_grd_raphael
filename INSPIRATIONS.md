# Inspirations et crédits

Tout ce qui a inspiré ce portfolio, avec les liens vers les sources.

Principe suivi : s'inspirer de sites **réels, conçus par des humains**, en reprenant une idée simple et en l'adaptant au design glassmorphism, sans copier une mise en page entière.

---

## 1. Point de départ : le mood board

Deux maquettes de modèles de sites web, réunies au début du projet dans un mood board (non publié). Elles portent le filigrane **Magnific** (Freepik) : ce sont des modèles, pas des sites en ligne.

| Maquette | Fichier | Ce que j'en ai gardé |
|---|---|---|
| « Thermal Kinetics » — grand panneau de verre sur un dégradé flou rouge / orange / bleu | capture du modèle | Le fond en dégradé flouté, le grand panneau de verre aux coins arrondis, la ligne d'infos en haut (libellé + valeur), l'astérisque en bas à gauche, le petit surtitre au-dessus d'un mot géant en capitales → tout le **Hero** (`src/components/Hero/`) |
| « Clarity Engine » — panneau de verre bleu, menu en pilule | capture du modèle | Le bouton rond avec une flèche (« Voir mes projets »), le nom de marque avec une partie en italique (« Raphaël *Grondin* »), la police proche de Manrope |

---

## 2. Idées reprises de portfolios réels

| # | Idée | Où dans le code | Inspiré de | Ce que j'ai repris et comment je l'ai adapté |
|---|---|---|---|---|
| 1 | **Sections numérotées** « 01 — À propos » | `src/index.scss` → `.section_title--numbered` | [Gaël Manzola](https://www.gmanzola.fr/) | Chez lui, chaque section est numérotée 01 à 05. Chez moi, le numéro est généré par un **compteur CSS** (`counter-reset` / `counter-increment`) : il suit l'ordre des sections sans être écrit dans le HTML. |
| 2 | **Point vert « Disponible »** | `src/components/Hero/` → `.hero_status` | [Gaël Manzola](https://www.gmanzola.fr/), [Joseph](https://joe.arkaans.com/) | Un point vert qui pulse, devant le mot « Disponible ». Le mot reste écrit (la couleur seule ne suffit pas), et la pulsation s'arrête si le visiteur a demandé moins d'animations. |
| 3 | **Heure locale en direct** | `src/components/Clock/Clock.tsx` | [Isaac Fayemi](https://fayemi.design/) (« 14:56:02, Zagreb »), [Ev Astapov](https://astapable.com/) | Un `useEffect` avec un `setInterval` et sa fonction de nettoyage (même principe que le minuteur du toast de Sophie Bluel), formaté avec `Intl.DateTimeFormat`. |
| 4 | **Codes projet** « P05 · FRONT-END · 2026 » | `src/components/ProjectRow/`, `src/components/Projects/`, `src/pages/ProjectPage/` | [Isaac Fayemi](https://fayemi.design/) (projets codés « A 01 », « B 02 ») | Le numéro du projet OpenClassrooms (ou « PERSO »), en capitales espacées, à la place des étiquettes de catégorie. |
| 5 | **Index des projets avec aperçu au survol** | `src/components/Projects/`, `src/components/ProjectRow/` | [Isaac Fayemi](https://fayemi.design/) (liste de projets codée) + des captures d'un modèle d'index de projets que j'ai repéré (mention « Use this template », source non retrouvée) | Les projets en grandes lignes à gauche, un aperçu à droite qui change au survol **et au focus clavier**, titres décalés en escalier. Adapté : pas de curseur rond ni de trait décoratif, la vidéo du projet joue dans l'aperçu, et sur mobile l'image s'affiche dans chaque ligne. |
| 6 | **Lien du menu actif** selon la section lue | `src/components/Header/Header.tsx` | [Brittany Chiang](https://brittanychiang.com) | Un `IntersectionObserver` repère la section en cours, le lien correspondant est souligné et reçoit `aria-current="location"` (annoncé par les lecteurs d'écran). |
| 7 | **Rubriques de la fiche projet en rangées** « titre \| texte » | `src/pages/ProjectPage/` → `.project_section` | [Brittany Chiang](https://brittanychiang.com) (expériences : date à gauche, contenu à droite) | Les 6 rubriques (Contexte, Objectifs…) en rangées séparées par un filet, au lieu de 6 cartes identiques. |
| 8 | **Compétences en colonnes de listes** | `src/components/Skills/` | [David Fiz](https://www.davidfiz.com/) (titres soulignés + listes simples) | 4 colonnes séparées par des filets verticaux, sans cartes ni pastilles. |
| 9 | **Menu écrit comme une phrase** | `src/components/Footer/Footer.tsx` | [Michael Gatt](https://michaelgatt.com/) (« the work and about me or contact ») | « Voir mes **projets**, mon **parcours** ou me **contacter**. » : seuls les mots en gras sont des liens. |
| 10 | **Numéro de version du site** | `src/components/Footer/Footer.tsx` | [Lynn Fisher](https://lynnandtonic.com) (« v. XIX »), [Ev Astapov](https://astapable.com/) (« v.2.1, mis à jour le… ») | « v1.0 · mis à jour le … », à changer à chaque mise en ligne. |
| 11 | **« Aucun traceur » + lien vers le code source** | `src/components/Footer/Footer.tsx` | [Keziah Moselle](https://keziahmoselle.fr/) | Dire ce que le site **ne fait pas** (pas de traceur, pas de collecte de données) et donner le lien vers le code. |
| 12 | **Champ « pot de miel » anti-robots** | `src/components/Contact/` | [Gaël Manzola](https://www.gmanzola.fr/) | Un champ caché « Laissez ce champ vide » : un robot le remplit, un humain non. Caché à l'écran, aux lecteurs d'écran (`aria-hidden`) et au clavier (`tabIndex={-1}`). |
| 13 | **Grain sur le fond** | `src/components/Background/` + `public/noise.svg` | [CSS-Tricks — Grainy Gradients](https://css-tricks.com/grainy-gradients/) | Un bruit SVG (`feTurbulence`) répété en mosaïque par-dessus les lueurs, en `mix-blend-mode: overlay`. Le verre le floute, ce qui renforce l'effet de verre dépoli. |

Les portfolios de Gaël, Keziah et Joseph sont les trois exemples d'anciens étudiants donnés dans les consignes du projet.

---

## 3. Mes propres choix (sans source externe)

| Choix | Pourquoi |
|---|---|
| **En-tête en bande de verre pleine largeur**, au lieu de la pilule de la maquette | Plus sobre et plus « éditorial » qu'une pilule flottante, très répandue dans les modèles actuels. |
| **Règle du verre** : le verre pour l'interface (en-tête, Hero, filtres, champs), le contenu posé sur le fond | Cohérence de l'ensemble ; les grands panneaux de verre partout faisaient « carte générique ». |
| **Deux niveaux de verre et fond bleu nuit** | La première version (fond clair) avait des contrastes insuffisants sur l'orange : 2,6:1 mesuré au pire endroit. Corrigé jusqu'à plus de 4,5:1. |
| **Sections élargies** (Compétences et Projets) sur grand écran | Après un essai en pleine largeur pendant la conception : utile pour les éléments côte à côte, gênant pour le texte et le formulaire. Technique de mise en page dite *breakout*. |
| **Vidéo du projet dans l'aperçu** de l'index | Mettre en valeur les vidéos motion design faites pour chaque projet. |

---

## 4. Ressources techniques lues

| Ressource | Lien | Utilisation |
|---|---|---|
| Josh Comeau — *Next-level frosted glass with backdrop-filter* | [joshwcomeau.com/css/backdrop-filter](https://www.joshwcomeau.com/css/backdrop-filter/) | Lu pour comprendre le verre dépoli. Repris : un fond de repli quand le navigateur ne sait pas flouter (`@supports`). Non repris : ses techniques avancées (flou qui dépasse du panneau, masque SVG), trop complexes pour l'apport. |
| web.dev — *backdrop-filter* | [web.dev/articles/backdrop-filter](https://web.dev/articles/backdrop-filter) | Fonctionnement et compatibilité de `backdrop-filter`. |
| Frontend Masters — *Grainy Gradients* | [frontendmasters.com/blog/grainy-gradients](https://frontendmasters.com/blog/grainy-gradients/) | Le grain modifie un peu les couleurs du dégradé : à garder en tête pour les contrastes. |
| gggrain | [fffuel.co/gggrain](https://fffuel.co/gggrain/) | Générateur de dégradés granuleux ; conseil retenu : un SVG de bruit peut coûter cher au processeur. |
| WebAIM — Contrast Checker | [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) | Pour vérifier à la main les contrastes, que WAVE et Lighthouse ne savent pas mesurer sur un fond flouté. |

---

## 5. Polices, logos et icônes (crédités dans le pied de page du site)

| Ressource | Lien | Licence | Utilisation |
|---|---|---|---|
| Manrope | [fonts.google.com/specimen/Manrope](https://fonts.google.com/specimen/Manrope) | SIL Open Font License | Police unique du site |
| Devicon | [devicon.dev](https://devicon.dev) | MIT | Logos des technologies sur les projets (`public/logos/`) |
| Simple Icons | [simpleicons.org](https://simpleicons.org) | CC0 | Logos officiels en blanc dans Compétences (`public/icons/brands/`) |
| Phosphor Icons | [phosphoricons.com](https://phosphoricons.com) | MIT | Icônes au trait pour API REST et les savoir-être (`public/icons/`, licence dans `public/icons/LICENSE.txt`) |

---

## 6. Idées vues mais écartées

| Idée | Source | Pourquoi écartée |
|---|---|---|
| Comparaison avant / après | [Gaël Manzola](https://www.gmanzola.fr/) | Pour Sophie Bluel, les versions JavaScript et React ont le même rendu (c'était le but) : le curseur n'aurait rien montré. |
| Écran d'entrée « activer le son » | [Michael Gatt](https://michaelgatt.com/) | Gadget, et gênant pour l'accessibilité. |
| Logo animé image par image, mode d'édition par glisser-déposer | [David Fiz](https://www.davidfiz.com/) | Trop complexe pour l'apport. |
| Activité GitHub en direct (derniers dépôts via l'API) | [Joseph](https://joe.arkaans.com/) | Gardée en réserve ; à faire avec un état de chargement et une valeur de repli (son site affiche « undefined » quand une donnée manque). |
| Curseur rond et trait décoratif de l'index de projets | captures du modèle d'index | Purement décoratifs. |

---

## 7. Où j'ai cherché

Galeries de sites sélectionnés à la main, utilisées pour trouver les portfolios ci-dessus :

- [minimal.gallery](https://minimal.gallery/) — tenue par Piet Terheyden depuis 2013 (Isaac Fayemi, Eli Horn, Ev Astapov, Michael Gatt et David Fiz y ont été repérés)
- [godly.website](https://godly.website) — sélection centrée sur l'animation et l'interaction
- [siteInspire](https://www.siteinspire.com) — plus de 2 600 sites classés par style
- [Awwwards](https://www.awwwards.com) — sites récompensés
