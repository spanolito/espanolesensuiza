# Españoles en Suiza

Guía práctica para vivir y trabajar en Suiza dirigida a hispanohablantes.

Este portal ofrece información clara y estructurada sobre la vida en Suiza: empleo, trámites administrativos, sistema político, coste de vida y actualidad.

El objetivo es facilitar el acceso a información fiable para personas que desean emigrar a Suiza o que ya residen en el país.

---

## Sitio web

https://espanolesensuiza.vercel.app

---

## Contenido del portal

El sitio cubre principalmente los siguientes temas:

- Vivir en Suiza
- Trabajar en Suiza
- Trámites administrativos
- Sistema político suizo
- Coste de vida
- Actualidad y noticias

El contenido está orientado a responder preguntas frecuentes de hispanohablantes interesados en Suiza.

---

## Estructura del proyecto

El repositorio contiene los archivos necesarios para el funcionamiento del portal.

---

## Flujo i18n

La fuente de verdad editorial es el contenido en español.

Para mantener FR, DE, IT y EN sincronizados:

- editar primero `content-pages.js`, `content-articles.js` y `content-articles-facebook-es.js`
- regenerar idiomas con `npm run sync:i18n`
- validar cobertura y estructura con `npm run check:i18n-sync`

Objetivo:

- misma estructura en todos los idiomas
- mismo orden de secciones
- sin divergencias manuales entre idiomas

## Import de publicaciones diarias

Si llegan nuevos ficheros Markdown a `/Users/oscarandujar/Projets/Publications/posts/` con formato `posts_YYYY-MM-DD.md`, puedes regenerar el bundle diario del sitio con:

- `npm run import:daily-posts`
- `npm run import:daily-posts:fast`
- `npm run import:daily-posts:auto`

La variante `fast` genera ES/EN/FR/DE sin depender de la traducción externa, usando el texto original como fallback.

`auto` solo reprocesa ficheros modificados, actualiza el estado en `.daily-posts-import-state.json` y escribe un reporte de clasificación en `docs/daily-posts-classification.json`.

## Automatización local

En macOS puedes instalar un `LaunchAgent` local con:

- `npm run install:daily-posts-agent`

Eso deja un agente `launchd` que:

- ejecuta el import al cargar la sesión
- vigila `/Users/oscarandujar/Projets/Publications/posts/`
- lanza también una ejecución diaria a las `07:15`

Scripts asociados:

- `scripts/run_daily_posts_import.sh`
- `scripts/install_daily_posts_launch_agent.sh`
