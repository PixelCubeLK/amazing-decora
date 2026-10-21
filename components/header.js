(() => {
    const script = document.currentScript;
    const siteRoot = new URL('../', script.src);
    const pageUrl = (path) => new URL(path, siteRoot).href;
    const currentPath = window.location.pathname;
    const links = [
        { label: 'Home', path: 'index.html' },
        { label: 'Products', path: 'pages/products.html' },
        { label: 'About Us', path: 'pages/about.html' },
        { label: 'Contact', path: 'pages/contact.html' },
    ];
    const isActive = (path) => currentPath === new URL(path, siteRoot).pathname ||
        (path === 'index.html' && currentPath === siteRoot.pathname);
    const isHome = isActive('index.html');
    const renderLinks = (mobile) => links.map(({ label, path }) => {
        const active = isActive(path);
        const classes = mobile
            ? `py-2 w-full text-center ${active ? 'text-brand-earth font-bold' : 'hover:text-brand-earth'}`
            : path === 'pages/contact.html'
                ? 'px-5 py-2 bg-brand-earth hover:bg-amber-700 rounded-full text-white transition-all transform hover:scale-105 font-medium'
                : `font-medium transition-colors ${active ? 'text-brand-earth border-b-2 border-brand-earth' : 'hover:text-brand-earth'}`;
        return `<a href="${pageUrl(path)}" class="${classes}"${active ? ' aria-current="page"' : ''}>${label}</a>`;
    }).join('');

    const host = document.getElementById('site-header');
    if (!host) return;
    host.innerHTML = `
        <nav id="navbar" aria-label="Main navigation"
            class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 lg:px-12 text-white ${isHome ? 'bg-transparent' : 'bg-brand-dark shadow-md'}">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <a href="${pageUrl('index.html')}" class="flex items-center shrink-0" aria-label="Amazing Decora home">
                    <img src="${pageUrl('images/brand/amazing-decora-logo.png')}" alt="Amazing Decora"
                        width="2966" height="2069" class="h-14 md:h-16 w-auto object-contain">
                </a>
                <div class="hidden md:flex items-center gap-8">${renderLinks(false)}</div>
                <button id="mobile-menu-btn" type="button" aria-label="Open navigation menu"
                    aria-controls="mobile-menu" aria-expanded="false" class="md:hidden text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">&#9776;</button>
            </div>
            <div id="mobile-menu"
                class="hidden md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-xl py-4 flex-col items-center gap-4 border-t border-white/10">
                ${renderLinks(true)}
            </div>
        </nav>`;

    const navbar = host.querySelector('#navbar');
    const button = host.querySelector('#mobile-menu-btn');
    const menu = host.querySelector('#mobile-menu');
    const setMenuOpen = (open) => {
        menu.classList.toggle('hidden', !open);
        menu.classList.toggle('flex', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        button.innerHTML = open ? '&times;' : '&#9776;';
    };
    button.addEventListener('click', () => setMenuOpen(button.getAttribute('aria-expanded') !== 'true'));
    host.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            button.focus();
        }
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', () => setMenuOpen(false));
    const updateNavbar = () => {
        const solid = !isHome || window.scrollY > 50;
        navbar.classList.toggle('bg-brand-dark', solid);
        navbar.classList.toggle('shadow-md', solid);
        navbar.classList.toggle('bg-transparent', !solid);
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
})();