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
        isCategoryHub: false,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <!-- Editorial Hero Section -->
            <section class="hero-section" style="padding: 0; margin-bottom: var(--space-xl);">
                <h1 class="sr-only">Españoles en Suiza: Guía práctica para vivir y trabajar</h1>
                <p class="sr-only">Información clara, oficial y estructurada sobre permisos, trabajo, vivienda, seguros y vida diaria en la Confederación Helvética.</p>
                
                <div style="width: 100%; max-width: 1000px; margin: 0 auto; line-height: 0;">
                    <img src="media/banner.jpg" alt="Españoles que realmente se ayudan en Suiza. Guía práctica para vivir y trabajar." style="width: 100%; height: auto; display: block; filter: contrast(1.05);">
                </div>

                <div class="search-container" style="margin-top: -30px; position: relative; z-index: 10;">
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
            <section style="margin-top: var(--space-xl);">
                <h2 style="border-bottom:none; margin-bottom: 0;">${ui['home-title-start']}</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem;">${ui['home-desc-start']}</p>
                <div class="quick-start-grid">
                    <a href="#/articulo/articulo-registro" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <h3>Llegar a Suiza</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Registro y control</span>
                    </a>
                    <a href="#/articulo/articulo-permisos" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <h3>Primeros trámites</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Permisos de residencia</span>
                    </a>
                    <a href="#/articulo/articulo-buscar-empleo" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        <h3>Encontrar trabajo</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Mercado y salarios</span>
                    </a>
                    <a href="#/articulo/articulo-lamal" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        <h3>Seguro médico</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Sistema LAMal</span>
                    </a>
                    <a href="#/articulo/articulo-alquiler" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <h3>Encontrar vivienda</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Alquiler y agencias</span>
                    </a>
                </div>
            </section>

            <!-- Main Topic Hubs -->
            <section style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-hubs']}</h2>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>${ui['cat-tramites']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">4 ${ui['lbl-guides-plural']}</span></h3>
                        <p>Residencia L, B, C, registro en comunas y la burocracia básica del día a día.</p>
                        <a href="#/tramites" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-trabajo']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">5 ${ui['lbl-guides-plural']}</span></h3>
                        <p>Contratos suizos, cálculo del salario, derechos laborales y desempleo.</p>
                        <a href="#/trabajo" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-vivir']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">5 ${ui['lbl-guides-plural']}</span></h3>
                        <p>El sistema escolar, transporte, seguros sociales, reconocimiento de diplomas y costo de vida real.</p>
                        <a href="#/vivir-en-suiza" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-vivienda']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">3 ${ui['lbl-guides-plural']}</span></h3>
                        <p>Cómo postular a un apartamento suizo, crear el dosier y los derechos del inquilino (ASLOCA).</p>
                        <a href="#/vivienda" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-salud']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">3 ${ui['lbl-guides-plural']}</span></h3>
                        <p>Funcionamiento del seguro médico básico, elección de franquicia y copagos hospitalarios.</p>
                        <a href="#/salud" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-impuestos']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">2 ${ui['lbl-guides-plural']}</span></h3>
                        <p>Diferencias entre impuesto cantonal y federal, e impuestos retenidos en la fuente.</p>
                        <a href="#/impuestos" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                    <div class="card-hub">
                        <h3>${ui['cat-fronterizos']} <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">1 ${ui['lbl-guides-singular']}</span></h3>
                        <p>Normativas fiscales y de seguros para aquellos que cruzan la frontera a diario.</p>
                        <a href="#/fronterizos" class="read-more">${ui['lbl-explore-guides']}</a>
                    </div>
                </div>
            </section>

            <!-- Featured / Most Read Articles -->
            <section style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-featured']}</h2>
                <div class="featured-grid">
                    <a href="#/articulo/articulo-permisos" class="card-article">
                        <div class="card-meta">Trámites Ordinarios</div>
                        <h3>Diferencias entre Permiso L, B, y C</h3>
                        <p>Guía de comprensión completa sobre los títulos de residencia suizos.</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 4 min ${ui['lbl-read-time']}</span>
                    </a>
                    <a href="#/articulo/articulo-impuesto-fuente" class="card-article">
                        <div class="card-meta">Impuestos</div>
                        <h3>El impuesto a la fuente (Quellensteuer)</h3>
                        <p>Cómo funciona el cobro de impuestos directamente en la nómina para extranjeros.</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 3 min ${ui['lbl-read-time']}</span>
                    </a>
                    <a href="#/articulo/articulo-franquicia" class="card-article">
                        <div class="card-meta">Seguro de Salud</div>
                        <h3>Franquicia y Copago en Suiza</h3>
                        <p>Por qué el seguro médico puede encarecerse si no eliges bien tu franquicia básica.</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 3 min ${ui['lbl-read-time']}</span>
                    </a>
                </div>
            </section>

            <!-- FAQ Accordion section -->
            <section style="margin-top: var(--space-xl);">
                <h2>${ui['home-title-faq']}</h2>
                <p>${ui['home-desc-faq']}</p>
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-header">
                            ¿Puedo trabajar antes de recibir mi permiso físico?
                            <span class="accordion-icon"></span>
                        </button>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                Sí. Si eres ciudadano de la UE/EFTA, desde el momento en el que entregas todos tus documentos en la comuna y expiden el resguardo de registro ("Attestation d'établissement"), tienes el derecho legal de comenzar a trabajar incluso antes de que el plástico del permiso te llegue por correo (suele tardar de 2 a 4 semanas).
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">
                            ¿Cómo funciona el seguro médico si me equivoco de aseguradora?
                            <span class="accordion-icon"></span>
                        </button>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                El seguro básico LAMal tiene exactamente las mismas coberturas médicas obligatorias por ley independientemente de la caja de salud que elijas (Assura, CSS, Swica, etc.). Solo tu prima mensual variará. Si no estás satisfecho con la prima, sólo puedes cambiar de seguro una vez al año (antes del 30 de noviembre para el año natural siguiente).
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="accordion-header">
                            ¿Qué cambia según el cantón donde viva?
                            <span class="accordion-icon"></span>
                        </button>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                Casi todo en Suiza varía por cantón: la carga de los impuestos sobre la renta, el costo de las primas del seguro médico, las vacaciones escolares, las festividades locales y las autoridades a contactar. El sistema educativo público también tiene pequeñas variaciones. Por ello, las guías de esta web establecen el marco federal y avisan de las diferencias cantonales.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Community Section -->
            <section class="community-section">
                <div class="container">
                    <h2>De la comunidad, a la plataforma pública</h2>
                    <p style="max-width: 600px; margin: 0 auto; margin-bottom: 2rem;">Todo el conocimiento de esta plataforma nace de las respuestas expertas compartidas durante años en nuestra comunidad oficial de Facebook: "Españoles en Suiza que realmente se ayudan".</p>
                    
                    <div class="callout" style="background: rgba(255,255,255,0.1); border-color: white; color: white;">
                        <h4 style="color: white; margin-top: 0;">¿Por qué el grupo es privado?</h4>
                        <p style="color: rgba(255,255,255,0.9); margin-bottom: 0;">Mantenemos el grupo cerrado al público para evitar spam, perfiles falsos y proteger la privacidad de miembros reales al hablar sobre contratos u ofertas de alquiler.</p>
                    </div>
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-primary" style="background: white; color: var(--text-primary);">Solicitar acceso a la comunidad</a>
                </div>
            </section>

            <!-- Official Sources Section -->
            <section style="margin: var(--space-xl) 0; text-align: center; border-top: 1px solid var(--border-light); padding-top: var(--space-xl);">
                <h2 style="border: none; margin-bottom: 0.5rem;">Información oficial y verificable</h2>
                <p style="max-width: 600px; margin: 0 auto 2rem;">Nuestras guías se basan en la experiencia real, pero siempre refiriendo directamente a los portales federales.</p>
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.ch.ch" target="_blank" style="padding: 1rem 2rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-weight: 500;">
                        ch.ch
                        <span style="display:block; font-size: 0.8rem; font-weight: normal; color: var(--text-light);">Portal Federal</span>
                    </a>
                    <a href="https://www.sem.admin.ch" target="_blank" style="padding: 1rem 2rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-weight: 500;">
                        SEM
                        <span style="display:block; font-size: 0.8rem; font-weight: normal; color: var(--text-light);">Sec. Migración</span>
                    </a>
                    <a href="https://www.bfs.admin.ch" target="_blank" style="padding: 1rem 2rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-weight: 500;">
                        OFS
                        <span style="display:block; font-size: 0.8rem; font-weight: normal; color: var(--text-light);">Oficina Estadística</span>
                    </a>
                </div>
            </section>
        `;
        }
    },

    // Category Hub Pages (Dynamically populated by app.js)
    "tramites": {
        title: "Trámites en Suiza",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
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

    "trabajo": {
        title: "Trabajar en Suiza",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
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

    "vivienda": {
        title: "Vivienda y Alquiler",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
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

    "vivir-en-suiza": {
        title: "Vivir en Suiza (Transporte, Educación, Costo de Vida)",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">${ui['nav-inicio']}</a> > 
                    <span>${ui['cat-vivir']}</span>
                </nav>
                <h1>${ui['cat-vivir']}</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">${ui['cat-desc-vivir']}</p>
                
                <div class="callout info" style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface); border-left: 3px solid var(--text-secondary);">
                    <strong>Nota sobre diferencias cantonales:</strong> Recuerda que Suiza es una federación fuertemente descentralizada. Aunque las reglas básicas sean iguales, cada cantón define sus vacaciones escolares, sus festivos y muchos de sus reglamentos de convivencia.
                </div>
            </div>
            
            <section>
                <div id="category-articles-container"></div>
            </section>
            `;
        }
    },

    "salud": {
        title: "Salud y Seguro Médico (LAMal)",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
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

    "impuestos": {
        title: "Impuestos en Suiza",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
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

    "fronterizos": {
        title: "Trabajadores Fronterizos (Permiso G)",
        isCategoryHub: true,
        get content() {
            const currentLang = localStorage.getItem("lang") || "es";
            const ui = window.siteContent.ui[currentLang] || window.siteContent.ui['es'];
            return `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
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
        title: "Recursos y Vínculos Oficiales",
        isCategoryHub: false,
        content: `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">Inicio</a> > 
                    <span>Recursos Útiles</span>
                </nav>
                <h1>Recursos Oficiales</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">Directorio verificado de la administración suiza y portales clave para emigrantes.</p>
            </div>
            
            <div class="topic-hub-grid">
                <div class="card-hub">
                    <h3>ch.ch</h3>
                    <p>El portal nacional suizo administrado por el gobierno federal en 5 idiomas. La principal fuente de verdad inicial.</p>
                    <a href="https://www.ch.ch" target="_blank" class="read-more">Visitar ch.ch &rarr;</a>
                </div>
                <div class="card-hub">
                    <h3>SEM</h3>
                    <p>Secretaría de Estado de Migración. Directivas federales sobre la expedición de tipos de permiso y naturalización.</p>
                    <a href="https://www.sem.admin.ch/sem/es/home.html" target="_blank" class="read-more">Visitar SEM &rarr;</a>
                </div>
                <div class="card-hub">
                    <h3>Comparis</h3>
                    <p>Plataforma para comparar los precios de las primas del seguro médico cantón por cantón, así como seguros de coche y fianzas de alquiler.</p>
                    <a href="https://www.comparis.ch" target="_blank" class="read-more">Visitar Comparis &rarr;</a>
                </div>
                <div class="card-hub">
                    <h3>Página web de tu cantón</h3>
                    <p>La estructura descentralizada indica que tu cantón gestiona el cobro de impuestos, el paro y la expedición del permiso. Por ejemplo vd.ch (Vaud), ge.ch (Ginebra).</p>
                </div>
            </div>
        `
    },

    "comunidad": {
        title: "Unete a la Comunidad Facebook | Españoles en Suiza",
        isCategoryHub: false,
        content: `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">Inicio</a> > 
                    <span>Comunidad</span>
                </nav>
                <h1>De un grupo de ayuda, a esta plataforma de conocimiento.</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">Nuestra web extrae el conocimiento verídico y los problemas más recurrentes que surgen a diario de nuestra vibrante comunidad en Facebook.</p>
            </div>

            <section class="article-layout" style="padding:0; margin-top:2rem;">
                <main>
                    <h2>Por qué el grupo de Facebook es privado</h2>
                    <p>El grupo "Españoles en Suiza que realmente se ayudan" es **estrictamente privado** para salvaguardar la experiencia de nuestros usuarios. A lo largo de los años, hemos visto grupos de expatriados inundados por anunciantes no deseados, bots que roban depósitos de alquiler falsos (el temido "Scam de la caution"), y consejos financieros dudosos.</p>
                    <p>Manteniendo la puerta cerrada y aprobando perfiles reales uno a uno, fomentamos un espacio seguro donde alguien puede preguntar sobre su contrato de trabajo real, su salario, o sus dudas legales sobre impuestos sin temor a que su vida quede expuesta al público o a bots maliciosos.</p>
                    
                    <h2>De los comentarios a la web pública</h2>
                    <p>El origen de esta plataforma web es precisamente descongestionar el grupo y ayudar al resto de la comunidad externa. Si diez personas distintas preguntan cada semana sobre el impuesto a la fuente, los moderadores transforman esas respuestas expertas recurrentes en las Guías estructuradas que lees en este sitio.</p>
                    <p>Aquí obtienes la información pura. En el grupo, obtienes la compañía, la empatía y la resolución de tu caso particular.</p>
                    
                    <div class="callout" style="background:var(--bg-surface); border-color:var(--text-primary); max-width:400px; margin-top: 3rem;">
                        <h4 style="margin-top:0;">Normas para unirte</h4>
                        <ul>
                            <li>Sé respetuoso.</li>
                            <li>Usa el buscador del grupo antes de preguntar algo genérico.</li>
                            <li>No hagas SPAM de tus negocios (taxis, re-ventas de envíos a España).</li>
                        </ul>
                        <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-primary" style="margin-top: 1rem; width:100%;">Solicitar Acceso ahora</a>
                    </div>
                </main>
            </section>
        `
    },

    "contacto": {
        title: "Contacto",
        isCategoryHub: false,
        content: `
            <div class="page-header" style="padding-top: var(--space-lg); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-md); margin-bottom: var(--space-xl);">
                <nav class="breadcrumbs">
                    <a href="#/">Inicio</a> > 
                    <span>Contacto</span>
                </nav>
                <h1>Contacto Editorial</h1>
                <p style="font-size: 1.25rem; max-width: 800px;">¿Has encontrado un error o una normativa que ha sido modificada por la asamblea en tu cantón? Contáctanos para actualizar las guías.</p>
            </div>

            <div style="max-width: 500px;">
                <form id="contact-form">
                    <input type="text" name="_gotcha" style="display:none" />
                    <div id="form-status" style="margin-bottom: 1rem; padding: 1rem; border-radius: var(--radius-sm); font-weight: 500; display: none;"></div>
                    <div class="form-group">
                        <label class="form-label" for="name">Nombre</label>
                        <input type="text" id="name" name="name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="email">E-mail</label>
                        <input type="email" id="email" name="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="message">Mensaje / Corrección de guía</label>
                        <textarea id="message" name="message" rows="5" class="form-control" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar mensaje a edición</button>
                </form>
            </div>
        `
    }
};
