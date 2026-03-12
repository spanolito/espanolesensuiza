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
            const arts = window.siteContent[currentLang]?.articles || window.siteContent['es'].articles;
            return `
            <!-- Editorial Hero Section -->
            <section class="hero-section" style="padding: 0; margin-bottom: var(--space-xl);">
                <h1 class="sr-only">Españoles en Suiza: Guía práctica para vivir y trabajar</h1>
                <p class="sr-only">Información clara, oficial y estructurada sobre permisos, trabajo, vivienda, seguros y vida diaria en la Confederación Helvética.</p>
                
                <div style="width: 100%; max-width: 1000px; margin: 0 auto; line-height: 0;">
                    <img src="media/banner.jpg" alt="Españoles que realmente se ayudan en Suiza. Guía práctica para vivir y trabajar." style="width: 100%; height: auto; display: block; filter: contrast(1.05);">
                </div>

                <div class="search-container" style="margin-top: -30px;">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="global-search" class="search-input" placeholder="${ui['search-placeholder']}" autocomplete="off">
                    <div id="search-results"></div>
                </div>

                <div class="hero-actions">
                    <a href="#/tramites" class="btn btn-primary">${ui['cat-tramites']}</a>
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-secondary">Solicitar acceso al grupo</a>
                </div>
            </section>

            <!-- Quick Start Cards -->
            <section class="animate-fade-up delay-100" style="margin-top: var(--space-xl);">
                <h2 style="border-bottom:none; margin-bottom: 0;">${ui['home-title-start']}</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem;">${ui['home-desc-start']}</p>
                <div class="quick-start-grid">
                    <a href="#/registrarse-en-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <h3>${ui['start-card-1-title']}</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">${ui['start-card-1-desc']}</span>
                    </a>
                    <a href="#/permisos-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <h3>${ui['start-card-2-title']}</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">${ui['start-card-2-desc']}</span>
                    </a>
                    <a href="#/buscar-empleo-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        <h3>${ui['start-card-3-title']}</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">${ui['start-card-3-desc']}</span>
                    </a>
                    <a href="#/seguro-medico-lamal-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        <h3>${ui['start-card-4-title']}</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">${ui['start-card-4-desc']}</span>
                    </a>
                    <a href="#/alquilar-vivienda-suiza" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <h3>${ui['start-card-5-title']}</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">${ui['start-card-5-desc']}</span>
                    </a>
                </div>
            </section>

            <!-- Main Topic Hubs -->
            <section class="animate-fade-up delay-200" style="margin-top: var(--space-xl); padding: var(--space-lg) 0; position: relative;">
                <h2>${ui['home-title-hubs']}</h2>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>${ui['cat-tramites']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">4 ${ui['lbl-guides-plural']}</span></h3>
                        <p>${ui['cat-desc-tramites']}</p>
                        <a href="#/tramites" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-trabajo']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">5 ${ui['lbl-guides-plural']}</span></h3>
                        <p>${ui['cat-desc-trabajo']}</p>
                        <a href="#/trabajo" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-vivir']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">5 ${ui['lbl-guides-plural']}</span></h3>
                        <p>${ui['cat-desc-vivir']}</p>
                        <a href="#/vivir-en-suiza" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-vivienda']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">3 ${ui['lbl-guides-plural']}</span></h3>
                        <p>${ui['cat-desc-vivienda']}</p>
                        <a href="#/vivienda" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-salud']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">3 ${ui['lbl-guides-plural']}</span></h3>
                        <p>${ui['cat-desc-salud']}</p>
                        <a href="#/salud" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-impuestos']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">2 ${ui['lbl-guides-plural']}</span></h3>
                        <p>${ui['cat-desc-impuestos']}</p>
                        <a href="#/impuestos" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-fronterizos']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">1 ${ui['lbl-guides-singular']}</span></h3>
                        <p>${ui['cat-desc-fronterizos']}</p>
                        <a href="#/fronterizos" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                </div>
            </section>

            <!-- Featured / Most Read Articles -->
            <section class="animate-fade-up delay-300" style="margin-top: var(--space-xl); padding: var(--space-xl) var(--space-md); background-color: var(--bg-surface); border-radius: var(--radius-lg); margin-left: calc(-1 * var(--space-md)); margin-right: calc(-1 * var(--space-md));">
                <h2 style="border-bottom: none;">${ui['home-title-featured']}</h2>
                <div class="featured-grid">
                    <a href="#/permisos-suiza" class="card-article">
                        <div class="card-meta">${ui['cat-tramites']}</div>
                        <h3>${arts['articulo-permisos']?.title || 'Diferencias entre Permiso L, B, y C'}</h3>
                        <p>${arts['articulo-permisos']?.summary || 'Guía de comprensión completa sobre los títulos de residencia suizos.'}</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 4 ${ui['lbl-read-time']}</span>
                    </a>
                    <a href="#/impuesto-fuente-suiza" class="card-article">
                        <div class="card-meta">${ui['cat-impuestos']}</div>
                        <h3>${arts['articulo-impuesto-fuente']?.title || 'El impuesto a la fuente (Quellensteuer)'}</h3>
                        <p>${arts['articulo-impuesto-fuente']?.summary || 'Cómo funciona el cobro de impuestos directamente en la nómina para extranjeros.'}</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 3 ${ui['lbl-read-time']}</span>
                    </a>
                    <a href="#/franquicia-seguro-medico-suiza" class="card-article">
                        <div class="card-meta">${ui['cat-salud']}</div>
                        <h3>${arts['articulo-franquicia']?.title || 'Franquicia y Copago en Suiza'}</h3>
                        <p>${arts['articulo-franquicia']?.summary || 'Por qué el seguro médico puede encarecerse si no eliges bien tu franquicia básica.'}</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 3 ${ui['lbl-read-time']}</span>
                    </a>
                </div>
            </section>

            <!-- FAQ Accordion section -->
            <section class="animate-fade-up delay-100" style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-faq']}</h2>
                <p>${ui['home-desc-faq']}</p>
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-header">
                            ${ui['faq-q1']}
                            <span class="accordion-icon"></span>
                        </button>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                ${ui['faq-a1']}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">
                            ${ui['faq-q2']}
                            <span class="accordion-icon"></span>
                        </button>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                ${ui['faq-a2']}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">
                            ${ui['faq-q3']}
                            <span class="accordion-icon"></span>
                        </button>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                ${ui['faq-a3']}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Most Consulted Guides -->
            <section style="margin-top: var(--space-xl);">
                <h2>Guías más consultadas</h2>
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">Los temas que más interesan a quienes llegan a Suiza o ya viven aquí.</p>
                <div class="featured-grid">
                    <a href="#/permisos-suiza" class="card-article">
                        <div class="card-meta">Trámites</div>
                        <h3>Permisos L, B y C</h3>
                        <p>Todo lo esencial para entender qué permiso corresponde según tu situación.</p>
                        <span style="margin-top:auto; font-size:0.85rem; color:var(--text-light);">⏱ 4 min de lectura</span>
                    </a>
                    <a href="#/seguro-medico-lamal-suiza" class="card-article">
                        <div class="card-meta">Salud</div>
                        <h3>Seguro médico LAMal</h3>
                        <p>Cómo funciona el seguro obligatorio y qué debes hacer al llegar.</p>
                        <span style="margin-top:auto; font-size:0.85rem; color:var(--text-light);">⏱ 5 min de lectura</span>
                    </a>
                    <a href="#/impuesto-fuente-suiza" class="card-article">
                        <div class="card-meta">Impuestos</div>
                        <h3>Impuesto a la fuente</h3>
                        <p>Qué te descuentan en nómina y cuándo puedes corregirlo.</p>
                        <span style="margin-top:auto; font-size:0.85rem; color:var(--text-light);">⏱ 3 min de lectura</span>
                    </a>
                    <a href="#/alquilar-vivienda-suiza" class="card-article">
                        <div class="card-meta">Vivienda</div>
                        <h3>Cómo alquilar en Suiza</h3>
                        <p>Documentos, dosier y claves para no perder tiempo con las agencias.</p>
                        <span style="margin-top:auto; font-size:0.85rem; color:var(--text-light);">⏱ 5 min de lectura</span>
                    </a>
                </div>
            </section>

            <!-- Official Sources -->
            <section style="margin-top: var(--space-xl);">
                <h2>Fuentes oficiales</h2>
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">Cuando una regla cambia según el cantón o la situación personal, lo prudente es comprobar siempre la fuente oficial.</p>
                <div class="featured-grid">
                    <a href="https://www.ch.ch/es/" target="_blank" class="card-article">
                        <div class="card-meta">Portal oficial</div>
                        <h3>ch.ch</h3>
                        <p>Información práctica de la Confederación sobre vida diaria, permisos y administración.</p>
                    </a>
                    <a href="https://www.sem.admin.ch/" target="_blank" class="card-article">
                        <div class="card-meta">Migración</div>
                        <h3>SEM</h3>
                        <p>Secretaría de Estado de Migración: residencia, libre circulación y nacionalidad.</p>
                    </a>
                    <a href="https://www.bfs.admin.ch/" target="_blank" class="card-article">
                        <div class="card-meta">Estadística</div>
                        <h3>BFS / OFS</h3>
                        <p>Datos oficiales sobre salarios, población, vivienda, empleo y mucho más.</p>
                    </a>
                </div>
            </section>

            <!-- Community Inspired -->
            <section style="margin-top: var(--space-xl);">
                <h2>Inspirado en preguntas reales de la comunidad</h2>
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">Esta web nace de dudas que aparecen una y otra vez entre hispanohablantes que viven en Suiza o preparan su llegada.</p>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>¿Puedo trabajar antes de recibir el permiso físico?</h3>
                        <p>Una de las preguntas más repetidas. La respuesta depende del trámite ya iniciado y de tu situación concreta.</p>
                        <a href="#/registrarse-en-suiza" class="read-more">Ver guía relacionada &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>¿Qué cambia según el cantón?</h3>
                        <p>Impuestos, primas de seguro, escolaridad, plazos y trámites pueden variar bastante.</p>
                        <a href="#/tramites" class="read-more">Explorar trámites &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>¿Qué errores cometen más los recién llegados?</h3>
                        <p>No comparar seguros, llegar sin dosier de alquiler o no entender bien el impuesto a la fuente.</p>
                        <a href="#/seguro-medico-lamal-suiza" class="read-more">Leer guía útil &rarr;</a>
                    </div>
                </div>
            </section>

            <!-- Community Section -->
            <section class="community-section animate-fade-up delay-200">
                <div class="container">
                    <h2>${ui['community-title']}</h2>
                    <p style="max-width: 600px; margin: 0 auto; margin-bottom: 2rem;">${ui['community-desc']}</p>
                    
                    <div class="callout" style="background: rgba(255,255,255,0.1); border-color: white; color: white;">
                        <h4 style="color: white; margin-top: 0;">${ui['community-faq-title']}</h4>
                        <p style="color: rgba(255,255,255,0.9); margin-bottom: 0;">${ui['community-faq-desc']}</p>
                    </div>
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-primary" style="background: white; color: var(--text-primary);">${ui['community-btn']}</a>
                </div>
            </section>

            <!-- Official Sources Section -->
            <section class="animate-fade-up delay-300" style="margin: var(--space-xl) 0; text-align: center; border-top: 1px solid var(--border-light); padding-top: var(--space-xl);">
                <h2 style="border: none; margin-bottom: 0.5rem;">${ui['official-title']}</h2>
                <p style="max-width: 600px; margin: 0 auto 2rem;">${ui['official-desc']}</p>
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.ch.ch" target="_blank" style="padding: 1rem 2rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-weight: 500;">
                        ch.ch
                        <span style="display:block; font-size: 0.8rem; font-weight: normal; color: var(--text-light);">${ui['official-ch']}</span>
                    </a>
                    <a href="https://www.sem.admin.ch" target="_blank" style="padding: 1rem 2rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-weight: 500;">
                        SEM
                        <span style="display:block; font-size: 0.8rem; font-weight: normal; color: var(--text-light);">${ui['official-sem']}</span>
                    </a>
                    <a href="https://www.bfs.admin.ch" target="_blank" style="padding: 1rem 2rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-weight: 500;">
                        OFS
                        <span style="display:block; font-size: 0.8rem; font-weight: normal; color: var(--text-light);">${ui['official-bfs']}</span>
                    </a>
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
