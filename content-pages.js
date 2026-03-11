/**
 * content-pages.js
 * Editorial Homepage and Topic Hub structures.
 */

window.siteContent = window.siteContent || { es: { global: {}, pages: {}, articles: {} } };

window.siteContent.es.pages = {
    "home": {
        title: "Españoles en Suiza | Guía práctica para vivir y trabajar",
        description: "Plataforma editorial sobre la vida en Suiza: permisos, trabajo, vivienda, seguros e impuestos. Toda la información contrastada.",
        keywords: "vivir en suiza, permisos suiza, trabajar en suiza, guía suiza",
        content: `
            <!-- Editorial Hero Section -->
            <section class="hero-section">
                <h1>Guía práctica para vivir y trabajar en Suiza</h1>
                <p class="hero-subtitle">Información clara, oficial y estructurada sobre permisos, trabajo, vivienda, seguros y vida diaria en la Confederación Helvética.</p>
                
                <div class="search-container">
                    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="global-search" class="search-input" placeholder="Buscar guías, trámites, impuestos..." autocomplete="off">
                    <div id="search-results"></div>
                </div>

                <div class="hero-actions">
                    <a href="#hub-tramites" class="btn btn-primary">Leer guías principales</a>
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-secondary">Solicitar acceso al grupo</a>
                </div>
            </section>

            <!-- Quick Start Cards -->
            <section style="margin-top: var(--space-xl);">
                <h2 style="border-bottom:none; margin-bottom: 0;">Empezar aquí</h2>
                <p style="font-size: 1.125rem; margin-bottom: 2rem;">Si acabas de llegar o planeas mudarte, revisa estas guías esenciales.</p>
                <div class="quick-start-grid">
                    <a href="#articulo-registro" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <h3>Llegar a Suiza</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Registro y control</span>
                    </a>
                    <a href="#articulo-permisos" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <h3>Primeros trámites</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Permisos de residencia</span>
                    </a>
                    <a href="#articulo-buscar-empleo" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        <h3>Encontrar trabajo</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Mercado y salarios</span>
                    </a>
                    <a href="#articulo-lamal" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        <h3>Seguro médico</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Sistema LAMal</span>
                    </a>
                    <a href="#articulo-alquiler" class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <h3>Encontrar vivienda</h3>
                        <span style="font-size: 0.9rem; color: var(--text-light); margin-top: 8px;">Alquiler y agencias</span>
                    </a>
                </div>
            </section>

            <!-- Main Topic Hubs -->
            <section style="margin-top: var(--space-xl);">
                <h2>Temas Principales</h2>
                <div class="topic-hub-grid">
                    <div class="card-hub">
                        <h3>Trámites y Permisos <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">3 guías</span></h3>
                        <p>Residencia L, B, C, registro en comunas y la burocracia básica del día a día.</p>
                        <a href="#hub-tramites" class="read-more">Explorar guías &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>Trabajo y Salarios <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">5 guías</span></h3>
                        <p>Contratos suizos, cálculo del salario, derechos laborales y desempleo.</p>
                        <a href="#hub-trabajo" class="read-more">Explorar guías &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>Sanidad Suizo <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">3 guías</span></h3>
                        <p>El seguro básico LAMal, diferencias en las franquicias y qué hacer en urgencias.</p>
                        <a href="#hub-salud" class="read-more">Explorar guías &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>Vivienda <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">2 guías</span></h3>
                        <p>Cómo postular a un apartamento suizo, crear el dosier y los derechos del inquilino (ASLOCA).</p>
                        <a href="#hub-vivienda" class="read-more">Explorar guías &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>Impuestos <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">2 guías</span></h3>
                        <p>Desde el impuesto a la fuente hasta la triple imposición: federal, cantonal y comunal.</p>
                        <a href="#hub-impuestos" class="read-more">Explorar guías &rarr;</a>
                    </div>
                    <div class="card-hub">
                        <h3>Frontaliers <span style="font-size:0.8rem; background: var(--bg-surface); padding:2px 8px; border-radius: 12px; font-weight:normal;">1 guía</span></h3>
                        <p>Normativas fiscales y de seguros para aquellos que cruzan la frontera a diario.</p>
                        <a href="#hub-frontaliers" class="read-more">Explorar guías &rarr;</a>
                    </div>
                </div>
            </section>

            <!-- Featured / Most Read Articles -->
            <section style="margin-top: var(--space-xl);">
                <h2>Guías Destacadas</h2>
                <div class="featured-grid">
                    <a href="#articulo-permisos" class="card-article">
                        <div class="card-meta">Trámites Ordinarios</div>
                        <h3>Diferencias entre Permiso L, B, y C</h3>
                        <p>Guía de comprensión completa sobre los títulos de residencia suizos.</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 4 min de lectura</span>
                    </a>
                    <a href="#articulo-impuesto-fuente" class="card-article">
                        <div class="card-meta">Impuestos</div>
                        <h3>El impuesto a la fuente (Quellensteuer)</h3>
                        <p>Cómo funciona el cobro de impuestos directamente en la nómina para extranjeros.</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 3 min de lectura</span>
                    </a>
                    <a href="#articulo-franquicia" class="card-article">
                        <div class="card-meta">Seguro de Salud</div>
                        <h3>Franquicia y Copago en Suiza</h3>
                        <p>Por qué el seguro médico puede encarecerse si no eliges bien tu franquicia básica.</p>
                        <span style="margin-top: auto; font-size: 0.85rem; color: var(--text-light);">⏱ 3 min de lectura</span>
                    </a>
                </div>
            </section>

            <!-- FAQ Accordion section -->
            <section style="margin-top: var(--space-xl);">
                <h2>Preguntas Frecuentes</h2>
                <p>Respuestas rápidas basadas en las discusiones más comunes de nuestra comunidad.</p>
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

            <!-- Community Connection -->
            <section class="community-section">
                <div class="container" style="max-width: 800px;">
                    <h2>La Comunidad Privada</h2>
                    <p style="font-size: 1.25rem;">Nacimos en el grupo de Facebook <em>"Españoles en Suiza que realmente se ayudan"</em>.</p>
                    
                    <div class="callout">
                        <h4>Resumen del grupo y la plataforma</h4>
                        <p>El grupo de Facebook es <strong>estrictamente privado</strong> para asegurar la moderación y evitar bulos o estafas. Esta plataforma web existe como un repositorio estructurado, transformando las dudas repetitivas que surgen en la comunidad en guías editoriales sólidas de acceso libre.</p>
                    </div>
                    
                    <a href="https://www.facebook.com/groups/1560239407529680" target="_blank" class="btn btn-outline" style="border-color: white; color: white;">Solicitar acceso a la comunidad Facebook</a>
                </div>
            </section>
        `
    },
    // The Hub Structure logic
    "hub-tramites": {
        title: "Permisos y Trámites",
        content: `
            <div class="page-header">
                <h1>Permisos y Trámites</h1>
                <p>Todas las gestiones burocráticas explicadas paso a paso.</p>
            </div>
            <div class="card-grid">
                <a href="#articulo-permisos" class="card-hub"><h3>Permisos de residencia</h3><p>Diferencias entre L, B, C.</p></a>
                <a href="#articulo-registro" class="card-hub"><h3>Registro oficial</h3><p>Inscripción en la comuna a tu llegada.</p></a>
                <a href="#articulo-diplomas" class="card-hub"><h3>Reconocimiento de diplomas</h3><p>Validación frente al SEFRI/MEBEKO.</p></a>
                <a href="#articulo-ciudadania" class="card-hub"><h3>Nacionalidad</h3><p>Naturalización suiza ordinaria.</p></a>
            </div>
        `
    },
    // The rest of the hubs will follow the same elegant logic
    "hub-trabajo": {
        title: "Trabajo y Salarios",
        content: `<div class="page-header"><h1>Trabajo y Salarios</h1></div>
        <div class="card-grid">
            <a href="#articulo-salarios" class="card-hub"><h3>Salarios por sector</h3><p>Incluye salarium y CCT.</p></a>
            <a href="#articulo-contratos" class="card-hub"><h3>Contratos</h3><p>Derechos y obligaciones (CDI, CDD).</p></a>
            <a href="#articulo-periodo-prueba" class="card-hub"><h3>Preaviso de despido</h3><p>Tiempos de despido y prueba.</p></a>
            <a href="#articulo-buscar-empleo" class="card-hub"><h3>Búsqueda de empleo</h3><p>CV suizo y plataformas.</p></a>
            <a href="#articulo-seguros-sociales" class="card-hub"><h3>Seguros sociales</h3><p>Caja de pensiones y paro.</p></a>
        </div>`
    },
    "hub-vivienda": {
        title: "Vivienda",
        content: `<div class="page-header"><h1>Vivienda</h1></div>
        <div class="card-grid">
            <a href="#articulo-alquiler" class="card-hub"><h3>Proceso de alquiler</h3><p>Creación del dosier de inquilino.</p></a>
            <a href="#articulo-fianzas" class="card-hub"><h3>Fianzas</h3><p>Derechos y depósitos (ASLOCA).</p></a>
            <a href="#articulo-costo-vida" class="card-hub"><h3>Costo de vida</h3><p>Presupuesto general suizo.</p></a>
        </div>`
    },
    "hub-salud": {
        title: "Seguro Médico y Sanidad",
        content: `<div class="page-header"><h1>Sanidad Suiza</h1></div>
        <div class="card-grid">
            <a href="#articulo-lamal" class="card-hub"><h3>Seguro básico (LAMal)</h3><p>Obligatoriedad e inscripción.</p></a>
            <a href="#articulo-franquicia" class="card-hub"><h3>Copagos</h3><p>Calcula tus gastos y franquicia.</p></a>
            <a href="#articulo-sistema-salud" class="card-hub"><h3>Saber ir al médico</h3><p>Urgencias y facturación.</p></a>
        </div>`
    },
    "hub-impuestos": {
        title: "Impuestos en Suiza",
        content: `<div class="page-header"><h1>Impuestos</h1></div>
        <div class="card-grid">
            <a href="#articulo-impuesto-fuente" class="card-hub"><h3>Impuesto a la fuente</h3><p>Retención en nómina para extranjeros.</p></a>
            <a href="#articulo-impuestos" class="card-hub"><h3>Triple imposición</h3><p>Cantón, comuna, federación.</p></a>
        </div>`
    },
    "hub-frontaliers": {
        title: "Frontaliers",
        content: `<div class="page-header"><h1>Frontaliers</h1></div>
        <a href="#articulo-frontaliers" class="card-hub" style="max-width:400px;"><h3>Permiso G</h3><p>Vivir en Francia/Alemania, trabajar en Suiza.</p></a>`
    }
};
