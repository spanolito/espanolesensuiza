/**
 * app.js
 * Advanced Vanilla JS SPA Router with Search, Reading Progress, and Component Logic.
 */

document.addEventListener("DOMContentLoaded", () => {

    // UI Elements
    const appContainer = document.getElementById("app-container");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const langBtns = document.querySelectorAll(".lang-btn");
    const yearSpan = document.getElementById("current-year");

    // Inject Reading Progress Bar
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "reading-progress-container";
    progressBarContainer.innerHTML = '<div class="reading-progress-bar" id="reading-progress-bar"></div>';
    document.querySelector('.site-header').appendChild(progressBarContainer);
    const readingProgressBar = document.getElementById("reading-progress-bar");

    // Set current year
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // UI Dictionary for static strings and JS generated elements
    window.siteContent.ui = {
        es: {
            "nav-inicio": "Inicio",
            "nav-vivir": "Vivir en Suiza",
            "nav-tramites": "Trámites",
            "nav-trabajo": "Trabajo",
            "nav-vivienda": "Vivienda",
            "nav-fronterizos": "Fronterizos",
            "nav-mas": "Más",
            "nav-salud": "Salud (LAMal)",
            "nav-impuestos": "Impuestos",
            "nav-recursos": "Recursos Útiles",
            "nav-comunidad": "Comunidad",
            "nav-contacto": "Contacto",
            "footer-title": "Españoles en Suiza",
            "footer-desc": "Información práctica y fiable para la comunidad hispanohablante residente o con planes de residencia en Suiza.",
            "footer-community-cta": "Únete a la comunidad y mantente informado en tiempo real",
            "footer-fb": "Únete a nuestro grupo en Facebook &rarr;",
            "footer-guides-title": "Guías",
            "footer-links-title": "Enlaces Rápidos",
            "footer-sources-title": "Fuentes Oficiales",
            "footer-site-title": "El Sitio",
            "footer-source-ch": "(Portal Suizo)",
            "footer-source-sem": "Secretaría de Estado de Migración",
            "footer-source-bfs": "Oficina Federal de Estadística",
            "footer-source-ch-link": "ch.ch — Portal federal",
            "footer-source-sem-link": "SEM — Migración",
            "footer-source-bfs-link": "OFS / BFS — Estadística",
            "footer-source-seco-link": "SECO — Economía",
            "footer-link-consulates": "Consulados españoles",
            "footer-copyright": "Españoles en Suiza. Información con propósito comunitario.",
            "search-placeholder": "Buscar guías, trámites, impuestos...",
            "btn-read-guide": "Leer guía &rarr;",
            "btn-view-all": "Ver todas las guías de la sección",
            "btn-view-section": "Ver sección",
            "lbl-explore": "Sigue explorando guías sobre",
            "lbl-explore-other": "Explora otras guías",
            "lbl-related": "Artículos relacionados",
            "lbl-read-time": "min lectura",
            "lbl-updated": "Actualizado:",
            "lbl-new": "Nuevo",
            "lbl-summary": "Puntos Clave",
            "lbl-nav-sidebar": "Navegación",
            "lbl-back": "Volver a",
            "lbl-back-top": "Volver arriba &uarr;",
            "lbl-loading": "Cargando...",
            "lbl-no-results": "No se encontraron resultados para",
            "lbl-no-articles": "No hay artículos publicados en esta categoría todavía.",
            "sort-recent": "Más recientes",
            "sort-relevance": "Más relevantes",
            "sort-abc": "Alfabético (A-Z)",
            "lbl-explore-guides": "Explorar guías &rarr;",
            "lbl-guides-plural": "guías",
            "lbl-guides-singular": "guía",
            "cat-tramites": "Trámites y Permisos",
            "cat-trabajo": "Trabajo y Salarios",
            "cat-vivir": "Vivir en Suiza",
            "cat-vivienda": "Vivienda",
            "cat-salud": "Salud y LAMal",
            "cat-impuestos": "Impuestos",
            "cat-fronterizos": "Frontaliers",
            "home-title-start": "Empezar aquí",
            "home-desc-start": "Si acabas de llegar o planeas mudarte, revisa estas guías esenciales.",
            "home-title-hubs": "Temas Principales",
            "home-title-featured": "Guías Destacadas",
            "home-desc-featured": "Selección editorial y contenido práctico (incluye guías nuevas basadas en la experiencia de comunidad).",
            "home-title-faq": "Preguntas Frecuentes",
            "home-desc-faq": "Las dudas más habituales entre hispanohablantes en Suiza.",
            "home-title-fuentes": "Fuentes oficiales",
            "home-desc-fuentes": "Información directa de la administración suiza y española. Verifica siempre en la fuente cuando algo cambia.",
            "home-title-cantones": "Portales oficiales de los 26 cantones",
            "home-desc-cantones": "Cada cantón gestiona sus propios impuestos, permisos y servicios. Accede directamente al portal de tu cantón.",
            "home-hero-tagline": "Tu guía de referencia para vivir y trabajar en Suiza",
            "home-hero-sub": "Información práctica, verificada y directamente explotable sobre permisos, trabajo, vivienda, fiscalidad y vida diaria.",
            "home-stats-community": "Miembros comunidad",
            "home-stats-guides": "Guías y contenidos analizados",
            "home-stats-languages": "Idiomas",
            "home-stats-cantons": "Cantones cubiertos",
            "home-consulados-note": "Cita previa consulados:",
            "home-consulados-link": "Guía completa de consulados →",
            "fuente-label-federal": "Portal federal",
            "fuente-label-migracion": "Migración",
            "fuente-label-estadistica": "Estadística",
            "fuente-label-economia": "Economía y empleo",
            "fuente-ch-desc": "Portal oficial de la Confederación sobre vida diaria, permisos y administración. En 5 idiomas.",
            "fuente-sem-desc": "Secretaría de Estado de Migración: permisos de residencia, libre circulación y naturalización.",
            "fuente-bfs-desc": "Datos oficiales sobre salarios, población, vivienda y empleo en Suiza.",
            "fuente-seco-desc": "Secretaría de Estado de Economía: mercado laboral, desempleo y condiciones de trabajo.",
            "fuente-label-consulado": "Consulado",
            "faq-read-guide": "Leer la guía completa →",
            "faq-view-guides": "Ver guías de vida diaria →",
            "cat-desc-tramites": "Comprende los procesos burocráticos suizos: desde el alta en tu comuna hasta las diferencias entre los permisos L, B y C. Información paso a paso basándonos en la experiencia real.",
            "cat-desc-trabajo": "El mercado laboral suizo es altamente cualificado, competitivo y liberal. Descubre tus derechos laborales, el tiempo de preaviso y las expectativas salariales justas.",
            "cat-desc-vivir": "Todo lo que conforma tu día a día: el excelente pero caro transporte público, el sistema escolar cantonal, seguros sociales y la realidad del costo de vida suizo.",
            "cat-desc-vivienda": "El mercado de alquiler suizo es muy tenso, con vacantes inferiores al 1% en las grandes ciudades. Aprende a crear un dosier inmaculado y conoce tus derechos como inquilino.",
            "cat-desc-salud": "La sanidad suiza es excelente pero privada y de afiliación obligatoria. Comprende cómo funciona el seguro LAMal, las franquicias, los copagos y cómo navegar entre médicos y urgencias.",
            "cat-desc-impuestos": "Entiende el sistema fiscal suizo a tres niveles (federal, cantonal, comunal), el impuesto a la fuente para extranjeros (Quellensteuer) y las declaraciones de la renta.",
            "cat-desc-fronterizos": "Regulación fiscal especial, derecho a la opción en el seguro médico (LAMal vs CMU) y normativas de vida para aquellos que cruzan la frontera a diario.",
            "start-card-1-title": "Llegar a Suiza",
            "start-card-1-desc": "Registro y control",
            "start-card-2-title": "Primeros trámites",
            "start-card-2-desc": "Checklist de llegada",
            "start-card-3-title": "Encontrar trabajo",
            "start-card-3-desc": "Guía de empleo en Suiza",
            "start-card-4-title": "Seguro médico",
            "start-card-4-desc": "Sistema LAMal",
            "start-card-5-title": "Encontrar vivienda",
            "start-card-5-desc": "Alquiler y búsqueda",
            "faq-q1": "¿Puedo trabajar antes de recibir mi permiso físico?",
            "faq-a1": "Sí. Si eres ciudadano de la UE/EFTA, desde el momento en el que entregas todos tus documentos en la comuna y expiden el resguardo de registro (\"Attestation d'établissement\"), tienes el derecho legal de comenzar a trabajar incluso antes de que el plástico del permiso te llegue.",
            "faq-q2": "¿Cómo funciona el seguro médico si me equivoco de aseguradora?",
            "faq-a2": "El seguro básico LAMal tiene exactamente las mismas coberturas médicas obligatorias independientemente de la caja de salud que elijas. Solo tu prima mensual variará. Puedes cambiar de seguro una vez al año (antes del 30 de noviembre).",
            "faq-q3": "¿Qué cambia según el cantón donde viva?",
            "faq-a3": "Casi todo en Suiza varía por cantón: la carga de los impuestos, el costo de las primas del seguro médico, las vacaciones escolares y las festividades locales. Cada cantón define sus propias regulaciones de convivencia básica.",
            "community-title": "De la comunidad, a la plataforma pública",
            "community-desc": "Todo el conocimiento de esta plataforma nace de las respuestas expertas compartidas durante años en nuestra comunidad oficial de Facebook: \"Españoles en Suiza que realmente se ayudan\".",
            "community-faq-title": "¿Por qué el grupo es privado?",
            "community-faq-desc": "Mantenemos el grupo cerrado al público para evitar spam, perfiles falsos y proteger la privacidad de miembros reales al hablar sobre contratos u ofertas de alquiler.",
            "community-btn": "Solicitar acceso a la comunidad",
            "official-title": "Información oficial y verificable",
            "official-desc": "Nuestras guías se basan en la experiencia real, pero siempre refiriendo directamente a los portales federales.",
            "official-ch": "Portal Federal",
            "official-sem": "Sec. Migración",
            "official-bfs": "Oficina Estadística",
            "hub-note-title": "Nota sobre diferencias cantonales:",
            "hub-note-desc": "Recuerda que Suiza es una federación fuertemente descentralizada. Aunque las reglas básicas sean iguales, cada cantón define sus vacaciones escolares, sus festivos y muchos de sus reglamentos de convivencia.",
            "rec-title": "Recursos y Vínculos Oficiales",
            "rec-h1": "Recursos Oficiales",
            "rec-desc": "Directorio verificado de la administración suiza y portales clave para emigrantes.",
            "rec-ch-p": "El portal nacional suizo administrado por el gobierno federal en 5 idiomas. La principal fuente de verdad inicial.",
            "rec-ch-link": "Visitar ch.ch &rarr;",
            "rec-sem-p": "Secretaría de Estado de Migración. Directivas federales sobre la expedición de tipos de permiso y naturalización.",
            "rec-sem-link": "Visitar SEM &rarr;",
            "rec-comp-p": "Plataforma para comparar los precios de las primas del seguro médico cantón por cantón, así como seguros de coche y fianzas de alquiler.",
            "rec-comp-link": "Visitar Comparis &rarr;",
            "rec-canton-title": "Página web de tu cantón",
            "rec-canton-p": "La estructura descentralizada indica que tu cantón gestiona el cobro de impuestos, el paro y la expedición del permiso. Por ejemplo vd.ch (Vaud), ge.ch (Ginebra).",
            "rec-canton-links-link": "Ver enlaces de cantones →",
            "rec-consulates-title": "Consulados de España en Suiza",
            "rec-consulates-desc": "Direcciones y teléfonos de los tres consulados generales (Ginebra, Berna, Zúrich).",
            "rec-official-portal": "Portal oficial →",
            "com-nav": "Comunidad",
            "com-h1": "De un grupo de ayuda, a esta plataforma de conocimiento.",
            "com-desc": "Nuestra web extrae el conocimiento verídico y los problemas más recurrentes que surgen a diario de nuestra vibrante comunidad en Facebook.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> nació como un grupo privado de FB para filtrar el ruido y proporcionar respuestas fiables a recién llegados y residentes.",
            "com-p2": "Hoy somos miles de miembros aportando valor, alertando sobre estafas de alquiler y ayudando a entender la burocracia suiza.",
            "com-li1": "Resolución ágil de dudas sobre el permiso y la LAMal.",
            "com-li2": "Ofertas de alojamiento de traspaso directo (sin agencia).",
            "com-li3": "Networking y recomendación de profesionales que hablan tu idioma.",
            "com-team-title": "Equipo de la comunidad",
            "com-team-admins": "Administradores",
            "com-team-moderators": "Moderadores",
            "com-team-note": "y vosotros que participáis activamente con vuestros aportes diarios en el grupo.",
            "com-btn": "Solicitar Acceso al Grupo Privado",
            "cont-title": "Contacto",
            "cont-h1": "Contactar con el equipo editorial",
            "cont-desc": "¿Tienes una sugerencia para una nueva guía, encontraste un error o quieres colaborar?",
            "cont-lbl-name": "Tu Nombre",
            "cont-lbl-email": "Tu Email",
            "cont-lbl-msg": "Mensaje",
            "cont-btn": "Enviar Mensaje",
            "cont-success": "¡Gracias! Tu mensaje ha sido enviado.",
            "cont-error": "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
        },
        en: {
            "nav-inicio": "Home",
            "nav-vivir": "Living in Switzerland",
            "nav-tramites": "Procedures",
            "nav-trabajo": "Work",
            "nav-vivienda": "Housing",
            "nav-fronterizos": "Frontaliers",
            "nav-mas": "More",
            "nav-salud": "Health (LAMal)",
            "nav-impuestos": "Taxes",
            "nav-recursos": "Resources",
            "nav-comunidad": "Community",
            "nav-contacto": "Contact",
            "footer-title": "Spaniards in Switzerland",
            "footer-desc": "Practical and reliable information for the Spanish-speaking community living or planning to live in Switzerland.",
            "footer-community-cta": "Join the community and stay informed in real time",
            "footer-fb": "Join our Facebook group &rarr;",
            "footer-guides-title": "Guides",
            "footer-links-title": "Quick Links",
            "footer-sources-title": "Official Sources",
            "footer-site-title": "The Site",
            "footer-source-ch": "(Swiss Portal)",
            "footer-source-sem": "State Secretariat for Migration",
            "footer-source-bfs": "Federal Statistical Office",
            "footer-source-ch-link": "ch.ch — Federal portal",
            "footer-source-sem-link": "SEM — Migration",
            "footer-source-bfs-link": "FSO / BFS — Statistics",
            "footer-source-seco-link": "SECO — Economy",
            "footer-link-consulates": "Spanish consulates",
            "footer-copyright": "Spaniards in Switzerland. Information with a community purpose.",
            "search-placeholder": "Search guides, procedures, taxes...",
            "btn-read-guide": "Read guide &rarr;",
            "btn-view-all": "View all guides in section",
            "btn-view-section": "View section",
            "lbl-explore": "Keep exploring guides about",
            "lbl-explore-other": "Explore other guides",
            "lbl-related": "Related articles",
            "lbl-read-time": "min read",
            "lbl-updated": "Updated:",
            "lbl-new": "New",
            "lbl-summary": "Key Points",
            "lbl-nav-sidebar": "Navigation",
            "lbl-back": "Back to",
            "lbl-back-top": "Back to top &uarr;",
            "lbl-loading": "Loading...",
            "lbl-no-results": "No results found for",
            "lbl-no-articles": "No articles published in this category yet.",
            "sort-recent": "Most recent",
            "sort-relevance": "Most relevant",
            "sort-abc": "Alphabetical (A-Z)",
            "lbl-explore-guides": "Explore guides &rarr;",
            "lbl-guides-plural": "guides",
            "lbl-guides-singular": "guide",
            "cat-tramites": "Procedures & Permits",
            "cat-trabajo": "Work & Salaries",
            "cat-vivir": "Living in Switzerland",
            "cat-vivienda": "Housing",
            "cat-salud": "Health & LAMal",
            "cat-impuestos": "Taxes",
            "cat-fronterizos": "Frontaliers",
            "home-title-start": "Start Here",
            "home-desc-start": "If you just arrived or plan to move, check these essential guides.",
            "home-title-hubs": "Main Topics",
            "home-title-featured": "Featured Guides",
            "home-desc-featured": "An editorial selection of practical guides (including new, community-derived content).",
            "home-title-faq": "Frequently Asked Questions",
            "home-desc-faq": "The most common questions among Spanish speakers in Switzerland.",
            "home-title-fuentes": "Official Sources",
            "home-desc-fuentes": "Direct information from the Swiss and Spanish administration. Always verify at the source when something changes.",
            "home-title-cantones": "Official portals of the 26 cantons",
            "home-desc-cantones": "Each canton manages its own taxes, permits and services. Access your canton's portal directly.",
            "home-hero-tagline": "Your reference guide for living and working in Switzerland",
            "home-hero-sub": "Practical, verified and directly actionable information on permits, work, housing, taxation and daily life.",
            "home-stats-community": "Community members",
            "home-stats-guides": "Guides and content analyzed",
            "home-stats-languages": "Languages",
            "home-stats-cantons": "Cantons covered",
            "home-consulados-note": "Consulate appointment:",
            "home-consulados-link": "Full consulate guide →",
            "fuente-label-federal": "Federal portal",
            "fuente-label-migracion": "Migration",
            "fuente-label-estadistica": "Statistics",
            "fuente-label-economia": "Economy and employment",
            "fuente-ch-desc": "Official Confederation portal on daily life, permits and administration. In 5 languages.",
            "fuente-sem-desc": "State Secretariat for Migration: residence permits, free movement and naturalisation.",
            "fuente-bfs-desc": "Official data on salaries, population, housing and employment in Switzerland.",
            "fuente-seco-desc": "State Secretariat for Economic Affairs: labour market, unemployment and working conditions.",
            "fuente-label-consulado": "Consulate",
            "faq-read-guide": "Read the full guide →",
            "faq-view-guides": "View daily life guides →",
            "cat-desc-tramites": "Understand Swiss bureaucracy: from registering in your commune to the differences between L, B, and C permits. Step-by-step information based on real experience.",
            "cat-desc-trabajo": "The Swiss labor market is highly qualified, competitive, and liberal. Discover your employment rights, notice periods, and fair salary expectations.",
            "cat-desc-vivir": "Everything that makes up your daily life: the excellent but expensive public transport, the cantonal school system, social security, and the reality of the Swiss cost of living.",
            "cat-desc-vivienda": "The Swiss rental market is very tight, with vacancies below 1% in major cities. Learn how to create a flawless dossier and know your rights as a tenant.",
            "cat-desc-salud": "Swiss healthcare is excellent but private and mandatory. Understand how LAMal insurance works, deductibles, co-pays, and how to navigate between doctors and emergencies.",
            "cat-desc-impuestos": "Understand the Swiss tax system at three levels (federal, cantonal, communal), withholding tax for foreigners (Quellensteuer), and tax returns.",
            "cat-desc-fronterizos": "Special tax regulations, the right to choose health insurance (LAMal vs CMU), and living regulations for those who cross the border daily.",
            "cat-desc-tramites": "Understand Swiss bureaucracy: from registering in your commune to the differences between L, B, and C permits. Step-by-step information based on real experience.",
            "cat-desc-trabajo": "The Swiss labor market is highly qualified, competitive, and liberal. Discover your employment rights, notice periods, and fair salary expectations.",
            "cat-desc-vivir": "Everything that makes up your daily life: the excellent but expensive public transport, the cantonal school system, social security, and the reality of the Swiss cost of living.",
            "cat-desc-vivienda": "The Swiss rental market is very tight, with vacancies below 1% in major cities. Learn how to create a flawless dossier and know your rights as a tenant.",
            "cat-desc-salud": "Swiss healthcare is excellent but private and mandatory. Understand how LAMal insurance works, deductibles, co-pays, and how to navigate between doctors and emergencies.",
            "cat-desc-impuestos": "Understand the Swiss tax system at three levels (federal, cantonal, communal), withholding tax for foreigners (Quellensteuer), and tax returns.",
            "cat-desc-fronterizos": "Special tax regulations, the right to choose health insurance (LAMal vs CMU), and living regulations for those who cross the border daily.",
            "start-card-1-title": "Arriving in Switzerland",
            "start-card-1-desc": "Registration and control",
            "start-card-2-title": "First procedures",
            "start-card-2-desc": "Arrival checklist",
            "start-card-3-title": "Finding a job",
            "start-card-3-desc": "Employment guide in Switzerland",
            "start-card-4-title": "Health insurance",
            "start-card-4-desc": "LAMal system",
            "start-card-5-title": "Finding housing",
            "start-card-5-desc": "Renting and search",
            "faq-q1": "Can I work before receiving my physical permit?",
            "faq-a1": "Yes. If you are an EU/EFTA citizen, from the moment you submit all your documents to the commune and they issue the registration receipt, you have the legal right to start working even before the plastic permit arrives.",
            "faq-q2": "How does health insurance work if I choose the wrong provider?",
            "faq-a2": "The basic LAMal insurance has exactly the same mandatory medical coverage regardless of the health fund you choose. Only your monthly premium will vary. You can change your insurance once a year (before November 30).",
            "faq-q3": "What changes depending on the canton I live in?",
            "faq-a3": "Almost everything in Switzerland varies by canton: tax burden, health insurance premium costs, school holidays, and local public holidays. Each canton defines its own basic living regulations.",
            "community-title": "From the community, to the public platform",
            "community-desc": "All the knowledge on this platform stems from expert answers shared for years in our official Facebook community: \"Españoles en Suiza que realmente se ayudan\".",
            "community-faq-title": "Why is the group private?",
            "community-faq-desc": "We keep the group closed to the public to prevent spam, fake profiles, and protect the privacy of real members when discussing contracts or rental offers.",
            "community-btn": "Request community access",
            "official-title": "Official and verifiable information",
            "official-desc": "Our guides are based on real experience, but always referring directly to federal portals.",
            "official-ch": "Federal Portal",
            "official-sem": "Sec. Migration",
            "official-bfs": "Statistical Office",
            "hub-note-title": "Note on cantonal differences:",
            "hub-note-desc": "Remember that Switzerland is a highly decentralized federation. Although the basic rules are the same, each canton defines its school holidays, public holidays, and many of its coexistence regulations.",
            "rec-title": "Resources and Official Links",
            "rec-h1": "Official Resources",
            "rec-desc": "Verified directory of the Swiss administration and key portals for expats.",
            "rec-ch-p": "The Swiss national portal administered by the federal government in 5 languages.",
            "rec-ch-link": "Visit ch.ch &rarr;",
            "rec-sem-p": "State Secretariat for Migration. Federal directives on permits and naturalization.",
            "rec-sem-link": "Visit SEM &rarr;",
            "rec-comp-p": "Platform to compare health insurance premiums canton by canton, as well as car insurance.",
            "rec-comp-link": "Visit Comparis &rarr;",
            "rec-canton-title": "Your Canton's Website",
            "rec-canton-p": "Your canton manages tax collection, unemployment, and permit issuance. E.g. vd.ch (Vaud), zh.ch (Zurich).",
            "rec-canton-links-link": "See canton links →",
            "rec-consulates-title": "Spanish consulates in Switzerland",
            "rec-consulates-desc": "Addresses and phone numbers for the three main consulates (Geneva, Bern, Zurich).",
            "rec-official-portal": "Official portal →",
            "com-nav": "Community",
            "com-h1": "From a help group to a knowledge platform.",
            "com-desc": "Our website extracts true knowledge and the most recurring problems that arise daily from our vibrant Facebook community.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> was born as a private FB group to filter noise and provide reliable answers to newcomers.",
            "com-p2": "Today we are thousands of members adding value, warning about rental scams and helping to understand Swiss bureaucracy.",
            "com-li1": "Fast resolution of doubts about permits and LAMal.",
            "com-li2": "Direct transfer accommodation offers (no agency).",
            "com-li3": "Networking and recommendation of professionals speaking your language.",
            "com-team-title": "Community team",
            "com-team-admins": "Administrators",
            "com-team-moderators": "Moderators",
            "com-team-note": "and all of you who actively contribute to the group with your daily input.",
            "com-btn": "Request Access to the Private Group",
            "cont-title": "Contact",
            "cont-h1": "Contact the editorial team",
            "cont-desc": "Do you have a suggestion for a new guide, found a bug or want to collaborate?",
            "cont-lbl-name": "Your Name",
            "cont-lbl-email": "Your Email",
            "cont-lbl-msg": "Message",
            "cont-btn": "Send Message",
            "cont-success": "Thank you! Your message has been sent.",
            "cont-error": "There was an error sending the form. Please try again."
        },
        fr: {
            "nav-inicio": "Accueil",
            "nav-vivir": "Vivre en Suisse",
            "nav-tramites": "Démarches",
            "nav-trabajo": "Travail",
            "nav-vivienda": "Logement",
            "nav-fronterizos": "Frontaliers",
            "nav-mas": "Plus",
            "nav-salud": "Santé (LAMal)",
            "nav-impuestos": "Impôts",
            "nav-recursos": "Ressources",
            "nav-comunidad": "Communauté",
            "nav-contacto": "Contact",
            "footer-title": "Espagnols en Suisse",
            "footer-desc": "Informations pratiques et fiables pour la communauté hispanophone résidant ou prévoyant de s'installer en Suisse.",
            "footer-community-cta": "Rejoignez la communauté et restez informé en temps réel",
            "footer-fb": "Rejoignez notre groupe Facebook &rarr;",
            "footer-guides-title": "Guides",
            "footer-links-title": "Liens Rapides",
            "footer-sources-title": "Sources Officielles",
            "footer-site-title": "Le Site",
            "footer-source-ch": "(Portail Suisse)",
            "footer-source-sem": "Secrétariat d'État aux migrations",
            "footer-source-bfs": "Office fédéral de la statistique",
            "footer-source-ch-link": "ch.ch — Portail fédéral",
            "footer-source-sem-link": "SEM — Migration",
            "footer-source-bfs-link": "OFS / BFS — Statistiques",
            "footer-source-seco-link": "SECO — Économie",
            "footer-link-consulates": "Consulats espagnols",
            "footer-copyright": "Espagnols en Suisse. Une information à vocation communautaire.",
            "search-placeholder": "Rechercher des guides, impôts...",
            "btn-read-guide": "Lire le guide &rarr;",
            "btn-view-all": "Voir tous les guides",
            "btn-view-section": "Voir la section",
            "lbl-explore": "Continuer d'explorer les guides sur",
            "lbl-explore-other": "Explorer d'autres guides",
            "lbl-related": "Articles connexes",
            "lbl-read-time": "min de lecture",
            "lbl-updated": "Mis à jour :",
            "lbl-new": "Nouveau",
            "lbl-summary": "Points Clés",
            "lbl-nav-sidebar": "Navigation",
            "lbl-back": "Retour à",
            "lbl-back-top": "Retour en haut &uarr;",
            "lbl-loading": "Chargement...",
            "lbl-no-results": "Aucun résultat trouvé pour",
            "lbl-no-articles": "Aucun article publié dans cette catégorie pour le moment.",
            "sort-recent": "Plus récents",
            "sort-relevance": "Plus pertinents",
            "sort-abc": "Alphabétique (A-Z)",
            "lbl-explore-guides": "Explorer les guides &rarr;",
            "lbl-guides-plural": "guides",
            "lbl-guides-singular": "guide",
            "cat-tramites": "Démarches et Permis",
            "cat-trabajo": "Travail et Salaires",
            "cat-vivir": "Vivre en Suisse",
            "cat-vivienda": "Logement",
            "cat-salud": "Santé et LAMal",
            "cat-impuestos": "Impôts",
            "cat-fronterizos": "Frontaliers",
            "home-title-start": "Commencer ici",
            "home-desc-start": "Si vous venez d'arriver ou prévoyez de déménager, consultez ces guides essentiels.",
            "home-title-hubs": "Sujets Principaux",
            "home-title-featured": "Guides en Vedette",
            "home-desc-featured": "Sélection éditoriale de guides pratiques (y compris de nouveaux contenus issus de la communauté).",
            "home-title-faq": "Foire Aux Questions",
            "home-desc-faq": "Les questions les plus fréquentes chez les hispanophones en Suisse.",
            "home-title-fuentes": "Sources officielles",
            "home-desc-fuentes": "Informations directes de l'administration suisse et espagnole. Vérifiez toujours à la source lorsque quelque chose change.",
            "home-title-cantones": "Portails officiels des 26 cantons",
            "home-desc-cantones": "Chaque canton gère ses propres impôts, permis et services. Accédez directement au portail de votre canton.",
            "home-hero-tagline": "Votre guide de référence pour vivre et travailler en Suisse",
            "home-hero-sub": "Informations pratiques, vérifiées et directement exploitables sur les permis, le travail, le logement, la fiscalité et la vie quotidienne.",
            "home-stats-community": "Membres de la communauté",
            "home-stats-guides": "Guides et contenus analysés",
            "home-stats-languages": "Langues",
            "home-stats-cantons": "Cantons couverts",
            "home-consulados-note": "Rendez-vous consulat :",
            "home-consulados-link": "Guide complet des consulats →",
            "fuente-label-federal": "Portail fédéral",
            "fuente-label-migracion": "Migration",
            "fuente-label-estadistica": "Statistiques",
            "fuente-label-economia": "Économie et emploi",
            "fuente-ch-desc": "Portail officiel de la Confédération sur la vie quotidienne, les permis et l'administration. En 5 langues.",
            "fuente-sem-desc": "Secrétariat d'État aux migrations : permis de séjour, libre circulation et naturalisation.",
            "fuente-bfs-desc": "Données officielles sur les salaires, la population, le logement et l'emploi en Suisse.",
            "fuente-seco-desc": "Secrétariat d'État à l'économie : marché du travail, chômage et conditions de travail.",
            "fuente-label-consulado": "Consulat",
            "faq-read-guide": "Lire le guide complet →",
            "faq-view-guides": "Voir les guides de vie quotidienne →",
            "cat-desc-tramites": "Comprendre la bureaucratie suisse : de l'inscription dans votre commune aux différences entre les permis L, B et C. Informations étape par étape.",
            "cat-desc-trabajo": "Le marché du travail suisse est hautement qualifié, compétitif et libéral. Découvrez vos droits, délais de congé et salaires.",
            "cat-desc-vivir": "Tout ce qui fait votre quotidien : transports publics, système scolaire cantonal, assurances sociales et coût de la vie en Suisse.",
            "cat-desc-vivienda": "Le marché de la location suisse est très tendu. Apprenez à créer un dossier irréprochable et connaissez vos droits en tant que locataire.",
            "cat-desc-salud": "La santé suisse est excellente mais privée et obligatoire. Comprenez le fonctionnement de l'assurance LAMal, la franchise et la quote-part.",
            "cat-desc-impuestos": "Comprenez le système fiscal suisse à trois niveaux (fédéral, cantonal, communal) et l'impôt à la source pour les étrangers.",
            "cat-desc-fronterizos": "Réglementations fiscales spéciales, droit d'option assurance maladie (LAMal vs CMU) pour ceux qui traversent la frontière chaque jour.",
            "start-card-1-title": "Arriver en Suisse",
            "start-card-1-desc": "Inscription et contrôle",
            "start-card-2-title": "Premières démarches",
            "start-card-2-desc": "Checklist d'arrivée",
            "start-card-3-title": "Trouver un emploi",
            "start-card-3-desc": "Guide de l'emploi en Suisse",
            "start-card-4-title": "Assurance maladie",
            "start-card-4-desc": "Système LAMal",
            "start-card-5-title": "Trouver un logement",
            "start-card-5-desc": "Location et recherche",
            "faq-q1": "Puis-je travailler avant de recevoir mon permis physique ?",
            "faq-a1": "Oui. Si vous êtes citoyen de l'UE/AELE, dès que vous remettez tous vos documents à la commune et qu'elle délivre l'attestation, vous avez le droit légal de commencer à travailler avant même de recevoir le permis plastique.",
            "faq-q2": "Comment fonctionne l'assurance maladie si je me trompe d'assureur ?",
            "faq-a2": "L'assurance de base LAMal offre exactement la même couverture médicale obligatoire, quelle que soit la caisse maladie choisie. Seule votre prime mensuelle varie. Vous pouvez changer d'assurance une fois par an (avant le 30 novembre).",
            "faq-q3": "Qu'est-ce qui change selon le canton où je vis ?",
            "faq-a3": "Presque tout en Suisse varie selon les cantons : la charge fiscale, le coût des primes d'assurance maladie, les vacances scolaires et les jours fériés locaux. Chaque canton définit ses propres règles de base en matière de vie.",
            "community-title": "De la communauté à la plateforme publique",
            "community-desc": "Toutes les connaissances de cette plateforme proviennent des réponses d'experts partagées pendant des années dans notre communauté Facebook officielle : \"Españoles en Suiza que realmente se ayudan\".",
            "community-faq-title": "Pourquoi le groupe est-il privé ?",
            "community-faq-desc": "Nous gardons le groupe fermé au public pour éviter le spam, les faux profils et protéger la vie privée des vrais membres lors des discussions sur les contrats ou les offres de location.",
            "community-btn": "Demander l'accès à la communauté",
            "official-title": "Informations officielles et vérifiables",
            "official-desc": "Nos guides sont basés sur l'expérience réelle, mais font toujours référence directement aux portails fédéraux.",
            "official-ch": "Portail Fédéral",
            "official-sem": "Sec. Migration",
            "official-bfs": "Office de la Statistique",
            "hub-note-title": "Note sur les différences cantonales :",
            "hub-note-desc": "N'oubliez pas que la Suisse est une fédération fortement décentralisée. Bien que les règles de base soient les mêmes, chaque canton définit ses vacances scolaires, ses jours fériés et bon nombre de ses règles de cohabitation.",
            "rec-title": "Ressources et Liens Officiels",
            "rec-h1": "Ressources Officielles",
            "rec-desc": "Annuaire vérifié de l'administration suisse et portails clés pour les expatriés.",
            "rec-ch-p": "Le portail national suisse administré par le gouvernement fédéral en 5 langues.",
            "rec-ch-link": "Visiter ch.ch &rarr;",
            "rec-sem-p": "Secrétariat d'État aux migrations. Directives fédérales sur les permis et naturalisation.",
            "rec-sem-link": "Visiter le SEM &rarr;",
            "rec-comp-p": "Plateforme pour comparer les primes d'assurance maladie canton par canton.",
            "rec-comp-link": "Visiter Comparis &rarr;",
            "rec-canton-title": "Le site de votre Canton",
            "rec-canton-p": "Votre canton gère la perception des impôts, le chômage et la délivrance des permis. Par exemple vd.ch (Vaud), ge.ch (Genève).",
            "rec-canton-links-link": "Voir les cantons →",
            "rec-consulates-title": "Consulats d'Espagne en Suisse",
            "rec-consulates-desc": "Adresses et numéros de téléphone des trois consulats généraux (Genève, Berne, Zurich).",
            "rec-official-portal": "Site officiel →",
            "com-nav": "Communauté",
            "com-h1": "D'un groupe d'entraide à cette plateforme de connaissances.",
            "com-desc": "Notre site web extrait de notre vibrante communauté Facebook les vraies connaissances et les problèmes récurrents.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> est né comme groupe privé pour filtrer le bruit et fournir des réponses fiables.",
            "com-p2": "Aujourd'hui, nous sommes des milliers de membres apportant de la valeur et prévenant les arnaques de location.",
            "com-li1": "Résolution rapide des doutes sur les permis et la LAMal.",
            "com-li2": "Offres de logement en transfert direct (sans agence).",
            "com-li3": "Réseautage et recommandation de professionnels.",
            "com-team-title": "Équipe de la communauté",
            "com-team-admins": "Administrateurs",
            "com-team-moderators": "Modérateurs",
            "com-team-note": "et vous qui participez activement au groupe avec vos contributions quotidiennes.",
            "com-btn": "Demander l'accès au groupe privé",
            "cont-title": "Contact",
            "cont-h1": "Contacter l'équipe éditoriale",
            "cont-desc": "Avez-vous une suggestion pour un guide, avez-vous trouvé une erreur ou souhaitez-vous collaborer ?",
            "cont-lbl-name": "Votre Nom",
            "cont-lbl-email": "Votre E-mail",
            "cont-lbl-msg": "Message",
            "cont-btn": "Envoyer le Message",
            "cont-success": "Merci ! Votre message a été envoyé.",
            "cont-error": "Une erreur s'est produite. Veuillez réessayer."
        },
        de: {
            "nav-inicio": "Startseite",
            "nav-vivir": "Leben in der Schweiz",
            "nav-tramites": "Verfahren",
            "nav-trabajo": "Arbeit",
            "nav-vivienda": "Wohnen",
            "nav-fronterizos": "Grenzgänger",
            "nav-mas": "Mehr",
            "nav-salud": "Gesundheit (LAMal)",
            "nav-impuestos": "Steuern",
            "nav-recursos": "Ressourcen",
            "nav-comunidad": "Gemeinschaft",
            "nav-contacto": "Kontakt",
            "footer-title": "Spanier in der Schweiz",
            "footer-desc": "Praktische und zuverlässige Informationen für die spanischsprachige Gemeinschaft in der Schweiz.",
            "footer-community-cta": "Treten Sie der Community bei und bleiben Sie in Echtzeit informiert",
            "footer-fb": "Treten Sie unserer Facebook-Gruppe bei &rarr;",
            "footer-guides-title": "Leitfäden",
            "footer-links-title": "Schnelllinks",
            "footer-sources-title": "Offizielle Quellen",
            "footer-site-title": "Die Website",
            "footer-source-ch": "(Schweizer Portal)",
            "footer-source-sem": "Staatssekretariat für Migration",
            "footer-source-bfs": "Bundesamt für Statistik",
            "footer-source-ch-link": "ch.ch — Bundesportal",
            "footer-source-sem-link": "SEM — Migration",
            "footer-source-bfs-link": "BFS — Statistik",
            "footer-source-seco-link": "SECO — Wirtschaft",
            "footer-link-consulates": "Spanische Konsulate",
            "footer-copyright": "Spanier in der Schweiz. Informationen mit gemeinschaftlichem Zweck.",
            "search-placeholder": "Durchsuche Leitfäden, Steuern...",
            "btn-read-guide": "Leitfaden lesen &rarr;",
            "btn-view-all": "Alle Leitfäden ansehen",
            "btn-view-section": "Sektion ansehen",
            "lbl-explore": "Weitere Leitfäden erkunden zu",
            "lbl-explore-other": "Andere Leitfäden erkunden",
            "lbl-related": "Ähnliche Artikel",
            "lbl-read-time": "Min Lesezeit",
            "lbl-updated": "Aktualisiert:",
            "lbl-new": "Neu",
            "lbl-summary": "Wichtige Punkte",
            "lbl-nav-sidebar": "Navigation",
            "lbl-back": "Zurück zu",
            "lbl-back-top": "Zurück nach oben &uarr;",
            "lbl-loading": "Wird geladen...",
            "lbl-no-results": "Keine Ergebnisse gefunden für",
            "lbl-no-articles": "Noch keine Artikel in dieser Kategorie veröffentlicht.",
            "sort-recent": "Neueste zuerst",
            "sort-relevance": "Relevanteste",
            "sort-abc": "Alphabetisch (A-Z)",
            "lbl-explore-guides": "Leitfäden erkunden &rarr;",
            "lbl-guides-plural": "Leitfäden",
            "lbl-guides-singular": "Leitfaden",
            "cat-tramites": "Verfahren & Bewilligungen",
            "cat-trabajo": "Arbeit & Gehälter",
            "cat-vivir": "Leben in der Schweiz",
            "cat-vivienda": "Wohnen",
            "cat-salud": "Gesundheit & LAMal",
            "cat-impuestos": "Steuern",
            "cat-fronterizos": "Grenzgänger",
            "home-title-start": "Hier beginnen",
            "home-desc-start": "Wenn Sie gerade angekommen sind, lesen Sie diese wichtigen Leitfäden.",
            "home-title-hubs": "Hauptthemen",
            "home-title-featured": "Ausgewählte Leitfäden",
            "home-desc-featured": "Eine kuratierte Auswahl praktischer Guides (inklusive neuer Inhalte aus der Community).",
            "home-title-faq": "Häufig gestellte Fragen",
            "home-desc-faq": "Die häufigsten Fragen unter Hispanischsprachigen in der Schweiz.",
            "home-title-fuentes": "Offizielle Quellen",
            "home-desc-fuentes": "Direktinformationen der Schweizer und spanischen Verwaltung. Überprüfen Sie immer an der Quelle.",
            "home-title-cantones": "Offizielle Portale der 26 Kantone",
            "home-desc-cantones": "Jeder Kanton verwaltet seine eigenen Steuern, Bewilligungen und Dienste. Greifen Sie direkt auf das Portal Ihres Kantons zu.",
            "home-hero-tagline": "Ihr Referenzleitfaden für das Leben und Arbeiten in der Schweiz",
            "home-hero-sub": "Praktische, verifizierte und direkt nutzbare Informationen zu Bewilligungen, Arbeit, Wohnen, Steuern und Alltag.",
            "home-stats-community": "Community-Mitglieder",
            "home-stats-guides": "Analysierte Leitfäden und Inhalte",
            "home-stats-languages": "Sprachen",
            "home-stats-cantons": "Abgedeckte Kantone",
            "home-consulados-note": "Termin Konsulat:",
            "home-consulados-link": "Vollständiger Konsulatsführer →",
            "fuente-label-federal": "Bundesportal",
            "fuente-label-migracion": "Migration",
            "fuente-label-estadistica": "Statistik",
            "fuente-label-economia": "Wirtschaft und Beschäftigung",
            "fuente-ch-desc": "Offizielles Eidgenossenschaftsportal zu Alltag, Bewilligungen und Verwaltung. In 5 Sprachen.",
            "fuente-sem-desc": "Staatssekretariat für Migration: Aufenthaltsbewilligungen, Personenfreizügigkeit und Einbürgerung.",
            "fuente-bfs-desc": "Offizielle Daten zu Löhnen, Bevölkerung, Wohnen und Beschäftigung in der Schweiz.",
            "fuente-seco-desc": "Staatssekretariat für Wirtschaft: Arbeitsmarkt, Arbeitslosigkeit und Arbeitsbedingungen.",
            "fuente-label-consulado": "Konsulat",
            "faq-read-guide": "Den vollständigen Leitfaden lesen →",
            "faq-view-guides": "Leitfäden zum Alltag ansehen →",
            "cat-desc-tramites": "Verstehen Sie die Schweizer Bürokratie: von der Anmeldung in Ihrer Gemeinde bis zu den Unterschieden zwischen den Bewilligungen L, B und C.",
            "cat-desc-trabajo": "Der Schweizer Arbeitsmarkt ist hochqualifiziert und liberal. Entdecken Sie Ihre Rechte, Kündigungsfristen und faire Gehaltserwartungen.",
            "cat-desc-vivir": "Alles, was Ihren Alltag ausmacht: öffentliche Verkehrsmittel, das kantonale Schulsystem, Sozialversicherungen und die Lebenserhaltungskosten.",
            "cat-desc-vivienda": "Der Schweizer Mietmarkt ist sehr angespannt. Erfahren Sie, wie Sie ein einwandfreies Dossier erstellen und Ihre Rechte als Mieter kennen.",
            "cat-desc-salud": "Das Schweizer Gesundheitswesen ist ausgezeichnet, aber privat und obligatorisch. Verstehen Sie die LAMal-Versicherung, Franchise und Selbstbehalt.",
            "cat-desc-impuestos": "Verstehen Sie das Schweizer Steuersystem (Bund, Kanton, Gemeinde) und die Quellensteuer für Ausländer.",
            "cat-desc-fronterizos": "Besondere Steuervorschriften und das Optionsrecht in der Krankenversicherung (LAMal vs. CMU) für diejenigen, die täglich die Grenze überqueren.",
            "start-card-1-title": "Ankunft in der Schweiz",
            "start-card-1-desc": "Anmeldung und Kontrolle",
            "start-card-2-title": "Erste Schritte",
            "start-card-2-desc": "Checkliste Ankunft",
            "start-card-3-title": "Jobsuche",
            "start-card-3-desc": "Arbeitsleitfaden Schweiz",
            "start-card-4-title": "Krankenversicherung",
            "start-card-4-desc": "LAMal-System",
            "start-card-5-title": "Wohnungssuche",
            "start-card-5-desc": "Mieten und Suche",
            "faq-q1": "Darf ich arbeiten, bevor ich meinen physischen Ausweis erhalte?",
            "faq-a1": "Ja. Wenn Sie EU/EFTA-Bürger sind, haben Sie ab dem Moment der Anmeldung bei der Gemeinde das gesetzliche Recht zu arbeiten, noch bevor der Plastikausweis per Post ankommt.",
            "faq-q2": "Wie funktioniert die Krankenversicherung, wenn ich den falschen Anbieter wähle?",
            "faq-a2": "Die LAMal-Grundversicherung bietet genau denselben obligatorischen medizinischen Schutz, unabhängig von der gewählten Krankenkasse. Nur Ihre monatliche Prämie variiert. Sie können die Versicherung einmal im Jahr (bis zum 30. November) wechseln.",
            "faq-q3": "Was ändert sich je nach dem Kanton, in dem ich lebe?",
            "faq-a3": "Fast alles in der Schweiz variiert von Kanton zu Kanton: Steuerbelastung, Kosten der Krankenversicherungsprämien, Schulferien und lokale Feiertage. Jeder Kanton definiert seine eigenen grundlegenden Lebensregeln.",
            "community-title": "Von der Community auf die öffentliche Plattform",
            "community-desc": "Das gesamte Wissen auf dieser Plattform stammt aus fachkundigen Antworten, die jahrelang in unserer offiziellen Facebook-Community geteilt wurden: \"Españoles en Suiza que realmente se ayudan\".",
            "community-faq-title": "Warum ist die Gruppe privat?",
            "community-faq-desc": "Wir halten die Gruppe für die Öffentlichkeit geschlossen, um Spam und gefälschte Profile zu vermeiden und die Privatsphäre echter Mitglieder zu schützen, wenn Verträge oder Mietangebote besprochen werden.",
            "community-btn": "Zugang zur Community anfordern",
            "official-title": "Offizielle und überprüfbare Informationen",
            "official-desc": "Unsere Leitfäden basieren auf echten Erfahrungen, verweisen aber immer direkt auf die Bundesportale.",
            "official-ch": "Bundesportal",
            "official-sem": "Sek. Migration",
            "official-bfs": "Bundesamt für Statistik",
            "hub-note-title": "Hinweis zu kantonalen Unterschieden:",
            "hub-note-desc": "Denken Sie daran, dass die Schweiz eine stark dezentralisierte Föderation ist. Obwohl die Grundregeln gleich sind, definiert jeder Kanton seine Schulferien, Feiertage und viele seiner grundlegenden Lebensregeln.",
            "rec-title": "Ressourcen und Offizielle Links",
            "rec-h1": "Offizielle Ressourcen",
            "rec-desc": "Verifiziertes Verzeichnis der Schweizer Verwaltung und der wichtigsten Portale für Auswanderer.",
            "rec-ch-p": "Das in 5 Sprachen verfügbare nationale Schweizer Portal, das vom Bund verwaltet wird.",
            "rec-ch-link": "Besuchen ch.ch &rarr;",
            "rec-sem-p": "Staatssekretariat für Migration. Richtlinien des Bundes zu Bewilligungen und Einbürgerung.",
            "rec-sem-link": "Besuchen SEM &rarr;",
            "rec-comp-p": "Plattform zum Vergleich der Krankenkassenprämien Kanton für Kanton.",
            "rec-comp-link": "Besuchen Comparis &rarr;",
            "rec-canton-title": "Die Website Ihres Kantons",
            "rec-canton-p": "Ihr Kanton verwaltet Steuern, Arbeitslosigkeit und die Ausstellung von Ausweisen. Z.B. zh.ch (Zürich).",
            "rec-canton-links-link": "Kantonslinks anzeigen →",
            "rec-consulates-title": "Spanische Konsulate in der Schweiz",
            "rec-consulates-desc": "Adressen und Telefonnummern der drei Generalkonsulate (Genf, Bern, Zürich).",
            "rec-official-portal": "Offizielles Portal →",
            "com-nav": "Gemeinschaft",
            "com-h1": "Von einer Hilfsgruppe zu dieser Wissensplattform.",
            "com-desc": "Unsere Website extrahiert das wahre Wissen und die häufigsten Probleme, die täglich in unserer Facebook-Community auftreten.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> wurde als private Gruppe gegründet, um zuverlässige Antworten zu geben.",
            "com-p2": "Heute sind wir Tausende von Mitgliedern, die vor Mietbetrug warnen und helfen, die Schweizer Bürokratie zu verstehen.",
            "com-li1": "Schnelle Klärung von Fragen zu Bewilligungen und KVG.",
            "com-li2": "Unterkunftsangebote zur direkten Übernahme (ohne Agentur).",
            "com-li3": "Networking und Empfehlung von Fachleuten.",
            "com-team-title": "Community-Team",
            "com-team-admins": "Administratoren",
            "com-team-moderators": "Moderatoren",
            "com-team-note": "und ihr, die ihr euch mit euren täglichen Beiträgen aktiv in der Gruppe einbringt.",
            "com-btn": "Zugang zur privaten Gruppe anfordern",
            "cont-title": "Kontakt",
            "cont-h1": "Kontaktieren Sie die Redaktion",
            "cont-desc": "Haben Sie einen Vorschlag für einen Leitfaden, einen Fehler gefunden oder möchten Sie mitarbeiten?",
            "cont-lbl-name": "Ihr Name",
            "cont-lbl-email": "Ihre E-Mail",
            "cont-lbl-msg": "Botschaft",
            "cont-btn": "Nachricht Senden",
            "cont-success": "Vielen Dank! Ihre Nachricht wurde gesendet.",
            "cont-error": "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
        },
        it: {
            "nav-inicio": "Inizio",
            "nav-vivir": "Vivere in Svizzera",
            "nav-tramites": "Procedure",
            "nav-trabajo": "Lavoro",
            "nav-vivienda": "Alloggio",
            "nav-fronterizos": "Frontalieri",
            "nav-mas": "Di Più",
            "nav-salud": "Salute (LAMal)",
            "nav-impuestos": "Tasse",
            "nav-recursos": "Risorse",
            "nav-comunidad": "Comunità",
            "nav-contacto": "Contatto",
            "footer-title": "Spagnoli in Svizzera",
            "footer-desc": "Informazioni pratiche e affidabili per la comunità di lingua spagnola residente o che pianifica di risiedere in Svizzera.",
            "footer-community-cta": "Unisciti alla community e rimani informato in tempo reale",
            "footer-fb": "Unisciti al nostro gruppo Facebook &rarr;",
            "footer-guides-title": "Guide",
            "footer-links-title": "Link Rapidi",
            "footer-sources-title": "Fonti Ufficiali",
            "footer-site-title": "Il Sito",
            "footer-source-ch": "(Portale Svizzero)",
            "footer-source-sem": "Segreteria di Stato della migrazione",
            "footer-source-bfs": "Ufficio federale di statistica",
            "footer-source-ch-link": "ch.ch — Portale federale",
            "footer-source-sem-link": "SEM — Migrazione",
            "footer-source-bfs-link": "UFS / BFS — Statistica",
            "footer-source-seco-link": "SECO — Economia",
            "footer-link-consulates": "Consolati spagnoli",
            "footer-copyright": "Spagnoli in Svizzera. Informazioni con finalità comunitaria.",
            "search-placeholder": "Cerca guide, procedure, tasse...",
            "btn-read-guide": "Leggi la guida &rarr;",
            "btn-view-all": "Vedi tutte le guide",
            "btn-view-section": "Vedi la sezione",
            "lbl-explore": "Continua a esplorare guide su",
            "lbl-explore-other": "Esplora altre guide",
            "lbl-related": "Articoli correlati",
            "lbl-read-time": "min di lettura",
            "lbl-updated": "Aggiornato:",
            "lbl-new": "Nuovo",
            "lbl-summary": "Punti Chiave",
            "lbl-nav-sidebar": "Navigazione",
            "lbl-back": "Torna a",
            "lbl-back-top": "Torna all'inizio &uarr;",
            "lbl-loading": "Caricamento...",
            "lbl-no-results": "Nessun risultato trovato per",
            "lbl-no-articles": "Nessun articolo ancora pubblicato in questa categoria.",
            "sort-recent": "Più recenti",
            "sort-relevance": "Più rilevanti",
            "sort-abc": "Alfabetico (A-Z)",
            "lbl-explore-guides": "Esplora le guide &rarr;",
            "lbl-guides-plural": "guide",
            "lbl-guides-singular": "guida",
            "cat-tramites": "Procedure e Permessi",
            "cat-trabajo": "Lavoro e Stipendi",
            "cat-vivir": "Vivere in Svizzera",
            "cat-vivienda": "Alloggio",
            "cat-salud": "Salute e LAMal",
            "cat-impuestos": "Tasse",
            "cat-fronterizos": "Frontalieri",
            "home-title-start": "Inizia qui",
            "home-desc-start": "Se sei appena arrivato o prevedi di trasferirti, consulta queste guide essenziali.",
            "home-title-hubs": "Argomenti Principali",
            "home-title-featured": "Guide in Evidenza",
            "home-desc-featured": "Selezione editoriale di guide pratiche (incluse nuove guide derivate dalla community).",
            "home-title-faq": "Domande Frequenti",
            "home-desc-faq": "Le domande più frequenti tra gli ispanofoni in Svizzera.",
            "home-title-fuentes": "Fonti ufficiali",
            "home-desc-fuentes": "Informazioni dirette dall'amministrazione svizzera e spagnola. Verifica sempre alla fonte quando qualcosa cambia.",
            "home-title-cantones": "Portali ufficiali dei 26 cantoni",
            "home-desc-cantones": "Ogni cantone gestisce le proprie tasse, permessi e servizi. Accedi direttamente al portale del tuo cantone.",
            "home-hero-tagline": "La tua guida di riferimento per vivere e lavorare in Svizzera",
            "home-hero-sub": "Informazioni pratiche, verificate e direttamente utilizzabili su permessi, lavoro, casa, fiscalità e vita quotidiana.",
            "home-stats-community": "Membri della community",
            "home-stats-guides": "Guide e contenuti analizzati",
            "home-stats-languages": "Lingue",
            "home-stats-cantons": "Cantoni coperti",
            "home-consulados-note": "Appuntamento consolato:",
            "home-consulados-link": "Guida completa ai consolati →",
            "fuente-label-federal": "Portale federale",
            "fuente-label-migracion": "Migrazione",
            "fuente-label-estadistica": "Statistica",
            "fuente-label-economia": "Economia e occupazione",
            "fuente-ch-desc": "Portale ufficiale della Confederazione sulla vita quotidiana, i permessi e l'amministrazione. In 5 lingue.",
            "fuente-sem-desc": "Segreteria di Stato della migrazione: permessi di soggiorno, libera circolazione e naturalizzazione.",
            "fuente-bfs-desc": "Dati ufficiali su salari, popolazione, abitazioni e occupazione in Svizzera.",
            "fuente-seco-desc": "Segreteria di Stato dell'economia: mercato del lavoro, disoccupazione e condizioni di lavoro.",
            "fuente-label-consulado": "Consolato",
            "faq-read-guide": "Leggere la guida completa →",
            "faq-view-guides": "Vedere le guide sulla vita quotidiana →",
            "cat-desc-tramites": "Comprendi la burocrazia svizzera: dalla registrazione nel tuo comune alle differenze tra i permessi L, B e C.",
            "cat-desc-trabajo": "Il mercato del lavoro svizzero è altamente qualificato e liberale. Scopri i tuoi diritti, i periodi di preavviso e le aspettative salariali.",
            "cat-desc-vivir": "Tutto ciò che compone la tua vita quotidiana: i trasporti pubblici, il sistema scolastico cantonale, le assicurazioni sociali e il costo della vita.",
            "cat-desc-vivienda": "Il mercato degli affitti in Svizzera è molto teso. Impara a creare un dossier impeccabile e conosci i tuoi diritti come inquilino.",
            "cat-desc-salud": "La sanità svizzera è eccellente ma privata e obbligatoria. Comprendi l'assicurazione LAMal, la franchigia e la quota parte.",
            "cat-desc-impuestos": "Comprendi il sistema fiscale svizzero a tre livelli (federale, cantonale, comunale), l'imposta alla fonte per gli stranieri (Quellensteuer) e le dichiarazioni dei redditi.",
            "cat-desc-fronterizos": "Normative fiscali speciali, il diritto di opzione nell'assicurazione sanitaria (LAMal vs CMU) e normative di vita per coloro che attraversano il confine ogni giorno.",
            "start-card-1-title": "Arrivare in Svizzera",
            "start-card-1-desc": "Registrazione e controllo",
            "start-card-2-title": "Prime pratiche",
            "start-card-2-desc": "Checklist di arrivo",
            "start-card-3-title": "Trovare lavoro",
            "start-card-3-desc": "Guida al lavoro in Svizzera",
            "start-card-4-title": "Assicurazione sanitaria",
            "start-card-4-desc": "Sistema LAMal",
            "start-card-5-title": "Trovare casa",
            "start-card-5-desc": "Affitto e ricerca",
            "faq-q1": "Posso lavorare prima di ricevere il mio permesso fisico?",
            "faq-a1": "Sì. Se sei un cittadino UE/AELS, dal momento in cui consegni tutti i tuoi documenti al comune, hai il diritto legale di iniziare a lavorare ancora prima che il permesso di plastica arrivi per posta.",
            "faq-q2": "Come funziona l'assicurazione sanitaria se scelgo il fornitore sbagliato?",
            "faq-a2": "L'assicurazione di base LAMal ha esattamente la stessa copertura medica obbligatoria, indipendentemente dalla cassa malati scelta. Solo il tuo premio mensile varierà. Puoi cambiare assicurazione una volta all'anno (prima del 30 novembre).",
            "faq-q3": "Cosa cambia a seconda del cantone in cui vivo?",
            "faq-a3": "Quasi tutto in Svizzera varia da cantone a cantone: carico fiscale, costo dei premi dell'assicurazione sanitaria, vacanze scolastiche e festività locali. Ogni cantone definisce le proprie regole di base per la convivenza.",
            "community-title": "Dalla comunità, alla piattaforma pubblica",
            "community-desc": "Tutte le conoscenze di questa piattaforma nascono dalle risposte degli esperti condivise per anni nella nostra comunità Facebook ufficiale: \"Españoles en Suiza che realmente se ayudan\".",
            "community-faq-title": "Perché il gruppo è privato?",
            "community-faq-desc": "Manteniamo il gruppo chiuso al pubblico per evitare spam, profili falsi e proteggere la privacy dei membri reali quando si discutono contratti o offerte di affitto.",
            "community-btn": "Richiedi accesso alla community",
            "official-title": "Informazioni ufficiali e verificabili",
            "official-desc": "Le nostre guide si basano sull'esperienza reale, ma fanno sempre riferimento direttamente ai portali federali.",
            "official-ch": "Portale Federale",
            "official-sem": "Seg. Migrazione",
            "official-bfs": "Ufficio di Statistica",
            "hub-note-title": "Nota sulle differenze cantonali:",
            "hub-note-desc": "Ricorda che la Svizzera è una federazione fortemente decentralizzata. Sebbene le regole di base siano le stesse, ogni cantone definisce le proprie vacanze scolastiche, i giorni festivi e molte delle sue regole di convivenza.",
            "rec-title": "Risorse e Link Ufficiali",
            "rec-h1": "Risorse Ufficiali",
            "rec-desc": "Elenco verificato dell'amministrazione svizzera e dei portali principali per gli espatriati.",
            "rec-ch-p": "Il portale nazionale svizzero amministrato in 5 lingue.",
            "rec-ch-link": "Visita ch.ch &rarr;",
            "rec-sem-p": "Segreteria di Stato della migrazione. Direttive federali sui permessi e la naturalizzazione.",
            "rec-sem-link": "Visita SEM &rarr;",
            "rec-comp-p": "Piattaforma per confrontare i premi dell'assicurazione malattie cantone per cantone.",
            "rec-comp-link": "Visita Comparis &rarr;",
            "rec-canton-title": "Il sito del tuo Cantone",
            "rec-canton-p": "Il tuo cantone gestisce la riscossione delle tasse, la disoccupazione e il rilascio dei permessi. Es. ti.ch (Ticino).",
            "rec-canton-links-link": "Vedi link dei cantoni →",
            "rec-consulates-title": "Consolati spagnoli in Svizzera",
            "rec-consulates-desc": "Indirizzi e numeri di telefono dei tre consolati generali (Ginevra, Berna, Zurigo).",
            "rec-official-portal": "Sito ufficiale →",
            "com-nav": "Comunità",
            "com-h1": "Da un gruppo di aiuto a questa piattaforma di conoscenza.",
            "com-desc": "Il nostro sito estrae la vera conoscenza e i problemi più ricorrenti dalla nostra comunità di Facebook.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> è nato come gruppo privato per fornire risposte affidabili.",
            "com-p2": "Oggi siamo migliaia di membri che mettono in guardia contro le truffe sugli affitti.",
            "com-li1": "Risoluzione rapida di dubbi sui permessi e LAMal.",
            "com-li2": "Offerte di alloggi in trasferimento diretto (senza agenzia).",
            "com-li3": "Rete e raccomandazione di professionisti.",
            "com-team-title": "Team della comunità",
            "com-team-admins": "Amministratori",
            "com-team-moderators": "Moderatori",
            "com-team-note": "e voi che partecipate attivamente al gruppo con i vostri contributi quotidiani.",
            "com-btn": "Richiedi l'accesso al gruppo",
            "cont-title": "Contatto",
            "cont-h1": "Contatta il team editoriale",
            "cont-desc": "Hai un suggerimento o vuoi collaborare?",
            "cont-lbl-name": "Il tuo Nome",
            "cont-lbl-email": "La tua E-mail",
            "cont-lbl-msg": "Messaggio",
            "cont-btn": "Inviare un messaggio",
            "cont-success": "Grazie! Il tuo messaggio è stato inviato.",
            "cont-error": "Si è verificato un errore. Per favore, riprova."
        }
    };

    const uiOverrides = {
        es: {
            "home-sr-title": "Espanoles en Suiza: guia practica para vivir y trabajar",
            "home-sr-desc": "Informacion clara, oficial y estructurada sobre permisos, trabajo, vivienda, seguros y vida diaria en Suiza.",
            "nav-articulos": "Artículos",
            "nav-cultura": "Cultura y Eventos",
            "cat-cultura-eventos": "Cultura y Eventos",
            "cat-desc-cultura-eventos": "Tradiciones suizas, eventos culturales, fiestas locales, historia y sociedad. Todo lo que enriquece tu vida social e integración en Suiza.",
            "home-banner-alt": "Espanoles en Suiza que realmente se ayudan",
            "home-hero-group-cta": "Solicitar acceso a la comunidad",
            "home-hero-whatsapp": "Grupo WhatsApp",
            "scam-warning-title": "Atención a las estafas en Suiza",
            "scam-warning-p1": "En Suiza nadie te pedirá dinero por adelantado para darte un trabajo o un alojamiento.",
            "scam-warning-p2": "En esta página nunca se pide dinero, ni se intermedia en pagos entre particulares.",
            "scam-warning-p3": "Si alguien te solicita un pago previo, es muy probable que se trate de una estafa.",
            "scam-warning-list-title": "Las ofertas legítimas:",
            "scam-warning-li1": "no exigen pagos iniciales",
            "scam-warning-li2": "se formalizan mediante contrato",
            "scam-warning-li3": "utilizan canales verificables",
            "scam-warning-p4": "Si tienes dudas, consulta fuentes oficiales o pregunta en la comunidad antes de tomar cualquier decisión.",
            "scam-warning-understood": "Entendido",
            "scam-warning-more": "Más información",
            "scam-warning-close": "Cerrar aviso",
            "home-title-situation": "Empieza según tu situación",
            "home-situation-no-job": "Llegas sin trabajo",
            "home-situation-no-job-desc": "Residencia, margen legal y plan de búsqueda.",
            "home-situation-with-contract": "Ya tienes contrato",
            "home-situation-with-contract-desc": "Registro, permiso y primeros trámites.",
            "home-situation-settled": "Ya vives en Suiza",
            "home-situation-settled-desc": "Entiende impuestos, seguros y vida diaria.",
            "home-title-latest": "Últimos artículos",
            "home-desc-latest": "Las 4 publicaciones más recientes del archivo editorial y comunitario.",
            "home-latest-view-all": "Ver todos los artículos",
            "home-tax-topic-label": "Quellensteuer",
            "home-consulate-geneva": "Consulado de Ginebra",
            "home-consulate-bern": "Consulado de Berna",
            "home-consulate-zurich": "Consulado de Zúrich",
            "home-consulate-geneva-details": "Avenue Blanc 53, 1202 Ginebra · +41 22 749 14 60",
            "home-consulate-bern-details": "Marienstrasse 12, 3005 Berna · +41 31 356 22 20",
            "home-consulate-zurich-details": "Riedtlistrasse 17, 8006 Zúrich · +41 44 368 61 00",
            "home-hero-tagline": "Tu guía de referencia para vivir y trabajar en Suiza",
            "home-hero-sub": "Información práctica, verificada y directamente explotable sobre permisos, trabajo, vivienda, fiscalidad y vida diaria.",
            "home-health-official-links": "Enlaces oficiales útiles:",
            "home-health-priminfo-label": "Priminfo (calculadora oficial de primas)",
            "home-tax-cantonal-warning-title": "Aviso cantonal:",
            "home-tax-cantonal-warning-body": "Las tasas impositivas varían radicalmente no solo de un cantón a otro, sino de un municipio (comuna) a otro, separados por apenas unos kilómetros.",
            "lbl-guide": "Guía",
            "lbl-guides": "Guías",
            "lbl-section": "la sección",
            "lbl-back-top-aria": "Volver arriba",
            "cont-sending": "Enviando...",
            "i18n-missing-title": "Este contenido no está disponible en este idioma todavía.",
            "i18n-missing-desc": "Estamos trabajando en la traducción. Mientras tanto, puedes leer la versión original en español.",
            "i18n-missing-btn-es": "Leer en español",
            "i18n-missing-btn-back": "Volver a la sección",
            "i18n-missing-original-title": "Título original:"
        },
        en: {
            "home-sr-title": "Spaniards in Switzerland: practical guide to live and work",
            "home-sr-desc": "Clear, official and structured information on permits, work, housing, insurance and daily life in Switzerland.",
            "nav-articulos": "Articles",
            "nav-cultura": "Culture & Events",
            "cat-cultura-eventos": "Culture & Events",
            "cat-desc-cultura-eventos": "Swiss traditions, cultural events, local festivals, history and society. Everything that enriches your social life and integration in Switzerland.",
            "home-banner-alt": "Spaniards in Switzerland who really help each other",
            "home-hero-group-cta": "Request access to the community",
            "home-hero-whatsapp": "WhatsApp Group",
            "scam-warning-title": "Beware of scams in Switzerland",
            "scam-warning-p1": "In Switzerland, no one will ask you for money in advance to offer you a job or accommodation.",
            "scam-warning-p2": "This site never asks for money and never intermediates payments between private individuals.",
            "scam-warning-p3": "If someone asks you for an upfront payment, it is very likely a scam.",
            "scam-warning-list-title": "Legitimate offers:",
            "scam-warning-li1": "do not require upfront payments",
            "scam-warning-li2": "are formalised by contract",
            "scam-warning-li3": "use verifiable channels",
            "scam-warning-p4": "If you are unsure, consult official sources or ask the community before making any decision.",
            "scam-warning-understood": "Understood",
            "scam-warning-more": "More information",
            "scam-warning-close": "Close notice",
            "home-title-situation": "Start from your situation",
            "home-situation-no-job": "Arriving without a job",
            "home-situation-no-job-desc": "Residence, legal margin, and a job-search plan.",
            "home-situation-with-contract": "You already have a contract",
            "home-situation-with-contract-desc": "Registration, permit, and first formalities.",
            "home-situation-settled": "You already live in Switzerland",
            "home-situation-settled-desc": "Understand taxes, insurance, and daily life.",
            "home-title-latest": "Latest articles",
            "home-desc-latest": "The 4 most recent posts from the editorial and community archive.",
            "home-latest-view-all": "View all articles",
            "home-tax-topic-label": "Withholding tax",
            "home-consulate-geneva": "Geneva Consulate",
            "home-consulate-bern": "Bern Consulate",
            "home-consulate-zurich": "Zurich Consulate",
            "home-consulate-geneva-details": "Avenue Blanc 53, 1202 Geneva · +41 22 749 14 60",
            "home-consulate-bern-details": "Marienstrasse 12, 3005 Bern · +41 31 356 22 20",
            "home-consulate-zurich-details": "Riedtlistrasse 17, 8006 Zurich · +41 44 368 61 00",
            "home-hero-tagline": "Your reference guide for living and working in Switzerland",
            "home-hero-sub": "Practical, verified, and directly useful information on permits, work, housing, taxes, and daily life.",
            "home-health-official-links": "Useful official links:",
            "home-health-priminfo-label": "Priminfo (official premium calculator)",
            "home-tax-cantonal-warning-title": "Cantonal notice:",
            "home-tax-cantonal-warning-body": "Tax rates vary sharply not only between cantons, but also between municipalities (communes) just a few kilometers apart.",
            "lbl-guide": "Guide",
            "lbl-guides": "Guides",
            "lbl-section": "the section",
            "lbl-back-top-aria": "Back to top",
            "cont-sending": "Sending...",
            "i18n-missing-title": "This content isn’t available in this language yet.",
            "i18n-missing-desc": "We’re working on a translation. In the meantime, you can read the Spanish original.",
            "i18n-missing-btn-es": "Read in Spanish",
            "i18n-missing-btn-back": "Back to section",
            "i18n-missing-original-title": "Original title:"
        },
        fr: {
            "home-sr-title": "Espagnols en Suisse : guide pratique pour vivre et travailler",
            "home-sr-desc": "Informations claires, officielles et structurees sur les permis, le travail, le logement, les assurances et la vie quotidienne en Suisse.",
            "nav-articulos": "Articles",
            "nav-cultura": "Culture et Événements",
            "cat-cultura-eventos": "Culture et Événements",
            "cat-desc-cultura-eventos": "Traditions suisses, événements culturels, fêtes locales, histoire et société. Tout ce qui enrichit votre vie sociale et votre intégration en Suisse.",
            "home-banner-alt": "Espagnols en Suisse qui s'entraident vraiment",
            "home-hero-group-cta": "Demander l'accès à la communauté",
            "home-hero-whatsapp": "Groupe WhatsApp",
            "scam-warning-title": "Attention aux arnaques en Suisse",
            "scam-warning-p1": "En Suisse, personne ne vous demandera d'argent à l'avance pour vous proposer un emploi ou un logement.",
            "scam-warning-p2": "Sur ce site, aucun paiement n'est demandé et aucun intermédiaire n'intervient dans les paiements entre particuliers.",
            "scam-warning-p3": "Si quelqu'un vous demande un paiement préalable, il s'agit très probablement d'une arnaque.",
            "scam-warning-list-title": "Les offres légitimes :",
            "scam-warning-li1": "n'exigent pas de paiement initial",
            "scam-warning-li2": "sont formalisées par contrat",
            "scam-warning-li3": "utilisent des canaux vérifiables",
            "scam-warning-p4": "En cas de doute, consultez des sources officielles ou posez la question dans la communauté avant de prendre une décision.",
            "scam-warning-understood": "Compris",
            "scam-warning-more": "Plus d'informations",
            "scam-warning-close": "Fermer l'avis",
            "home-title-situation": "Commencez selon votre situation",
            "home-situation-no-job": "Vous arrivez sans emploi",
            "home-situation-no-job-desc": "Résidence, marge légale et plan de recherche.",
            "home-situation-with-contract": "Vous avez déjà un contrat",
            "home-situation-with-contract-desc": "Inscription, permis et premières démarches.",
            "home-situation-settled": "Vous vivez déjà en Suisse",
            "home-situation-settled-desc": "Comprenez impôts, assurances et vie quotidienne.",
            "home-title-latest": "Derniers articles",
            "home-desc-latest": "Les 4 publications les plus récentes de l’archive éditoriale et communautaire.",
            "home-latest-view-all": "Voir tous les articles",
            "home-tax-topic-label": "Impot a la source",
            "home-consulate-geneva": "Consulat de Geneve",
            "home-consulate-bern": "Consulat de Berne",
            "home-consulate-zurich": "Consulat de Zurich",
            "home-consulate-geneva-details": "Avenue Blanc 53, 1202 Geneve · +41 22 749 14 60",
            "home-consulate-bern-details": "Marienstrasse 12, 3005 Berne · +41 31 356 22 20",
            "home-consulate-zurich-details": "Riedtlistrasse 17, 8006 Zurich · +41 44 368 61 00",
            "home-hero-tagline": "Votre guide de référence pour vivre et travailler en Suisse",
            "home-hero-sub": "Informations pratiques, vérifiées et directement exploitables sur les permis, le travail, le logement, la fiscalité et la vie quotidienne.",
            "home-health-official-links": "Liens officiels utiles :",
            "home-health-priminfo-label": "Priminfo (calculateur officiel des primes)",
            "home-tax-cantonal-warning-title": "Avis cantonal :",
            "home-tax-cantonal-warning-body": "Les taux d'imposition varient fortement non seulement d'un canton a l'autre, mais aussi d'une commune a l'autre, parfois a quelques kilometres de distance.",
            "lbl-guide": "Guide",
            "lbl-guides": "Guides",
            "lbl-section": "la section",
            "lbl-back-top-aria": "Retour en haut",
            "cont-sending": "Envoi...",
            "i18n-missing-title": "Ce contenu n’est pas encore disponible dans cette langue.",
            "i18n-missing-desc": "La traduction est en cours. En attendant, vous pouvez lire la version originale en espagnol.",
            "i18n-missing-btn-es": "Lire en espagnol",
            "i18n-missing-btn-back": "Retour à la section",
            "i18n-missing-original-title": "Titre original :"
        },
        de: {
            "home-sr-title": "Spanier in der Schweiz: praktischer Leitfaden fur Leben und Arbeit",
            "home-sr-desc": "Klare, offizielle und strukturierte Informationen zu Bewilligungen, Arbeit, Wohnen, Versicherungen und Alltag in der Schweiz.",
            "nav-articulos": "Artikel",
            "nav-cultura": "Kultur & Veranstaltungen",
            "cat-cultura-eventos": "Kultur & Veranstaltungen",
            "cat-desc-cultura-eventos": "Schweizer Traditionen, Kulturveranstaltungen, lokale Feste, Geschichte und Gesellschaft. Alles, was Ihr Sozialleben und Ihre Integration in der Schweiz bereichert.",
            "home-banner-alt": "Spanier in der Schweiz, die sich wirklich gegenseitig helfen",
            "home-hero-group-cta": "Zugang zur Community anfragen",
            "home-hero-whatsapp": "WhatsApp Gruppe",
            "scam-warning-title": "Achtung vor Betrug in der Schweiz",
            "scam-warning-p1": "In der Schweiz wird niemand von dir im Voraus Geld verlangen, um dir eine Arbeit oder eine Unterkunft zu verschaffen.",
            "scam-warning-p2": "Auf dieser Seite wird niemals Geld verlangt, und es werden keine Zahlungen zwischen Privatpersonen vermittelt.",
            "scam-warning-p3": "Wenn jemand eine Vorauszahlung verlangt, handelt es sich sehr wahrscheinlich um Betrug.",
            "scam-warning-list-title": "Seriöse Angebote:",
            "scam-warning-li1": "verlangen keine Vorauszahlungen",
            "scam-warning-li2": "werden per Vertrag formalisiert",
            "scam-warning-li3": "nutzen überprüfbare Kanäle",
            "scam-warning-p4": "Wenn du Zweifel hast, nutze offizielle Quellen oder frage zuerst in der Community nach, bevor du eine Entscheidung triffst.",
            "scam-warning-understood": "Verstanden",
            "scam-warning-more": "Mehr Informationen",
            "scam-warning-close": "Hinweis schließen",
            "home-title-situation": "Start je nach Situation",
            "home-situation-no-job": "Sie kommen ohne Job an",
            "home-situation-no-job-desc": "Aufenthalt, rechtlicher Rahmen und Jobsuche.",
            "home-situation-with-contract": "Sie haben bereits einen Vertrag",
            "home-situation-with-contract-desc": "Anmeldung, Bewilligung und erste Schritte.",
            "home-situation-settled": "Sie leben schon in der Schweiz",
            "home-situation-settled-desc": "Verstehen Sie Steuern, Versicherungen und Alltag.",
            "home-title-latest": "Neueste Artikel",
            "home-desc-latest": "Die 4 neuesten Beiträge aus dem redaktionellen und Community-Archiv.",
            "home-latest-view-all": "Alle Artikel ansehen",
            "home-tax-topic-label": "Quellensteuer",
            "home-consulate-geneva": "Konsulat Genf",
            "home-consulate-bern": "Konsulat Bern",
            "home-consulate-zurich": "Konsulat Zurich",
            "home-consulate-geneva-details": "Avenue Blanc 53, 1202 Genf · +41 22 749 14 60",
            "home-consulate-bern-details": "Marienstrasse 12, 3005 Bern · +41 31 356 22 20",
            "home-consulate-zurich-details": "Riedtlistrasse 17, 8006 Zürich · +41 44 368 61 00",
            "home-hero-tagline": "Ihr Referenzleitfaden für das Leben und Arbeiten in der Schweiz",
            "home-hero-sub": "Praktische, verifizierte und direkt nutzbare Informationen zu Bewilligungen, Arbeit, Wohnen, Steuern und Alltag.",
            "home-health-official-links": "Nutzliche offizielle Links:",
            "home-health-priminfo-label": "Priminfo (offizieller Pramienrechner)",
            "home-tax-cantonal-warning-title": "Kantonaler Hinweis:",
            "home-tax-cantonal-warning-body": "Die Steuersatze unterscheiden sich nicht nur zwischen den Kantonen stark, sondern auch zwischen Gemeinden, die nur wenige Kilometer voneinander entfernt sind.",
            "lbl-guide": "Leitfaden",
            "lbl-guides": "Leitfaden",
            "lbl-section": "dem Bereich",
            "lbl-back-top-aria": "Nach oben",
            "cont-sending": "Wird gesendet...",
            "i18n-missing-title": "Dieser Inhalt ist in dieser Sprache noch nicht verfügbar.",
            "i18n-missing-desc": "Die Übersetzung ist in Arbeit. In der Zwischenzeit können Sie die spanische Originalversion lesen.",
            "i18n-missing-btn-es": "Auf Spanisch lesen",
            "i18n-missing-btn-back": "Zurück zur Rubrik",
            "i18n-missing-original-title": "Originaltitel:"
        },
        it: {
            "home-sr-title": "Spagnoli in Svizzera: guida pratica per vivere e lavorare",
            "home-sr-desc": "Informazioni chiare, ufficiali e strutturate su permessi, lavoro, alloggio, assicurazioni e vita quotidiana in Svizzera.",
            "nav-articulos": "Articoli",
            "nav-cultura": "Cultura ed Eventi",
            "cat-cultura-eventos": "Cultura ed Eventi",
            "cat-desc-cultura-eventos": "Tradizioni svizzere, eventi culturali, feste locali, storia e società. Tutto ciò che arricchisce la tua vita sociale e la tua integrazione in Svizzera.",
            "home-banner-alt": "Spagnoli in Svizzera che si aiutano davvero",
            "home-hero-group-cta": "Richiedi accesso alla community",
            "home-hero-whatsapp": "Gruppo WhatsApp",
            "scam-warning-title": "Attenzione alle truffe in Svizzera",
            "scam-warning-p1": "In Svizzera nessuno ti chiederà denaro in anticipo per offrirti un lavoro o un alloggio.",
            "scam-warning-p2": "In questo sito non viene mai richiesto denaro e non si intermediano pagamenti tra privati.",
            "scam-warning-p3": "Se qualcuno ti chiede un pagamento anticipato, è molto probabile che si tratti di una truffa.",
            "scam-warning-list-title": "Le offerte legittime:",
            "scam-warning-li1": "non richiedono pagamenti iniziali",
            "scam-warning-li2": "vengono formalizzate tramite contratto",
            "scam-warning-li3": "usano canali verificabili",
            "scam-warning-p4": "Se hai dubbi, consulta fonti ufficiali o chiedi nella community prima di prendere qualsiasi decisione.",
            "scam-warning-understood": "Capito",
            "scam-warning-more": "Maggiori informazioni",
            "scam-warning-close": "Chiudi avviso",
            "home-title-situation": "Inizia dalla tua situazione",
            "home-situation-no-job": "Arrivi senza lavoro",
            "home-situation-no-job-desc": "Residenza, margine legale e piano di ricerca.",
            "home-situation-with-contract": "Hai già un contratto",
            "home-situation-with-contract-desc": "Registrazione, permesso e prime pratiche.",
            "home-situation-settled": "Vivi già in Svizzera",
            "home-situation-settled-desc": "Capisci tasse, assicurazioni e vita quotidiana.",
            "home-title-latest": "Ultimi articoli",
            "home-desc-latest": "I 4 contenuti più recenti dall’archivio editoriale e della community.",
            "home-latest-view-all": "Vedi tutti gli articoli",
            "home-tax-topic-label": "Imposta alla fonte",
            "home-consulate-geneva": "Consolato di Ginevra",
            "home-consulate-bern": "Consolato di Berna",
            "home-consulate-zurich": "Consolato di Zurigo",
            "home-consulate-geneva-details": "Avenue Blanc 53, 1202 Ginevra · +41 22 749 14 60",
            "home-consulate-bern-details": "Marienstrasse 12, 3005 Berna · +41 31 356 22 20",
            "home-consulate-zurich-details": "Riedtlistrasse 17, 8006 Zurigo · +41 44 368 61 00",
            "home-hero-tagline": "La vostra guida di riferimento per vivere e lavorare in Svizzera",
            "home-hero-sub": "Informazioni pratiche, verificate e direttamente utilizzabili su permessi, lavoro, alloggio, tasse e vita quotidiana.",
            "home-health-official-links": "Link ufficiali utili:",
            "home-health-priminfo-label": "Priminfo (calcolatore ufficiale dei premi)",
            "home-tax-cantonal-warning-title": "Avviso cantonale:",
            "home-tax-cantonal-warning-body": "Le aliquote fiscali variano molto non solo da un cantone all'altro, ma anche da un comune all'altro, spesso a pochi chilometri di distanza.",
            "lbl-guide": "Guida",
            "lbl-guides": "Guide",
            "lbl-section": "la sezione",
            "lbl-back-top-aria": "Torna su",
            "cont-sending": "Invio in corso...",
            "i18n-missing-title": "Questo contenuto non è ancora disponibile in questa lingua.",
            "i18n-missing-desc": "Stiamo lavorando alla traduzione. Nel frattempo puoi leggere la versione originale in spagnolo.",
            "i18n-missing-btn-es": "Leggi in spagnolo",
            "i18n-missing-btn-back": "Torna alla sezione",
            "i18n-missing-original-title": "Titolo originale:"
        }
    };

    Object.keys(uiOverrides).forEach((lang) => {
        if (window.siteContent.ui[lang]) {
            Object.assign(window.siteContent.ui[lang], uiOverrides[lang]);
        }
    });

    let currentLang = localStorage.getItem("lang") || "es";

    function parseArticleDateParts(dateValue) {
        const raw = String(dateValue || "").trim();
        if (!raw) return null;

        const isoMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)?$/);
        if (isoMatch) {
            return {
                year: Number(isoMatch[1]),
                month: Number(isoMatch[2]) - 1,
                day: Number(isoMatch[3]),
                hour: Number(isoMatch[4] || 0),
                minute: Number(isoMatch[5] || 0),
                second: Number(isoMatch[6] || 0),
                hasTime: Boolean(isoMatch[4]),
            };
        }

        const normalized = raw
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[.,]/g, " ");

        const monthMap = {
            ene: 0, enero: 0, jan: 0, january: 0, janvier: 0, januar: 0, gennaio: 0, gen: 0,
            feb: 1, febrero: 1, february: 1, fevrier: 1, fevr: 1, februar: 1, febbraio: 1,
            mar: 2, marzo: 2, march: 2, mars: 2, marz: 2, maerz: 2,
            abr: 3, abril: 3, apr: 3, april: 3, avr: 3, avril: 3,
            may: 4, mayo: 4, mai: 4, maggio: 4, mag: 4,
            jun: 5, junio: 5, june: 5, juin: 5, juni: 5, giugno: 5, giu: 5,
            jul: 6, julio: 6, july: 6, juil: 6, juillet: 6, juli: 6, luglio: 6, lug: 6,
            ago: 7, agosto: 7, aug: 7, august: 7, aout: 7,
            sep: 8, sept: 8, septiembre: 8, september: 8, septembre: 8, settembre: 8, set: 8,
            oct: 9, octubre: 9, october: 9, octobre: 9, oktober: 9, ott: 9, ottobre: 9, okt: 9,
            nov: 10, noviembre: 10, november: 10, novembre: 10,
            dec: 11, dic: 11, diciembre: 11, december: 11, decembre: 11, dez: 11, dezember: 11
        };

        const tokens = normalized.match(/[a-z]+|\d+/g) || [];
        const numbers = [];
        let month = -1;
        let hasAmPm = false;
        let meridiem = "";

        tokens.forEach(token => {
            if (/^\d+$/.test(token)) {
                numbers.push(Number(token));
                return;
            }
            if ((token === "am" || token === "pm") && !hasAmPm) {
                hasAmPm = true;
                meridiem = token;
                return;
            }
            if (month === -1 && Object.prototype.hasOwnProperty.call(monthMap, token)) {
                month = monthMap[token];
            }
        });

        let year = 0;
        let day = 1;
        let hour = 0;
        let minute = 0;
        let second = 0;

        if (/^\d{4}/.test(raw) && numbers.length >= 3) {
            year = numbers[0];
            month = month >= 0 ? month : Math.max(0, Math.min(11, numbers[1] - 1));
            day = numbers[2];
            hour = Number(numbers[3] || 0);
            minute = Number(numbers[4] || 0);
            second = Number(numbers[5] || 0);
        } else {
            const yearMatch = normalized.match(/\b(19|20)\d{2}\b/);
            year = yearMatch ? Number(yearMatch[0]) : 0;
            if (!year) return null;

            const yearIndex = numbers.lastIndexOf(year);
            if (yearIndex > 0) {
                const maybeDay = numbers.slice(0, yearIndex).find(n => n >= 1 && n <= 31);
                if (maybeDay) day = maybeDay;
            }

            hour = Number(numbers[yearIndex + 1] || 0);
            minute = Number(numbers[yearIndex + 2] || 0);
            second = Number(numbers[yearIndex + 3] || 0);
        }

        if (hasAmPm) {
            if (meridiem === "pm" && hour < 12) hour += 12;
            if (meridiem === "am" && hour === 12) hour = 0;
        }

        return {
            year,
            month: month >= 0 ? month : 0,
            day,
            hour,
            minute,
            second,
            hasTime: hour > 0 || minute > 0 || second > 0,
        };
    }

    function parseArticleTimestamp(dateValue) {
        const parts = parseArticleDateParts(dateValue);
        if (!parts) return 0;
        return Date.UTC(parts.year, parts.month, parts.day, parts.hour, parts.minute, parts.second);
    }

    function formatArticleDate(dateValue, lang, opts = {}) {
        const parts = parseArticleDateParts(dateValue);
        if (!parts) return String(dateValue || "").trim();

        const localeMap = {
            es: "es-ES",
            en: "en-US",
            fr: "fr-FR",
            de: "de-DE",
            it: "it-IT",
        };

        const formatterOptions = opts.includeTime
            ? { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "UTC" }
            : { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" };

        const date = new Date(Date.UTC(parts.year, parts.month, parts.day, parts.hour, parts.minute, parts.second));
        return new Intl.DateTimeFormat(localeMap[lang] || localeMap.es, formatterOptions).format(date);
    }
    document.documentElement.lang = currentLang;
    const SCAM_WARNING_TIMESTAMP_KEY = "fraudWarningLastShown";
    const SCAM_WARNING_TTL_MS = 10 * 24 * 60 * 60 * 1000;
    let scamWarningModal = null;
    let activeHomeSearchCleanup = null;

    function applyLanguage(lang) {
        if (!lang || !window.siteContent[lang]) return false;
        if (currentLang === lang) return true;

        currentLang = lang;
        localStorage.setItem("lang", lang);
        document.documentElement.lang = currentLang;
        updateUITexts();
        updateScamWarningModalContent();

        // Update active state + display
        const currentLangDisplay = document.getElementById("current-lang-display");
        langBtns.forEach(b => b.classList.remove("active"));
        langBtns.forEach(b => {
            if (b.getAttribute("data-lang") === currentLang) b.classList.add("active");
        });
        if (currentLangDisplay) currentLangDisplay.textContent = currentLang.toUpperCase();

        return true;
    }

    function setLanguage(lang) {
        if (!window.siteContent[lang]) {
            alert("This language is not yet available.");
            return;
        }
        applyLanguage(lang);
        renderRoute();
    }
    window.setLanguage = setLanguage;

    function updateUITexts() {
        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (ui[key]) {
                el.innerHTML = ui[key];
            }
        });

        // Update Search input placeholder
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.placeholder = ui['search-placeholder'];
        }
    }

    function getScamWarningGuideHref() {
        const localizedArticles = window.siteContent[currentLang] && window.siteContent[currentLang].articles;
        const fallbackArticles = window.siteContent.es && window.siteContent.es.articles;
        const article = (localizedArticles && localizedArticles["fb-fraudes-inmigrantes-suiza"])
            || (fallbackArticles && fallbackArticles["fb-fraudes-inmigrantes-suiza"]);
        return (article && article.slug) ? `#/${article.slug}` : "#/fraudes-inmigrantes-suiza";
    }

    function markScamWarningSeen() {
        try {
            localStorage.setItem(SCAM_WARNING_TIMESTAMP_KEY, String(Date.now()));
        } catch (error) {
            // localStorage can fail in private modes; ignore and continue.
        }
    }

    function shouldShowScamWarning() {
        try {
            const seenAt = Number(localStorage.getItem(SCAM_WARNING_TIMESTAMP_KEY));
            if (!Number.isFinite(seenAt)) return true;
            return (Date.now() - seenAt) >= SCAM_WARNING_TTL_MS;
        } catch (error) {
            return true;
        }
    }

    function closeScamWarningModal(markSeen = false) {
        if (!scamWarningModal) return;
        if (markSeen) markScamWarningSeen();
        scamWarningModal.classList.remove("is-visible");
        scamWarningModal.setAttribute("aria-hidden", "true");
    }

    function updateScamWarningModalContent() {
        if (!scamWarningModal) return;
        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        const setText = (selector, value) => {
            const node = scamWarningModal.querySelector(selector);
            if (node) node.textContent = value || "";
        };

        setText("[data-scam-title]", ui["scam-warning-title"]);
        setText("[data-scam-p1]", ui["scam-warning-p1"]);
        setText("[data-scam-p2]", ui["scam-warning-p2"]);
        setText("[data-scam-p3]", ui["scam-warning-p3"]);
        setText("[data-scam-list-title]", ui["scam-warning-list-title"]);
        setText("[data-scam-li1]", ui["scam-warning-li1"]);
        setText("[data-scam-li2]", ui["scam-warning-li2"]);
        setText("[data-scam-li3]", ui["scam-warning-li3"]);
        setText("[data-scam-p4]", ui["scam-warning-p4"]);
        setText("[data-scam-understood]", ui["scam-warning-understood"]);
        setText("[data-scam-more]", ui["scam-warning-more"]);
        const closeBtn = scamWarningModal.querySelector("[data-scam-close]");
        if (closeBtn) closeBtn.setAttribute("aria-label", ui["scam-warning-close"] || "Close notice");
        const moreLink = scamWarningModal.querySelector("[data-scam-more]");
        if (moreLink) moreLink.setAttribute("href", getScamWarningGuideHref());
    }

    function ensureScamWarningModal() {
        if (scamWarningModal) return scamWarningModal;

        const overlay = document.createElement("div");
        overlay.className = "scam-warning-modal";
        overlay.setAttribute("aria-hidden", "true");
        overlay.innerHTML = `
            <div class="scam-warning-dialog" role="dialog" aria-modal="false" aria-labelledby="scam-warning-title">
                <button type="button" class="scam-warning-close" data-scam-close>
                    <span aria-hidden="true">×</span>
                </button>
                <div class="scam-warning-content">
                    <h2 id="scam-warning-title" data-scam-title></h2>
                    <p data-scam-p1></p>
                    <p data-scam-p2></p>
                    <p data-scam-p3></p>
                    <p class="scam-warning-list-title" data-scam-list-title></p>
                    <ul class="scam-warning-list">
                        <li data-scam-li1></li>
                        <li data-scam-li2></li>
                        <li data-scam-li3></li>
                    </ul>
                    <p data-scam-p4></p>
                </div>
                <div class="scam-warning-actions">
                    <a class="btn btn-secondary" data-scam-more href="#/fraudes-inmigrantes-suiza"></a>
                    <button type="button" class="btn btn-primary" data-scam-understood></button>
                </div>
            </div>
        `;

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) closeScamWarningModal(true);
        });

        const closeBtn = overlay.querySelector("[data-scam-close]");
        const understoodBtn = overlay.querySelector("[data-scam-understood]");
        const moreLink = overlay.querySelector("[data-scam-more]");

        if (closeBtn) closeBtn.addEventListener("click", () => closeScamWarningModal(true));
        if (understoodBtn) understoodBtn.addEventListener("click", () => closeScamWarningModal(true));
        if (moreLink) moreLink.addEventListener("click", () => closeScamWarningModal(true));

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && scamWarningModal && scamWarningModal.classList.contains("is-visible")) {
                closeScamWarningModal(true);
            }
        });

        document.body.appendChild(overlay);
        scamWarningModal = overlay;
        updateScamWarningModalContent();
        return scamWarningModal;
    }

    function maybeShowScamWarning() {
        if (!shouldShowScamWarning()) return;
        const modal = ensureScamWarningModal();
        modal.classList.add("is-visible");
        modal.setAttribute("aria-hidden", "false");
    }

    // Call it immediately on load
    updateUITexts();

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Reading Progress Tracking
        if (appContainer.querySelector('.article-layout')) {
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (window.scrollY / documentHeight) * 100;
            readingProgressBar.style.width = scrollPercent + "%";
        }

        // Back to top visibility
        const backToTop = document.getElementById('back-to-top-btn');
        if (backToTop) {
            if (shouldShowBackToTopButton()) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    // Mobile Menu
    mobileToggle.addEventListener("click", () => {
        const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
        mobileToggle.setAttribute("aria-expanded", !isExpanded);
        mainNav.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove("open");
                mobileToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    function isCurrentRouteHome() {
        const rawPath = getCurrentPath();
        const { path } = extractLangFromPath(rawPath);
        const normalizedPath = path || "/";
        return normalizedPath === "/" || normalizedPath === "";
    }

    function shouldShowBackToTopButton() {
        const rawPath = getCurrentPath();
        const { path } = extractLangFromPath(rawPath);
        const normalizedPath = path || "/";
        const threshold = normalizedPath === "/articulos" ? 120 : 500;
        return window.scrollY > threshold;
    }

    function scrollHomeToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        document.body.scrollTop = 0;
        if (appContainer) {
            appContainer.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }

    const homeNavLink = document.getElementById("home-nav-link");
    if (homeNavLink) {
        homeNavLink.addEventListener("click", (event) => {
            event.preventDefault();
            if (window.innerWidth <= 768) {
                mainNav.classList.remove("open");
                mobileToggle.setAttribute("aria-expanded", "false");
            }

            if (isCurrentRouteHome()) {
                scrollHomeToTop();
                return;
            }

            window.location.hash = "#/";
            window.setTimeout(scrollHomeToTop, 260);
        });
    }

    // Dropdown Logic
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        let timeoutId;

        const openMenu = () => {
            clearTimeout(timeoutId);
            dropdown.classList.add("open");
            if (toggle) toggle.setAttribute("aria-expanded", "true");
        };

        const closeMenu = () => {
            // Delay closing to allow cursor to bridge any gap
            timeoutId = setTimeout(() => {
                dropdown.classList.remove("open");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            }, 150);
        };

        if (toggle) {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isOpen = dropdown.classList.contains("open");

                // Close other open dropdowns
                document.querySelectorAll(".dropdown.open").forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove("open");
                        const otherToggle = other.querySelector(".dropdown-toggle");
                        if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
                    }
                });

                if (isOpen) {
                    dropdown.classList.remove("open");
                    toggle.setAttribute("aria-expanded", "false");
                } else {
                    openMenu();
                }
            });
        }

        // Desktop hover logic
        dropdown.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                openMenu();
            }
        });

        dropdown.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.open").forEach(dropdown => {
                dropdown.classList.remove("open");
                const toggle = dropdown.querySelector(".dropdown-toggle");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            });
        }
    });

    // Close dropdown with Escape key for accessibility
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".dropdown.open").forEach(dropdown => {
                dropdown.classList.remove("open");
                const toggle = dropdown.querySelector(".dropdown-toggle");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
                if (toggle) toggle.focus();
            });
        }
    });

    // Language switcher
    // Set active button on load and update display
    const currentLangDisplay = document.getElementById("current-lang-display");
    langBtns.forEach(b => {
        if (b.getAttribute("data-lang") === currentLang) {
            b.classList.add("active");
            if (currentLangDisplay) currentLangDisplay.textContent = currentLang.toUpperCase();
        } else {
            b.classList.remove("active");
        }
    });

    langBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const lang = e.target.getAttribute("data-lang");
            setLanguage(lang);

            // Close language dropdown if open
            const dropdown = e.target.closest('.dropdown');
            if (dropdown) dropdown.classList.remove('open');
        });
    });

    /**
     * Animated counter for [data-counter] stat spans.
     * Counts from 0 to data-target over 5 s with ease-out, then appends data-suffix.
     * Triggered once when the element enters the viewport.
     */
    function initCounterAnimations() {
        const counters = appContainer.querySelectorAll('[data-counter]');
        if (!counters.length) return;

        const DURATION = 5000;

        const easeOut = t => 1 - Math.pow(1 - t, 3);

        const animate = (el) => {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            const start = performance.now();

            const tick = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / DURATION, 1);
                const value = Math.round(easeOut(progress) * target);
                el.textContent = value + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        counters.forEach(el => observer.observe(el));
    }

    /**
     * Component Logic Initializer
     */
    function initializeComponents() {
        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];

        if (typeof activeHomeSearchCleanup === "function") {
            activeHomeSearchCleanup();
            activeHomeSearchCleanup = null;
        }

        initCounterAnimations();

        // Accordions
        const accordions = appContainer.querySelectorAll('.accordion-header');
        accordions.forEach(acc => {
            acc.addEventListener('click', function () {
                const parent = this.parentElement;
                parent.classList.toggle('active');
                const content = this.nextElementSibling;
                if (parent.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = "0";
                }
            });
        });

        // Trigger animations on scroll
        const observeElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in');
        if (observeElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            observeElements.forEach(el => observer.observe(el));
        }

        // Back to top button logic
        let backToTop = document.getElementById('back-to-top-btn');
        if (!backToTop) {
            backToTop = document.createElement('button');
            backToTop.id = 'back-to-top-btn';
            backToTop.className = 'back-to-top';
            backToTop.setAttribute('aria-label', ui['lbl-back-top-aria'] || 'Back to top');
            backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
            document.body.appendChild(backToTop);

            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        backToTop.classList.toggle('visible', shouldShowBackToTopButton());

        // Search Logic
        const searchInput = document.getElementById('global-search');
        const sortSelect = document.getElementById('global-search-sort');

        if (searchInput) {
            const displayArea = document.getElementById('search-results');
            const searchContainer = searchInput.closest('.search-container');
            const langArticles = window.siteContent[currentLang].articles || {};
            const canonicalArticles = getCanonicalArticlesForLang(langArticles);
            let isPanelOpen = false;

            const setSearchPanel = (html = '') => {
                if (!displayArea) return;
                displayArea.innerHTML = html;
                isPanelOpen = html.trim().length > 0;
                if (searchContainer) {
                    searchContainer.classList.toggle('is-search-active', isPanelOpen);
                }
            };

            const closeSearchPanel = ({ clearInput = false, blurInput = false } = {}) => {
                if (clearInput) searchInput.value = '';
                setSearchPanel('');
                if (blurInput) searchInput.blur();
            };

            const showSuggestions = (sortMode = 'relevancia') => {
                setSearchPanel(buildHomeSearchSuggestionsHTML({
                    ui,
                    currentLang,
                    articles: canonicalArticles,
                    sortMode
                }));
            };

            const updateSearch = () => {
                const rawTerm = searchInput.value.trim();
                const term = rawTerm.toLowerCase();
                const sortMode = sortSelect ? sortSelect.value : 'relevancia';
                const newsKeywords = ['nuevo', 'nouveau', 'new', 'neu', 'nuovo', 'novedad', 'novedades'];
                const isNewsSearch = newsKeywords.includes(term);
                const searchLabels = getHomeSearchFrequentTerms(currentLang);

                const isSearching = document.activeElement === searchInput || document.activeElement === sortSelect;
                if (!isSearching && !searchInput.value.trim()) {
                    return;
                }

                const filterAudience = document.getElementById('search-filter-audience') ? document.getElementById('search-filter-audience').value : '';

                if (!term) {
                    showSuggestions(sortMode);
                    return;
                }

                let resultsRaw = [];
                if (isNewsSearch) {
                    resultsRaw = canonicalArticles;
                } else {
                    resultsRaw = canonicalArticles.filter(article => {
                        const termMatch = (article.title && article.title.toLowerCase().includes(term)) ||
                            (article.keywords && article.keywords.toLowerCase().includes(term)) ||
                            (article.description && article.description.toLowerCase().includes(term)) ||
                            (article.summary && article.summary.toLowerCase().includes(term));
                        const audienceMatch = filterAudience === '' || article.audience === filterAudience;
                        return termMatch && audienceMatch;
                    });
                }

                const bySlug = new Map();
                for (const a of resultsRaw) {
                    const key = a.slug || a.id;
                    const prev = bySlug.get(key);
                    if (!prev || scoreGuideCandidateForSort(a) > scoreGuideCandidateForSort(prev)) bySlug.set(key, a);
                }

                const results = Array.from(bySlug.values())
                    .sort(getArticleSortComparator(sortMode));

                const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
                if (results.length > 0) {
                    const finalResults = (sortMode === 'recientes' || isNewsSearch) ? results.slice(0, 24) : results.slice(0, 30);
                    setSearchPanel(`
                        <section class="search-panel-section">
                            <h3 class="search-panel-title">${searchLabels.resultsTitle}</h3>
                            <div class="featured-grid" style="margin-top: 1rem;">
                            ${finalResults.map(r => renderCard(r, ui, { compact: true, showBadge: (sortMode === 'recientes' || isNewsSearch) })).join('')}
                            </div>
                        </section>
                    `);
                } else {
                    setSearchPanel(`<p style="margin-top:2rem;">${ui['lbl-no-results']} "${rawTerm}".</p>`);
                }
            };

            const handleSearchPanelClick = (event) => {
                const searchTermBtn = event.target.closest('[data-search-term]');
                if (searchTermBtn) {
                    const nextTerm = searchTermBtn.getAttribute('data-search-term') || '';
                    searchInput.value = nextTerm;
                    searchInput.focus();
                    updateSearch();
                    return;
                }

                const articleLink = event.target.closest('a[href^="#/"]');
                if (articleLink) {
                    closeSearchPanel({ blurInput: true });
                }
            };

            const handleDocumentPointerDown = (event) => {
                if (!searchContainer || !isPanelOpen) return;
                if (!searchContainer.contains(event.target)) {
                    closeSearchPanel({ blurInput: true });
                }
            };

            const handleDocumentKeydown = (event) => {
                if (event.key === "Escape" && isPanelOpen) {
                    closeSearchPanel({ blurInput: true });
                }
            };

            const handleHashChangeClose = () => {
                closeSearchPanel({ blurInput: true });
            };

            const handleSearchFocusOut = (event) => {
                const nextFocus = event.relatedTarget;
                if (searchContainer && nextFocus && searchContainer.contains(nextFocus)) {
                    return;
                }

                window.setTimeout(() => {
                    if (!searchContainer) return;
                    const activeEl = document.activeElement;
                    if (!activeEl || !searchContainer.contains(activeEl)) {
                        closeSearchPanel();
                    }
                }, 0);
            };

            searchInput.addEventListener('focus', updateSearch);
            searchInput.addEventListener('input', updateSearch);
            if (searchContainer) searchContainer.addEventListener('focusout', handleSearchFocusOut);
            if (displayArea) displayArea.addEventListener('click', handleSearchPanelClick);
            if (sortSelect) {
                sortSelect.addEventListener('change', () => {
                    const term = searchInput.value.trim();
                    if (term) {
                        updateSearch();
                    } else {
                        // If no term, keep the homepage "latest articles" block strictly chronological.
                        injectHomepageLatestArticles('recientes');
                    }
                });
            }

            document.addEventListener('pointerdown', handleDocumentPointerDown);
            document.addEventListener('keydown', handleDocumentKeydown);
            window.addEventListener('hashchange', handleHashChangeClose);

            activeHomeSearchCleanup = () => {
                closeSearchPanel();
                searchInput.removeEventListener('focus', updateSearch);
                searchInput.removeEventListener('input', updateSearch);
                if (searchContainer) searchContainer.removeEventListener('focusout', handleSearchFocusOut);
                if (displayArea) displayArea.removeEventListener('click', handleSearchPanelClick);
                document.removeEventListener('pointerdown', handleDocumentPointerDown);
                document.removeEventListener('keydown', handleDocumentKeydown);
                window.removeEventListener('hashchange', handleHashChangeClose);
            };
        }
    }

    // ── Helper: article card with image, hub badge, meta ──────
    const UNTITLED_RE = /^\s*\(?(untitled|sans[\s-]titre|ohne\s+titel|senza\s+titolo|sin\s+t[ií]tulo)\)?\s*$/i;
    const SCROLL_RESTORE_HASHES = new Set(["#/articulos"]);
    const DUPLICATE_TITLE_STOPWORDS = new Set([
        'a', 'al', 'and', 'au', 'aux', 'ce', 'ces', 'con', 'dans', 'de', 'del', 'der', 'des', 'die',
        'el', 'en', 'et', 'for', 'gli', 'i', 'il', 'in', 'la', 'las', 'le', 'les', 'lo', 'los',
        'mais', 'mit', 'nel', 'nella', 'o', 'or', 'par', 'para', 'per', 'por', 'que', 'si', 'su',
        'sur', 'the', 'to', 'un', 'una', 'und', 'y'
    ]);
    let scrollStateFrame = null;

    function hasValidTitle(article) {
        const t = String(article && article.title || '').trim();
        return t.length > 0 && !UNTITLED_RE.test(t);
    }

    function stripMarkdown(str) {
        return String(str || '')
            .replace(/#{1,6}\s*/g, '')
            .replace(/\*\*([^*]*)\*\*/g, '$1')
            .replace(/\*([^*]*)\*/g, '$1')
            .replace(/`([^`]*)`/g, '$1')
            .replace(/\s{2,}/g, ' ')
            .trim();
    }

    function normalizeArticleFingerprintText(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/&nbsp;/g, ' ')
            .replace(/[^a-z0-9]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getArticleSortComparator(sortMode) {
        return (a, b) => {
            if (sortMode === 'recientes') {
                const recA = articleRecencyScore(a);
                const recB = articleRecencyScore(b);
                if (recB.timestamp !== recA.timestamp) return recB.timestamp - recA.timestamp;
                if (recB.fbIndex !== recA.fbIndex) return recB.fbIndex - recA.fbIndex;
                return scoreGuideCandidateForSort(b) - scoreGuideCandidateForSort(a);
            }

            if (sortMode === 'abc') {
                return String(a.title || "").localeCompare(String(b.title || ""), undefined, { sensitivity: "base" });
            }

            const getRank = (art) => {
                const hasImg = !!art.image || !!art.featuredImage;
                const isFb = String(art.id || "").startsWith("fb-") || !!art.facebookUrl;
                const rt = Number(art.readingTime) || 0;
                const contentLen = art.content ? String(art.content).length : 0;
                const isRich = rt >= 5 || contentLen > 3000;
                if (!isFb && hasImg && isRich) return 4;
                if (!isFb && hasImg) return 3;
                if (!isFb) return 2;
                return 1;
            };

            const rankA = getRank(a);
            const rankB = getRank(b);
            if (rankA !== rankB) return rankB - rankA;
            const richA = (Number(a.readingTime) || 0) * 1000 + (a.content ? String(a.content).length : 0);
            const richB = (Number(b.readingTime) || 0) * 1000 + (b.content ? String(b.content).length : 0);
            return richB - richA;
        };
    }

    function scoreGuideCandidateForSort(article) {
        const isFb = String(article && article.id ? article.id : "").startsWith("fb-");
        const readingTime = Number(article && article.readingTime ? article.readingTime : 0) || 0;
        const contentLen = article && article.content ? String(article.content).length : 0;
        return (readingTime * 1000000) + contentLen - (isFb ? 500000 : 0);
    }

    function buildHighConfidenceDuplicateKey(article) {
        if (!article || !hasValidTitle(article)) return '';

        const normalizedImage = String(article.featuredImage || '').trim().toLowerCase();
        const normalizedDate = normalizeArticleFingerprintText(article.dateUpdated);
        const titleStem = normalizeArticleFingerprintText(article.title)
            .split(' ')
            .filter(token => token && token.length > 2 && !DUPLICATE_TITLE_STOPWORDS.has(token))
            .slice(0, 5)
            .join(' ');

        if (!normalizedImage || !normalizedDate || titleStem.split(' ').filter(Boolean).length < 4) return '';
        return `${titleStem}||${normalizedImage}||${normalizedDate}`;
    }

    function getCanonicalArticlesForLang(langArticles) {
        const allRaw = Object.keys(langArticles || {})
            .map(key => ({ id: key, ...langArticles[key] }))
            .filter(article => article && article.slug && hasValidTitle(article));

        const bySlug = new Map();
        for (const article of allRaw) {
            const mapKey = article.slug || article.id;
            const prev = bySlug.get(mapKey);
            if (!prev || scoreGuideCandidateForSort(article) > scoreGuideCandidateForSort(prev)) {
                bySlug.set(mapKey, article);
            }
        }

        const byEditorialFingerprint = new Map();
        for (const article of bySlug.values()) {
            const duplicateKey = buildHighConfidenceDuplicateKey(article);
            const mapKey = duplicateKey ? `dup:${duplicateKey}` : `slug:${article.slug || article.id}`;
            const prev = byEditorialFingerprint.get(mapKey);
            if (!prev || scoreGuideCandidateForSort(article) > scoreGuideCandidateForSort(prev)) {
                byEditorialFingerprint.set(mapKey, article);
            }
        }

        return Array.from(byEditorialFingerprint.values());
    }

    function rememberCurrentRouteScroll() {
        if (typeof history.replaceState !== 'function') return;

        const currentHash = window.location.hash || '#/';
        if (!SCROLL_RESTORE_HASHES.has(currentHash)) return;

        const nextState = {
            ...(history.state || {}),
            __esScrollRoute: currentHash,
            __esScrollY: window.scrollY || window.pageYOffset || 0
        };

        history.replaceState(nextState, '', window.location.href);
    }

    function scheduleCurrentRouteScrollSave() {
        if (scrollStateFrame) return;
        scrollStateFrame = window.requestAnimationFrame(() => {
            scrollStateFrame = null;
            rememberCurrentRouteScroll();
        });
    }

    function getRouteScrollTarget(routeKey, isArticle) {
        const currentHash = window.location.hash || '#/';
        if (isArticle || routeKey !== 'articulos') return 0;
        if (!SCROLL_RESTORE_HASHES.has(currentHash)) return 0;

        const state = history.state || {};
        if (state.__esScrollRoute !== currentHash) return 0;

        const scrollY = Number(state.__esScrollY);
        return Number.isFinite(scrollY) && scrollY > 0 ? scrollY : 0;
    }

    function getHomeSearchFrequentTerms(lang) {
        const labels = {
            es: {
                resultsTitle: "Resultados",
                title: "Busquedas frecuentes",
                terms: ["permiso B", "LAMal", "impuestos", "vivienda", "frontalier", "CV suizo"]
            },
            en: {
                resultsTitle: "Results",
                title: "Popular searches",
                terms: ["permit B", "LAMal", "taxes", "housing", "frontaliers", "Swiss CV"]
            },
            fr: {
                resultsTitle: "Resultats",
                title: "Recherches frequentes",
                terms: ["permis B", "LAMal", "impots", "logement", "frontalier", "CV suisse"]
            },
            de: {
                resultsTitle: "Ergebnisse",
                title: "Haufige Suchen",
                terms: ["Bewilligung B", "LAMal", "Steuern", "Wohnen", "Grenzganger", "Schweizer CV"]
            },
            it: {
                resultsTitle: "Risultati",
                title: "Ricerche frequenti",
                terms: ["permesso B", "LAMal", "tasse", "alloggio", "frontalier", "CV svizzero"]
            }
        };

        return labels[lang] || labels.es;
    }

    function getHomepageFeaturedArticles(lang = currentLang) {
        const langArticles = window.siteContent[lang] && window.siteContent[lang].articles;
        const esArticles = window.siteContent.es && window.siteContent.es.articles;
        if (!langArticles || !esArticles) return [];

        const featuredSlugs = [
            "tramites-llegada-suiza",
            "seguro-medico-lamal-suiza",
            "alquilar-vivienda-suiza"
        ];

        return featuredSlugs.map(slug => {
            const localMatches = Object.keys(langArticles)
                .filter(k => langArticles[k] && langArticles[k].slug === slug)
                .map(k => ({ id: k, ...langArticles[k] }));
            if (localMatches.length > 0) {
                return localMatches.reduce((best, cur) => (
                    scoreGuideCandidateForSort(cur) > scoreGuideCandidateForSort(best) ? cur : best
                ), localMatches[0]);
            }

            const esKey = Object.keys(esArticles).find(k => esArticles[k] && esArticles[k].slug === slug);
            if (!esKey || !langArticles[esKey]) return null;
            return { id: esKey, ...langArticles[esKey] };
        }).filter(Boolean);
    }

    function buildHomeSearchSuggestionsHTML({ ui, currentLang, articles, sortMode = "recientes" }) {
        const results = [...articles]
            .sort(getArticleSortComparator(sortMode))
            .slice(0, 4);
        
        let sectionTitle = ui['home-title-latest'] || 'Más recientes';
        if (sortMode === 'relevancia') sectionTitle = ui['sort-relevance'] || 'Más relevantes';
        if (sortMode === 'abc') sectionTitle = ui['sort-abc'] || 'Alfabético (A-Z)';

        const featured = getHomepageFeaturedArticles(currentLang);
        const frequent = getHomeSearchFrequentTerms(currentLang);

        return `
            <div class="search-suggestions-panel">
                <section class="search-panel-section">
                    <h3 class="search-panel-title">${sectionTitle}</h3>
                    <div class="featured-grid">
                        ${results.map(article => renderCard(article, ui, { compact: true, showBadge: sortMode === 'recientes' })).join('')}
                    </div>
                </section>
                <section class="search-panel-section">
                    <h3 class="search-panel-title">${ui['home-title-featured']}</h3>
                    <div class="featured-grid">
                        ${featured.map(article => renderCard(article, ui, { compact: true })).join('')}
                    </div>
                </section>
                <section class="search-panel-section">
                    <h3 class="search-panel-title">${frequent.title}</h3>
                    <div class="search-frequent-list">
                        ${frequent.terms.map(term => `<button type="button" class="search-chip" data-search-term="${term}">${term}</button>`).join('')}
                    </div>
                </section>
            </div>
        `;
    }

    function renderCard(r, ui, opts = {}) {
        const hub = r.hub || '';
        const slug = r.slug || ('articulo/' + (r.id || ''));
        const img = r.featuredImage ? r.featuredImage + '?v=1776395259' : null;
        const rt = r.readingTime || 0;
        const date = r.dateUpdated ? formatArticleDate(r.dateUpdated, currentLang) : '';
        const summary = r.summary || r.description || '';
        const compact = opts.compact || false;
        const hubLabels = {
            tramites:         ui['cat-tramites']        || 'Trámites',
            trabajo:          ui['cat-trabajo']         || 'Trabajo',
            vivienda:         ui['cat-vivienda']        || 'Vivienda',
            'vivir-en-suiza': ui['cat-vivir']           || 'Vivir en Suiza',
            vivir:            ui['cat-vivir']           || 'Vivir en Suiza',
            salud:            ui['cat-salud']           || 'Salud',
            impuestos:        ui['cat-impuestos']       || 'Impuestos',
            fronterizos:      ui['cat-fronterizos']     || 'Fronterizos',
            recursos:         ui['nav-recursos']        || 'Recursos',
            'cultura-eventos': ui['cat-cultura-eventos'] || 'Cultura y Eventos',
        };
        const badgeLabel = hubLabels[hub] || (r.category || hub);
        const cleanTitle = stripMarkdown(r.title);
        const showNewBadge = opts.showBadge && isArticleNew(r);
        const thumbHTML = (img && !compact)
            ? `<img class="card-article-thumb" src="${img}" alt="${cleanTitle}" loading="lazy" onerror="this.style.display='none'">`
            : '';
        const footerHTML = (rt || date) ? `
            <div class="card-article-footer">
                ${rt ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${rt} ${ui['lbl-read-time'] || 'min'}</span>` : ''}
                ${date ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${date}</span>` : ''}
            </div>` : '';
        return `
            <a href="#/${slug}" class="card-article${img && !compact ? '' : ' no-image'}">
                ${thumbHTML}
                <div class="card-article-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; flex-wrap:wrap; gap:4px;">
                        <span class="hub-badge" data-hub="${hub}">${badgeLabel}</span>
                        ${showNewBadge ? `<span class="badge-new">${ui['lbl-new'] || 'NUEVO'}</span>` : ''}
                    </div>
                    <h3>${cleanTitle}</h3>
                    ${summary && !compact ? `<p>${summary}</p>` : ''}
                    ${footerHTML}
                </div>
            </a>`;
    }

    function isArticleNew(article, now = Date.now()) {
        const timestamp = parseArticleTimestamp(article && article.dateUpdated);
        if (!timestamp) return false;

        const ageMs = now - timestamp;
        const twoWeeksMs = 14 * 24 * 60 * 60 * 1000;
        return ageMs >= 0 && ageMs <= twoWeeksMs;
    }

    function articleRecencyScore(article) {
        const timestamp = parseArticleTimestamp(article && article.dateUpdated);
        const fbMatch = String(article && article.id ? article.id : "").match(/^fb-(\d+)/i);
        const fbIndex = fbMatch ? Number(fbMatch[1]) : 0;
        return { timestamp, fbIndex };
    }

    function buildFacebookSearchQuery(pageData) {
        const source = pageData && (pageData.title || pageData.description || pageData.summary)
            ? String(pageData.title || pageData.description || pageData.summary)
            : "";
        if (!source) return "";

        const stopWords = new Set([
            "a", "al", "algo", "alguna", "alguno", "algunos", "alguien", "ante", "antes", "aqui", "así",
            "como", "con", "contra", "cual", "cuando", "de", "del", "desde", "donde", "dos",
            "el", "ella", "ellas", "ellos", "en", "entre", "era", "es", "esa", "ese", "eso",
            "esta", "estaba", "estado", "este", "esto", "estos", "fin", "frente", "ha", "hay",
            "hoy", "la", "las", "le", "les", "lo", "los", "mas", "mejor", "menor",
            "mi", "muy", "no", "o", "otra", "otro", "para", "pero", "por", "porque", "puede",
            "puedo", "que", "qué", "quien", "quién", "sabe", "se", "segun", "según", "si",
            "sin", "sobre", "su", "sus", "suiza", "suizo", "suizos", "suizas", "tal", "te",
            "the", "un", "una", "uno", "unos", "y", "ya"
        ]);

        const tokens = source.match(/[A-Za-zÀ-ÿ0-9]+/g) || [];
        const picked = [];
        const seen = new Set();

        for (const token of tokens) {
            const cleaned = token.trim();
            if (!cleaned) continue;

            const normalized = cleaned
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            if (seen.has(normalized)) continue;
            if (stopWords.has(normalized)) continue;
            if (normalized.length < 3 && !/^\d+$/.test(normalized)) continue;

            seen.add(normalized);
            picked.push(cleaned);

            if (picked.length === 4) break;
        }

        return picked.join(" ");
    }

    function resolveFacebookUrl(pageData) {
        const rawUrl = pageData && pageData.facebookUrl ? String(pageData.facebookUrl).trim() : "";
        if (!rawUrl || !pageData || !pageData.isFbSearch) return rawUrl;

        const authorMeFilter = 'eyJycF9hdXRob3I6MCI6IntcIm5hbWVcIjpcImF1dGhvcl9tZVwiLFwiYXJnc1wiOlwiXCJ9In0=';

        try {
            const url = new URL(rawUrl);
            const isFacebookHost = /(^|\.)facebook\.com$/i.test(url.hostname);
            const isGroupSearchPath = /^\/groups\/1560239407529680\/search\/?$/i.test(url.pathname);
            if (!isFacebookHost || !isGroupSearchPath) return rawUrl;

            const conciseQuery = buildFacebookSearchQuery(pageData);
            if (conciseQuery) {
                url.searchParams.set("q", conciseQuery);
            }
            url.searchParams.set("filters", authorMeFilter);
            return url.toString();
        } catch (error) {
            return rawUrl;
        }
    }

    function isArchivedFacebookPlaceholder(article) {
        const content = article && article.content ? String(article.content) : "";
        return content.includes("Nota del archivo:") && content.length < 400;
    }

    function withSpanishContentFallback(pageData, routeKey) {
        if (currentLang === "es" || !pageData || !routeKey) return pageData;

        const esArticles = window.siteContent.es && window.siteContent.es.articles;
        const esArticle = esArticles && esArticles[routeKey];
        if (!esArticle) return pageData;
        if (!isArchivedFacebookPlaceholder(pageData)) return pageData;
        if (isArchivedFacebookPlaceholder(esArticle)) return pageData;

        return {
            ...esArticle,
            ...pageData,
            content: esArticle.content,
            summary: esArticle.summary || pageData.summary,
            readingTime: esArticle.readingTime || pageData.readingTime,
            featuredImage: esArticle.featuredImage || pageData.featuredImage,
            supportingImages: Array.isArray(pageData.supportingImages) && pageData.supportingImages.length
                ? pageData.supportingImages
                : esArticle.supportingImages,
            imageAlt: pageData.imageAlt || esArticle.imageAlt,
        };
    }

    /**
     * Inject Articles into Category Hub Pages
     */
    function injectCategoryArticles(hubKey) {
        const container = document.getElementById("category-articles-container");
        if (!container) return;

        const langData = window.siteContent[currentLang].articles;
        const hubArticles = getCanonicalArticlesForLang(langData)
            .filter(article => article.hub === hubKey)
            .sort(getArticleSortComparator('recientes'));

        const featuredHubArticles = hubArticles
            .slice()
            .sort((a, b) => {
                const scoreDiff = scoreGuideCandidateForSort(b) - scoreGuideCandidateForSort(a);
                if (scoreDiff !== 0) return scoreDiff;
                const recA = articleRecencyScore(a);
                const recB = articleRecencyScore(b);
                if (recB.timestamp !== recA.timestamp) return recB.timestamp - recA.timestamp;
                if (recB.fbIndex !== recA.fbIndex) return recB.fbIndex - recA.fbIndex;
                return String(a.title || "").localeCompare(String(b.title || ""), undefined, { sensitivity: "base" });
            })
            .slice(0, 3);
        const featuredIds = new Set(featuredHubArticles.map(article => article.id));
        const latestPool = hubArticles.filter(article => !featuredIds.has(article.id));
        const latestDefaultCount = 6;
        const hubListLabels = {
            es: {
                showAll: "Ver todos los articulos del hub",
                showLess: "Mostrar solo los ultimos 6"
            },
            en: {
                showAll: "View all hub articles",
                showLess: "Show only the latest 6"
            },
            fr: {
                showAll: "Voir tous les articles du hub",
                showLess: "Afficher seulement les 6 derniers"
            },
            de: {
                showAll: "Alle Artikel des Bereichs anzeigen",
                showLess: "Nur die letzten 6 anzeigen"
            },
            it: {
                showAll: "Vedi tutti gli articoli del hub",
                showLess: "Mostra solo gli ultimi 6"
            }
        };

        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        const hubUi = hubListLabels[currentLang] || hubListLabels.es;

        const renderHubSections = (expanded = false) => {
            const latestHubArticles = expanded ? latestPool : latestPool.slice(0, latestDefaultCount);
            const toggleHTML = latestPool.length > latestDefaultCount
                ? `
                    <div style="margin-top: 1.25rem; text-align: center;">
                        <button type="button" id="hub-latest-toggle" class="btn btn-secondary">
                            ${expanded ? hubUi.showLess : hubUi.showAll}
                        </button>
                    </div>
                `
                : '';

            container.innerHTML = `
                ${featuredHubArticles.length > 0 ? `
                    <div style="margin-bottom: 2.25rem;">
                        <h3 style="margin-bottom: 1rem;">${ui['home-title-featured']}</h3>
                        <div class="featured-grid">
                            ${featuredHubArticles.map(r => renderCard(r, ui)).join('')}
                        </div>
                    </div>
                ` : ''}
                <div>
                    <h3 style="margin-bottom: 1rem;">${ui['home-title-latest'] || ui['sort-recent'] || 'Más recientes'}</h3>
                    <div class="featured-grid">
                        ${latestHubArticles.map(r => renderCard(r, ui)).join('')}
                    </div>
                    ${toggleHTML}
                </div>
            `;
            const toggleBtn = document.getElementById("hub-latest-toggle");
            if (toggleBtn) {
                toggleBtn.addEventListener("click", () => renderHubSections(!expanded));
            }
        };

        if (hubArticles.length > 0) {
            renderHubSections(false);
        } else {
            container.innerHTML = `<p style="color: var(--text-light); margin-top: 2rem;">${ui['lbl-no-articles']}</p>`;
        }
    }

    /**
     * Inject All Articles into the /articulos page
     */
    function injectAllArticles() {
        const container = document.getElementById("all-articles-container");
        const searchInput = document.getElementById("articles-filter-input");
        const sortSelect = document.getElementById("articles-sort-select");
        if (!container) return;

        const langData = window.siteContent[currentLang].articles;
        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        const baseArticles = getCanonicalArticlesForLang(langData);

        function update() {
            const term = searchInput ? searchInput.value.toLowerCase().trim() : "";
            const sortMode = sortSelect ? sortSelect.value : "recientes";

            let filtered = baseArticles.filter(a => {
                if (!term) return true;
                const t = (a.title || "").toLowerCase();
                const c = (a.category || "").toLowerCase();
                const kw = (a.keywords || "").toLowerCase();
                const d = (a.description || "").toLowerCase();
                const s = (a.summary || "").toLowerCase();
                return t.includes(term) || c.includes(term) || kw.includes(term) || d.includes(term) || s.includes(term);
            });

            filtered.sort(getArticleSortComparator(sortMode));

            if (filtered.length > 0) {
                container.innerHTML = filtered.map(r => renderCard(r, ui, { showBadge: sortMode === 'recientes' })).join('');
            } else {
                container.innerHTML = `<p style="color: var(--text-light); margin-top: 2rem;">${ui['lbl-no-results']} "${term}".</p>`;
            }
        }

        if (searchInput) searchInput.addEventListener("input", update);
        if (sortSelect) sortSelect.addEventListener("change", update);

        update();
    }

    /**
     * Inject Featured Guides into the Home page.
     */
    function injectHomepageFeatured() {
        const container = document.getElementById("home-featured-guides-container");
        if (!container) return;

        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        const picked = getHomepageFeaturedArticles(currentLang);

        if (picked.length === 0) return;

        container.innerHTML = `
            <div class="featured-grid">
                ${picked.map(r => renderCard(r, ui)).join('')}
            </div>
        `;
    }

    function injectHomepageLatestArticles(sortMode = "recientes") {
        const container = document.getElementById("home-latest-articles-container");
        if (!container) return;

        const langArticles = window.siteContent[currentLang] && window.siteContent[currentLang].articles;
        if (!langArticles) return;

        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        const latest = getCanonicalArticlesForLang(langArticles)
            .sort(getArticleSortComparator(sortMode))
            .slice(0, 4);

        if (latest.length === 0) {
            container.innerHTML = `<p style="color: var(--text-light); margin-top: 2rem;">${ui['lbl-no-articles']}</p>`;
            return;
        }

        container.innerHTML = `
            <div class="featured-grid">
                ${latest.map(article => renderCard(article, ui, { showBadge: true })).join('')}
            </div>
            <div style="margin-top: 1.25rem; text-align: center;">
                <a href="#/articulos" class="btn btn-secondary">${ui['home-latest-view-all']}</a>
            </div>
        `;
    }

    /**
     * Helper to get the current clean path regardless of routing method (hash or pathname).
     * This prepares the site for a future SEO migration to clean URLs.
     */
    function getCurrentPath() {
        // Priority 1: Current Hash Routing (#/tramites)
        const hash = window.location.hash.substring(1);
        if (hash) return hash;

        // Priority 2: Clean Pathname Support (/tramites)
        const path = window.location.pathname.replace(/\/index\.html$/, "");
        if (path && path !== "/") {
            return path;
        }

        return "/";
    }

    const SUPPORTED_LANG_PREFIXES = ['es', 'en', 'fr', 'de', 'it'];
    const HREFLANG_LANGS = ['es', 'en', 'fr', 'de'];

    function extractLangFromPath(rawPath) {
        const normalized = (rawPath || "").startsWith("/") ? rawPath : `/${rawPath || ""}`;
        const parts = normalized.split("/").filter(Boolean);
        const first = parts[0];
        if (SUPPORTED_LANG_PREFIXES.includes(first)) {
            const rest = "/" + parts.slice(1).join("/");
            return { lang: first, path: (rest === "/" ? "/" : rest) };
        }
        return { lang: null, path: normalized || "/" };
    }

    function langPrefix(lang) {
        return (!lang || lang === "es") ? "" : `/${lang}`;
    }

    function buildCleanPath({ lang, routeKey, isArticle, pageData }) {
        const prefix = langPrefix(lang);
        if (routeKey === "home") return prefix ? `${prefix}/` : "/";
        if (isArticle) {
            if (pageData && pageData.slug) return `${prefix}/${pageData.slug}`;
            return `${prefix}/articulo/${routeKey}`;
        }
        return `${prefix}/${routeKey}`;
    }

    function updateHreflangAlternates({ baseUrl, routeKey, isArticle }) {
        // Remove previous alternates injected by JS
        document.querySelectorAll('link[data-hreflang-generated="1"]').forEach(el => el.remove());

        const head = document.head || document.getElementsByTagName('head')[0];
        if (!head) return;

        const addAlt = (hreflang, href) => {
            const link = document.createElement("link");
            link.setAttribute("rel", "alternate");
            link.setAttribute("hreflang", hreflang);
            link.setAttribute("href", href);
            link.setAttribute("data-hreflang-generated", "1");
            head.appendChild(link);
        };

        let xDefaultHref = `${baseUrl}/`;

        for (const lang of HREFLANG_LANGS) {
            const langData = window.siteContent[lang];
            if (!langData) continue;

            if (isArticle) {
                const article = langData.articles && langData.articles[routeKey];
                if (!article || !article.slug) continue;
                const href = baseUrl + buildCleanPath({ lang, routeKey, isArticle: true, pageData: article });
                addAlt(lang, href);
                if (lang === "es") xDefaultHref = href;
            } else {
                const href = baseUrl + buildCleanPath({ lang, routeKey, isArticle: false, pageData: null });
                addAlt(lang, href);
                if (lang === "es") xDefaultHref = href;
            }
        }

        addAlt("x-default", xDefaultHref);
    }

    function pickArticleImages(pageData, routeKey) {
        const HOMEPAGE_BANNER = "media/banner.jpg";

        const esArticle = (routeKey && window.siteContent && window.siteContent.es && window.siteContent.es.articles)
            ? window.siteContent.es.articles[routeKey]
            : null;

        // Use ES as the canonical source of truth, so all languages share the same article images.
        let hero = (esArticle && esArticle.featuredImage) ? esArticle.featuredImage + '?v=1776395259' : (pageData && pageData.featuredImage ? pageData.featuredImage + '?v=1776395259' : null);

        // Safety Rule: Never use the homepage banner in articles.
        if (hero === HOMEPAGE_BANNER) {
            hero = "media/og-image.jpg";
        }

        // Supporting images: explicit override per article (canonical ES first).
        const hasSupportingOverride = Array.isArray(esArticle && esArticle.supportingImages) || Array.isArray(pageData && pageData.supportingImages);
        let supporting = Array.isArray(esArticle && esArticle.supportingImages)
            ? esArticle.supportingImages
            : (Array.isArray(pageData && pageData.supportingImages) ? pageData.supportingImages : []);

        if (!hasSupportingOverride) supporting = [];

        // Ensure supporting images also follow the exclusivity rule.
        supporting = supporting.filter(src => src !== HOMEPAGE_BANNER);

        return { hero, supporting };
    }

    function renderArticleHeroHTML(pageData, routeKey) {
        const { hero } = pickArticleImages(pageData, routeKey);
        if (!hero) return "";
        const alt = (pageData && (pageData.imageAlt || pageData.title)) || "";
        return `
            <figure class="article-hero">
                <img src="${hero}" alt="${alt}" loading="eager" decoding="async">
            </figure>
        `;
    }

    function removeInlineFontSize(el) {
        const style = el.getAttribute("style");
        if (!style) return;
        const cleaned = style
            .split(";")
            .map(s => s.trim())
            .filter(Boolean)
            .filter(rule => !/^font-size\\s*:/i.test(rule))
            .join("; ");
        if (cleaned) el.setAttribute("style", cleaned);
        else el.removeAttribute("style");
    }

    function normalizeArticleTypography(articleEl) {
        if (!articleEl) return;
        const body = articleEl.querySelector(".article-body") || articleEl;

        body.querySelectorAll(".page-header").forEach(n => n.remove());

        body.querySelectorAll("h1").forEach(h1 => {
            const h2 = document.createElement("h2");
            h2.innerHTML = h1.innerHTML;
            for (const attr of Array.from(h1.attributes || [])) {
                if (attr.name === "style") continue;
                h2.setAttribute(attr.name, attr.value);
            }
            h1.replaceWith(h2);
        });

        body.querySelectorAll("[style]").forEach(el => removeInlineFontSize(el));
    }

    function ensureSupportingImages(articleEl, pageData, routeKey) {
        if (!articleEl) return;
        const contentRoot = articleEl.querySelector(".article-content") || articleEl.querySelector(".article-body") || articleEl;
        const existing = Array.from(contentRoot.querySelectorAll("img")).filter(img => !img.closest(".article-hero"));
        const need = Math.max(0, 2 - existing.length);
        if (need === 0) return;

        const { hero, supporting } = pickArticleImages(pageData, routeKey);
        const heroSrc = (hero || "").trim();
        const existingSrcs = new Set(
            existing
                .map(img => (img.getAttribute("src") || img.src || "").trim())
                .filter(Boolean)
        );

        // Avoid inserting the hero image again as a "supporting" image.
        const supportingDeduped = (supporting || []).filter(src => {
            const normalized = String(src || "").trim();
            if (!normalized) return false;
            if (heroSrc && normalized === heroSrc) return false;
            if (existingSrcs.has(normalized)) return false;
            return true;
        });

        const toInsert = supportingDeduped.slice(0, need);
        if (toInsert.length === 0) return;

        const altBase = (pageData && pageData.title) ? String(pageData.title) : "Switzerland guide";

        const insertionPoints = Array.from(contentRoot.querySelectorAll("h2"));
        const insertAfter = (target, node) => {
            if (!target || !target.parentNode) return contentRoot.appendChild(node);
            if (target.nextSibling) target.parentNode.insertBefore(node, target.nextSibling);
            else target.parentNode.appendChild(node);
        };

        toInsert.forEach((src, idx) => {
            const fig = document.createElement("figure");
            fig.className = "article-figure";
            fig.innerHTML = `<img src="${src}" alt="${altBase} — image ${idx + 1}" loading="lazy" decoding="async">`;
            const anchor = insertionPoints[idx] || insertionPoints[insertionPoints.length - 1] || null;
            insertAfter(anchor, fig);
        });
    }

    function postProcessArticleDOM(articleEl, pageData, routeKey) {
        normalizeArticleTypography(articleEl);
        normalizeArticleSectionHeadings(articleEl);
        ensureOfficialSourcesSection(articleEl, pageData);
        ensureSupportingImages(articleEl, pageData, routeKey);
        enhanceInfoTables(articleEl);
    }

    function enhanceInfoTables(articleEl) {
        if (!articleEl) return;
        const tables = Array.from(articleEl.querySelectorAll("table.info-table"));
        if (tables.length === 0) return;

        const lang = (document.documentElement && document.documentElement.lang) ? document.documentElement.lang : "es";
        const ariaLabelByLang = {
            es: "Tabla comparativa",
            en: "Comparison table",
            fr: "Tableau comparatif",
            de: "Vergleichstabelle",
            it: "Tabella comparativa",
        };
        const ariaLabel = ariaLabelByLang[lang] || ariaLabelByLang.es;

        for (const table of tables) {
            if (table.dataset && table.dataset.enhanced === "1") continue;

            const parent = table.parentElement;
            let wrapper = null;
            if (parent && parent.classList && parent.classList.contains("table-scroll")) {
                wrapper = parent;
            } else {
                wrapper = document.createElement("div");
                wrapper.className = "table-scroll";
                wrapper.setAttribute("role", "region");
                wrapper.setAttribute("tabindex", "0");
                wrapper.setAttribute("aria-label", ariaLabel);

                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }

            // Build mobile cards (smartphone only via CSS media query)
            const headerCells = Array.from(table.querySelectorAll("thead th"));
            const headers = headerCells.map(th => (th.textContent || "").trim()).filter(Boolean);
            const bodyRows = Array.from(table.querySelectorAll("tbody tr"));

            if (headers.length > 0 && bodyRows.length > 0) {
                const cards = document.createElement("div");
                cards.className = "table-cards";
                cards.setAttribute("role", "list");

                for (const row of bodyRows) {
                    const cells = Array.from(row.querySelectorAll("td"));
                    if (cells.length === 0) continue;

                    const card = document.createElement("div");
                    card.className = "table-card";
                    card.setAttribute("role", "listitem");

                    // Use first column as card "title" while keeping the same content (no duplication).
                    const titleCell = cells[0];
                    const titleLabel = headers[0] || "";
                    const titleValueHTML = titleCell ? titleCell.innerHTML : "";

                    const title = document.createElement("div");
                    title.className = "table-card-title";
                    title.innerHTML = `
                        ${titleLabel ? `<div class="table-card-k">${escapeHTML(titleLabel)}</div>` : ``}
                        <div class="table-card-v">${titleValueHTML}</div>
                    `;
                    card.appendChild(title);

                    // Remaining columns as label/value rows
                    for (let i = 1; i < cells.length; i++) {
                        const label = headers[i] || `Col ${i + 1}`;
                        const valueHTML = cells[i].innerHTML;

                        const item = document.createElement("div");
                        item.className = "table-card-item";
                        item.innerHTML = `
                            <div class="table-card-k">${escapeHTML(label)}</div>
                            <div class="table-card-v">${valueHTML}</div>
                        `;
                        card.appendChild(item);
                    }

                    cards.appendChild(card);
                }

                // Insert right after the scroll wrapper, so we can toggle table/cards via CSS.
                if (wrapper.nextSibling) wrapper.parentNode.insertBefore(cards, wrapper.nextSibling);
                else wrapper.parentNode.appendChild(cards);
            }

            if (table.dataset) table.dataset.enhanced = "1";
        }
    }

    function escapeHTML(input) {
        const s = String(input ?? "");
        return s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function normalizeArticleSectionHeadings(articleEl) {
        if (!articleEl) return;
        const contentRoot = articleEl.querySelector(".article-content") || articleEl.querySelector(".article-body") || articleEl;
        const h2s = Array.from(contentRoot.querySelectorAll("h2"));
        if (h2s.length === 0) return;

        const lang = (document.documentElement && document.documentElement.lang) ? document.documentElement.lang : "es";

        const mapByLang = {
            es: new Map([
                ["Contexto en Suiza", "Cómo funciona el sistema"],
                ["Situaciones comunes que generan problemas", "Requisitos y reglas"],
                ["Cómo evitar multas o conflictos", "Consejos prácticos"],
                ["Fuentes", "Fuentes oficiales"],
            ]),
            en: new Map([
                ["Context in Switzerland", "How the system works"],
                ["Common situations that cause problems", "Requirements and rules"],
                ["How to avoid fines or conflicts", "Practical advice"],
                ["Official sources", "Official Swiss sources"],
            ]),
            fr: new Map([
                ["Contexte en Suisse", "Comment le système fonctionne"],
                ["Situations courantes qui créent des problèmes", "Exigences et règles"],
                ["Comment éviter des amendes ou des conflits", "Conseils pratiques"],
                ["Sources officielles", "Sources officielles suisses"],
            ]),
            de: new Map([
                ["Kontext in der Schweiz", "So funktioniert das System"],
                ["Häufige Situationen, die Probleme verursachen", "Voraussetzungen und Regeln"],
                ["Wie Sie Bussen oder Konflikte vermeiden", "Praktische Tipps"],
                ["Offizielle Quellen", "Offizielle Quellen"],
            ]),
        };

        const map = mapByLang[lang] || mapByLang.es;

        for (const h2 of h2s) {
            const raw = (h2.textContent || "").trim();
            const normalized = raw.replace(/\s+/g, " ");
            if (map.has(normalized)) {
                h2.textContent = map.get(normalized);
            }
        }
    }

    function ensureOfficialSourcesSection(articleEl, pageData) {
        if (!articleEl) return;
        const contentRoot = articleEl.querySelector(".article-content") || articleEl.querySelector(".article-body") || articleEl;
        const lang = (document.documentElement && document.documentElement.lang) ? document.documentElement.lang : "es";

        const titles = {
            es: "Fuentes oficiales",
            en: "Official Swiss sources",
            fr: "Sources officielles suisses",
            de: "Offizielle Quellen",
        };

        const existing = Array.from(contentRoot.querySelectorAll("h2")).some(h2 => {
            const t = (h2.textContent || "").trim().toLowerCase();
            return [
                "fuentes oficiales",
                "official swiss sources",
                "official sources",
                "sources officielles suisses",
                "sources officielles",
                "offizielle quellen",
            ].includes(t);
        });
        if (existing) return;

        const hub = pageData && pageData.hub;
        const labelsByLang = {
            es: {
                ch: "ch.ch — Portal oficial suizo",
                sem: "SEM — Secretaría de Estado de Migración",
                arbeit: "arbeit.swiss — Empleo y RAV (SECO)",
                priminfo: "Priminfo — Comparador oficial LAMal/KVG",
                bag: "BAG/OFSP — Oficina Federal de Salud Pública",
                estv: "ESTV/AFC — Administración Federal de Contribuciones",
                admin: "admin.ch — Información oficial",
                ch_work: "ch.ch — Trabajo y vida en Suiza",
                ch_tax: "ch.ch — Impuestos en Suiza",
                ch_housing: "ch.ch — Vivienda y vida en Suiza",
                ch_life: "ch.ch — Vivir en Suiza",
            },
            en: {
                ch: "ch.ch — Official Swiss portal",
                sem: "SEM — State Secretariat for Migration",
                arbeit: "arbeit.swiss — Employment & unemployment (SECO)",
                priminfo: "Priminfo — Official LAMal/KVG comparison",
                bag: "FOPH/BAG — Federal Office of Public Health",
                estv: "FTA/ESTV — Federal Tax Administration",
                admin: "admin.ch — Swiss government info",
                ch_work: "ch.ch — Work & living in Switzerland",
                ch_tax: "ch.ch — Taxes in Switzerland",
                ch_housing: "ch.ch — Housing in Switzerland",
                ch_life: "ch.ch — Living in Switzerland",
            },
            fr: {
                ch: "ch.ch — Portail officiel suisse",
                sem: "SEM — Secrétariat d’État aux migrations",
                arbeit: "arbeit.swiss — Emploi & chômage (SECO)",
                priminfo: "Priminfo — Comparateur officiel LAMal/KVG",
                bag: "OFSP/BAG — Office fédéral de la santé publique",
                estv: "AFC/ESTV — Administration fédérale des contributions",
                admin: "admin.ch — Infos officielles",
                ch_work: "ch.ch — Travail et vie en Suisse",
                ch_tax: "ch.ch — Impôts en Suisse",
                ch_housing: "ch.ch — Logement en Suisse",
                ch_life: "ch.ch — Vivre en Suisse",
            },
            de: {
                ch: "ch.ch — Offizielles Schweizer Portal",
                sem: "SEM — Staatssekretariat für Migration",
                arbeit: "arbeit.swiss — Arbeit & Arbeitslosigkeit (SECO)",
                priminfo: "Priminfo — Offizieller KVG/LAMal-Vergleich",
                bag: "BAG — Bundesamt für Gesundheit",
                estv: "ESTV — Eidg. Steuerverwaltung",
                admin: "admin.ch — Offizielle Infos",
                ch_work: "ch.ch — Arbeit & Leben in der Schweiz",
                ch_tax: "ch.ch — Steuern in der Schweiz",
                ch_housing: "ch.ch — Wohnen in der Schweiz",
                ch_life: "ch.ch — Leben in der Schweiz",
            },
        };

        const L = labelsByLang[lang] || labelsByLang.es;

        const linksByHub = {
            tramites: [
                { href: "https://www.ch.ch", label: L.ch },
                { href: "https://www.sem.admin.ch", label: L.sem },
            ],
            trabajo: [
                { href: "https://www.ch.ch", label: L.ch_work },
                { href: "https://www.arbeit.swiss", label: L.arbeit },
            ],
            salud: [
                { href: "https://www.priminfo.admin.ch", label: L.priminfo },
                { href: "https://www.bag.admin.ch", label: L.bag },
            ],
            impuestos: [
                { href: "https://www.ch.ch", label: L.ch_tax },
                { href: "https://www.estv.admin.ch", label: L.estv },
            ],
            vivienda: [
                { href: "https://www.ch.ch", label: L.ch_housing },
                { href: "https://www.admin.ch", label: L.admin },
            ],
            vivir: [
                { href: "https://www.ch.ch", label: L.ch_life },
                { href: "https://www.admin.ch", label: L.admin },
            ],
            "vivir-en-suiza": [
                { href: "https://www.ch.ch", label: L.ch_life },
                { href: "https://www.admin.ch", label: L.admin },
            ],
            fronterizos: [
                { href: "https://www.ch.ch", label: L.ch_work },
                { href: "https://www.sem.admin.ch", label: L.sem },
            ],
            "cultura-eventos": [
                { href: "https://www.ch.ch", label: L.ch_life },
                { href: "https://www.admin.ch", label: L.admin },
            ],
            recursos: [
                { href: "https://www.ch.ch", label: L.ch },
                { href: "https://www.admin.ch", label: L.admin },
            ],
            "fuentes-oficiales": [
                { href: "https://www.ch.ch", label: L.ch },
                { href: "https://www.admin.ch", label: L.admin },
            ],
        };

        const links = linksByHub[hub] || linksByHub.vivir;

        const h2 = document.createElement("h2");
        h2.textContent = titles[lang] || titles.es;

        const ul = document.createElement("ul");
        for (const l of links) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`;
            ul.appendChild(li);
        }

        contentRoot.appendChild(h2);
        contentRoot.appendChild(ul);
    }

    /**
     * Resolves a raw string path into structured page data from memory.
     * @param {string} path - The raw path (e.g., "/tramites" or "/articulo/slug")
     */
    function resolveRoute(path) {
        const langData = window.siteContent[currentLang];
        let isArticle = false;
        let routeKey = path;
        let pageData;

        // Standardize clean path behavior for resolution
        const cleanPath = path.startsWith('/') ? path : '/' + path;

        // Handle Home
        if (cleanPath === "/" || cleanPath === "") {
            routeKey = "home";
        }
        // Handle Articles (Legacy /articulo/ path)
        else if (cleanPath.startsWith("/articulo/")) {
            routeKey = cleanPath.replace("/articulo/", "");
            pageData = langData.articles[routeKey];
            isArticle = true;
        }
        // Handle Category Hubs or Static Pages
        else if (cleanPath.startsWith("/")) {
            routeKey = cleanPath.substring(1);
        }

        // Search for article by slug (New clean path)
        if (!pageData) {
            const articleIdBySlug = Object.keys(langData.articles).find(key => langData.articles[key].slug === routeKey);
            if (articleIdBySlug) {
                routeKey = articleIdBySlug;
                pageData = langData.articles[routeKey];
                isArticle = true;
            }
        }

        // Fallback: if lang ≠ es and article not found, try matching by ES slug/key → same key in current lang
        if (!pageData && currentLang !== 'es') {
            const esArticles = window.siteContent['es'] && window.siteContent['es'].articles;
            if (esArticles) {
                const esKeyBySlug = Object.keys(esArticles).find(key => esArticles[key].slug === routeKey);
                if (esKeyBySlug) {
                    routeKey = esKeyBySlug;
                    pageData = langData.articles && langData.articles[esKeyBySlug];
                    isArticle = true;
                }
            }
        }

        // Fetch page data if not already identified as an article
        if (!isArticle) {
            pageData = langData.pages[routeKey];
        }

        // 404 / missing translation fallback to Home
        if (!pageData) {
            pageData = langData.pages["home"];
            routeKey = "home";
        }

        return { routeKey, pageData, isArticle };
    }

    /**
     * Updates SEO metadata dynamically.
     * Generates clean URLs for canonical and og:url even during hash routing.
     * This ensures Google indexes "clean" paths.
     */
    function updateMetaTags(pageData, isArticle, routeKey) {
        const langData = window.siteContent[currentLang] || window.siteContent['es'];
        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        const baseUrl = "https://www.espanolesensuiza.ch";

        let resolvedTitle = stripMarkdown(pageData.title || "");
        let resolvedDescription = pageData.description || pageData.summary || "";

        if (isArticle) {
            resolvedDescription = currentLang !== 'es'
                ? (pageData.summary || pageData.description || "")
                : (pageData.description || pageData.summary || "");
        }

        // Localized metadata for shared pages (all langs currently point to es.pages)
        if (!isArticle) {
            const pageMetaByRoute = {
                "home": {
                    title: ui['home-sr-title'],
                    description: ui['home-sr-desc']
                },
                "tramites": {
                    title: ui['cat-tramites'],
                    description: ui['cat-desc-tramites']
                },
                "trabajo": {
                    title: ui['cat-trabajo'],
                    description: ui['cat-desc-trabajo']
                },
                "vivienda": {
                    title: ui['cat-vivienda'],
                    description: ui['cat-desc-vivienda']
                },
                "vivir-en-suiza": {
                    title: ui['cat-vivir'],
                    description: ui['cat-desc-vivir']
                },
                "salud": {
                    title: ui['cat-salud'],
                    description: ui['cat-desc-salud']
                },
                "impuestos": {
                    title: ui['cat-impuestos'],
                    description: ui['cat-desc-impuestos']
                },
                "fronterizos": {
                    title: ui['cat-fronterizos'],
                    description: ui['cat-desc-fronterizos']
                },
                "cultura-eventos": {
                    title: ui['cat-cultura-eventos'],
                    description: ui['cat-desc-cultura-eventos']
                },
                "articulos": {
                    title: ui['nav-articulos'],
                    description: ui['nav-articulos']
                },
                "recursos": {
                    title: ui['rec-h1'],
                    description: ui['rec-desc']
                },
                "comunidad": {
                    title: ui['com-h1'],
                    description: ui['com-desc']
                },
                "contacto": {
                    title: ui['cont-h1'],
                    description: ui['cont-desc']
                }
            };

            const routeMeta = pageMetaByRoute[routeKey];
            if (routeMeta) {
                resolvedTitle = routeMeta.title || resolvedTitle;
                resolvedDescription = routeMeta.description || resolvedDescription;
            }
        }

        // 1. Update Title
        const defaultSuffixByLang = {
            es: ' | Españoles en Suiza',
            en: ' | Spaniards in Switzerland',
            fr: ' | Espagnols en Suisse',
            de: ' | Spanier in der Schweiz',
            it: ' | Spagnoli in Svizzera'
        };
        const suffix = (langData.global && langData.global.titleSuffix)
            ? langData.global.titleSuffix
            : (defaultSuffixByLang[currentLang] || defaultSuffixByLang.es);
        const fullTitle = resolvedTitle + suffix;
        document.title = fullTitle;

        // 2. Determine clean path for Search Engines (No hash), including language prefixes.
        const cleanPath = buildCleanPath({ lang: currentLang, routeKey, isArticle, pageData });
        const fullUrl = baseUrl + cleanPath;

        // 3. Update Meta Description and Keywords
        const metaDesc = document.getElementById("meta-description");
        if (metaDesc) metaDesc.setAttribute("content", resolvedDescription);

        const metaKeywords = document.getElementById("meta-keywords");
        if (metaKeywords) {
            const hasLocalizedKeywords = Boolean(pageData && pageData.keywords && pageData.keywordsLocalized);
            const keywords = (isArticle && currentLang !== 'es' && !hasLocalizedKeywords) ? "" : (pageData.keywords || "");
            metaKeywords.setAttribute("content", keywords);
        }

        // 4. Update Canonical Link
        const canonical = document.getElementById("canonical-url");
        if (canonical) canonical.setAttribute("href", fullUrl);

        // 5. Update Open Graph (Facebook/LinkedIn)
        const ogTitle = document.getElementById("og-title");
        if (ogTitle) ogTitle.setAttribute("content", fullTitle);

        const ogUrl = document.getElementById("og-url");
        if (ogUrl) ogUrl.setAttribute("content", fullUrl);

        const ogDesc = document.getElementById("og-description");
        if (ogDesc) ogDesc.setAttribute("content", resolvedDescription);

        // 6. Update Twitter Card
        const twTitle = document.getElementById("twitter-title");
        if (twTitle) twTitle.setAttribute("content", fullTitle);

        const twDesc = document.getElementById("twitter-description");
        if (twDesc) twDesc.setAttribute("content", resolvedDescription);

        // 7. hreflang alternates (es/fr/de/en + x-default)
        updateHreflangAlternates({ baseUrl, routeKey, isArticle });
    }

    /**
     * Router Logic
     * Centralized entry point for rendering any route.
     */
    function renderRoute() {
        const rawPath = getCurrentPath();
        const { lang: langFromUrl, path } = extractLangFromPath(rawPath);
        if (langFromUrl) applyLanguage(langFromUrl);

        const langData = window.siteContent[currentLang];
        const { routeKey, pageData, isArticle } = resolveRoute(path);
        const scrollTargetY = getRouteScrollTarget(routeKey, isArticle);

        // Apply transition effects
        appContainer.classList.add("page-transitioning");

        setTimeout(() => {
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            const effectivePageData = isArticle ? withSpanishContentFallback(pageData, routeKey) : pageData;
            const hubForNav = isArticle ? (effectivePageData && effectivePageData.hub) : null;

            if (isArticle) {
                const langArticles = langData.articles || {};
                const esArticles = (window.siteContent['es'] && window.siteContent['es'].articles) ? window.siteContent['es'].articles : {};

                const resolveBySlug = (slug) => {
                    const key = Object.keys(langArticles).find(k => langArticles[k].slug === slug);
                    if (key) return { id: key, ...langArticles[key] };
                    const esKey = Object.keys(esArticles).find(k => esArticles[k].slug === slug);
                    if (esKey) return { id: esKey, ...(langArticles[esKey] || esArticles[esKey]) };
                    return null;
                };

                const articlePageData = effectivePageData || pageData;
                const explicitRelated = Array.isArray(articlePageData.relatedSlugs) ? articlePageData.relatedSlugs : [];
                const explicitRelatedItems = explicitRelated
                    .filter(s => s && s !== articlePageData.slug)
                    .map(resolveBySlug)
                    .filter(Boolean)
                    .slice(0, 6);

                const explicitRelatedHTML = explicitRelatedItems.length > 0
                    ? `
                        <div class="callout info" style="margin-top: 1.5rem;">
                            <strong>${ui['lbl-related']}</strong>
                            <ul style="margin-top: 0.75rem;">
                                ${explicitRelatedItems.map(r => `<li><a href="#/${r.slug}">${stripMarkdown(r.title)}</a></li>`).join('')}
                            </ul>
                        </div>
                    `
                    : '';

                // Find Related Guides
                const relatedKeys = Object.keys(langArticles)
                    .filter(k => k !== routeKey && langArticles[k].hub === articlePageData.hub)
                    .sort((a, b) => {
                        const currentIsFb = String(routeKey || "").startsWith("fb-");
                        const aIsFb = String(a).startsWith("fb-");
                        const bIsFb = String(b).startsWith("fb-");
                        // Prefer cross-linking between fb and non-fb
                        if (aIsFb !== bIsFb) {
                            if (currentIsFb) return aIsFb ? 1 : -1;
                            return aIsFb ? -1 : 1;
                        }
                        const recA = articleRecencyScore({ id: a, ...langArticles[a] });
                        const recB = articleRecencyScore({ id: b, ...langArticles[b] });
                        if (recB.timestamp !== recA.timestamp) return recB.timestamp - recA.timestamp;
                        if (recB.fbIndex !== recA.fbIndex) return recB.fbIndex - recA.fbIndex;
                        return String(langArticles[a].title || "").localeCompare(String(langArticles[b].title || ""), undefined, { sensitivity: "base" });
                    })
                    .slice(0, 3);

                let relatedHTML = '';
                if (relatedKeys.length > 0) {
                    relatedHTML = `
                            <div class="related-articles-footer" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
                            <h3>${ui['lbl-explore']} ${articlePageData.category || articlePageData.hub}</h3>
                            <div class="featured-grid" style="margin-top: 2rem; margin-bottom: 2rem;">
                                ${relatedKeys.map(k => {
                        const r = langData.articles[k];
                        return renderCard({ ...r, id: k }, ui, { compact: false });
                    }).join('')}
                            </div>
                            <a href="#/${articlePageData.hub}" class="btn btn-secondary" style="width: 100%;">${ui['btn-view-all']}</a>
                        </div>
                    `;
                } else {
                    relatedHTML = `
                        <div class="related-articles-footer" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
                            <h3>${ui['lbl-explore-other']}</h3>
                            <a href="#/${articlePageData.hub}" class="btn btn-secondary" style="margin-top: 1rem;">${ui['btn-view-section']}</a>
                        </div>
                    `;
                }

                // Wrap article in editorial components
                const readingTime = articlePageData.readingTime || Math.max(1, Math.ceil(articlePageData.content.split(' ').length / 200));
                progressBarContainer.style.display = "block";
                readingProgressBar.style.width = "0%";

                appContainer.innerHTML = `
	                    <div class="article-layout fade-in-up">
	                        <main>
	                            <article>
                                <div class="article-header">
                                    <nav class="breadcrumbs">
                                        <a href="#/">${ui['nav-inicio']}</a> >
                                        <a href="#/${articlePageData.hub || ''}">${articlePageData.category || ui['lbl-guides']}</a> >
                                        <span>${stripMarkdown(articlePageData.title)}</span>
                                    </nav>
                                    <h1>${stripMarkdown(articlePageData.title)}</h1>
	                                    <div class="article-meta">
	                                        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${readingTime} ${ui['lbl-read-time']}</span>
                                            ${articlePageData.dateUpdated ? `<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${ui['lbl-updated']} ${formatArticleDate(articlePageData.dateUpdated, currentLang)}</span>` : ''}
	                                    </div>
	                                </div>

                                    ${renderArticleHeroHTML(articlePageData, routeKey)}
                                    
                                    ${articlePageData.facebookUrl && isArchivedFacebookPlaceholder(articlePageData) ? `
                                    <div style="margin: 1.5rem 0;">
                                        <a href="${resolveFacebookUrl(articlePageData)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #1877F2; border-color: #1877F2; color: white;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                            </svg>
                                            ${articlePageData.isFbSearch ? 'Buscar fragmento en grupo de Facebook' : 'Ver publicación original en Facebook'}
                                        </a>
                                    </div>` : ''}
	                                
	                                ${articlePageData.summary ? `
	                                <div class="box-summary">
	                                    <h4>${ui['lbl-summary']}</h4>
	                                    <p>${articlePageData.summary}</p>
	                                </div>` : ''}

	                                ${explicitRelatedHTML}
	                                <div class="article-body">${articlePageData.content}</div>
	                            </article>
	                            
	                            ${relatedHTML}
	                        </main>
                        
                        <aside class="sidebar">
                            <div class="toc">
                                <h4>${ui['lbl-nav-sidebar']}</h4>
                                <ul>
                                    <li><a href="#/${articlePageData.hub}">&larr; ${ui['lbl-back']} ${articlePageData.category || ui['lbl-section']}</a></li>
                                    <!-- Extracted dynamically or hardcoded in content -->
                                    <li style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-light);"><a href="#app-container">${ui['lbl-back-top']}</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
	                `;

                postProcessArticleDOM(appContainer.querySelector("article"), articlePageData, routeKey);
            } else {
                progressBarContainer.style.display = "none";
                appContainer.innerHTML = `<div class="fade-in-up">${pageData.content}</div>`;

                // If it's a category page, trigger injection
                if (pageData.isCategoryHub) {
                    // routeKey matches exactly the hub property in articles (e.g. "tramites")
                    injectCategoryArticles(routeKey);
                } else if (routeKey === "articulos") {
                    injectAllArticles();
                }

                if (routeKey === "home") {
                    injectHomepageFeatured();
                    const homeSortSelect = document.getElementById("global-search-sort");
                    injectHomepageLatestArticles("recientes");
                }
            }

            // Update Meta & Title dynamically for SEO
            updateMetaTags(pageData, isArticle, routeKey);

            // Set active Nav link based on Route Key
            navLinks.forEach(link => {
                link.classList.remove("active");
                const href = link.getAttribute("href");
                // Exact match or partial match for article hubs
                if (href === `#/${routeKey}` || (isArticle && hubForNav && href === `#/${hubForNav}`)) {
                    link.classList.add("active");
                }
                if (routeKey === "home" && href === "#/") {
                    link.classList.add("active");
                }
            });

            initializeComponents();

            // Re-bind contact form if exists (prevent default submit behavior)
            const form = document.getElementById("contact-form");
            if (form) {
                form.addEventListener("submit", async (e) => {
                    e.preventDefault();
                    const status = document.getElementById("form-status");
                    const submitBtn = form.querySelector('button[type="submit"]');
                    const originalBtnText = submitBtn.textContent;

                    submitBtn.textContent = ui['cont-sending'] || "Sending...";
                    submitBtn.disabled = true;
                    status.style.display = "none";
                    status.className = "";

                    try {
                        const response = await fetch("https://formspree.io/f/mlgpjykp", {
                            method: "POST",
                            body: new FormData(form),
                            headers: {
                                'Accept': 'application/json'
                            }
                        });

                        if (response.ok) {
                            status.textContent = ui['cont-success'] || "Message sent successfully.";
                            status.style.display = "block";
                            status.style.backgroundColor = "rgba(40, 167, 69, 0.1)";
                            status.style.borderLeft = "4px solid #28a745";
                            status.style.color = "var(--text-primary)";
                            form.reset();
                        } else {
                            const data = await response.json();
                            if (Object.hasOwn(data, 'errors')) {
                                status.textContent = data["errors"].map(error => error["message"]).join(", ");
                            } else {
                                status.textContent = ui['cont-error'] || "There was an error sending your message.";
                            }
                            status.style.display = "block";
                            status.style.backgroundColor = "rgba(213, 43, 30, 0.05)";
                            status.style.borderLeft = "4px solid var(--swiss-red)";
                            status.style.color = "var(--text-primary)";
                        }
                    } catch (error) {
                        status.textContent = ui['cont-error'] || "There was an error sending your message.";
                        status.style.display = "block";
                        status.style.backgroundColor = "rgba(213, 43, 30, 0.05)";
                        status.style.borderLeft = "4px solid var(--swiss-red)";
                        status.style.color = "var(--text-primary)";
                    } finally {
                        submitBtn.textContent = originalBtnText;
                        submitBtn.disabled = false;
                    }
                });
            }

            appContainer.classList.remove("page-transitioning");
            window.scrollTo(0, scrollTargetY);
            window.requestAnimationFrame(() => {
                window.scrollTo(0, scrollTargetY);
                maybeShowScamWarning();
            });

        }, 200); // match CSS transiton time
    }

    // Event Listeners for Routing
    window.addEventListener("hashchange", renderRoute);
    window.addEventListener("scroll", scheduleCurrentRouteScrollSave, { passive: true });

    // FUTURE SEO: Listen to popstate when migrating to clean URLs (History API)
    // window.addEventListener("popstate", renderRoute);

    // Initial load
    renderRoute();
    function trackPageView() {
        if (typeof gtag === "function") {
            gtag("config", "G-2L9BFDH7DS", {
                page_path: window.location.hash || "/"
            });
        }
    }

    window.addEventListener("hashchange", trackPageView);
    window.addEventListener("load", trackPageView);
});
