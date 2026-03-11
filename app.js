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
            "cat-desc-fronterizos": "Regulación fiscal especial, derecho a la opción en el seguro médico (LAMal vs CMU) y normativas de vida para aquellos que cruzan la frontera a diario."
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
            "cat-desc-fronterizos": "Special tax regulations, the right to choose health insurance (LAMal vs CMU), and living regulations for those who cross the border daily."
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
            "home-desc-faq": "Réponses rapides basées sur les discussions les plus fréquentes de notre communauté."
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
            "home-title-start": "Hier starten",
            "home-desc-start": "Wenn Sie gerade angekommen sind oder einen Umzug planen, prüfen Sie diese essenziellen Leitfäden.",
            "home-title-hubs": "Hauptthemen",
            "home-title-featured": "Vorgestellte Leitfäden",
            "home-title-faq": "Häufig Gestellte Fragen",
            "home-title-faq": "Häufig Gestellte Fragen",
            "home-desc-faq": "Schnelle Antworten basierend auf den häufigsten Diskussionen unserer Gemeinschaft.",
            "cat-desc-tramites": "Verstehen Sie die Schweizer Bürokratie: von der Anmeldung in Ihrer Gemeinde bis zu den Unterschieden zwischen den Ausweisen L, B und C. Schritt-für-Schritt Informationen basierend auf realen Erfahrungen.",
            "cat-desc-trabajo": "Der Schweizer Arbeitsmarkt ist hochqualifiziert, wettbewerbsfähig und liberal. Entdecken Sie Ihre Arbeitsrechte, Kündigungsfristen und faire Gehaltserwartungen.",
            "cat-desc-vivir": "Alles, was Ihren Alltag ausmacht: der ausgezeichnete, aber teure öffentliche Verkehr, das kantonale Schulsystem, die Sozialversicherungen und die Realität der Schweizer Lebenshaltungskosten.",
            "cat-desc-vivienda": "Der Schweizer Mietmarkt ist sehr angespannt, mit Leerständen unter 1% in den Grossstädten. Lernen Sie, wie man ein tadelloses Dossier erstellt, und kennen Sie Ihre Rechte als Mieter.",
            "cat-desc-salud": "Das Schweizer Gesundheitssystem ist ausgezeichnet, aber privat und obligatorisch. Verstehen Sie, wie die LAMal-Versicherung funktioniert, Franchisen, Selbstbehalte und wie Sie sich zwischen Ärzten und Notfällen zurechtfinden.",
            "cat-desc-impuestos": "Verstehen Sie das Schweizer Steuersystem auf drei Ebenen (Bund, Kanton, Gemeinde), die Quellensteuer für Ausländer und Steuererklärungen.",
            "cat-desc-fronterizos": "Besondere steuerliche Regelungen, das Optionsrecht bei der Krankenversicherung (LAMal vs. CMU) und Lebensvorschriften für diejenigen, die täglich die Grenze überqueren.",
            "cat-desc-tramites": "Verstehen Sie die Schweizer Bürokratie: von der Anmeldung in Ihrer Gemeinde bis zu den Unterschieden zwischen den Ausweisen L, B und C. Schritt-für-Schritt Informationen basierend auf realen Erfahrungen.",
            "cat-desc-trabajo": "Der Schweizer Arbeitsmarkt ist hochqualifiziert, wettbewerbsfähig und liberal. Entdecken Sie Ihre Arbeitsrechte, Kündigungsfristen und faire Gehaltserwartungen.",
            "cat-desc-vivir": "Alles, was Ihren Alltag ausmacht: der ausgezeichnete, aber teure öffentliche Verkehr, das kantonale Schulsystem, die Sozialversicherungen und die Realität der Schweizer Lebenshaltungskosten.",
            "cat-desc-vivienda": "Der Schweizer Mietmarkt ist sehr angespannt, mit Leerständen unter 1% in den Grossstädten. Lernen Sie, wie man ein tadelloses Dossier erstellt, und kennen Sie Ihre Rechte als Mieter.",
            "cat-desc-salud": "Das Schweizer Gesundheitssystem ist ausgezeichnet, aber privat und obligatorisch. Verstehen Sie, wie die LAMal-Versicherung funktioniert, Franchisen, Selbstbehalte und wie Sie sich zwischen Ärzten und Notfällen zurechtfinden.",
            "cat-desc-impuestos": "Verstehen Sie das Schweizer Steuersystem auf drei Ebenen (Bund, Kanton, Gemeinde), die Quellensteuer für Ausländer und Steuererklärungen.",
            "cat-desc-fronterizos": "Besondere steuerliche Regelungen, das Optionsrecht bei der Krankenversicherung (LAMal vs. CMU) und Lebensvorschriften für diejenigen, die täglich die Grenze überqueren."
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
            "cat-trabajo": "Lavoro e Salari",
            "cat-vivir": "Vivere in Svizzera",
            "cat-vivienda": "Alloggio",
            "cat-salud": "Salute e LAMal",
            "cat-impuestos": "Tasse",
            "cat-fronterizos": "Frontalieri",
            "home-title-start": "Inizia quì",
            "home-desc-start": "Se sei appena arrivato o hai in programma di trasferirti, consulta queste guide essenziali.",
            "home-title-hubs": "Argomenti Principali",
            "home-title-featured": "Guide in Evidenza",
            "home-title-faq": "Domande Frequenti",
            "home-desc-faq": "Risposte rapide basate sulle discussioni più comuni della nostra comunità.",
            "cat-desc-tramites": "Comprendi la burocrazia svizzera: dalla registrazione nel tuo comune alle differenze tra i permessi L, B e C. Informazioni passo dopo passo basate su esperienze reali.",
            "cat-desc-trabajo": "Il mercato del lavoro svizzero è altamente qualificato, competitivo e liberale. Scopri i tuoi diritti lavorativi, i periodi di preavviso e le giuste aspettative salariali.",
            "cat-desc-vivir": "Tutto ciò che compone la tua vita quotidiana: l'eccellente ma costoso trasporto pubblico, il sistema scolastico cantonale, le assicurazioni sociali e la realtà del costo della vita svizzero.",
            "cat-desc-vivienda": "Il mercato degli affitti svizzero è molto teso, con alloggi sfitti al di sotto dell'1% nelle grandi città. Impara come creare un dossier impeccabile e conosci i tuoi diritti come inquilino.",
            "cat-desc-salud": "Il sistema sanitario svizzero è eccellente ma privato e obbligatorio. Comprendi come funziona l'assicurazione LAMal, le franchigie, le aliquote percentuali e come destreggiarti tra medici e pronto soccorso.",
            "cat-desc-impuestos": "Comprendi il sistema fiscale svizzero a tre livelli (federale, cantonale, comunale), l'imposta alla fonte per gli stranieri (Quellensteuer) e le dichiarazioni dei redditi.",
            "cat-desc-fronterizos": "Normative fiscali speciali, il diritto di opzione nell'assicurazione sanitaria (LAMal vs CMU) e normative di vita per coloro che attraversano il confine ogni giorno."

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
            window.scrollTo(0, 0);

        }, 200); // match CSS transiton time
    }

    // Hash Listeners
    window.addEventListener("hashchange", renderRoute);

    // Initial load
    renderRoute();
});
