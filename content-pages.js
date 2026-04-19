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
            <section style="margin-bottom: var(--space-xl);">
                <h1 class="sr-only">${ui['home-sr-title']}</h1>
                <p class="sr-only">${ui['home-sr-desc']}</p>

                <!-- Banner + overlay -->
                <div style="position:relative; width:100%; border-radius: var(--radius-md); overflow:hidden; margin-bottom: 2rem;">
                    <img src="media/banner.jpg" alt="${ui['home-banner-alt']}" style="width:100%; max-height:500px; object-fit:cover; object-position:center 45%; display:block; filter:brightness(0.85);">
                    <div style="position:absolute; inset:0;"></div>
                </div>

                <!-- Barre de recherche -->
                <div class="search-container">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="global-search" class="search-input" placeholder="${ui['search-placeholder']}" autocomplete="off">
                    <div id="search-results"></div>
                </div>

                <!-- CTA secondaires -->
                <div class="hero-actions" style="margin-top:1.5rem;">
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" rel="noopener noreferrer" class="btn" style="background:#1877F2; color:white; display:inline-flex; align-items:center; gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        ${ui['home-hero-group-cta']}
                    </a>
                    <a href="https://chat.whatsapp.com/Gd1Zei1Nycu69GM3zpKymC" target="_blank" rel="noopener noreferrer" class="btn" style="background:#25D366; color:white; display:inline-flex; align-items:center; gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 0 0-8.4 15.3l-1 4 4-1A10 10 0 1 0 12 2zm0 18c-1.1 0-2.2-.2-3.2-.6l-.2-.1-2.1.5.5-2.1-.1-.2A8 8 0 1 1 20 12a7.9 7.9 0 0 1-4.2 6.9L14.4 19a6 6 0 0 0 1.6-10.8 5.6 5.6 0 0 0-.7-.3 5.7 5.7 0 0 0-5.3 1.4l-.1.1-.1.1c-.6.6-1.5 1.5-1.5 3.4s.9 2.8 1.6 3.4l.2.2c1.2.9 2.5.9 3.2.9.7 0 1.4-.2 2-.5l.2-.1 1.8 1a8 8 0 0 1-3 1.3z" fill="white"></path></svg>
                        ${ui['home-hero-whatsapp']}
                    </a>
                </div>

                <!-- Tagline + subtítulo bajo los botones -->
                <p style="color: var(--color-primary, #c8102e); font-size:clamp(1.2rem,3vw,1.8rem); font-weight:700; text-align:center; margin-top:1.25rem; margin-bottom:0.4rem;">
                    ${ui['home-hero-tagline'] || 'Tu guía de referencia para vivir y trabajar en Suiza'}
                </p>
                <p style="color: var(--color-primary, #c8102e); font-size:1rem; font-weight:500; text-align:center; margin:0; max-width:600px; margin-left:auto; margin-right:auto;">
                    ${ui['home-hero-sub'] || 'Información práctica, verificada y directamente explotable sobre permisos, trabajo, vivienda, fiscalidad y vida diaria.'}
                </p>

                <!-- STATS STRIP -->
                <div class="stats-strip animate-fade-up">
                    <div class="stat-item">
                        <span class="stat-number">80k+</span>
                        <span class="stat-label">${ui['home-stats-community']}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">45+</span>
                        <span class="stat-label">${ui['home-stats-guides']}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4</span>
                        <span class="stat-label">${ui['home-stats-languages']}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">26</span>
                        <span class="stat-label">${ui['home-stats-cantons']}</span>
                    </div>
                </div>
            </section>

            <section class="animate-fade-up delay-050" style="margin-top: var(--space-lg);">
                <h2 style="border-bottom:none; margin-bottom: 1rem;">${ui['home-title-situation']}</h2>
                <div class="quick-start-grid">
                    <a href="#/residir-en-suiza-sin-trabajo" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"></circle><path d="M6 20c1.5-3.5 4-5 6-5s4.5 1.5 6 5"></path><path d="M4 12h4"></path><path d="M2 14l2-2 2 2"></path></svg>
                        <h3>${ui['home-situation-no-job']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['home-situation-no-job-desc']}</span>
                    </a>
                    <a href="#/registrarse-en-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        <h3>${ui['home-situation-with-contract']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['home-situation-with-contract-desc']}</span>
                    </a>
                    <a href="#/introduccion-suiza-como-funciona" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"></path><path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"></path></svg>
                        <h3>${ui['home-situation-settled']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['home-situation-settled-desc']}</span>
                    </a>
                </div>
            </section>

            <!-- SECCIÓN 1: Empezar aquí -->
            <section class="animate-fade-up delay-100" style="margin-top: var(--space-xl);">
                <h2 style="border-bottom:none; margin-bottom: 0.5rem;">${ui['home-title-start']}</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--text-secondary);">${ui['home-desc-start']}</p>
                <div class="quick-start-grid">
	                    <a href="#/checklist-tramites-llegada-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <h3>${ui['start-card-2-title']}</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">${ui['start-card-2-desc']}</span>
                    </a>
	                    <a href="#/trabajo" class="card-icon">
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
	                    <a href="#/impuestos-en-suiza" class="card-icon">
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

            <section class="animate-fade-up delay-075" style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-latest']}</h2>
                <p style="margin-bottom:2rem; color: var(--text-secondary);">${ui['home-desc-latest']}</p>
                <div id="home-latest-articles-container"></div>
            </section>

            <!-- SECCIÓN 2: Fuentes oficiales -->
            <section class="animate-fade-up delay-200" style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-fuentes']}</h2>
                <p style="margin-bottom:2rem; color:var(--text-secondary);">${ui['home-desc-fuentes']}</p>
                <div class="featured-grid">
                    <a href="https://www.ch.ch" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-federal']}</div>
                            <h3>ch.ch</h3>
                            <p>${ui['fuente-ch-desc']}</p>
                        </div>
                    </a>
                    <a href="https://www.sem.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-migracion']}</div>
                            <h3>SEM</h3>
                            <p>${ui['fuente-sem-desc']}</p>
                        </div>
                    </a>
                    <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-estadistica']}</div>
                            <h3>OFS / BFS</h3>
                            <p>${ui['fuente-bfs-desc']}</p>
                        </div>
                    </a>
                    <a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-economia']}</div>
                            <h3>SECO</h3>
                            <p>${ui['fuente-seco-desc']}</p>
                        </div>
                    </a>
                    <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-consulado']} · GE · VD · VS · NE · FR · JU</div>
                            <h3>${ui['home-consulate-geneva']}</h3>
                            <p>${geneva.address}${geneva.phone ? `<br>${geneva.phone}` : ''}</p>
                        </div>
                    </a>
                    <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-consulado']} · BE · SO · FR · VS</div>
                            <h3>${ui['home-consulate-bern']}</h3>
                            <p>${bern.address}${bern.phone ? `<br>${bern.phone}` : ''}</p>
                        </div>
                    </a>
                    <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" class="card-article no-image">
                        <div class="card-article-body">
                            <div class="card-meta">${ui['fuente-label-consulado']} · ZH · BS · LU · AG · TI ···</div>
                            <h3>${ui['home-consulate-zurich']}</h3>
                            <p>${zurich.address}${zurich.phone ? `<br>${zurich.phone}` : ''}</p>
                        </div>
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
        title: "Recursos oficiales y herramientas utiles para vivir en Suiza",
        description: "Fuentes oficiales suizas, servicios cantonales, trabajo, salud y herramientas practicas para espanoles en Suiza. Separacion clara entre portales oficiales y servicios privados.",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            const resourcesCopy = {
                es: {
                    breadcrumb: "Recursos",
                    title: "Recursos para vivir en Suiza",
                    intro: "Fuentes oficiales de la Confederacion, servicios cantonales y herramientas practicas. Los enlaces no oficiales estan claramente identificados al final de la pagina.",
                    badgeOfficial: "Oficial",
                    badgePrivate: "No oficial",
                    federalTitle: "Fuentes oficiales — Confederacion Suiza",
                    federalDesc: "Portales federales fiables. Validos para tramites, informacion legal y datos estadisticos.",
                    chDesc: "Portal unico del gobierno suizo. Tramites, informacion para residentes, servicios por canton y formularios.",
                    chCta: "Abrir ch.ch",
                    semDesc: "Secretaria de Estado de Migracion. Permisos de residencia, reagrupacion familiar, nacionalidad y asilo.",
                    semCta: "Abrir SEM",
                    bfsDesc: "Oficina Federal de Estadistica. Datos oficiales sobre poblacion, salarios, coste de vida y mercado laboral.",
                    bfsCta: "Abrir BFS",
                    estvDesc: "Administracion Federal de Contribuciones. Impuestos federales, IVA, impuesto a la fuente (Quellensteuer).",
                    estvCta: "Abrir ESTV",
                    secoDesc: "Secretaria de Estado de Economia. Desempleo (RAV), condiciones de trabajo, mercado laboral y legislacion laboral.",
                    secoCta: "Abrir SECO",
                    bsvDesc: "Oficina Federal de Seguros Sociales. AHV/AVS (jubilacion), AI (invalidez), subsidios familiares y prestaciones complementarias.",
                    bsvCta: "Abrir BSV",
                    bagDesc: "Oficina Federal de Salud Publica. LAMal, vacunas, recomendaciones sanitarias y regulacion del sistema de salud.",
                    bagCta: "Abrir BAG",
                    healthTitle: "Seguro de salud — Comparador oficial de primas",
                    healthDesc: "El unico comparador de primas LAMal publicado por la Confederacion. No es un sitio privado.",
                    priminfoDesc: "Comparador oficial de primas del seguro de salud (LAMal). Publicado por la Confederacion Suiza. Permite comparar primas por canton, edad y modelo de seguro. Es la referencia legal, no un portal privado.",
                    priminfoCta: "Comparar primas (oficial)",
                    workTitle: "Trabajo y formacion profesional",
                    workDesc: "Portales federales para empleo, desempleo (RAV), reconocimiento de diplomas y formacion.",
                    travailDesc: "Portal federal de empleo. Bolsa de trabajo, inscripcion en el RAV, condiciones de desempleo y recursos para la reinsercion laboral.",
                    travailCta: "Abrir travail.swiss",
                    sefriDesc: "Secretaria de Estado de Educacion, Investigacion e Innovacion. Reconocimiento oficial de diplomas extranjeros y formacion profesional.",
                    sefriCta: "Abrir SEFRI",
                    dailyTitle: "Vida practica",
                    dailyDesc: "Servicios publicos de uso cotidiano en Suiza.",
                    sbbDesc: "Ferrocarriles Federales Suizos. Horarios, billetes, abonos (Halbtax, AG), transporte publico nacional e internacional.",
                    sbbCta: "Abrir SBB.ch",
                    postDesc: "Correos suizos. Envios nacionales e internacionales, cambio de domicilio, servicios financieros PostFinance.",
                    postCta: "Abrir Post.ch",
                    spainTitle: "Espana en Suiza",
                    spainDesc: "Consulados espanoles para tramites de pasaporte, partidas, empadronamiento consular y documentacion.",
                    spainGuide: "Guia completa de consulados",
                    exterioresTitle: "Ministerio de Asuntos Exteriores",
                    exterioresDesc: "Gobierno de Espana. Informacion consular, tramites en el exterior, ciudadania y viajes.",
                    exterioresCta: "Abrir Exteriores.gob.es",
                    cantonsDesc: "En Suiza, los tramites dependen del canton: permisos, impuestos, escuelas y registro civil los gestiona cada canton por separado. Selecciona el tuyo para acceder directamente a sus servicios.",
                    cantonsExampleTitle: "Ejemplo — Ginebra (GE):",
                    cantonsExampleBody: "El OCPM gestiona los permisos de residencia. El comparador cantonal de primas LAMal esta en ge.ch/assurance-maladie.",
                    guidesTitle: "Explorar guias",
                    toolsTitle: "Herramientas utiles — no oficiales",
                    toolsWarningTitle: "Aviso:",
                    toolsWarningBody: "Los servicios de esta seccion son herramientas privadas. Son utiles en la practica, pero no son fuentes oficiales del gobierno suizo y no tienen validez legal como referencia para tramites administrativos.",
                    comparisDesc: "Comparador privado suizo. Permite comparar primas de seguros de salud, seguros de hogar, precios de alquiler y otros servicios. No es fuente oficial. Para primas LAMal oficiales, usa priminfo.admin.ch.",
                    comparisCta: "Abrir Comparis.ch",
                    homegateDesc: "Portal inmobiliario privado. Pisos y casas en alquiler o venta en toda Suiza. Herramienta practica para buscar vivienda, sin validez oficial.",
                    homegateCta: "Abrir Homegate.ch",
                    jobsDesc: "Portal privado de empleo. Ofertas de trabajo en Suiza por sector, canton y idioma. Complementario al portal oficial travail.swiss.",
                    jobsCta: "Abrir Jobs.ch"
                },
                en: {
                    breadcrumb: "Resources",
                    title: "Resources for living in Switzerland",
                    intro: "Official Confederation sources, cantonal services, and practical tools. Non-official links are clearly marked at the end of the page.",
                    badgeOfficial: "Official",
                    badgePrivate: "Unofficial",
                    federalTitle: "Official sources — Swiss Confederation",
                    federalDesc: "Reliable federal portals for procedures, legal information, and official statistics.",
                    chDesc: "Central Swiss government portal. Procedures, resident information, cantonal services, and forms.",
                    chCta: "Open ch.ch",
                    semDesc: "State Secretariat for Migration. Residence permits, family reunification, nationality, and asylum.",
                    semCta: "Open SEM",
                    bfsDesc: "Federal Statistical Office. Official data on population, salaries, cost of living, and the labour market.",
                    bfsCta: "Open BFS",
                    estvDesc: "Federal Tax Administration. Federal taxes, VAT, and withholding tax.",
                    estvCta: "Open ESTV",
                    secoDesc: "State Secretariat for Economic Affairs. Unemployment, labour conditions, labour market, and employment law.",
                    secoCta: "Open SECO",
                    bsvDesc: "Federal Social Insurance Office. AHV/AVS pensions, disability insurance, family allowances, and supplementary benefits.",
                    bsvCta: "Open BSV",
                    bagDesc: "Federal Office of Public Health. LAMal, vaccines, health recommendations, and health system regulation.",
                    bagCta: "Open BAG",
                    healthTitle: "Health insurance — official premium comparison",
                    healthDesc: "The only LAMal premium comparison tool published by the Confederation. It is not a private website.",
                    priminfoDesc: "Official health-insurance premium comparison for LAMal. Published by the Swiss Confederation. It lets you compare premiums by canton, age, and insurance model. It is the legal reference, not a private portal.",
                    priminfoCta: "Compare premiums (official)",
                    workTitle: "Work and vocational training",
                    workDesc: "Federal portals for jobs, unemployment benefits, diploma recognition, and training.",
                    travailDesc: "Federal employment portal. Job listings, RAV registration, unemployment conditions, and reintegration resources.",
                    travailCta: "Open travail.swiss",
                    sefriDesc: "State Secretariat for Education, Research and Innovation. Official recognition of foreign diplomas and vocational training.",
                    sefriCta: "Open SEFRI",
                    dailyTitle: "Daily life",
                    dailyDesc: "Public services used in everyday life in Switzerland.",
                    sbbDesc: "Swiss Federal Railways. Timetables, tickets, travelcards, and national and international public transport.",
                    sbbCta: "Open SBB.ch",
                    postDesc: "Swiss Post. Domestic and international mail, address changes, and PostFinance services.",
                    postCta: "Open Post.ch",
                    spainTitle: "Spain in Switzerland",
                    spainDesc: "Spanish consulates for passports, certificates, consular registration, and documentation.",
                    spainGuide: "Full consulate guide",
                    exterioresTitle: "Ministry of Foreign Affairs",
                    exterioresDesc: "Government of Spain. Consular information, procedures abroad, citizenship, and travel.",
                    exterioresCta: "Open Exteriores.gob.es",
                    cantonsDesc: "In Switzerland, many procedures depend on the canton: permits, taxes, schools, and civil registry are handled separately by each canton. Choose yours to access its services directly.",
                    cantonsExampleTitle: "Example — Geneva (GE):",
                    cantonsExampleBody: "The OCPM handles residence permits. The cantonal LAMal premium comparator is available at ge.ch/assurance-maladie.",
                    guidesTitle: "Explore guides",
                    toolsTitle: "Useful tools — unofficial",
                    toolsWarningTitle: "Notice:",
                    toolsWarningBody: "The services in this section are private tools. They are useful in practice, but they are not official Swiss government sources and have no legal value for administrative procedures.",
                    comparisDesc: "Private Swiss comparison platform. It lets you compare health-insurance premiums, household insurance, rents, and other services. It is not an official source. For official LAMal premiums, use priminfo.admin.ch.",
                    comparisCta: "Open Comparis.ch",
                    homegateDesc: "Private real-estate portal. Flats and houses for rent or sale across Switzerland. Useful in practice, but not an official source.",
                    homegateCta: "Open Homegate.ch",
                    jobsDesc: "Private jobs portal. Job offers in Switzerland by sector, canton, and language. Complementary to the official portail travail.swiss.",
                    jobsCta: "Open Jobs.ch"
                },
                fr: {
                    breadcrumb: "Ressources",
                    title: "Ressources pour vivre en Suisse",
                    intro: "Sources officielles de la Confédération, services cantonaux et outils pratiques. Les liens non officiels sont clairement identifiés en fin de page.",
                    badgeOfficial: "Officiel",
                    badgePrivate: "Non officiel",
                    federalTitle: "Sources officielles — Confédération suisse",
                    federalDesc: "Portails fédéraux fiables pour les démarches, les informations légales et les statistiques officielles.",
                    chDesc: "Portail central du gouvernement suisse. Démarches, informations pour les résidents, services cantonaux et formulaires.",
                    chCta: "Ouvrir ch.ch",
                    semDesc: "Secrétariat d'État aux migrations. Permis de séjour, regroupement familial, nationalité et asile.",
                    semCta: "Ouvrir le SEM",
                    bfsDesc: "Office fédéral de la statistique. Données officielles sur la population, les salaires, le coût de la vie et le marché du travail.",
                    bfsCta: "Ouvrir l'OFS",
                    estvDesc: "Administration fédérale des contributions. Impôts fédéraux, TVA et impôt à la source.",
                    estvCta: "Ouvrir l'AFC",
                    secoDesc: "Secrétariat d'État à l'économie. Chômage, conditions de travail, marché du travail et droit du travail.",
                    secoCta: "Ouvrir le SECO",
                    bsvDesc: "Office fédéral des assurances sociales. AVS, AI, allocations familiales et prestations complémentaires.",
                    bsvCta: "Ouvrir l'OFAS",
                    bagDesc: "Office fédéral de la santé publique. LAMal, vaccins, recommandations sanitaires et réglementation du système de santé.",
                    bagCta: "Ouvrir l'OFSP",
                    healthTitle: "Assurance maladie — comparateur officiel des primes",
                    healthDesc: "Le seul comparateur de primes LAMal publié par la Confédération. Ce n'est pas un site privé.",
                    priminfoDesc: "Comparateur officiel des primes d'assurance maladie LAMal. Publié par la Confédération suisse. Il permet de comparer les primes par canton, âge et modèle d'assurance. C'est la référence légale, pas un portail privé.",
                    priminfoCta: "Comparer les primes (officiel)",
                    workTitle: "Travail et formation professionnelle",
                    workDesc: "Portails fédéraux pour l'emploi, le chômage, la reconnaissance des diplômes et la formation.",
                    travailDesc: "Portail fédéral de l'emploi. Offres, inscription au RAV, conditions du chômage et ressources de réinsertion.",
                    travailCta: "Ouvrir travail.swiss",
                    sefriDesc: "Secrétariat d'État à la formation, à la recherche et à l'innovation. Reconnaissance officielle des diplômes étrangers et formation professionnelle.",
                    sefriCta: "Ouvrir le SEFRI",
                    dailyTitle: "Vie pratique",
                    dailyDesc: "Services publics utiles au quotidien en Suisse.",
                    sbbDesc: "Chemins de fer fédéraux suisses. Horaires, billets, abonnements et transports publics nationaux et internationaux.",
                    sbbCta: "Ouvrir CFF.ch",
                    postDesc: "La Poste suisse. Envois nationaux et internationaux, changement d'adresse et services PostFinance.",
                    postCta: "Ouvrir post.ch",
                    spainTitle: "L'Espagne en Suisse",
                    spainDesc: "Consulats d'Espagne pour les passeports, actes d'état civil, inscription consulaire et documentation.",
                    spainGuide: "Guide complet des consulats",
                    exterioresTitle: "Ministère des Affaires étrangères",
                    exterioresDesc: "Gouvernement d'Espagne. Informations consulaires, démarches à l'étranger, citoyenneté et voyages.",
                    exterioresCta: "Ouvrir exteriores.gob.es",
                    cantonsDesc: "En Suisse, de nombreuses démarches dépendent du canton : permis, impôts, écoles et état civil sont gérés séparément par chaque canton. Sélectionnez le vôtre pour accéder directement à ses services.",
                    cantonsExampleTitle: "Exemple — Genève (GE) :",
                    cantonsExampleBody: "L'OCPM gère les permis de séjour. Le comparateur cantonal des primes LAMal se trouve sur ge.ch/assurance-maladie.",
                    guidesTitle: "Explorer les guides",
                    toolsTitle: "Outils utiles — non officiels",
                    toolsWarningTitle: "Avertissement :",
                    toolsWarningBody: "Les services de cette section sont des outils privés. Ils sont utiles en pratique, mais ne constituent pas des sources officielles du gouvernement suisse et n'ont aucune valeur légale pour les démarches administratives.",
                    comparisDesc: "Comparateur privé suisse. Il permet de comparer les primes d'assurance maladie, les assurances ménage, les loyers et d'autres services. Ce n'est pas une source officielle. Pour les primes LAMal officielles, utilisez priminfo.admin.ch.",
                    comparisCta: "Ouvrir Comparis.ch",
                    homegateDesc: "Portail immobilier privé. Appartements et maisons à louer ou à vendre dans toute la Suisse. Utile en pratique, mais sans valeur officielle.",
                    homegateCta: "Ouvrir Homegate.ch",
                    jobsDesc: "Portail privé d'emploi. Offres en Suisse par secteur, canton et langue. Complémentaire au portail officiel travail.swiss.",
                    jobsCta: "Ouvrir Jobs.ch"
                },
                de: {
                    breadcrumb: "Ressourcen",
                    title: "Ressourcen für das Leben in der Schweiz",
                    intro: "Offizielle Quellen der Eidgenossenschaft, kantonale Dienste und praktische Werkzeuge. Nicht offizielle Links sind am Seitenende klar gekennzeichnet.",
                    badgeOfficial: "Offiziell",
                    badgePrivate: "Nicht offiziell",
                    federalTitle: "Offizielle Quellen — Schweizer Eidgenossenschaft",
                    federalDesc: "Verlässliche Bundesportale für Verfahren, Rechtsinformationen und offizielle Statistiken.",
                    chDesc: "Zentrales Schweizer Regierungsportal. Verfahren, Informationen für Einwohner, kantonale Dienste und Formulare.",
                    chCta: "ch.ch öffnen",
                    semDesc: "Staatssekretariat für Migration. Aufenthaltsbewilligungen, Familiennachzug, Staatsangehörigkeit und Asyl.",
                    semCta: "SEM öffnen",
                    bfsDesc: "Bundesamt für Statistik. Offizielle Daten zu Bevölkerung, Löhnen, Lebenshaltungskosten und Arbeitsmarkt.",
                    bfsCta: "BFS öffnen",
                    estvDesc: "Eidgenössische Steuerverwaltung. Bundessteuern, Mehrwertsteuer und Quellensteuer.",
                    estvCta: "ESTV öffnen",
                    secoDesc: "Staatssekretariat für Wirtschaft. Arbeitslosigkeit, Arbeitsbedingungen, Arbeitsmarkt und Arbeitsrecht.",
                    secoCta: "SECO öffnen",
                    bsvDesc: "Bundesamt für Sozialversicherungen. AHV, IV, Familienzulagen und Ergänzungsleistungen.",
                    bsvCta: "BSV öffnen",
                    bagDesc: "Bundesamt für Gesundheit. LAMal, Impfungen, Gesundheitsempfehlungen und Regulierung des Gesundheitssystems.",
                    bagCta: "BAG öffnen",
                    healthTitle: "Krankenversicherung — offizieller Prämienvergleich",
                    healthDesc: "Der einzige LAMal-Prämienvergleich, der von der Eidgenossenschaft veröffentlicht wird. Es ist keine private Website.",
                    priminfoDesc: "Offizieller Vergleich der Krankenversicherungsprämien für LAMal. Veröffentlicht von der Schweizer Eidgenossenschaft. Er erlaubt den Vergleich nach Kanton, Alter und Versicherungsmodell. Er ist die rechtliche Referenz, kein privates Portal.",
                    priminfoCta: "Prämien vergleichen (offiziell)",
                    workTitle: "Arbeit und Berufsbildung",
                    workDesc: "Bundesportale für Jobs, Arbeitslosigkeit, Diplomanerkennung und Ausbildung.",
                    travailDesc: "Bundesportal für Beschäftigung. Stellenangebote, RAV-Anmeldung, Bedingungen der Arbeitslosigkeit und Wiedereingliederung.",
                    travailCta: "travail.swiss öffnen",
                    sefriDesc: "Staatssekretariat für Bildung, Forschung und Innovation. Offizielle Anerkennung ausländischer Diplome und Berufsbildung.",
                    sefriCta: "SEFRI öffnen",
                    dailyTitle: "Alltag",
                    dailyDesc: "Öffentliche Dienste für den täglichen Gebrauch in der Schweiz.",
                    sbbDesc: "Schweizerische Bundesbahnen. Fahrpläne, Billette, Abonnemente und nationaler wie internationaler öffentlicher Verkehr.",
                    sbbCta: "SBB.ch öffnen",
                    postDesc: "Schweizerische Post. Nationale und internationale Sendungen, Adressänderung und PostFinance-Dienste.",
                    postCta: "Post.ch öffnen",
                    spainTitle: "Spanien in der Schweiz",
                    spainDesc: "Spanische Konsulate für Pässe, Urkunden, konsularische Anmeldung und Dokumentation.",
                    spainGuide: "Vollständiger Konsulatsleitfaden",
                    exterioresTitle: "Ministerium für Auswärtige Angelegenheiten",
                    exterioresDesc: "Regierung Spaniens. Konsularische Informationen, Verfahren im Ausland, Staatsangehörigkeit und Reisen.",
                    exterioresCta: "Exteriores.gob.es öffnen",
                    cantonsDesc: "In der Schweiz hängen viele Verfahren vom Kanton ab: Bewilligungen, Steuern, Schulen und Zivilstandsregister werden von jedem Kanton separat verwaltet. Wählen Sie Ihren Kanton, um direkt auf seine Dienste zuzugreifen.",
                    cantonsExampleTitle: "Beispiel — Genf (GE):",
                    cantonsExampleBody: "Das OCPM verwaltet die Aufenthaltsbewilligungen. Der kantonale Vergleich der LAMal-Prämien befindet sich auf ge.ch/assurance-maladie.",
                    guidesTitle: "Leitfäden erkunden",
                    toolsTitle: "Nützliche Werkzeuge — nicht offiziell",
                    toolsWarningTitle: "Hinweis:",
                    toolsWarningBody: "Die Dienste in diesem Abschnitt sind private Werkzeuge. Sie sind in der Praxis nützlich, aber keine offiziellen Quellen der Schweizer Behörden und haben keinen rechtlichen Wert für Verwaltungsverfahren.",
                    comparisDesc: "Privates Schweizer Vergleichsportal. Es ermöglicht den Vergleich von Krankenkassenprämien, Hausratversicherungen, Mieten und anderen Diensten. Es ist keine offizielle Quelle. Für offizielle LAMal-Prämien verwenden Sie priminfo.admin.ch.",
                    comparisCta: "Comparis.ch öffnen",
                    homegateDesc: "Privates Immobilienportal. Wohnungen und Häuser zur Miete oder zum Kauf in der ganzen Schweiz. Praktisch für die Suche, aber ohne amtlichen Charakter.",
                    homegateCta: "Homegate.ch öffnen",
                    jobsDesc: "Privates Stellenportal. Stellenangebote in der Schweiz nach Branche, Kanton und Sprache. Ergänzend zum offiziellen Portal travail.swiss.",
                    jobsCta: "Jobs.ch öffnen"
                },
                it: {
                    breadcrumb: "Risorse",
                    title: "Risorse per vivere in Svizzera",
                    intro: "Fonti ufficiali della Confederazione, servizi cantonali e strumenti pratici. I link non ufficiali sono chiaramente indicati alla fine della pagina.",
                    badgeOfficial: "Ufficiale",
                    badgePrivate: "Non ufficiale",
                    federalTitle: "Fonti ufficiali — Confederazione Svizzera",
                    federalDesc: "Portali federali affidabili per pratiche, informazioni legali e statistiche ufficiali.",
                    chDesc: "Portale centrale del governo svizzero. Pratiche, informazioni per i residenti, servizi cantonali e formulari.",
                    chCta: "Apri ch.ch",
                    semDesc: "Segreteria di Stato della migrazione. Permessi di soggiorno, ricongiungimento familiare, cittadinanza e asilo.",
                    semCta: "Apri SEM",
                    bfsDesc: "Ufficio federale di statistica. Dati ufficiali su popolazione, salari, costo della vita e mercato del lavoro.",
                    bfsCta: "Apri BFS",
                    estvDesc: "Amministrazione federale delle contribuzioni. Imposte federali, IVA e imposta alla fonte.",
                    estvCta: "Apri ESTV",
                    secoDesc: "Segreteria di Stato dell'economia. Disoccupazione, condizioni di lavoro, mercato del lavoro e diritto del lavoro.",
                    secoCta: "Apri SECO",
                    bsvDesc: "Ufficio federale delle assicurazioni sociali. AVS, AI, assegni familiari e prestazioni complementari.",
                    bsvCta: "Apri BSV",
                    bagDesc: "Ufficio federale della sanità pubblica. LAMal, vaccini, raccomandazioni sanitarie e regolazione del sistema sanitario.",
                    bagCta: "Apri BAG",
                    healthTitle: "Assicurazione malattia — comparatore ufficiale dei premi",
                    healthDesc: "L'unico comparatore dei premi LAMal pubblicato dalla Confederazione. Non è un sito privato.",
                    priminfoDesc: "Comparatore ufficiale dei premi dell'assicurazione malattia LAMal. Pubblicato dalla Confederazione Svizzera. Consente di confrontare i premi per cantone, età e modello assicurativo. È il riferimento legale, non un portale privato.",
                    priminfoCta: "Confronta i premi (ufficiale)",
                    workTitle: "Lavoro e formazione professionale",
                    workDesc: "Portali federali per lavoro, disoccupazione, riconoscimento dei diplomi e formazione.",
                    travailDesc: "Portale federale del lavoro. Offerte, iscrizione al RAV, condizioni della disoccupazione e risorse per il reinserimento.",
                    travailCta: "Apri travail.swiss",
                    sefriDesc: "Segreteria di Stato per la formazione, la ricerca e l'innovazione. Riconoscimento ufficiale dei diplomi esteri e formazione professionale.",
                    sefriCta: "Apri SEFRI",
                    dailyTitle: "Vita pratica",
                    dailyDesc: "Servizi pubblici di uso quotidiano in Svizzera.",
                    sbbDesc: "Ferrovie Federali Svizzere. Orari, biglietti, abbonamenti e trasporto pubblico nazionale e internazionale.",
                    sbbCta: "Apri SBB.ch",
                    postDesc: "Posta svizzera. Spedizioni nazionali e internazionali, cambio di indirizzo e servizi PostFinance.",
                    postCta: "Apri Post.ch",
                    spainTitle: "Spagna in Svizzera",
                    spainDesc: "Consolati spagnoli per passaporti, certificati, iscrizione consolare e documentazione.",
                    spainGuide: "Guida completa ai consolati",
                    exterioresTitle: "Ministero degli Affari Esteri",
                    exterioresDesc: "Governo della Spagna. Informazioni consolari, pratiche all'estero, cittadinanza e viaggi.",
                    exterioresCta: "Apri Exteriores.gob.es",
                    cantonsDesc: "In Svizzera molte pratiche dipendono dal cantone: permessi, imposte, scuole e stato civile sono gestiti separatamente da ciascun cantone. Seleziona il tuo per accedere direttamente ai servizi.",
                    cantonsExampleTitle: "Esempio — Ginevra (GE):",
                    cantonsExampleBody: "L'OCPM gestisce i permessi di soggiorno. Il comparatore cantonale dei premi LAMal si trova su ge.ch/assurance-maladie.",
                    guidesTitle: "Esplora le guide",
                    toolsTitle: "Strumenti utili — non ufficiali",
                    toolsWarningTitle: "Avviso:",
                    toolsWarningBody: "I servizi di questa sezione sono strumenti privati. Sono utili nella pratica, ma non sono fonti ufficiali del governo svizzero e non hanno valore legale per le pratiche amministrative.",
                    comparisDesc: "Comparatore privato svizzero. Permette di confrontare premi dell'assicurazione malattia, assicurazioni casa, affitti e altri servizi. Non è una fonte ufficiale. Per i premi LAMal ufficiali, usa priminfo.admin.ch.",
                    comparisCta: "Apri Comparis.ch",
                    homegateDesc: "Portale immobiliare privato. Appartamenti e case in affitto o vendita in tutta la Svizzera. Utile nella pratica, ma senza valore ufficiale.",
                    homegateCta: "Apri Homegate.ch",
                    jobsDesc: "Portale privato di lavoro. Offerte in Svizzera per settore, cantone e lingua. Complementare al portale ufficiale travail.swiss.",
                    jobsCta: "Apri Jobs.ch"
                }
            };
            const copy = resourcesCopy[currentLang] || resourcesCopy.es;
            const resourcesLinks = {
                es: {
                    ch: "https://www.ch.ch/es",
                    sem: "https://www.sem.admin.ch/sem/es/home.html",
                    bfs: "https://www.bfs.admin.ch/bfs/es/home.html",
                    estv: "https://www.estv.admin.ch/estv/es/home.html",
                    bsv: "https://www.bsv.admin.ch/bsv/es/home.html",
                    bag: "https://www.bag.admin.ch/bag/es/home.html",
                    priminfo: "https://www.priminfo.admin.ch/es/praemien",
                    travail: "https://www.travail.swiss/es",
                    sefri: "https://www.sefri.admin.ch/sefri/es/home.html",
                    sbb: "https://www.sbb.ch/es",
                    post: "https://www.post.ch/es"
                },
                en: {
                    ch: "https://www.ch.ch/en",
                    sem: "https://www.sem.admin.ch/sem/en/home.html",
                    bfs: "https://www.bfs.admin.ch/bfs/en/home.html",
                    estv: "https://www.estv.admin.ch/estv/en/home.html",
                    bsv: "https://www.bsv.admin.ch/bsv/en/home.html",
                    bag: "https://www.bag.admin.ch/bag/en/home.html",
                    priminfo: "https://www.priminfo.admin.ch/en/premiums",
                    travail: "https://www.travail.swiss/en",
                    sefri: "https://www.sefri.admin.ch/sefri/en/home.html",
                    sbb: "https://www.sbb.ch/en",
                    post: "https://www.post.ch/en"
                },
                fr: {
                    ch: "https://www.ch.ch/fr",
                    sem: "https://www.sem.admin.ch/sem/fr/home.html",
                    bfs: "https://www.bfs.admin.ch/bfs/fr/home.html",
                    estv: "https://www.estv.admin.ch/estv/fr/home.html",
                    bsv: "https://www.bsv.admin.ch/bsv/fr/home.html",
                    bag: "https://www.bag.admin.ch/bag/fr/home.html",
                    priminfo: "https://www.priminfo.admin.ch/fr/primes",
                    travail: "https://www.travail.swiss/fr",
                    sefri: "https://www.sefri.admin.ch/sefri/fr/home.html",
                    sbb: "https://www.sbb.ch/fr",
                    post: "https://www.post.ch/fr"
                },
                de: {
                    ch: "https://www.ch.ch/de",
                    sem: "https://www.sem.admin.ch/sem/de/home.html",
                    bfs: "https://www.bfs.admin.ch/bfs/de/home.html",
                    estv: "https://www.estv.admin.ch/estv/de/home.html",
                    bsv: "https://www.bsv.admin.ch/bsv/de/home.html",
                    bag: "https://www.bag.admin.ch/bag/de/home.html",
                    priminfo: "https://www.priminfo.admin.ch/de/praemien",
                    travail: "https://www.travail.swiss/de",
                    sefri: "https://www.sefri.admin.ch/sefri/de/home.html",
                    sbb: "https://www.sbb.ch/de",
                    post: "https://www.post.ch/de"
                },
                it: {
                    ch: "https://www.ch.ch/it",
                    sem: "https://www.sem.admin.ch/sem/it/home.html",
                    bfs: "https://www.bfs.admin.ch/bfs/it/home.html",
                    estv: "https://www.estv.admin.ch/estv/it/home.html",
                    bsv: "https://www.bsv.admin.ch/bsv/it/home.html",
                    bag: "https://www.bag.admin.ch/bag/it/home.html",
                    priminfo: "https://www.priminfo.admin.ch/it/premi",
                    travail: "https://www.travail.swiss/it",
                    sefri: "https://www.sefri.admin.ch/sefri/it/home.html",
                    sbb: "https://www.sbb.ch/it",
                    post: "https://www.post.ch/it"
                }
            };
            const resourcesCantons = [
                { href: "https://www.ag.ch", code: "AG", labels: { es: "Argovia", en: "Aargau", fr: "Argovie", de: "Aargau", it: "Argovia" } },
                { href: "https://www.ai.ch", code: "AI", labels: { es: "Appenzell I.Rh.", en: "Appenzell Innerrhoden", fr: "Appenzell Rhodes-Intérieures", de: "Appenzell Innerrhoden", it: "Appenzello Interno" } },
                { href: "https://www.ar.ch", code: "AR", labels: { es: "Appenzell A.Rh.", en: "Appenzell Ausserrhoden", fr: "Appenzell Rhodes-Extérieures", de: "Appenzell Ausserrhoden", it: "Appenzello Esterno" } },
                { href: "https://www.bs.ch", code: "BS", labels: { es: "Basilea-Ciudad", en: "Basel-Stadt", fr: "Bâle-Ville", de: "Basel-Stadt", it: "Basilea Città" } },
                { href: "https://www.bl.ch", code: "BL", labels: { es: "Basilea-Campo", en: "Basel-Landschaft", fr: "Bâle-Campagne", de: "Basel-Landschaft", it: "Basilea Campagna" } },
                { href: "https://www.be.ch", code: "BE", labels: { es: "Berna", en: "Bern", fr: "Berne", de: "Bern", it: "Berna" } },
                { href: "https://www.fr.ch", code: "FR", labels: { es: "Friburgo", en: "Fribourg", fr: "Fribourg", de: "Freiburg", it: "Friburgo" } },
                { href: "https://www.ge.ch", code: "GE", labels: { es: "Ginebra", en: "Geneva", fr: "Genève", de: "Genf", it: "Ginevra" } },
                { href: "https://www.gl.ch", code: "GL", labels: { es: "Glaris", en: "Glarus", fr: "Glaris", de: "Glarus", it: "Glarona" } },
                { href: "https://www.gr.ch", code: "GR", labels: { es: "Grisones", en: "Graubünden", fr: "Grisons", de: "Graubünden", it: "Grigioni" } },
                { href: "https://www.jura.ch", code: "JU", labels: { es: "Jura", en: "Jura", fr: "Jura", de: "Jura", it: "Giura" } },
                { href: "https://www.lu.ch", code: "LU", labels: { es: "Lucerna", en: "Lucerne", fr: "Lucerne", de: "Luzern", it: "Lucerna" } },
                { href: "https://www.ne.ch", code: "NE", labels: { es: "Neuchatel", en: "Neuchâtel", fr: "Neuchâtel", de: "Neuenburg", it: "Neuchâtel" } },
                { href: "https://www.nw.ch", code: "NW", labels: { es: "Nidwalden", en: "Nidwalden", fr: "Nidwald", de: "Nidwalden", it: "Nidvaldo" } },
                { href: "https://www.ow.ch", code: "OW", labels: { es: "Obwalden", en: "Obwalden", fr: "Obwald", de: "Obwalden", it: "Obvaldo" } },
                { href: "https://www.sh.ch", code: "SH", labels: { es: "Schaffhausen", en: "Schaffhausen", fr: "Schaffhouse", de: "Schaffhausen", it: "Sciaffusa" } },
                { href: "https://www.sz.ch", code: "SZ", labels: { es: "Schwyz", en: "Schwyz", fr: "Schwyz", de: "Schwyz", it: "Svitto" } },
                { href: "https://www.so.ch", code: "SO", labels: { es: "Solothurn", en: "Solothurn", fr: "Soleure", de: "Solothurn", it: "Soletta" } },
                { href: "https://www.sg.ch", code: "SG", labels: { es: "San Galo", en: "St. Gallen", fr: "Saint-Gall", de: "St. Gallen", it: "San Gallo" } },
                { href: "https://www.tg.ch", code: "TG", labels: { es: "Turgovia", en: "Thurgau", fr: "Thurgovie", de: "Thurgau", it: "Turgovia" } },
                { href: "https://www.ti.ch", code: "TI", labels: { es: "Ticino", en: "Ticino", fr: "Tessin", de: "Tessin", it: "Ticino" } },
                { href: "https://www.ur.ch", code: "UR", labels: { es: "Uri", en: "Uri", fr: "Uri", de: "Uri", it: "Uri" } },
                { href: "https://www.vs.ch", code: "VS", labels: { es: "Valais / Wallis", en: "Valais / Wallis", fr: "Valais", de: "Wallis", it: "Vallese" } },
                { href: "https://www.vd.ch", code: "VD", labels: { es: "Vaud", en: "Vaud", fr: "Vaud", de: "Waadt", it: "Vaud" } },
                { href: "https://www.zg.ch", code: "ZG", labels: { es: "Zug", en: "Zug", fr: "Zoug", de: "Zug", it: "Zugo" } },
                { href: "https://www.zh.ch", code: "ZH", labels: { es: "Zurich", en: "Zurich", fr: "Zurich", de: "Zürich", it: "Zurigo" } }
            ];
            const linkSet = resourcesLinks[currentLang] || resourcesLinks.es;
            const formatConsulateDetails = (details) => {
                const raw = String(details || "");
                const parts = raw.split(" \u00b7 ").map(s => s.trim()).filter(Boolean);
                if (parts.length >= 2) {
                    const phone = parts.pop();
                    const address = parts.join(" \u00b7 ");
                    return { address, phone };
                }
                return { address: raw, phone: "" };
            };
            const geneva = formatConsulateDetails(ui['home-consulate-geneva-details']);
            const bern = formatConsulateDetails(ui['home-consulate-bern-details']);
            const zurich = formatConsulateDetails(ui['home-consulate-zurich-details']);
            const badgeOficial = `<span style="font-size:0.65rem;font-weight:700;letter-spacing:0.06em;background:#e8f5e9;color:#2e7d32;padding:3px 9px;border-radius:999px;text-transform:uppercase;white-space:nowrap;">${copy.badgeOfficial}</span>`;
            const badgePrivado = `<span style="font-size:0.65rem;font-weight:700;letter-spacing:0.06em;background:#fff3e0;color:#e65100;padding:3px 9px;border-radius:999px;text-transform:uppercase;white-space:nowrap;">${copy.badgePrivate}</span>`;
            const sectionStyle = 'margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--border-light);';
            const sectionTitleStyle = 'margin-top:0; margin-bottom:0.4rem; font-size:1.35rem;';
            const sectionDescStyle = 'color:var(--text-secondary); margin-bottom:1.5rem; font-size:0.98rem;';
            const cantonLinks = resourcesCantons.map((canton) => {
                const label = canton.labels[currentLang] || canton.labels.es;
                return `<a href="${canton.href}" target="_blank" rel="noopener noreferrer" class="canton-link">${label} (${canton.code})</a>`;
            }).join("");
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> &gt;
                    <span>${copy.breadcrumb}</span>
                </nav>
                <h1>${copy.title}</h1>
                <p style="font-size: 1.15rem; max-width: 780px; color:var(--text-secondary);">${copy.intro}</p>
            </div>

            <!-- SECCION 1: FUENTES OFICIALES FEDERALES -->
            <section class="animate-fade-up">
                <h2 style="${sectionTitleStyle}">${copy.federalTitle}</h2>
                <p style="${sectionDescStyle}">${copy.federalDesc}</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>ch.ch ${badgeOficial}</h3>
                        <p>${copy.chDesc}</p>
                        <a href="${linkSet.ch}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.chCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>SEM ${badgeOficial}</h3>
                        <p>${copy.semDesc}</p>
                        <a href="${linkSet.sem}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.semCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>BFS / OFS ${badgeOficial}</h3>
                        <p>${copy.bfsDesc}</p>
                        <a href="${linkSet.bfs}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.bfsCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>ESTV / AFC ${badgeOficial}</h3>
                        <p>${copy.estvDesc}</p>
                        <a href="${linkSet.estv}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.estvCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>SECO ${badgeOficial}</h3>
                        <p>${copy.secoDesc}</p>
                        <a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer" class="read-more">${copy.secoCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>BSV / OFAS ${badgeOficial}</h3>
                        <p>${copy.bsvDesc}</p>
                        <a href="${linkSet.bsv}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.bsvCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>BAG / OFSP ${badgeOficial}</h3>
                        <p>${copy.bagDesc}</p>
                        <a href="${linkSet.bag}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.bagCta}</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 2: SEGURO DE SALUD — PRIMINFO -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${copy.healthTitle}</h2>
                <p style="${sectionDescStyle}">${copy.healthDesc}</p>
                <div class="topic-hub-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                    <div class="card-hub" style="border-color: #2e7d32; border-width: 2px;">
                        <h3>priminfo.admin.ch ${badgeOficial}</h3>
                        <p><strong>${copy.priminfoDesc}</strong></p>
                        <a href="${linkSet.priminfo}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.priminfoCta}</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 3: TRABAJO Y FORMACION -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${copy.workTitle}</h2>
                <p style="${sectionDescStyle}">${copy.workDesc}</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>travail.swiss ${badgeOficial}</h3>
                        <p>${copy.travailDesc}</p>
                        <a href="${linkSet.travail}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.travailCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>SEFRI / SERI ${badgeOficial}</h3>
                        <p>${copy.sefriDesc}</p>
                        <a href="${linkSet.sefri}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.sefriCta}</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 4: VIDA PRACTICA -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${copy.dailyTitle}</h2>
                <p style="${sectionDescStyle}">${copy.dailyDesc}</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>SBB / CFF ${badgeOficial}</h3>
                        <p>${copy.sbbDesc}</p>
                        <a href="${linkSet.sbb}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.sbbCta}</a>
                    </div>
                    <div class="card-hub">
                        <h3>Post / La Poste ${badgeOficial}</h3>
                        <p>${copy.postDesc}</p>
                        <a href="${linkSet.post}" target="_blank" rel="noopener noreferrer" class="read-more">${copy.postCta}</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 5: ESPANA EN SUIZA -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${copy.spainTitle}</h2>
                <p style="${sectionDescStyle}">
                    ${copy.spainDesc}
                    <a href="#/consulados-espanoles-suiza" style="color:var(--swiss-red); font-weight:600;">${copy.spainGuide}</a>
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
                    <div class="card-hub">
                        <h3>${copy.exterioresTitle} ${badgeOficial}</h3>
                        <p>${copy.exterioresDesc}</p>
                        <a href="https://www.exteriores.gob.es" target="_blank" rel="noopener noreferrer" class="read-more">${copy.exterioresCta}</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 6: SERVICIOS CANTONALES -->
            <section id="cantones" class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${ui['home-title-cantones']}</h2>
                <p style="${sectionDescStyle}">${copy.cantonsDesc}</p>
                <div class="callout" style="margin-bottom:1.5rem; font-size:0.95rem;">
                    <strong>${copy.cantonsExampleTitle}</strong> ${copy.cantonsExampleBody.replace("OCPM", '<a href="https://www.ge.ch/organisation/office-cantonal-population-migrations" target="_blank" rel="noopener noreferrer" style="color:var(--swiss-red);">OCPM</a>').replace("ge.ch/assurance-maladie", '<a href="https://www.ge.ch/assurance-maladie" target="_blank" rel="noopener noreferrer" style="color:var(--swiss-red);">ge.ch/assurance-maladie</a>')}.
                </div>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(175px, 1fr)); gap:0.6rem;">
                    ${cantonLinks}
                </div>
            </section>

            <!-- SECCION 7: GUIAS DEL SITIO -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${copy.guidesTitle}</h2>
                <div id="category-articles-container"></div>
            </section>

            <!-- SECCION 8: HERRAMIENTAS UTILES (NO OFICIALES) -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${copy.toolsTitle}</h2>
                <div class="callout" style="margin-bottom:1.5rem; font-size:0.95rem; border-color: #e65100; background: rgba(230,81,0,0.05);">
                    <strong>${copy.toolsWarningTitle}</strong> ${copy.toolsWarningBody}
                </div>
                <div class="topic-hub-grid">
                    <div class="card-hub" style="border-color:#e0e0e0;">
                        <h3>Comparis ${badgePrivado}</h3>
                        <p>${copy.comparisDesc}</p>
                        <a href="https://www.comparis.ch" target="_blank" rel="noopener noreferrer" class="read-more">${copy.comparisCta}</a>
                    </div>
                    <div class="card-hub" style="border-color:#e0e0e0;">
                        <h3>Homegate ${badgePrivado}</h3>
                        <p>${copy.homegateDesc}</p>
                        <a href="https://www.homegate.ch" target="_blank" rel="noopener noreferrer" class="read-more">${copy.homegateCta}</a>
                    </div>
                    <div class="card-hub" style="border-color:#e0e0e0;">
                        <h3>Jobs.ch ${badgePrivado}</h3>
                        <p>${copy.jobsDesc}</p>
                        <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer" class="read-more">${copy.jobsCta}</a>
                    </div>
                </div>
            </section>
            `;
        }
    },
    "articulos": {
        title: "Todos los artículos | Españoles en Suiza",
        description: "Explora y busca entre más de 600 artículos y guías publicadas por la comunidad de Españoles en Suiza.",
        isCategoryHub: false,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>Artículos</span>
                </nav>
                <h1>Todos los artículos</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">Explora nuestra base de conocimiento general.</p>
                
                <div class="search-container" style="margin-top: 1.5rem; max-width: 600px; margin-left: 0;">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="articles-filter-input" class="search-input" placeholder="Filtrar por título, palabra clave o categoría..." autocomplete="off">
                </div>
            </div>

            <section>
                <div id="all-articles-container" class="featured-grid"></div>
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
            const adminNames = ["Amparo", "José Luis", "Elliot", "Oscar"];
            const moderatorNames = ["Ana", "Bea", "Laura", "Rafael", "Domingo", "David", "Juan José", "Andrés"];
            return `
            <div class="page-header community-page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['com-nav']}</span>
                </nav>
                <h1>${ui['com-h1']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['com-desc']}</p>
            </div>

            <section class="article-layout community-intro" style="padding:0; margin-top:0;">
                <div class="article-body">
                    <p>${ui['com-p1']}</p>
                    <p>${ui['com-p2']}</p>
                </div>
            </section>

            <section class="community-actions-wrap">
                <div class="hero-actions community-page-actions">
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" rel="noopener noreferrer" class="btn" style="background:#1877F2; color:white; display:inline-flex; align-items:center; gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        ${ui['home-hero-group-cta']}
                    </a>
                    <a href="https://chat.whatsapp.com/Gd1Zei1Nycu69GM3zpKymC" target="_blank" rel="noopener noreferrer" class="btn" style="background:#25D366; color:white; display:inline-flex; align-items:center; gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 0 0-8.4 15.3l-1 4 4-1A10 10 0 1 0 12 2zm0 18c-1.1 0-2.2-.2-3.2-.6l-.2-.1-2.1.5.5-2.1-.1-.2A8 8 0 1 1 20 12a7.9 7.9 0 0 1-4.2 6.9L14.4 19a6 6 0 0 0 1.6-10.8 5.6 5.6 0 0 0-.7-.3 5.7 5.7 0 0 0-5.3 1.4l-.1.1-.1.1c-.6.6-1.5 1.5-1.5 3.4s.9 2.8 1.6 3.4l.2.2c1.2.9 2.5.9 3.2.9.7 0 1.4-.2 2-.5l.2-.1 1.8 1a8 8 0 0 1-3 1.3z" fill="white"></path></svg>
                        ${ui['home-hero-whatsapp']}
                    </a>
                </div>
            </section>

            <section class="community-team-section animate-fade-up delay-100" aria-labelledby="community-team-title">
                <div class="community-team-panel">
                    <h2 id="community-team-title">${ui['com-team-title']}</h2>
                    <div class="community-team-grid">
                        <div class="community-team-group">
                            <h3>${ui['com-team-admins']}</h3>
                            <ul class="community-team-list">
                                ${adminNames.map((name) => `<li>${name}</li>`).join("")}
                            </ul>
                        </div>
                        <div class="community-team-group">
                            <h3>${ui['com-team-moderators']}</h3>
                            <ul class="community-team-list">
                                ${moderatorNames.map((name) => `<li>${name}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                    <p class="community-team-note">${ui['com-team-note']}</p>
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
