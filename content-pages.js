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
            return `
            <!-- SECCIÓN 1: Hero -->
            <section class="hero-section" style="padding: 0; margin-bottom: var(--space-xl);">
                <h1 class="sr-only">Españoles en Suiza: Guía práctica para vivir y trabajar</h1>
                <p class="sr-only">Información clara, oficial y estructurada sobre permisos, trabajo, vivienda, seguros y vida diaria en la Confederación Helvética.</p>
                <div style="width: 100%; max-width: 1000px; margin: 0 auto; line-height: 0;">
                    <img src="media/banner.jpg" alt="Españoles que realmente se ayudan en Suiza." style="width: 100%; height: auto; display: block; filter: contrast(1.05);">
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
                        Solicitar acceso al grupo
                    </a>
                </div>
            </section>

            <!-- SECCIÓN 2: Empezar aquí -->
            <section class="animate-fade-up delay-100" style="margin-top: var(--space-xl);">
                <h2 style="border-bottom:none; margin-bottom: 0.5rem;">Empezar aquí</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--text-secondary);">Las guías esenciales para quien llega o vive en Suiza.</p>
                <div class="quick-start-grid">
                    <a href="#/permisos-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <h3>Permisos de residencia</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">L, B y C explicados</span>
                    </a>
                    <a href="#/buscar-empleo-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        <h3>Trabajar en Suiza</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">Mercado y salarios</span>
                    </a>
                    <a href="#/seguro-medico-lamal-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        <h3>Seguro médico</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">Sistema LAMal</span>
                    </a>
                    <a href="#/alquilar-vivienda-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <h3>Alquilar vivienda</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">Dosier y agencias</span>
                    </a>
                    <a href="#/impuesto-fuente-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <h3>Impuestos básicos</h3>
                        <span style="font-size:0.9rem; color:var(--text-light); margin-top:8px;">Quellensteuer y más</span>
                    </a>
                </div>
            </section>

            <!-- SECCIÓN 3: Preguntas frecuentes -->
            <section class="animate-fade-up delay-200" style="margin-top: var(--space-xl);">
                <h2>Preguntas frecuentes</h2>
                <p style="margin-bottom:2rem; color:var(--text-secondary);">Las dudas más habituales entre hispanohablantes en Suiza.</p>
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-header">¿Puedo trabajar sin tener todavía el permiso en mano?<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            Sí. Si eres ciudadano de la UE/EFTA, desde que entregas tus documentos en la comuna y expiden el resguardo de registro, tienes derecho legal a trabajar antes del permiso físico.
                            <br><a href="#/registrarse-en-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">Leer la guía completa →</a>
                        </div></div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">¿Cómo funciona el seguro médico en Suiza?<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            El seguro básico LAMal es obligatorio. Cubre las mismas prestaciones en todas las cajas, pero las primas varían. Puedes cambiar de seguro una vez al año antes del 30 de noviembre.
                            <br><a href="#/seguro-medico-lamal-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">Leer la guía completa →</a>
                        </div></div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">¿Cuánto cuesta vivir en Suiza?<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            Un presupuesto individual mínimo ronda los 3.000–4.000 CHF/mes (alquiler, seguro, transporte y alimentación). Los salarios son proporcionalmente elevados.
                            <br><a href="#/vivir-en-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">Ver guías de vida diaria →</a>
                        </div></div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">¿Cómo alquilar un apartamento en Suiza?<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            El mercado es muy competitivo (tasa de vacantes &lt;1% en Ginebra y Zúrich). Necesitas un dosier impecable: extractos bancarios, nóminas, historial de deudas y carta de presentación.
                            <br><a href="#/alquilar-vivienda-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">Leer la guía completa →</a>
                        </div></div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">¿Cómo funcionan los impuestos en Suiza?<span class="accordion-icon"></span></button>
                        <div class="accordion-content"><div class="accordion-content-inner">
                            Los extranjeros sin permiso C tributan en la fuente (Quellensteuer): el empleador retiene el impuesto directamente del salario. Los tipos varían según cantón, estado civil e ingresos.
                            <br><a href="#/impuesto-fuente-suiza" style="display:inline-block;margin-top:8px;color:var(--swiss-red);font-weight:600;">Leer la guía completa →</a>
                        </div></div>
                    </div>
                </div>
            </section>

            <!-- SECCIÓN 3: Fuentes oficiales -->
            <section class="animate-fade-up delay-200" style="margin-top: var(--space-xl);">
                <h2>Fuentes oficiales</h2>
                <p style="margin-bottom:2rem; color:var(--text-secondary);">Información directa de la administración suiza y española. Verifica siempre en la fuente cuando algo cambia.</p>
                <div class="featured-grid" style="margin-bottom:var(--space-md);">
                    <a href="https://www.ch.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">Portal federal</div>
                        <h3>ch.ch</h3>
                        <p>Portal oficial de la Confederación sobre vida diaria, permisos y administración. En 5 idiomas.</p>
                    </a>
                    <a href="https://www.sem.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">Migración</div>
                        <h3>SEM</h3>
                        <p>Secretaría de Estado de Migración: permisos de residencia, libre circulación y naturalización.</p>
                    </a>
                    <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">Estadística</div>
                        <h3>OFS / BFS</h3>
                        <p>Datos oficiales sobre salarios, población, vivienda y empleo en Suiza.</p>
                    </a>
                    <a href="https://www.seco.admin.ch" target="_blank" rel="noopener noreferrer" class="card-article">
                        <div class="card-meta">Economía y empleo</div>
                        <h3>SECO</h3>
                        <p>Secretaría de Estado de Economía: mercado laboral, desempleo y condiciones de trabajo.</p>
                    </a>
                </div>
                <div style="background:var(--bg-surface); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:var(--space-md); margin-top:var(--space-md);">
                    <h3 style="margin-top:0; font-size:1.15rem;">🏛️ Consulados españoles en Suiza</h3>
                    <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:1.25rem;">Para trámites de DNI, pasaporte, registro consular, registro civil y asistencia oficial.</p>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:0.75rem;">
                        <a href="https://www.exteriores.gob.es/Consulados/ginebra" target="_blank" rel="noopener noreferrer" class="card-article" style="padding:0.9rem 1rem;">
                            <div class="card-meta">GE · VD · VS · NE · FR · JU</div>
                            <h3 style="font-size:1rem; margin:0.4rem 0 0.3rem;">Consulado de Ginebra</h3>
                            <p style="font-size:0.85rem; margin:0;">85 Rue de Lausanne, 1202 Ginebra<br>+41 22 731 25 30</p>
                        </a>
                        <a href="https://www.exteriores.gob.es/Consulados/berna" target="_blank" rel="noopener noreferrer" class="card-article" style="padding:0.9rem 1rem;">
                            <div class="card-meta">BE · SO · parte FR / VS</div>
                            <h3 style="font-size:1rem; margin:0.4rem 0 0.3rem;">Consulado de Berna</h3>
                            <p style="font-size:0.85rem; margin:0;">Kalcheggweg 24, 3006 Berna<br>+41 31 352 04 12</p>
                        </a>
                        <a href="https://www.exteriores.gob.es/Consulados/zurich" target="_blank" rel="noopener noreferrer" class="card-article" style="padding:0.9rem 1rem;">
                            <div class="card-meta">ZH · BS · BL · LU · AG · SG · GR · TI ···</div>
                            <h3 style="font-size:1rem; margin:0.4rem 0 0.3rem;">Consulado de Zúrich</h3>
                            <p style="font-size:0.85rem; margin:0;">Tödistrasse 60, 8002 Zúrich<br>+41 44 202 89 89</p>
                        </a>
                    </div>
                    <p style="margin-top:1rem; font-size:0.85rem; color:var(--text-light);">
                        👉 Cita previa obligatoria: <a href="https://www.citaconsular.es" target="_blank" rel="noopener noreferrer" style="color:var(--swiss-red);">citaconsular.es</a>
                        &nbsp;·&nbsp; <a href="#/consulados-espanoles-suiza" style="color:var(--swiss-red);">Leer la guía completa →</a>
                    </p>
                </div>
            </section>

            <!-- SECCIÓN 4: Portales de los 26 cantones -->
            <section class="animate-fade-up delay-300" style="margin-top: var(--space-xl);">
                <h2>Portales oficiales de los 26 cantones</h2>
                <p style="margin-bottom:1.5rem; color:var(--text-secondary);">Cada cantón gestiona sus propios impuestos, permisos y servicios. Accede directamente al portal de tu cantón.</p>
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
                    <strong>Enlaces Oficiales Útiles:</strong> 
                    <a href="https://www.priminfo.admin.ch" target="_blank" style="margin-left:8px;text-decoration:underline;">Priminfo (Calculadora Oficial de Primas)</a>
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
                    <strong>Aviso Cantonal:</strong> Las tasas impositivas varían radicalmente no solo de un cantón a otro, sino de un municipio (comuna) a otro, separados por apenas unos kilómetros.
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
        isCategoryHub: false,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
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
                <div class="card-hub">
                    <h3>${ui['rec-canton-title']}</h3>
                    <p>${ui['rec-canton-p']}</p>
                </div>
            </div>
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
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-primary" style="margin-top:2rem;">${ui['com-btn']}</a>
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
