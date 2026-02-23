/**
 * LÓGICA DO SITE - FLOW DECORE
 * Versão: Pura (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect & Visibility Tracking
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Background color / shadow on scroll
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/Show on direction change
        if (currentScrollY > 100) { // Only hide if scrolled down a bit
            if (currentScrollY > lastScrollY) {
                // Scrolling DOWN
                header.classList.add('header-hidden');
            } else {
                // Scrolling UP
                header.classList.remove('header-hidden');
            }
        } else {
            // Near top, always show
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu .nav-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // 3. Smooth Scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. WhatsApp Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const phone = contactForm.querySelector('[name="phone"]').value;
            const product = contactForm.querySelector('[name="produto"]').value;
            const message = contactForm.querySelector('[name="message"]').value;

            const whatsappNumber = "5521983111836";
            const text = `Olá me chamo ${name}, vim pelo site e gostaria de mais informações:

📌 *Interesse:* ${product}
💬 *Mensagem:* ${message}

📞 *Telefone:* ${phone}
📧 *E-mail:* ${email}`;

            const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
    }

    // 6. Dynamic Stats Counter
    const stats = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const originalText = target.innerText;
                const numericPart = originalText.match(/\d+/)[0];
                const suffix = originalText.replace(numericPart, '');
                const endValue = parseInt(numericPart);

                let startValue = 0;
                const duration = 2000; // 2 segundos
                const startTime = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Easing suave (outQuad)
                    const easedProgress = progress * (2 - progress);

                    const currentValue = Math.floor(easedProgress * endValue);
                    target.innerText = currentValue + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.innerText = endValue + suffix;
                    }
                };

                requestAnimationFrame(updateCounter);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

});
