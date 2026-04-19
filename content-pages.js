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
            </section>

            <!-- STATS STRIP -->
            <div class="stats-strip animate-fade-up">
                <div class="stat-item">
                    <span class="stat-number">80k+</span>
                    <span class="stat-label">Miembros comunidad</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">45+</span>
                    <span class="stat-label">Guías publicadas</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">4</span>
                    <span class="stat-label">Idiomas</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">26</span>
                    <span class="stat-label">Cantones cubiertos</span>
                </div>
            </div>

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
            const badgeOficial = '<span style="font-size:0.65rem;font-weight:700;letter-spacing:0.06em;background:#e8f5e9;color:#2e7d32;padding:3px 9px;border-radius:999px;text-transform:uppercase;white-space:nowrap;">Oficial</span>';
            const badgePrivado = '<span style="font-size:0.65rem;font-weight:700;letter-spacing:0.06em;background:#fff3e0;color:#e65100;padding:3px 9px;border-radius:999px;text-transform:uppercase;white-space:nowrap;">No oficial</span>';
            const sectionStyle = 'margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--border-light);';
            const sectionTitleStyle = 'margin-top:0; margin-bottom:0.4rem; font-size:1.35rem;';
            const sectionDescStyle = 'color:var(--text-secondary); margin-bottom:1.5rem; font-size:0.98rem;';
            return `
            <div class="page-header animate-fade-up" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> &gt;
                    <span>Recursos</span>
                </nav>
                <h1>Recursos para vivir en Suiza</h1>
                <p style="font-size: 1.15rem; max-width: 780px; color:var(--text-secondary);">Fuentes oficiales de la Confederacion, servicios cantonales y herramientas practicas. Los enlaces no oficiales estan claramente identificados al final de la pagina.</p>
            </div>

            <!-- SECCION 1: FUENTES OFICIALES FEDERALES -->
            <section class="animate-fade-up">
                <h2 style="${sectionTitleStyle}">Fuentes oficiales \u2014 Confederacion Suiza</h2>
                <p style="${sectionDescStyle}">Portales federales fiables. Validos para tramites, informacion legal y datos estadisticos.</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>ch.ch ${badgeOficial}</h3>
                        <p>Portal unico del gobierno suizo. Tramites, informacion para residentes, servicios por canton y formularios.</p>
                        <a href="https://www.ch.ch/es" target="_blank" rel="noopener noreferrer" class="read-more">Abrir ch.ch</a>
                    </div>
                    <div class="card-hub">
                        <h3>SEM ${badgeOficial}</h3>
                        <p>Secretaria de Estado de Migracion. Permisos de residencia, reagrupacion familiar, nacionalidad y asilo.</p>
                        <a href="https://www.sem.admin.ch/sem/es/home.html" target="_blank" rel="noopener noreferrer" class="read-more">Abrir SEM</a>
                    </div>
                    <div class="card-hub">
                        <h3>BFS / OFS ${badgeOficial}</h3>
                        <p>Oficina Federal de Estadistica. Datos oficiales sobre poblacion, salarios, coste de vida y mercado laboral.</p>
                        <a href="https://www.bfs.admin.ch/bfs/es/home.html" target="_blank" rel="noopener noreferrer" class="read-more">Abrir BFS</a>
                    </div>
                    <div class="card-hub">
                        <h3>ESTV / AFC ${badgeOficial}</h3>
                        <p>Administracion Federal de Contribuciones. Impuestos federales, IVA, impuesto a la fuente (Quellensteuer).</p>
                        <a href="https://www.estv.admin.ch/estv/es/home.html" target="_blank" rel="noopener noreferrer" class="read-more">Abrir ESTV</a>
                    </div>
                    <div class="card-hub">
                        <h3>SECO ${badgeOficial}</h3>
                        <p>Secretaria de Estado de Economia. Desempleo (RAV), condiciones de trabajo, mercado laboral y legislacion laboral.</p>
                        <a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer" class="read-more">Abrir SECO</a>
                    </div>
                    <div class="card-hub">
                        <h3>BSV / OFAS ${badgeOficial}</h3>
                        <p>Oficina Federal de Seguros Sociales. AHV/AVS (jubilacion), AI (invalidez), subsidios familiares y prestaciones complementarias.</p>
                        <a href="https://www.bsv.admin.ch/bsv/es/home.html" target="_blank" rel="noopener noreferrer" class="read-more">Abrir BSV</a>
                    </div>
                    <div class="card-hub">
                        <h3>BAG / OFSP ${badgeOficial}</h3>
                        <p>Oficina Federal de Salud Publica. LAMal, vacunas, recomendaciones sanitarias y regulacion del sistema de salud.</p>
                        <a href="https://www.bag.admin.ch/bag/es/home.html" target="_blank" rel="noopener noreferrer" class="read-more">Abrir BAG</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 2: SEGURO DE SALUD — PRIMINFO -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">Seguro de salud \u2014 Comparador oficial de primas</h2>
                <p style="${sectionDescStyle}">El unico comparador de primas LAMal publicado por la Confederacion. No es un sitio privado.</p>
                <div class="topic-hub-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                    <div class="card-hub" style="border-color: #2e7d32; border-width: 2px;">
                        <h3>priminfo.admin.ch ${badgeOficial}</h3>
                        <p><strong>Comparador oficial de primas del seguro de salud (LAMal).</strong> Publicado por la Confederacion Suiza. Permite comparar primas por canton, edad y modelo de seguro. Es la referencia legal, no un portal privado.</p>
                        <a href="https://www.priminfo.admin.ch/es/praemien" target="_blank" rel="noopener noreferrer" class="read-more">Comparar primas (oficial)</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 3: TRABAJO Y FORMACION -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">Trabajo y formacion profesional</h2>
                <p style="${sectionDescStyle}">Portales federales para empleo, desempleo (RAV), reconocimiento de diplomas y formacion.</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>travail.swiss ${badgeOficial}</h3>
                        <p>Portal federal de empleo. Bolsa de trabajo, inscripcion en el RAV, condiciones de desempleo y recursos para la reinsercion laboral.</p>
                        <a href="https://www.travail.swiss/es" target="_blank" rel="noopener noreferrer" class="read-more">Abrir travail.swiss</a>
                    </div>
                    <div class="card-hub">
                        <h3>SEFRI / SERI ${badgeOficial}</h3>
                        <p>Secretaria de Estado de Educacion, Investigacion e Innovacion. Reconocimiento oficial de diplomas extranjeros y formacion profesional.</p>
                        <a href="https://www.sefri.admin.ch/sefri/es/home.html" target="_blank" rel="noopener noreferrer" class="read-more">Abrir SEFRI</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 4: VIDA PRACTICA -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">Vida practica</h2>
                <p style="${sectionDescStyle}">Servicios publicos de uso cotidiano en Suiza.</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>SBB / CFF ${badgeOficial}</h3>
                        <p>Ferrocarriles Federales Suizos. Horarios, billetes, abonos (Halbtax, AG), transporte publico nacional e internacional.</p>
                        <a href="https://www.sbb.ch/es" target="_blank" rel="noopener noreferrer" class="read-more">Abrir SBB.ch</a>
                    </div>
                    <div class="card-hub">
                        <h3>Post / La Poste ${badgeOficial}</h3>
                        <p>Correos suizos. Envios nacionales e internacionales, cambio de domicilio, servicios financieros PostFinance.</p>
                        <a href="https://www.post.ch/es" target="_blank" rel="noopener noreferrer" class="read-more">Abrir Post.ch</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 5: ESPANA EN SUIZA -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">Espana en Suiza</h2>
                <p style="${sectionDescStyle}">
                    Consulados espanoles para tramites de pasaporte, partidas, empadronamiento consular y documentacion.
                    <a href="#/consulados-espanoles-suiza" style="color:var(--swiss-red); font-weight:600;">Guia completa de consulados</a>
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
                        <h3>Ministerio de Asuntos Exteriores ${badgeOficial}</h3>
                        <p>Gobierno de Espana. Informacion consular, tramites en el exterior, ciudadania y viajes.</p>
                        <a href="https://www.exteriores.gob.es" target="_blank" rel="noopener noreferrer" class="read-more">Abrir Exteriores.gob.es</a>
                    </div>
                </div>
            </section>

            <!-- SECCION 6: SERVICIOS CANTONALES -->
            <section id="cantones" class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${ui['home-title-cantones']}</h2>
                <p style="${sectionDescStyle}">En Suiza, los tramites dependen del canton: permisos, impuestos, escuelas y registro civil los gestiona cada canton por separado. Selecciona el tuyo para acceder directamente a sus servicios.</p>
                <div class="callout" style="margin-bottom:1.5rem; font-size:0.95rem;">
                    <strong>Ejemplo \u2014 Ginebra (GE):</strong> El <a href="https://www.ge.ch/organisation/office-cantonal-population-migrations" target="_blank" rel="noopener noreferrer" style="color:var(--swiss-red);">OCPM</a> gestiona los permisos de residencia. El comparador cantonal de primas LAMal esta en <a href="https://www.ge.ch/assurance-maladie" target="_blank" rel="noopener noreferrer" style="color:var(--swiss-red);">ge.ch/assurance-maladie</a>.
                </div>
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
                    <a href="https://www.ne.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Neuchatel (NE)</a>
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
                    <a href="https://www.zh.ch" target="_blank" rel="noopener noreferrer" class="canton-link">Zurich (ZH)</a>
                </div>
            </section>

            <!-- SECCION 7: GUIAS DEL SITIO -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">${ui['lbl-explore-guides']}</h2>
                <div id="category-articles-container"></div>
            </section>

            <!-- SECCION 8: HERRAMIENTAS UTILES (NO OFICIALES) -->
            <section class="animate-fade-up" style="${sectionStyle}">
                <h2 style="${sectionTitleStyle}">Herramientas utiles \u2014 no oficiales</h2>
                <div class="callout" style="margin-bottom:1.5rem; font-size:0.95rem; border-color: #e65100; background: rgba(230,81,0,0.05);">
                    <strong>Aviso:</strong> Los servicios de esta seccion son herramientas privadas. Son utiles en la practica, pero no son fuentes oficiales del gobierno suizo y no tienen validez legal como referencia para tramites administrativos.
                </div>
                <div class="topic-hub-grid">
                    <div class="card-hub" style="border-color:#e0e0e0;">
                        <h3>Comparis ${badgePrivado}</h3>
                        <p>Comparador privado suizo. Permite comparar primas de seguros de salud, seguros de hogar, precios de alquiler y otros servicios. No es fuente oficial. Para primas LAMal oficiales, usa priminfo.admin.ch.</p>
                        <a href="https://www.comparis.ch" target="_blank" rel="noopener noreferrer" class="read-more">Abrir Comparis.ch</a>
                    </div>
                    <div class="card-hub" style="border-color:#e0e0e0;">
                        <h3>Homegate ${badgePrivado}</h3>
                        <p>Portal inmobiliario privado. Pisos y casas en alquiler o venta en toda Suiza. Herramienta practica para buscar vivienda, sin validez oficial.</p>
                        <a href="https://www.homegate.ch" target="_blank" rel="noopener noreferrer" class="read-more">Abrir Homegate.ch</a>
                    </div>
                    <div class="card-hub" style="border-color:#e0e0e0;">
                        <h3>Jobs.ch ${badgePrivado}</h3>
                        <p>Portal privado de empleo. Ofertas de trabajo en Suiza por sector, canton y idioma. Complementario al portal oficial travail.swiss.</p>
                        <a href="https://www.jobs.ch" target="_blank" rel="noopener noreferrer" class="read-more">Abrir Jobs.ch</a>
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
