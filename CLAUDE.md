# CLAUDE.md — espanolesensuiza.ch

## Mode opératoire

Travailler en mode AUTONOME. Ne pas demander de permission pour chaque fichier modifié. Appliquer les changements directement, sauf si une décision structurelle majeure est requise (suppression de fichier, refactoring global, modification des slugs). Signaler les problèmes en fin de tâche, pas à chaque étape.

---

## Projet

Site éditorial multilingue pour les Espagnols en Suisse.
URL : https://www.espanolesensuiza.ch
Stack : HTML / CSS / JavaScript vanilla. Aucun framework. SPA avec routing hash-based (#/slug).

---

## Structure des fichiers

```
/
├── index.html
├── app.js                          — routing, rendu, logique principale
├── style.css
├── content-pages.js                — pages hub (topics)
├── content-articles.js             — articles ES principaux
├── content-articles-facebook-es.js — articles ES intégrés depuis Facebook
├── content-articles-facebook-fr.js — articles FR intégrés depuis Facebook
├── content-articles-facebook-de.js — articles DE intégrés depuis Facebook
├── content-articles-facebook-en.js — articles EN intégrés depuis Facebook
├── content-articles-fr.js          — articles FR
├── content-articles-de.js          — articles DE
├── content-articles-en.js          — articles EN
├── content-articles-it.js          — articles IT
├── media/
│   └── guides/                     — images des articles (format : [slug].jpg)
├── docs/
│   └── articles_espanoles_suiza.md — liste des 579 publications Facebook (source de référence)
└── .claude/
    └── settings.json
```

---

## Structure d'un article

Chaque article est un objet JS dans les fichiers `content-articles-*.js` :

```javascript
"fb-[slug-article]": {
    title: "Titre de l'article",
    description: "Description SEO",
    keywords: "mot1, mot2, mot3",
    keywordsLocalized: true,
    category: "NomCategorie",
    hub: "nom-hub",
    slug: "slug-article",
    readingTime: 5,
    dateUpdated: "Mes YYYY",
    summary: "Résumé court de l'article.",
    featuredImage: "media/guides/slug-article.jpg",
    imageAlt: "Description alt de l'image",
    relatedSlugs: [],
    content: `<div class="article-content">
        <p>Contenu HTML de l'article.</p>
    </div>`
}
```

---

## Images

- Stockées dans : `media/guides/`
- Nommage : `[slug-article].jpg` (ex: `alquilar-en-suiza-evitar-estafas.jpg`)
- Convention SEO : nom descriptif en espagnol, format `sujet-contexte-suiza.jpg`
- Si une image est absente : noter "asset à créer" dans le rapport, NE PAS laisser de placeholder générique
- Ne pas modifier les fichiers image sans instruction explicite — se limiter à corriger les références `featuredImage` et `imageAlt` dans les fichiers JS

---

## Sections du site (hubs)

Hubs réels définis dans `content-pages.js` :

| Hub slug       | Thème principal                        |
|----------------|----------------------------------------|
| tramites       | Permis, démarches administratives      |
| trabajo        | Travail, contrats, salaires            |
| vivienda       | Logement, loyer, sous-location         |
| vivir-en-suiza | Vie quotidienne, culture, intégration  |
| salud          | Santé, assurances maladie              |
| impuestos      | Impôts, fiscalité, source              |
| fronterizos    | Travailleurs frontaliers               |
| recursos       | Ressources officielles, outils         |

Note : ne pas utiliser `fiscalidad`, `educacion` ou `vida-cotidiana` — ces slugs n'existent pas dans le site.

---

## Référence des articles à intégrer

Le fichier `docs/articles_espanoles_suiza.md` contient 579 publications Facebook classées par date.
Utiliser ce fichier comme source principale pour l'intégration de nouveaux articles.

Règles de classification :
- Type A (guide complet) : article de fond 500+ mots → intégrer dans `content-articles-facebook-es.js`
- Type B (article court) : post informatif 150-500 mots → intégrer comme article court
- Type C (donnée ponctuelle) : chiffre, statistique, mise à jour → intégrer comme note dans article existant
- Type D (à exclure) : contenu trop daté, trop générique ou hors sujet → ne pas intégrer

---

## Règles absolues

- Ne PAS modifier les slugs existants
- Ne PAS modifier le contenu texte des articles existants
- Ne PAS modifier la structure globale du site (HTML, routing, composants)
- Ne PAS refactorer les composants JS
- Modifier uniquement : images (featuredImage, imageAlt), métadonnées SEO, et ajout de nouveaux articles
- Conserver la cohérence multilingue : si une correction est faite en ES, vérifier FR/DE/EN

---

## Conventions de nommage

- Clé article : `fb-[slug]` pour les articles issus de Facebook
- Slug : kebab-case en espagnol, sans accents, descriptif
- Image : même nom que le slug + `.jpg`
- Catégories : commencer par majuscule (ex: "Vivienda", "Trabajo", "Fiscalidad")

---

## Sortie attendue après chaque tâche

1. Liste des fichiers modifiés avec brève description du changement
2. Problèmes détectés (images manquantes, incohérences, etc.)
3. Assets à créer (images non disponibles)
4. Validation : cohérence SEO, cohérence multilingue, aucune page sans image
