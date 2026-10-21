document.addEventListener('DOMContentLoaded', () => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
    const candidates = [...document.querySelectorAll('body > header > :not(.absolute), section .grid > *, section h2, main .grid > *, main h2, main .prose > p, main img, section > .relative > *, #site-footer .grid > *, #site-footer .border-t')];
    const blocks = candidates.filter(element => !element.closest('.hero-content') && !candidates.some(parent => parent !== element && parent.contains(element)));
    const running = new Set();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            element.style.removeProperty('opacity');
            const siblings = [...element.parentElement.children].filter(child => blocks.includes(child));
            const animation = element.animate([
                { opacity: 0, translate: '0 24px' },
                { opacity: 1, translate: '0 0' }
            ], { duration: 650, delay: Math.min(Math.max(siblings.indexOf(element), 0) * 80, 240), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
            running.add(animation);
            animation.finished.then(() => running.delete(animation)).catch(() => {});
            observer.unobserve(element);
        });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    blocks.forEach(element => {
        element.style.opacity = '0';
        element.addEventListener('focusin', () => {
            element.style.removeProperty('opacity');
            observer.unobserve(element);
        }, { once: true });
        observer.observe(element);
    });
    preference.addEventListener('change', event => {
        if (!event.matches) return;
        observer.disconnect();
        blocks.forEach(element => element.style.removeProperty('opacity'));
        running.forEach(animation => animation.cancel());
    });
});
