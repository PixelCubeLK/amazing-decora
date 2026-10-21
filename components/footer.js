(() => {
    const siteRoot = new URL('../', document.currentScript.src);
    const pageUrl = (path) => new URL(path === 'index.html' ? '' : path.replace(/^pages\/(.+)\.html$/, '$1'), siteRoot).href;
    const host = document.getElementById('site-footer');
    if (!host) return;
    host.innerHTML = `
        <footer class="bg-brand-green text-white pt-16 pb-8 px-6 lg:px-12">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    <div>
                        <a href="${pageUrl('index.html')}" class="inline-flex mb-6" aria-label="Amazing Decora home">
                            <img src="${pageUrl('images/brand/amazing-decora-logo.webp')}" alt="Amazing Decora"
                                width="320" height="223" class="h-20 w-auto object-contain" loading="lazy">
                        </a>
                        <p class="text-gray-300">Helping your plants reach new heights with premium, eco-friendly supports.</p>
                    </div>
                    <div>
                        <h2 class="font-bold text-lg mb-6 text-brand-earth">Products</h2>
                        <ul class="space-y-3 text-gray-300">
                            <li><a href="${pageUrl('pages/products.html')}" class="hover:text-white transition-colors">Coconut Poles</a></li>
                            <li><a href="${pageUrl('pages/products.html')}" class="hover:text-white transition-colors">Coir Pots</a></li>
                            <li><a href="${pageUrl('pages/products.html')}" class="hover:text-white transition-colors">Orchid Supports</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="font-bold text-lg mb-6 text-brand-earth">Company</h2>
                        <ul class="space-y-3 text-gray-300 mb-6">
                            <li><a href="${pageUrl('pages/about.html')}" class="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="${pageUrl('pages/contact.html')}" class="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                        <div class="flex gap-4" aria-label="Social media"><a href="https://www.facebook.com/share/1Bsgxz1DbL/?mibextid=wwXIfr" target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-earth transition-colors">
                            <span class="sr-only">Facebook</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
<a href="https://www.instagram.com/amazing_decora?igsh=eG1jYmd0bmtpY2Rw&utm_source=qr"
                            target="_blank" rel="noopener noreferrer"
                            class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-earth transition-colors">
                            <span class="sr-only">Instagram</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
<a href="https://www.tiktok.com/@amazingdecora?_r=1&_t=ZS-93oDWAH35iX" target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-earth transition-colors">
                            <span class="sr-only">TikTok</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.57-6.93V8.61a8.47 8.47 0 0 0 3.66 1.75v-3.67Z" />
                            </svg>
                        </a></div>
                    </div>
                    <div>
                        <h2 class="font-bold text-lg mb-6 text-brand-earth">Contact Us</h2>
                        <address class="not-italic text-gray-300 space-y-3">
                            <p>No 475, Kainaka,<br>Kaikawala, Matale</p>
                            <p><a href="tel:+94740560413" class="hover:text-white transition-colors">+94 74 056 0413</a><br>
                                <a href="tel:+94766073750" class="hover:text-white transition-colors">+94 76 607 3750</a></p>
                            <p><a href="mailto:amazingdecora100@gmail.com" class="hover:text-white transition-colors break-all">amazingdecora100@gmail.com</a></p>
                        </address>
                    </div>
                </div>
                <nav aria-label="Legal" class="border-t border-white/20 pt-8 pb-8">
                    <h2 class="font-bold text-lg mb-4 text-amber-100">Legal</h2>
                    <ul class="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-8 text-gray-300 text-sm">
                        <li><a href="${pageUrl('pages/privacy-policy.html')}" class="hover:text-white">Privacy Policy</a></li>
                        <li><a href="${pageUrl('pages/terms-and-conditions.html')}" class="hover:text-white">Terms &amp; Conditions</a></li>
                        <li><a href="${pageUrl('pages/shipping-and-delivery.html')}" class="hover:text-white">Shipping &amp; Delivery</a></li>
                        <li><a href="${pageUrl('pages/returns-and-refunds.html')}" class="hover:text-white">Returns, Refunds &amp; Cancellations</a></li>
                    </ul>
                </nav>
                <div class="border-t border-white/20 pt-8 text-center text-gray-300 text-sm">
                    &copy; ${new Date().getFullYear()} Amazing Decora. All rights reserved.
                </div>
            </div>
        </footer>`;
})();
