# Editorial & Visual Audit Report — espanolesensuiza.ch

Date: 2026-03-13  
Scope: Article content and layout consistency across ES / EN / FR / DE.  
Out of scope (explicitly not changed): routing, slugs, canonical URLs, hreflang logic, sitemap, robots, and broader SEO configuration.

## 1) Inventory (article sources scanned)

Scanned bundles:
- `content-articles.js`
- `content-articles-en.js`
- `content-articles-fr.js`
- `content-articles-de.js`
- `content-articles-facebook-es.js`
- `content-articles-facebook-en.js`
- `content-articles-facebook-fr.js`
- `content-articles-facebook-de.js`

Counts (articles):
- ES: 45
- EN: 45
- FR: 45
- DE: 45

## 2) Major findings (from stored bundle HTML)

These findings are from scanning the stored HTML in the bundles (not the post-render DOM):
- Embedded `<h1>` inside article bodies: 0 / 180 (removed from bundles)
- Articles with no `<img>` tags in their stored content: 176 / 180 (images are now injected at render time)
- Inline `font-size:` occurrences inside article HTML: 6 / 180
- Truncated translations (EN/FR/DE < 70% of ES word count for same article key): 67 pairs

Notes:
- Many EN/FR/DE “core” articles are significantly shorter than their ES counterparts and do not consistently follow the same section structure.
- Facebook-derived articles generally have more complete sections, but section headings vary (“Context in Switzerland”, “Contexto en Suiza”, etc.).

## 3) Fixes applied (project files modified)

### Typography & hierarchy (site-wide)
- Removed legacy `.page-header` blocks from the core article bundles so stored content no longer contains embedded H1s.
- Added a render-time safety net: any `<h1>` found in the body is downgraded to `<h2>`, and legacy `.page-header` blocks are removed if present.
- Removed inline `font-size:` declarations at render time to avoid typography inconsistencies.
- Added a safe CSS fallback so any remaining legacy body `<h1>` (if it slips through) renders at the same scale as an H2 within `.article-content`.

Files:
- `app.js`
- `style.css`

### Images (site-wide)
Requirement: 1 hero image + 2 supporting images per article, consistent across languages (same files; localized alt text).

Implemented:
- A hero image is rendered for every article using `featuredImage` when present, otherwise a stable hub-based preset (shared across languages).
- If an article body contains fewer than 2 images, the renderer injects up to 2 supporting images (hub-based presets).
- Alt text is localized by using `imageAlt` when available, otherwise falling back to the localized article title.

Files:
- `app.js`
- `style.css`

### Official sources section (site-wide)
Implemented:
- If an article lacks an “Official sources” H2 section, one is appended at render time with hub-appropriate official links (localized labels).

File:
- `app.js`

### Section heading normalization (site-wide, non-destructive)
Implemented:
- Normalizes common Facebook-pipeline headings to match the site’s target editorial headings (e.g., “Context in Switzerland” → “How the system works”).

File:
- `app.js`

## 4) Articles corrected for factual accuracy (scenario clarity)

Primary issue addressed: several onboarding articles implied that *everyone entering Switzerland* must follow the same steps, without distinguishing:
tourist/short stay vs resident move vs job start vs job seeker vs cross-border (G) vs family situations.

Updated (ES/EN/FR/DE):
- Registration guide:
  - ES: `content-articles.js` (`articulo-registro`, slug `registrarse-en-suiza`)
  - EN: `content-articles-en.js` (`articulo-registro`)
  - FR: `content-articles-fr.js` (`articulo-registro`)
  - DE: `content-articles-de.js` (`articulo-registro`)
- First-month checklist:
  - ES: `content-articles.js` (`articulo-tramites-llegada`, slug `tramites-llegada-suiza`)
  - EN: `content-articles-en.js` (`articulo-tramites-llegada`)
  - FR: `content-articles-fr.js` (`articulo-tramites-llegada`)
  - DE: `content-articles-de.js` (`articulo-tramites-llegada`)

What changed editorially:
- Added explicit scope statements (“for people who move to Switzerland to reside”).
- Added cross-border worker (G permit) and short-stay/tourist exclusions where relevant.
- Reworked headings to better fit the normalized structure (Introduction → How it works → Requirements/rules → Examples → Practical advice → Common mistakes → Official sources).

## 5) Multilingual parity status

Spanish (ES) remains the most complete editorial baseline.

Flagged for follow-up (not fully resolved in this pass):
- 67 EN/FR/DE translations are materially shorter than ES (ratio < 70% by word count) and likely missing sections/examples.
- Worst gaps include (examples): `articulo-introduccion-suiza`, `articulo-cantones` in EN/FR/DE.

Recommended next action:
- Prioritize expanding EN/FR/DE versions of the core pillar guides first (permits, arrival/registration, work, taxes, health insurance, housing, unemployment), ensuring they mirror the ES section structure and do not omit scenario distinctions.

## 6) How to reproduce the scan locally

- Run: `node tools/editorial_audit_scan.js`
- The scanner outputs JSON to stdout (counts, per-article metrics, and ES→EN/FR/DE parity ratios).
