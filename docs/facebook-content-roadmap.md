# Roadmap contenu (site + Facebook)

Ce document sert de passerelle entre :
- les guides existants sur `espanolesensuiza.ch`
- tes publications Facebook (réutilisées **sans copier/coller**)

## 1) Carte du site (structure actuelle)

### Pages (navigation)
- Accueil : `#/`
- Vivre en Suisse : `#/vivir-en-suiza`
- Trámites : `#/tramites`
- Trabajo : `#/trabajo`
- Vivienda : `#/vivienda`
- Salud (LAMal) : `#/salud`
- Impuestos : `#/impuestos`
- Fronterizos : `#/fronterizos`
- Recursos : `#/recursos`
- Comunidad : `#/comunidad`
- Contacto : `#/contacto`

### Hubs (guides) existants
- `tramites` : 8 guides
- `trabajo` : 6 guides
- `salud` : 5 guides
- `vivienda` : 3 guides
- `impuestos` : 2 guides
- `vivir-en-suiza` : 6 guides
- `fronterizos` : 1 guide (faible)
- `fuentes-oficiales` : 1 guide (faible)

## 2) Cibles “evergreen” à produire à partir de Facebook

Priorité : transformer des clusters de posts en **guides piliers** (H2/H3, listes, cas pratiques) + liens internes.

### A) À enrichir (guides existants)
- Permis L/B/C (`permisos-suiza`)
- Checklist arrivée (`tramites-llegada-suiza`)
- Contrats + période d’essai + préavis (`contratos-de-trabajo-suiza` + `periodo-prueba-preaviso-suiza`)
- LAMal + franchise/copaiement (`seguro-medico-lamal-suiza` + `franquicia-seguro-medico-suiza`)
- Logement : louer + caution + sous-location (`alquilar-vivienda-suiza` + `fianzas-alquiler-suiza` + `subalquiler-vivienda-suiza`)
- Impôt à la source + déclaration “ordinaire” (nouvelle page recommandée)

### B) À créer (gros manques SEO)
- **RAV / Paro en Suiza** (assurance chômage) → hub `trabajo`
- **Banco + cuenta + TWINT** → hub `vivir-en-suiza`
- **Importación de coche + plazos + seguro** (+ guide permis de conduire si besoin) → hub `vivir-en-suiza`
- **Kita / guardería** (coûts, listes d’attente, aides) → hub `vivir-en-suiza`
- **Declaración de impuestos** (quand ça vaut le coup / déductions) → hub `impuestos`
- **Différences cantonales** (impôts, primes LAMal, démarches, logement) → hub `vivir-en-suiza`

## 3) Méthode (anti Facebook-style)

Règles :
- ne jamais coller un post tel quel
- réécrire en style web (phrases courtes, structure, définitions, checklists)
- garder ce qui est durable, jeter l’actu ponctuelle
- insérer des liens internes systématiquement

## 4) Export Facebook : index de travail

Pour éviter de stocker des textes (et rester “anti copier-coller”), on travaille avec :
- timestamps
- thèmes détectés
- longueur
- présence d’images

Outil : `tools/facebook_posts_index.py` (sortie Markdown ou JSON “metadata only”).

