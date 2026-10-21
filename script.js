document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Animations (Fade In) ---
    // Select all elements with class 'fade-in-up' (I need to add this class to HTML elements if I want to use it)
    // Or just animate sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to product cards and feature items
    const animatedElements = document.querySelectorAll('.group, .prose p, h2');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

});
