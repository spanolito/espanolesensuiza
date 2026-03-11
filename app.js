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

    let currentLang = "es";

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
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const parent = toggle.parentElement;
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !expanded);
            parent.classList.toggle("open");

            // Close other open dropdowns
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                if (dropdown !== parent) {
                    dropdown.classList.remove("open");
                    const otherToggle = dropdown.querySelector(".dropdown-toggle");
                    if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
                }
            });
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

    // Language switcher
    langBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const lang = e.target.getAttribute("data-lang");
            if (window.siteContent[lang]) {
                currentLang = lang;
                langBtns.forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
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

                if (results.length > 0) {
                    displayArea.innerHTML = `
                        <div class="featured-grid" style="margin-top: 2rem;">
                            ${results.map(r => `
                                <a href="#/articulo/${r.id}" class="card-article">
                                    <div class="card-meta">${r.category || 'Guía'}</div>
                                    <h3>${r.title}</h3>
                                    <p>${r.description}</p>
                                    <span class="btn-secondary" style="margin-top:auto; width:fit-content; border:none; padding:0; color:var(--swiss-red); font-weight:600;">Leer guía &rarr;</span>
                                </a>
                            `).join('')}
                        </div>
                    `;
                } else {
                    displayArea.innerHTML = `<p style="margin-top:2rem;">No se encontraron resultados para "${term}".</p>`;
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

        if (hubArticles.length > 0) {
            container.innerHTML = `
                <div class="featured-grid">
                    ${hubArticles.map(r => `
                        <a href="#/articulo/${r.id}" class="card-article">
                            <div class="card-meta">${r.category || 'Guía'} ${r.readingTime ? `· ${r.readingTime} min` : ''}</div>
                            <h3>${r.title}</h3>
                            <p>${r.description}</p>
                            <span class="btn-secondary" style="margin-top:auto; width:fit-content; border:none; padding:0; color:var(--swiss-red); font-weight:600;">Leer guía &rarr;</span>
                        </a>
                    `).join('')}
                </div>
            `;
        } else {
            container.innerHTML = `<p style="color: var(--text-light); margin-top: 2rem;">No hay artículos publicados en esta categoría todavía.</p>`;
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
            if (isArticle) {
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
                                        <a href="#/">Inicio</a> > 
                                        <a href="#/${pageData.hub || ''}">${pageData.category || 'Guías'}</a> > 
                                        <span>${pageData.title}</span>
                                    </nav>
                                    <h1>${pageData.title}</h1>
                                    <div class="article-meta">
                                        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${readingTime} min lectura</span>
                                        ${pageData.dateUpdated ? `<span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Actualizado: ${pageData.dateUpdated}</span>` : ''}
                                    </div>
                                </div>
                                
                                ${pageData.summary ? `
                                <div class="box-summary">
                                    <h4>Puntos Clave</h4>
                                    <p>${pageData.summary}</p>
                                </div>` : ''}
                                
                                ${pageData.content}
                            </article>
                            
                            <div class="related-articles-footer" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
                                <h3>Explora otras guías de ${pageData.category}</h3>
                                <a href="#/${pageData.hub}" class="btn btn-secondary" style="margin-top: 1rem;">Ver todas las guías</a>
                            </div>
                        </main>
                        
                        <aside class="sidebar">
                            <div class="toc">
                                <h4>Navegación</h4>
                                <ul>
                                    <li><a href="#/${pageData.hub}">&larr; Volver a ${pageData.category}</a></li>
                                    <!-- Extracted dynamically or hardcoded in content -->
                                    <li style="margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-light);"><a href="#app-container">Volver arriba &uarr;</a></li>
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
