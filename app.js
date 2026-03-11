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
        // Back to top button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.className = "back-to-top";
    backToTopBtn.setAttribute("aria-label", "Volver arriba");
    backToTopBtn.innerHTML = "↑";
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Reveal on scroll
    function setupRevealOnScroll() {
        const revealElements = appContainer.querySelectorAll(
            "section, .card-icon, .card-hub, .card-article, .accordion, .article-layout, .page-header"
        );

        revealElements.forEach((el, index) => {
            el.classList.add("reveal-on-scroll");
            const delayClass = `reveal-delay-${(index % 4) + 1}`;
            el.classList.add(delayClass);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach(el => observer.observe(el));
    }

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
            "footer-fb": "Únete a nuestro grupo en Facebook &rarr;",
            "footer-links-title": "Enlaces Rápidos",
            "footer-sources-title": "Fuentes Oficiales",
            "footer-source-ch": "(Portal Suizo)",
            "footer-source-sem": "Secretaría de Estado de Migración",
            "footer-source-bfs": "Oficina Federal de Estadística",
            "footer-copyright": "Comunidad Españoles en Suiza que realmente se ayudan. Creado con un propósito informativo.",
            "search-placeholder": "Buscar guías, trámites, impuestos...",
            "btn-read-guide": "Leer guía &rarr;",
            "btn-view-all": "Ver todas las guías de la sección",
            "btn-view-section": "Ver sección",
            "lbl-explore": "Sigue explorando guías sobre",
            "lbl-explore-other": "Explora otras guías",
            "lbl-read-time": "min lectura",
            "lbl-updated": "Actualizado:",
            "lbl-summary": "Puntos Clave",
            "lbl-nav-sidebar": "Navegación",
            "lbl-back": "Volver a",
            "lbl-back-top": "Volver arriba &uarr;",
            "lbl-loading": "Cargando...",
            "lbl-no-results": "No se encontraron resultados para",
            "lbl-no-articles": "No hay artículos publicados en esta categoría todavía.",
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
            "home-title-faq": "Preguntas Frecuentes",
            "home-desc-faq": "Respuestas rápidas basadas en las discusiones más comunes de nuestra comunidad.",
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
            "start-card-2-desc": "Permisos de residencia",
            "start-card-3-title": "Encontrar trabajo",
            "start-card-3-desc": "Mercado y salarios",
            "start-card-4-title": "Seguro médico",
            "start-card-4-desc": "Sistema LAMal",
            "start-card-5-title": "Encontrar vivienda",
            "start-card-5-desc": "Alquiler y agencias",
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
            "com-nav": "Comunidad",
            "com-h1": "De un grupo de ayuda, a esta plataforma de conocimiento.",
            "com-desc": "Nuestra web extrae el conocimiento verídico y los problemas más recurrentes que surgen a diario de nuestra vibrante comunidad en Facebook.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> nació como un grupo privado de FB para filtrar el ruido y proporcionar respuestas fiables a recién llegados y residentes.",
            "com-p2": "Hoy somos miles de miembros aportando valor, alertando sobre estafas de alquiler y ayudando a entender la burocracia suiza.",
            "com-li1": "Resolución ágil de dudas sobre el permiso y la LAMal.",
            "com-li2": "Ofertas de alojamiento de traspaso directo (sin agencia).",
            "com-li3": "Networking y recomendación de profesionales que hablan tu idioma.",
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
            "footer-fb": "Join our Facebook group &rarr;",
            "footer-links-title": "Quick Links",
            "footer-sources-title": "Official Sources",
            "footer-source-ch": "(Swiss Portal)",
            "footer-source-sem": "State Secretariat for Migration",
            "footer-source-bfs": "Federal Statistical Office",
            "footer-copyright": "Community of Spaniards in Switzerland who really help each other. Created for informational purposes.",
            "search-placeholder": "Search guides, procedures, taxes...",
            "btn-read-guide": "Read guide &rarr;",
            "btn-view-all": "View all guides in section",
            "btn-view-section": "View section",
            "lbl-explore": "Keep exploring guides about",
            "lbl-explore-other": "Explore other guides",
            "lbl-read-time": "min read",
            "lbl-updated": "Updated:",
            "lbl-summary": "Key Points",
            "lbl-nav-sidebar": "Navigation",
            "lbl-back": "Back to",
            "lbl-back-top": "Back to top &uarr;",
            "lbl-loading": "Loading...",
            "lbl-no-results": "No results found for",
            "lbl-no-articles": "No articles published in this category yet.",
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
            "home-title-faq": "Frequently Asked Questions",
            "home-title-faq": "Frequently Asked Questions",
            "home-desc-faq": "Quick answers based on our community's most common discussions.",
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
            "start-card-2-desc": "Residence permits",
            "start-card-3-title": "Finding a job",
            "start-card-3-desc": "Market and salaries",
            "start-card-4-title": "Health insurance",
            "start-card-4-desc": "LAMal system",
            "start-card-5-title": "Finding housing",
            "start-card-5-desc": "Renting and agencies",
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
            "com-nav": "Community",
            "com-h1": "From a help group to a knowledge platform.",
            "com-desc": "Our website extracts true knowledge and the most recurring problems that arise daily from our vibrant Facebook community.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> was born as a private FB group to filter noise and provide reliable answers to newcomers.",
            "com-p2": "Today we are thousands of members adding value, warning about rental scams and helping to understand Swiss bureaucracy.",
            "com-li1": "Fast resolution of doubts about permits and LAMal.",
            "com-li2": "Direct transfer accommodation offers (no agency).",
            "com-li3": "Networking and recommendation of professionals speaking your language.",
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
            "footer-fb": "Rejoignez notre groupe Facebook &rarr;",
            "footer-links-title": "Liens Rapides",
            "footer-sources-title": "Sources Officielles",
            "footer-source-ch": "(Portail Suisse)",
            "footer-source-sem": "Secrétariat d'État aux migrations",
            "footer-source-bfs": "Office fédéral de la statistique",
            "footer-copyright": "Communauté d'Espagnols en Suisse qui s'entraident vraiment. Créé à des fins d'information.",
            "search-placeholder": "Rechercher des guides, impôts...",
            "btn-read-guide": "Lire le guide &rarr;",
            "btn-view-all": "Voir tous les guides",
            "btn-view-section": "Voir la section",
            "lbl-explore": "Continuer d'explorer les guides sur",
            "lbl-explore-other": "Explorer d'autres guides",
            "lbl-read-time": "min de lecture",
            "lbl-updated": "Mis à jour :",
            "lbl-summary": "Points Clés",
            "lbl-nav-sidebar": "Navigation",
            "lbl-back": "Retour à",
            "lbl-back-top": "Retour en haut &uarr;",
            "lbl-loading": "Chargement...",
            "lbl-no-results": "Aucun résultat trouvé pour",
            "lbl-no-articles": "Aucun article publié dans cette catégorie pour le moment.",
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
            "home-title-faq": "Foire Aux Questions",
            "home-desc-faq": "Réponses rapides basées sur les discussions les plus fréquentes de notre communauté.",
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
            "start-card-2-desc": "Permis de séjour",
            "start-card-3-title": "Trouver un emploi",
            "start-card-3-desc": "Marché et salaires",
            "start-card-4-title": "Assurance maladie",
            "start-card-4-desc": "Système LAMal",
            "start-card-5-title": "Trouver un logement",
            "start-card-5-desc": "Location et agences",
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
            "com-nav": "Communauté",
            "com-h1": "D'un groupe d'entraide à cette plateforme de connaissances.",
            "com-desc": "Notre site web extrait de notre vibrante communauté Facebook les vraies connaissances et les problèmes récurrents.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> est né comme groupe privé pour filtrer le bruit et fournir des réponses fiables.",
            "com-p2": "Aujourd'hui, nous sommes des milliers de membres apportant de la valeur et prévenant les arnaques de location.",
            "com-li1": "Résolution rapide des doutes sur les permis et la LAMal.",
            "com-li2": "Offres de logement en transfert direct (sans agence).",
            "com-li3": "Réseautage et recommandation de professionnels.",
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
            "footer-fb": "Treten Sie unserer Facebook-Gruppe bei &rarr;",
            "footer-links-title": "Schnelllinks",
            "footer-sources-title": "Offizielle Quellen",
            "footer-source-ch": "(Schweizer Portal)",
            "footer-source-sem": "Staatssekretariat für Migration",
            "footer-source-bfs": "Bundesamt für Statistik",
            "footer-copyright": "Gemeinschaft der Spanier in der Schweiz. Erstellt zu Informationszwecken.",
            "search-placeholder": "Durchsuche Leitfäden, Steuern...",
            "btn-read-guide": "Leitfaden lesen &rarr;",
            "btn-view-all": "Alle Leitfäden ansehen",
            "btn-view-section": "Sektion ansehen",
            "lbl-explore": "Weitere Leitfäden erkunden zu",
            "lbl-explore-other": "Andere Leitfäden erkunden",
            "lbl-read-time": "Min Lesezeit",
            "lbl-updated": "Aktualisiert:",
            "lbl-summary": "Wichtige Punkte",
            "lbl-nav-sidebar": "Navigation",
            "lbl-back": "Zurück zu",
            "lbl-back-top": "Zurück nach oben &uarr;",
            "lbl-loading": "Wird geladen...",
            "lbl-no-results": "Keine Ergebnisse gefunden für",
            "lbl-no-articles": "Noch keine Artikel in dieser Kategorie veröffentlicht.",
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
            "home-title-faq": "Häufig gestellte Fragen",
            "home-desc-faq": "Kurze Antworten auf die häufigsten Diskussionen unserer Community.",
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
            "start-card-2-desc": "Aufenthaltsbewilligungen",
            "start-card-3-title": "Jobsuche",
            "start-card-3-desc": "Markt und Gehälter",
            "start-card-4-title": "Krankenversicherung",
            "start-card-4-desc": "LAMal System",
            "start-card-5-title": "Wohnungssuche",
            "start-card-5-desc": "Mieten und Agenturen",
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
            "com-nav": "Gemeinschaft",
            "com-h1": "Von einer Hilfsgruppe zu dieser Wissensplattform.",
            "com-desc": "Unsere Website extrahiert das wahre Wissen und die häufigsten Probleme, die täglich in unserer Facebook-Community auftreten.",
            "com-p1": "<strong>Españoles en Suiza que realmente se ayudan</strong> wurde als private Gruppe gegründet, um zuverlässige Antworten zu geben.",
            "com-p2": "Heute sind wir Tausende von Mitgliedern, die vor Mietbetrug warnen und helfen, die Schweizer Bürokratie zu verstehen.",
            "com-li1": "Schnelle Klärung von Fragen zu Bewilligungen und KVG.",
            "com-li2": "Unterkunftsangebote zur direkten Übernahme (ohne Agentur).",
            "com-li3": "Networking und Empfehlung von Fachleuten.",
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
            "footer-fb": "Unisciti al nostro gruppo Facebook &rarr;",
            "footer-links-title": "Link Rapidi",
            "footer-sources-title": "Fonti Ufficiali",
            "footer-source-ch": "(Portale Svizzero)",
            "footer-source-sem": "Segreteria di Stato della migrazione",
            "footer-source-bfs": "Ufficio federale di statistica",
            "footer-copyright": "Comunità di Spagnoli in Svizzera. Creato per scopi informativi.",
            "search-placeholder": "Cerca guide, procedure, tasse...",
            "btn-read-guide": "Leggi la guida &rarr;",
            "btn-view-all": "Vedi tutte le guide",
            "btn-view-section": "Vedi la sezione",
            "lbl-explore": "Continua a esplorare guide su",
            "lbl-explore-other": "Esplora altre guide",
            "lbl-read-time": "min di lettura",
            "lbl-updated": "Aggiornato:",
            "lbl-summary": "Punti Chiave",
            "lbl-nav-sidebar": "Navigazione",
            "lbl-back": "Torna a",
            "lbl-back-top": "Torna all'inizio &uarr;",
            "lbl-loading": "Caricamento...",
            "lbl-no-results": "Nessun risultato trovato per",
            "lbl-no-articles": "Nessun articolo ancora pubblicato in questa categoria.",
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
            "home-title-faq": "Domande Frequenti",
            "home-desc-faq": "Risposte rapide basate sulle discussioni più comuni della nostra comunità.",
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
            "start-card-2-desc": "Permessi di soggiorno",
            "start-card-3-title": "Trovare lavoro",
            "start-card-3-desc": "Mercato e stipendi",
            "start-card-4-title": "Assicurazione sanitaria",
            "start-card-4-desc": "Sistema LAMal",
            "start-card-5-title": "Trovare casa",
            "start-card-5-desc": "Affitto e agenzie",
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
            "com-nav": "Comunità",
            "com-h1": "Da un gruppo di aiuto a questa piattaforma di conoscenza.",
            "com-desc": "Il nostro sito oestrae la vera conoscenza e i problemi più ricorrenti dalla nostra comunità di Facebook.",
            "com-p1": "<strong>Españoles en Suiza che realmente se ayudan</strong> è nato come gruppo privato per fornire risposte affidabili.",
            "com-p2": "Oggi siamo migliaia di membri che mettono in guardia contro le truffe sugli affitti.",
            "com-li1": "Risoluzione rapida di dubbi sui permessi e LAMal.",
            "com-li2": "Offerte di alloggi in trasferimento diretto (senza agenzia).",
            "com-li3": "Rete e raccomandazione di professionisti.",
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

    let currentLang = localStorage.getItem("lang") || "es";
    document.documentElement.lang = currentLang;

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
        if (window.scrollY > 450) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
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
        if(b.getAttribute("data-lang") === currentLang) {
            b.classList.add("active");
            if (currentLangDisplay) currentLangDisplay.textContent = currentLang.toUpperCase();
        } else {
            b.classList.remove("active");
        }
    });

    langBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const lang = e.target.getAttribute("data-lang");
            if (window.siteContent[lang]) {
                currentLang = lang;
                localStorage.setItem("lang", lang);
                document.documentElement.lang = currentLang;
                updateUITexts();
                langBtns.forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                if (currentLangDisplay) currentLangDisplay.textContent = currentLang.toUpperCase();
                
                // Close language dropdown if open
                e.target.closest('.dropdown').classList.remove('open');
                
                renderRoute();
            } else {
                alert("This language is not yet available.");
            }
        });
    });

    /**
     * Component Logic Initializer
     */
    function initializeComponents() {
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

        // Search Logic
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase().trim();
                const displayArea = document.getElementById('search-results');

                if (term.length < 3) {
                    displayArea.innerHTML = '';
                    return;
                }

                const langData = window.siteContent[currentLang].articles;
                const filterAudience = document.getElementById('search-filter-audience') ? document.getElementById('search-filter-audience').value : '';

                const results = Object.keys(langData).filter(key => {
                    const article = langData[key];

                    const termMatch = (article.title && article.title.toLowerCase().includes(term)) ||
                        (article.keywords && article.keywords.toLowerCase().includes(term)) ||
                        (article.description && article.description.toLowerCase().includes(term));

                    const audienceMatch = filterAudience === '' || article.audience === filterAudience;

                    return termMatch && audienceMatch;
                }).map(key => ({ id: key, ...langData[key] }));

                const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
                if (results.length > 0) {
                    displayArea.innerHTML = `
                        <div class="featured-grid" style="margin-top: 2rem;">
                            ${results.map(r => `
                                <a href="#/articulo/${r.id}" class="card-article">
                                    <div class="card-meta">${r.category || 'Guía'}</div>
                                    <h3>${r.title}</h3>
                                    <p>${r.description}</p>
                                    <span class="btn-secondary" style="margin-top:auto; width:fit-content; border:none; padding:0; color:var(--swiss-red); font-weight:600;">${ui['btn-read-guide']}</span>
                                </a>
                            `).join('')}
                        </div>
                    `;
                } else {
                    displayArea.innerHTML = `<p style="margin-top:2rem;">${ui['lbl-no-results']} "${term}".</p>`;
                }
            });
        }
    }

    /**
     * Inject Articles into Category Hub Pages
     */
    function injectCategoryArticles(hubKey) {
        const container = document.getElementById("category-articles-container");
        if (!container) return;

        const langData = window.siteContent[currentLang].articles;

        // Find all articles that belong to this hub
        const hubArticles = Object.keys(langData).filter(key => langData[key].hub === hubKey).map(key => ({ id: key, ...langData[key] }));

        const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
        if (hubArticles.length > 0) {
            container.innerHTML = `
                <div class="featured-grid">
                    ${hubArticles.map(r => `
                        <a href="#/articulo/${r.id}" class="card-article">
                            <div class="card-meta">${r.category || 'Guía'} ${r.readingTime ? `· ${r.readingTime} min` : ''}</div>
                            <h3>${r.title}</h3>
                            <p>${r.description}</p>
                            <span class="btn-secondary" style="margin-top:auto; width:fit-content; border:none; padding:0; color:var(--swiss-red); font-weight:600;">${ui['btn-read-guide']}</span>
                        </a>
                    `).join('')}
                </div>
            `;
        } else {
            container.innerHTML = `<p style="color: var(--text-light); margin-top: 2rem;">${ui['lbl-no-articles']}</p>`;
        }
    }

    /**
     * Router Logic
     */
    function renderRoute() {
        let hash = window.location.hash.substring(1) || "/";
        const langData = window.siteContent[currentLang];

        let isArticle = false;
        let pageData;
        let routeKey = hash;

        // Clean up hash route parsing
        if (hash === "/" || hash === "") {
            routeKey = "home";
        } else if (hash.startsWith("/articulo/")) {
            // e.g. /articulo/articulo-permisos
            routeKey = hash.replace("/articulo/", "");
            pageData = langData.articles[routeKey];
            isArticle = true;
        } else if (hash.startsWith("/")) {
            // e.g. /tramites
            routeKey = hash.substring(1);
        }

        if (!isArticle) {
            pageData = langData.pages[routeKey];
        }

        // 404 Fallback
        if (!pageData) {
            pageData = langData.pages["home"];
            routeKey = "home";
        }

        // Apply transition effects
        appContainer.classList.add("page-transitioning");

        setTimeout(() => {
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            if (isArticle) {
                // Find Related Guides
                const relatedKeys = Object.keys(langData.articles)
                    .filter(k => k !== routeKey && langData.articles[k].hub === pageData.hub)
                    .slice(0, 3);
                
                let relatedHTML = '';
                if (relatedKeys.length > 0) {
                    relatedHTML = `
                        <div class="related-articles-footer" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
                            <h3>${ui['lbl-explore']} ${pageData.category || pageData.hub}</h3>
                            <div class="featured-grid" style="margin-top: 2rem; margin-bottom: 2rem;">
                                ${relatedKeys.map(k => {
                                    const r = langData.articles[k];
                                    return `
                                    <a href="#/articulo/${k}" class="card-article" style="min-height: auto;">
                                        <div class="card-meta">${r.category || 'Guía'}</div>
                                        <h3 style="font-size: 1.125rem;">${r.title}</h3>
                                        <span class="btn-secondary" style="margin-top:1rem; width:fit-content; border:none; padding:0; color:var(--swiss-red); font-weight:600; font-size: 0.9rem;">${ui['btn-read-guide']}</span>
                                    </a>
                                    `;
                                }).join('')}
                            </div>
                            <a href="#/${pageData.hub}" class="btn btn-secondary" style="width: 100%;">${ui['btn-view-all']}</a>
                        </div>
                    `;
                } else {
                    relatedHTML = `
                        <div class="related-articles-footer" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
                            <h3>${ui['lbl-explore-other']}</h3>
                            <a href="#/${pageData.hub}" class="btn btn-secondary" style="margin-top: 1rem;">${ui['btn-view-section']}</a>
                        </div>
                    `;
                }

                // Wrap article in editorial components
                const readingTime = pageData.readingTime || Math.max(1, Math.ceil(pageData.content.split(' ').length / 200));
                progressBarContainer.style.display = "block";
                readingProgressBar.style.width = "0%";

                appContainer.innerHTML = `
                    <div class="article-layout fade-in-up">
                        <main>
                            <article>
                                <div class="article-header">
                                    <nav class="breadcrumbs">
                                        <a href="#/">${ui['nav-inicio']}</a> > 
                                        <a href="#/${pageData.hub || ''}">${pageData.category || 'Guías'}</a> > 
                                        <span>${pageData.title}</span>
                                    </nav>
                                    <h1>${pageData.title}</h1>
                                    <div class="article-meta">
                                        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${readingTime} ${ui['lbl-read-time']}</span>
                                        ${pageData.dateUpdated ? `<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${ui['lbl-updated']} ${pageData.dateUpdated}</span>` : ''}
                                    </div>
                                </div>
                                
                                ${pageData.summary ? `
                                <div class="box-summary">
                                    <h4>${ui['lbl-summary']}</h4>
                                    <p>${pageData.summary}</p>
                                </div>` : ''}
                                
                                ${pageData.content}
                            </article>
                            
                            ${relatedHTML}
                        </main>
                        
                        <aside class="sidebar">
                            <div class="toc">
                                <h4>${ui['lbl-nav-sidebar']}</h4>
                                <ul>
                                    <li><a href="#/${pageData.hub}">&larr; ${ui['lbl-back']} ${pageData.category || 'la sección'}</a></li>
                                    <!-- Extracted dynamically or hardcoded in content -->
                                    <li style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-light);"><a href="#app-container">${ui['lbl-back-top']}</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                `;
            } else {
                progressBarContainer.style.display = "none";
                appContainer.innerHTML = `<div class="fade-in-up">${pageData.content}</div>`;

                // If it's a category page, trigger injection
                if (pageData.isCategoryHub) {
                    // routeKey matches exactly the hub property in articles (e.g. "tramites")
                    injectCategoryArticles(routeKey);
                }
            }

            // Update Meta & Title
            document.title = pageData.title + (langData.global && langData.global.titleSuffix ? langData.global.titleSuffix : ' | Españoles en Suiza');
            if (document.getElementById("meta-description")) document.getElementById("meta-description").setAttribute("content", pageData.description || "");
            if (document.getElementById("meta-keywords")) document.getElementById("meta-keywords").setAttribute("content", pageData.keywords || "");

            // Set active Nav link based on Route Key
            navLinks.forEach(link => {
                link.classList.remove("active");
                const href = link.getAttribute("href");
                // Exact match or partial match for article hubs
                if (href === `#/${routeKey}` || (isArticle && href === `#/${pageData.hub}`)) {
                    link.classList.add("active");
                }
                if (routeKey === "home" && href === "#/") {
                    link.classList.add("active");
                }
            });

            initializeComponents();
            setupRevealOnScroll();

            // Re-bind contact form if exists (prevent default submit behavior)
            const form = document.getElementById("contact-form");
            if (form) {
                form.addEventListener("submit", async (e) => {
                    e.preventDefault();
                    const status = document.getElementById("form-status");
                    const submitBtn = form.querySelector('button[type="submit"]');
                    const originalBtnText = submitBtn.textContent;

                    submitBtn.textContent = "Enviando...";
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
                            status.textContent = "¡Gracias! Tu mensaje ha sido enviado correctamente.";
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
                                status.textContent = "Oops! Hubo un problema al enviar tu mensaje.";
                            }
                            status.style.display = "block";
                            status.style.backgroundColor = "rgba(213, 43, 30, 0.05)";
                            status.style.borderLeft = "4px solid var(--swiss-red)";
                            status.style.color = "var(--text-primary)";
                        }
                    } catch (error) {
                        status.textContent = "Oops! Hubo un problema de conexión al enviar tu mensaje.";
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
            window.scrollTo({ top: 0, behavior: "smooth" });
            
        }, 200); // match CSS transiton time
    }

    // Hash Listeners
    window.addEventListener("hashchange", renderRoute);

    // Initial load
    renderRoute();
});
