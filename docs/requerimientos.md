# Documento de Requerimientos
## Portal: espanolesensuiza.ch

Versión: 1.0  
Fecha: 2026  
Responsable del proyecto: Oscar Andújar

---

# 1. Introducción

## 1.1 Propósito del documento

Este documento define los requerimientos funcionales, técnicos y estructurales del portal **espanolesensuiza.ch**.

Su objetivo es servir como base para:

- el desarrollo del sitio web
- su evolución futura
- la organización del contenido
- la optimización para motores de búsqueda (SEO)

Este documento debe actuar como referencia técnica para cualquier persona que trabaje en el desarrollo o mantenimiento del portal.

---

# 2. Objetivo del portal

El portal tiene como finalidad proporcionar información clara, fiable y estructurada para personas hispanohablantes interesadas en vivir o trabajar en Suiza.

El sitio debe convertirse en una referencia informativa sobre:

- vida en Suiza
- empleo
- trámites administrativos
- sistema político suizo
- coste de vida
- actualidad relevante

También debe actuar como punto de entrada a la comunidad online existente.

---

# 3. Público objetivo

El portal está dirigido principalmente a:

1. Españoles que desean emigrar a Suiza
2. Españoles que ya viven en Suiza
3. Latinoamericanos interesados en trabajar en Suiza
4. Residentes en Suiza que buscan información administrativa

Perfil típico del usuario:

- edad entre 20 y 50 años
- búsqueda de información mediante Google
- conocimiento limitado del sistema suizo

---

# 4. Arquitectura general del sitio

El sitio debe tener una arquitectura clara, lógica y optimizada para SEO.

La estructura debe permitir:

- navegación sencilla
- jerarquía clara de contenidos
- indexación eficiente por motores de búsqueda

---

# 5. Página principal

URL:

https://www.espanolesensuiza.ch

Contenido esperado:

- presentación del portal
- introducción sobre vivir en Suiza
- acceso rápido a las principales secciones
- artículos destacados
- enlaces a recursos oficiales
- enlace a la comunidad

Bloques principales:

1. Introducción
2. Guía rápida para recién llegados
3. Últimos artículos publicados
4. Recursos oficiales
5. Comunidad

---

# 6. Secciones principales

## 6.1 Vivir en Suiza

URL:

/vivir-en-suiza

Contenido:

- coste de vida
- vivienda
- seguro médico
- sistema fiscal
- calidad de vida

Subpáginas sugeridas:

/vivir-en-suiza/coste-de-vida  
/vivir-en-suiza/alquiler  
/vivir-en-suiza/seguro-medico  
/vivir-en-suiza/impuestos

---

## 6.2 Trabajar en Suiza

URL:

/trabajo

Contenido:

- permisos de trabajo
- contratos laborales
- salarios
- mercado laboral
- búsqueda de empleo

Subpáginas sugeridas:

/trabajo/permisos  
/trabajo/contrato-laboral  
/trabajo/salarios  
/trabajo/buscar-empleo

---

## 6.3 Trámites administrativos

URL:

/tramites

Contenido:

- registro en la comuna
- permisos de residencia
- seguridad social
- impuestos

Subpáginas sugeridas:

/tramites/registro-comuna  
/tramites/permiso-residencia  
/tramites/seguridad-social  
/tramites/impuestos

---

## 6.4 Sistema suizo

URL:

/sistema-suizo

Contenido:

- democracia directa
- sistema político
- estructura federal
- cantones
- votaciones

---

## 6.5 Actualidad

URL:

/actualidad

Contenido:

- noticias relevantes sobre Suiza
- votaciones
- cambios legislativos
- economía
- políticas públicas

---

# 7. Requerimientos funcionales

## 7.1 Navegación

El sitio debe ofrecer:

- menú principal claro
- navegación jerárquica
- enlaces internos entre artículos
- estructura coherente entre secciones

---

## 7.2 Gestión de contenidos

El sistema debe permitir:

- añadir artículos
- editar páginas
- actualizar información
- añadir enlaces externos

La administración del contenido debe poder realizarse sin conocimientos técnicos avanzados.

---

## 7.3 Compatibilidad móvil

El sitio debe ser completamente responsive.

Debe funcionar correctamente en:

- ordenador
- tablet
- teléfono móvil

---

# 8. Requerimientos SEO

El sitio debe estar optimizado para motores de búsqueda.

Cada página debe incluir:

- título SEO
- meta description
- estructura de encabezados (H1, H2, H3)
- URL limpia
- enlaces internos

---

## 8.1 Sitemap

El sitio debe incluir un archivo:

sitemap.xml

Este archivo debe contener todas las páginas principales del sitio.

Debe enviarse a Google Search Console.

Ejemplo:

https://www.espanolesensuiza.ch/sitemap.xml

---

## 8.2 Robots

El sitio debe incluir un archivo:

robots.txt

Debe permitir la indexación de todas las páginas públicas.

---

## 8.3 Palabras clave objetivo

El contenido del portal debe orientarse a las siguientes búsquedas:

- españoles en suiza
- vivir en suiza
- trabajar en suiza
- emigrar a suiza
- permisos suiza
- salario suiza
- coste de vida suiza

---

# 9. Contenido

El portal debe incluir contenido informativo estructurado.

Objetivo inicial:

20 a 30 artículos informativos.

Ejemplos:

- cómo trabajar en Suiza siendo español
- cómo encontrar trabajo en Suiza
- permisos de residencia en Suiza
- cuánto cuesta vivir en Suiza
- seguro médico en Suiza
- registrarse en la comuna

---

# 10. Fuentes oficiales

Siempre que sea posible, la información debe apoyarse en fuentes oficiales suizas.

Ejemplos:

- ch.ch
- sem.admin.ch
- bfs.admin.ch
- seco.admin.ch

Esto aumenta la credibilidad del portal.

---

# 11. Integración comunitaria

El portal debe incluir un bloque que permita acceder a la comunidad existente.

Debe incluir:

- enlace al grupo Facebook
- invitación a participar
- posibilidad de compartir información útil

---

# 12. Rendimiento

El sitio debe optimizarse para velocidad.

Objetivos:

- tiempo de carga inferior a 2 segundos
- optimización de imágenes
- minimización de CSS y JavaScript

---

# 13. Seguridad

Requerimientos:

- uso obligatorio de HTTPS
- hosting seguro
- protección contra spam

---

# 14. Administración técnica

El sistema debe permitir:

- actualización del contenido
- mantenimiento del sitio
- ampliación futura

El portal debe poder evolucionar sin reconstrucción completa.

---

# 15. Evolución futura

Posibles funcionalidades adicionales:

- calculadora de salario neto
- guía de cantones
- base de datos de empresas
- comparador de coste de vida

---

# 16. Indicadores de éxito

Objetivos a medio plazo:

- aumento del tráfico orgánico
- posicionamiento en Google
- crecimiento de la comunidad

Consultas objetivo:

- españoles en suiza
- vivir en suiza
- trabajar en suiza

---

# 17. Mantenimiento

El portal debe actualizarse regularmente para:

- mantener la información vigente
- reflejar cambios legislativos
- añadir nuevos artículos

El contenido debe revisarse periódicamente para asegurar su fiabilidad.
