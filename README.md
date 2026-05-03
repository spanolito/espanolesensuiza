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

## Variables de entorno

Reglas:

- no hardcodear secretos en el repositorio
- configurar secretos en local con variables de entorno del shell
- configurar secretos en Vercel en `Settings -> Environment Variables`
- no usar `.env` en producción

Variables necesarias para el flujo Python `scripts/publish_daily_posts.py`:

- `DEEPL_API_KEY`: clave de DeepL obligatoria
- `POSTS_DIR`: opcional, ruta de entrada de Markdown
- `SITE_DIR`: opcional, ruta del proyecto

Ejemplo local:

```bash
export DEEPL_API_KEY="tu_clave_deepl"
export POSTS_DIR="/Users/oscarandujar/Projets/Publications/posts"
export SITE_DIR="/Users/oscarandujar/Projets/espanolesensuiza"
python3 scripts/publish_daily_posts.py --date 2026-05-03
```

Si falta `DEEPL_API_KEY`, el script debe fallar con error explícito.

## Respuesta ante secretos comprometidos

Si detectas una clave en el código o en el historial Git:

1. Revócala inmediatamente en el proveedor.
2. Rótala por una nueva.
3. Elimina la clave del árbol actual.
4. Limpia el historial con `git filter-repo` o `BFG Repo-Cleaner`.
5. Haz `push --force` del historial reescrito.

Ejemplo con `git filter-repo`:

```bash
git filter-repo --replace-text <(printf 'COMPROMISED_DEEPL_KEY==>REMOVED_DEEPL_KEY')
git push --force --all
git push --force --tags
```

Alternativa con BFG:

```bash
bfg --replace-text secrets.txt
git push --force --all
git push --force --tags
```

Donde `secrets.txt` contiene:

```text
COMPROMISED_DEEPL_KEY
```
