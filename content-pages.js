/**
 * content-pages.js
 * Editorial Homepage and Category Hub structures.
 */

window.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };
window.siteContent = window.siteContent || {};
window.siteContent.en = window.siteContent.en || { global: {}, pages: {}, articles: {} };
window.siteContent.fr = window.siteContent.fr || { global: {}, pages: {}, articles: {} };
window.siteContent.de = window.siteContent.de || { global: {}, pages: {}, articles: {} };
window.siteContent.it = window.siteContent.it || { global: {}, pages: {}, articles: {} };


window.siteContent.es.pages = {
    "home": {
        title: "Españoles en Suiza | Guía práctica para vivir y trabajar",
        description: "Plataforma editorial sobre la vida en Suiza: permisos, trabajo, vivienda, seguros e impuestos. Toda la información contrastada.",
        keywords: "vivir en suiza, permisos suiza, trabajar en suiza, guía suiza",
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            const formatConsulateDetails = (details) => {
                const raw = String(details || "");
                const parts = raw.split(" · ").map(s => s.trim()).filter(Boolean);
                if (parts.length >= 2) {
                    const phone = parts.pop();
                    const address = parts.join(" · ");
                    return { address, phone };
                }
                return { address: raw, phone: "" };
            };
            const geneva = formatConsulateDetails(ui['home-consulate-geneva-details']);
            const bern = formatConsulateDetails(ui['home-consulate-bern-details']);
            const zurich = formatConsulateDetails(ui['home-consulate-zurich-details']);
            return `
            <!-- SECCIÓN 1: Hero -->
            <section class="hero-section" style="padding: 0; margin-bottom: var(--space-xl);">
                <h1 class="sr-only">${ui['home-sr-title']}</h1>
                <p class="sr-only">${ui['home-sr-desc']}</p>
                <div style="width: 100%; max-width: 1000px; margin: 0 auto; line-height: 0;">
                    <img src="media/banner.jpg" alt="${ui['home-banner-alt']}" style="width: 100%; height: auto; display: block; filter: contrast(1.05);">
                </div>
                <div class="search-container" style="margin-top: -30px;">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="global-search" class="search-input" placeholder="${ui['search-placeholder']}" autocomplete="off">
                    <div id="search-results"></div>
                </div>
                <div class="hero-actions">
                    <a href="#/tramites" class="btn btn-primary">${ui['cat-tramites']}</a>
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" rel="noopener noreferrer" class="btn" style="background:#1877F2; color:white; display:inline-flex; align-items:center; gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        ${ui['home-hero-group-cta']}
                    </a>
                </div>
            </section>

            <!-- SECCIÓN 1: Empezar aquí -->
            <section class="animate-fade-up delay-100" style="margin-top: var(--space-xl);">
                <h2 style="border-bottom:none; margin-bottom: 0.5rem;">${ui['home-title-start']}</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--text-secondary);">${ui['home-desc-start']}</p>
                <div class="quick-start-grid">
                    <a href="#/tramites-llegada-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <h3>${ui['start-card-2-title']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['start-card-2-desc']}</span>
                    </a>
                    <a href="#/buscar-empleo-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        <h3>${ui['start-card-3-title']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['start-card-3-desc']}</span>
                    </a>
                    <a href="#/seguro-medico-lamal-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        <h3>${ui['start-card-4-title']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['start-card-4-desc']}</span>
                    </a>
                    <a href="#/alquilar-vivienda-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <h3>${ui['start-card-5-title']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['start-card-5-desc']}</span>
                    </a>
                    <a href="#/impuesto-fuente-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <h3>${ui['cat-impuestos']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['home-tax-topic-label']}</span>
                    </a>
                </div>
            </section>

            <!-- SECCIÓN 1b: Guías destacadas -->
            <section class="animate-fade-up delay-150" style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-featured']}</h2>
                <p style="margin-bottom:2rem; color: var(--text-secondary);">${ui['home-desc-featured']}</p>
                <div id="home-featured-guides-container"></div>
            </section>

            <!-- SECCIÓN 2: Fuentes oficiales -->
            <section class="animate-fade-up delay-200" style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-fuentes']}</h2>
                <p style="margin-bottom:2rem; color:var(--text-secondary);">${ui['home-desc-fuentes']}</p>
                <div class="featured-grid">
                    <a href="https://www.ch.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-federal']}</div>
                        <h3>ch.ch</h3>
                        <p>${ui['fuente-ch-desc']}</p>
                    </a>
                    <a href="https://www.sem.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-migracion']}</div>
                        <h3>SEM</h3>
                        <p>${ui['fuente-sem-desc']}</p>
                    </a>
                    <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-estadistica']}</div>
                        <h3>OFS / BFS</h3>
                        <p>${ui['fuente-bfs-desc']}</p>
                    </a>
                    <a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-economia']}</div>
                        <h3>SECO</h3>
                        <p>${ui['fuente-seco-desc']}</p>
                    </a>
                    <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-consulado']} · GE · VD · VS · NE · FR · JU</div>
                        <h3>${ui['home-consulate-geneva']}</h3>
                        <p>${geneva.address}${geneva.phone ? `<br>${geneva.phone}` : ''}</p>
                    </a>
                    <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-consulado']} · BE · SO · FR · VS</div>
                        <h3>${ui['home-consulate-bern']}</h3>
                        <p>${bern.address}${bern.phone ? `<br>${bern.phone}` : ''}</p>
                    </a>
                    <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">${ui['fuente-label-consulado']} · ZH · BS · LU · AG · TI ···</div>
                        <h3>${ui['home-consulate-zurich']}</h3>
                        <p>${zurich.address}${zurich.phone ? `<br>${zurich.phone}` : ''}</p>
                    </a>
                </div>
                <p style="margin-top:0.75rem; font-size:0.85rem; color:var(--text-light);">
                    👉 <a href="#/consulados-espanoles-suiza" style="color:var(--swiss-red);">${ui['home-consulados-link']}</a>
                </p>
            </section>

            <!-- SECCIÓN 3: Portales de los 26 cantones -->
            <section class="animate-fade-up delay-300" style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-cantones']}</h2>
                <p style="margin-bottom:1.5rem; color:var(--text-secondary);">${ui['home-desc-cantones']}</p>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(175px, 1fr)); gap:0.6rem;">
                    <a href="https://www.ag.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Argovia (AG)</a>
                    <a href="https://www.ai.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Appenzell I.Rh. (AI)</a>
                    <a href="https://www.ar.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Appenzell A.Rh. (AR)</a>
                    <a href="https://www.bs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Basilea-Ciudad (BS)</a>
                    <a href="https://www.bl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Basilea-Campo (BL)</a>
                    <a href="https://www.be.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Berna (BE)</a>
                    <a href="https://www.fr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Friburgo (FR)</a>
                    <a href="https://www.ge.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Ginebra (GE)</a>
                    <a href="https://www.gl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Glaris (GL)</a>
                    <a href="https://www.gr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Grisones (GR)</a>
                    <a href="https://www.jura.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Jura (JU)</a>
                    <a href="https://www.lu.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Lucerna (LU)</a>
                    <a href="https://www.ne.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Neuchâtel (NE)</a>
                    <a href="https://www.nw.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Nidwalden (NW)</a>
                    <a href="https://www.ow.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Obwalden (OW)</a>
                    <a href="https://www.sh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schaffhausen (SH)</a>
                    <a href="https://www.sz.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schwyz (SZ)</a>
                    <a href="https://www.so.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Solothurn (SO)</a>
                    <a href="https://www.sg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">San Galo (SG)</a>
                    <a href="https://www.tg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Turgovia (TG)</a>
                    <a href="https://www.ti.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Ticino (TI)</a>
                    <a href="https://www.ur.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Uri (UR)</a>
                    <a href="https://www.vs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Valais / Wallis (VS)</a>
                    <a href="https://www.vd.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Vaud (VD)</a>
                    <a href="https://www.zg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zug (ZG)</a>
                    <a href="https://www.zh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zúrich (ZH)</a>
                </div>
            </section>

            <!-- SECCIÓN 4: Preguntas frecuentes -->
            <section class="animate-fade-up delay-400" style="margin-top: var(--space-xl); padding-bottom: var(--space-xl);">
                <h2>${ui['home-title-faq']}</h2>
                <p style="margin-bottom:2rem; color:var(--text-secondary);">${ui['home-desc-faq']}</p>
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-header">${ui['faq-q1']}<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            ${ui['faq-a1']}
                            <br><a href="#/registrarse-en-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">${ui['faq-read-guide']}</a>
                        </div></div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">${ui['faq-q2']}<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            ${ui['faq-a2']}
                            <br><a href="#/seguro-medico-lamal-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">${ui['faq-read-guide']}</a>
                        </div></div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">${ui['faq-q3']}<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            ${ui['faq-a3']}
                            <br><a href="#/vivir-en-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">${ui['faq-view-guides']}</a>
                        </div></div>
                    </div>
                </div>
            </section>
        `;
        }
    },

    // Category Hub Pages (Dynamically populated by app.js)
    // TODO SEO slug migration: keep tramites slug
    "tramites": {
        title: "Trámites en Suiza | Registro, permisos y gestiones básicas",
        description: "Guía práctica sobre trámites en Suiza: registro en la comuna, permisos de residencia, empadronamiento consular y seguridad social.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-tramites']}</span>
                </nav>
                <h1>${ui['cat-tramites']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-tramites']}</p>
            </div>
            
            <section>
                <div id="category-articles-container">
                    <!-- Javascript injectCategoryArticles('tramites') will populate this -->
                </div>
            </section>
            `;
        }
    },

    // TODO SEO slug migration: trabajo -> trabajar-en-suiza
    "trabajo": {
        title: "Trabajar en Suiza | Empleo, permisos y mercado laboral",
        description: "Todo lo esencial para trabajar en Suiza: búsqueda de empleo, contratos, permisos, salarios y preparación del CV en formato suizo.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-trabajo']}</span>
                </nav>
                <h1>${ui['cat-trabajo']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-trabajo']}</p>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    // TODO SEO slug migration: vivienda -> vivienda-en-suiza
    "vivienda": {
        title: "Vivienda en Suiza | Alquiler, contratos y mudanza",
        description: "Guía práctica para encontrar vivienda en Suiza: cómo preparar tu dosier de alquiler, depósitos de garantía, derechos del inquilino y consejos de mudanza.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-vivienda']}</span>
                </nav>
                <h1>${ui['cat-vivienda']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-vivienda']}</p>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    // TODO SEO slug migration: keep vivir-en-suiza slug
    "vivir-en-suiza": {
        title: "Vivir en Suiza | Vida diaria, integración y consejos prácticos",
        description: "Descubre cómo es vivir en Suiza: coste de vida, sistema escolar suizo, transporte público, cultura, idiomas y consejos prácticos para recién llegados.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-vivir']}</span>
                </nav>
                <h1>${ui['cat-vivir']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-vivir']}</p>
                
                <div class="callout info" style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface); border-left: 3px solid var(--text-secondary);">
                    <strong>${ui['hub-note-title']}</strong> ${ui['hub-note-desc']}
                </div>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    // TODO SEO slug migration: salud -> salud-y-seguro-medico
    "salud": {
        title: "Salud en Suiza | Seguro médico LAMal, franquicia y médicos",
        description: "Guía del sistema de salud suizo: seguro LAMal, elección de franquicia, copagos, búsqueda de médico y funcionamiento de las urgencias.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-salud']}</span>
                </nav>
                <h1>${ui['cat-salud']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-salud']}</p>
                
                <div class="callout info" style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface); border-left: 3px solid var(--text-secondary);">
                    <strong>${ui['home-health-official-links']}</strong> 
                    <a href="https://www.priminfo.admin.ch" target="_blank" style="margin-left:8px;text-decoration:underline;">${ui['home-health-priminfo-label']}</a>
                </div>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    // TODO SEO slug migration: impuestos -> impuestos-y-finanzas
    "impuestos": {
        title: "Impuestos en Suiza | Fiscalidad, impuesto a la fuente y declaración",
        description: "Entiende el sistema fiscal suizo: impuesto a la fuente (Quellensteuer), declaración de la renta cantonal, deducciones y finanzas personales.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-impuestos']}</span>
                </nav>
                <h1>${ui['cat-impuestos']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-impuestos']}</p>
                
                <div class="callout info" style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface); border-left: 3px solid var(--text-secondary);">
                    <strong>${ui['home-tax-cantonal-warning-title']}</strong> ${ui['home-tax-cantonal-warning-body']}
                </div>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    // TODO SEO slug migration: fronterizos -> trabajadores-fronterizos
    "fronterizos": {
        title: "Trabajadores fronterizos en Suiza | Permiso G, fiscalidad y seguro médico",
        description: "Información para trabajadores fronterizos (permiso G): fiscalidad cruzada, seguro médico LAMal vs CMU y derechos laborales específicos.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-fronterizos']}</span>
                </nav>
                <h1>${ui['cat-fronterizos']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-fronterizos']}</p>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    "recursos": {
        title: "Recursos útiles y portales oficiales en Suiza para emigrantes",
        description: "Listado de recursos y enlaces oficiales para vivir en Suiza: comparadores, portales federales, sitios cantonales y herramientas prácticas.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            const formatConsulateDetails = (details) => {
                const raw = String(details || "");
                const parts = raw.split(" · ").map(s => s.trim()).filter(Boolean);
                if (parts.length >= 2) {
                    const phone = parts.pop();
                    const address = parts.join(" · ");
                    return { address, phone };
                }
                return { address: raw, phone: "" };
            };
            const geneva = formatConsulateDetails(ui['home-consulate-geneva-details']);
            const bern = formatConsulateDetails(ui['home-consulate-bern-details']);
            const zurich = formatConsulateDetails(ui['home-consulate-zurich-details']);
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['rec-title']}</span>
                </nav>
                <h1>${ui['rec-h1']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['rec-desc']}</p>
            </div>
            
            <div class="topic-hub-grid">
                <div class="card-hub">
                    <h3>ch.ch</h3>
                    <p>${ui['rec-ch-p']}</p>
                    <a href="https://www.ch.ch" target="_blank" class="read-more">${ui['rec-ch-link']}</a>
                </div>
                <div class="card-hub">
                    <h3>SEM</h3>
                    <p>${ui['rec-sem-p']}</p>
                    <a href="https://www.sem.admin.ch/sem/es/home.html" target="_blank" class="read-more">${ui['rec-sem-link']}</a>
                </div>
                <div class="card-hub">
                    <h3>Comparis</h3>
                    <p>${ui['rec-comp-p']}</p>
                    <a href="https://www.comparis.ch" target="_blank" class="read-more">${ui['rec-comp-link']}</a>
                </div>
            </div>

            <section class="animate-fade-up" style="margin-top: var(--space-xl);">
                <h2 style="margin-top:0;">${ui['lbl-explore-guides']}</h2>
                <div id="category-articles-container"></div>
            </section>

            <section id="cantones" class="animate-fade-up" style="margin-top: var(--space-xl);">
                <h2 style="margin-top:0;">${ui['home-title-cantones']}</h2>
                <p style="margin-bottom:1.5rem; color:var(--text-secondary);">${ui['home-desc-cantones']}</p>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(175px, 1fr)); gap:0.6rem;">
                    <a href="https://www.ag.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Argovia (AG)</a>
                    <a href="https://www.ai.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Appenzell I.Rh. (AI)</a>
                    <a href="https://www.ar.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Appenzell A.Rh. (AR)</a>
                    <a href="https://www.bs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Basilea-Ciudad (BS)</a>
                    <a href="https://www.bl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Basilea-Campo (BL)</a>
                    <a href="https://www.be.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Berna (BE)</a>
                    <a href="https://www.fr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Friburgo (FR)</a>
                    <a href="https://www.ge.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Ginebra (GE)</a>
                    <a href="https://www.gl.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Glaris (GL)</a>
                    <a href="https://www.gr.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Grisones (GR)</a>
                    <a href="https://www.jura.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Jura (JU)</a>
                    <a href="https://www.lu.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Lucerna (LU)</a>
                    <a href="https://www.ne.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Neuchâtel (NE)</a>
                    <a href="https://www.nw.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Nidwalden (NW)</a>
                    <a href="https://www.ow.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Obwalden (OW)</a>
                    <a href="https://www.sh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schaffhausen (SH)</a>
                    <a href="https://www.sz.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Schwyz (SZ)</a>
                    <a href="https://www.so.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Solothurn (SO)</a>
                    <a href="https://www.sg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">San Galo (SG)</a>
                    <a href="https://www.tg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Turgovia (TG)</a>
                    <a href="https://www.ti.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Ticino (TI)</a>
                    <a href="https://www.ur.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Uri (UR)</a>
                    <a href="https://www.vs.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Valais / Wallis (VS)</a>
                    <a href="https://www.vd.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Vaud (VD)</a>
                    <a href="https://www.zg.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zug (ZG)</a>
                    <a href="https://www.zh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zúrich (ZH)</a>
                </div>
            </section>

            <section style="margin-top: var(--space-xl);">
                <h2 style="margin-top:0;">${ui['rec-consulates-title']}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">
                    ${ui['rec-consulates-desc']}
                    <a href="#/consulados-espanoles-suiza" style="color:var(--swiss-red); font-weight:600;">${ui['home-consulados-link']}</a>
                </p>

                <div class="topic-hub-grid" style="margin-top: 0;">
                    <div class="card-hub">
                        <h3>${ui['home-consulate-geneva']}</h3>
                        <p>${geneva.address}${geneva.phone ? `<br>${geneva.phone}` : ''}</p>
                        <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" class="read-more">${ui['rec-official-portal']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['home-consulate-bern']}</h3>
                        <p>${bern.address}${bern.phone ? `<br>${bern.phone}` : ''}</p>
                        <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" class="read-more">${ui['rec-official-portal']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['home-consulate-zurich']}</h3>
                        <p>${zurich.address}${zurich.phone ? `<br>${zurich.phone}` : ''}</p>
                        <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" class="read-more">${ui['rec-official-portal']}</a>
                    </div>
                </div>
            </section>
            `;
        }
    },

    "comunidad": {
        title: "Comunidad de Españoles en Suiza: Ayuda mutua y networking",
        description: "Únete a la principal comunidad de españoles en Suiza. Consejos reales, ayuda entre compatriotas y resolución de dudas sobre la vida en el país.",
        isCategoryHub: false,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['com-nav']}</span>
                </nav>
                <h1>${ui['com-h1']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['com-desc']}</p>
            </div>

            <section class="article-layout" style="padding:0; margin-top:2rem;">
                <div class="article-body">
                    <p>${ui['com-p1']}</p>
                    <p>${ui['com-p2']}</p>
                    <ul>
                        <li>${ui['com-li1']}</li>
                        <li>${ui['com-li2']}</li>
                        <li>${ui['com-li3']}</li>
                    </ul>
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" rel="noopener noreferrer" class="btn" style="background:#1877F2; color:white; display:inline-flex; align-items:center; gap:8px; margin-top:2rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        ${ui['com-btn']}
                    </a>
                </div>
            </section>
            `;
        }
    },

    "contacto": {
        title: "Contacto | Españoles en Suiza - Portal de información",
        description: "¿Tienes dudas o sugerencias? Contacta con el equipo de Españoles en Suiza para colaborar o solicitar información sobre nuestras guías.",
        isCategoryHub: false,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cont-title']}</span>
                </nav>
                <h1>${ui['cont-h1']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cont-desc']}</p>
            </div>

            <section class="article-layout animate-fade-up delay-100" style="padding:0; margin-top:2rem;">
                <div style="background: var(--bg-surface); padding: var(--space-md); border-radius: var(--radius-md); max-width: 700px; margin: 0 auto; width: 100%;">
                    <form id="contact-form" action="https://formspree.io/f/mqkenawv" method="POST">
                        <div class="form-group">
                            <label for="name" class="form-label">${ui['cont-lbl-name']}</label>
                            <input type="text" id="name" name="name" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">${ui['cont-lbl-email']}</label>
                            <input type="email" id="email" name="_replyto" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="message" class="form-label">${ui['cont-lbl-msg']}</label>
                            <textarea id="message" name="message" class="form-control" required></textarea>
                        </div>
                        <!-- Honeypot -->
                        <input type="text" name="_gotcha" style="display:none">
                        <!-- Redirect -->
                        <button type="submit" class="btn btn-primary btn-form">${ui['cont-btn']}</button>
                    </form>
                    <div id="form-status" style="margin-top: 1.5rem; text-align: center; font-weight: 500; font-size: 1.125rem;"></div>
                </div>
            </section>
            
            <script>
                (function() {
                    const form = document.getElementById("contact-form");
                    const status = document.getElementById("form-status");
                    
                    if (form) {
                        form.addEventListener("submit", function(ev) {
                            ev.preventDefault();
                            var data = new FormData(form);
                            fetch(form.action, {
                                method: form.method,
                                body: data,
                                headers: {
                                    'Accept': 'application/json'
                                }
                            }).then(response => {
                                if (response.ok) {
                                    status.innerHTML = "${ui['cont-success']}";
                                    status.style.color = "var(--swiss-red)";
                                    form.reset();
                                } else {
                                    response.json().then(data => {
                                        if (Object.hasOwn(data, 'errors')) {
                                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                                            status.style.color = "var(--text-primary)";
                                        } else {
                                            status.innerHTML = "${ui['cont-error']}";
                                            status.style.color = "var(--text-primary)";
                                        }
                                    })
                                }
                            }).catch(error => {
                                status.innerHTML = "${ui['cont-error']}";
                                status.style.color = "var(--text-primary)";
                            });
                        });
                    }
                })();
            <\/script>
            `;
        }
    }
};

window.siteContent.en.pages = window.siteContent.es.pages;
window.siteContent.fr.pages = window.siteContent.es.pages;
window.siteContent.de.pages = window.siteContent.es.pages;
window.siteContent.it.pages = window.siteContent.es.pages;
