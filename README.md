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
