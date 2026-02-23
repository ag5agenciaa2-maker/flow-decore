/**
 * LÓGICA DO SITE - FLOW DECORE
 * Versão: Pura (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
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
            const text = `Olá me chamo ${name}, vim através do site e gostaria de informações:

📌 *Interesse:* ${product}
💬 *Mensagem:* ${message}

📞 *Telefone:* ${phone}
📧 *Email:* ${email}`;

            const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
    }

    // 6. Dynamic Stats Counter (Optional but premium)
    const stats = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.innerText.replace('+', ''));
                let startValue = 0;
                const duration = 2000;
                const increment = endValue / (duration / 16);

                const updateCounter = () => {
                    startValue += increment;
                    if (startValue < endValue) {
                        target.innerText = Math.ceil(startValue) + (target.innerText.includes('+') ? '+' : '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.innerText = endValue + (target.innerText.includes('+') ? '+' : '');
                    }
                };
                updateCounter();
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    // stats.forEach(stat => statsObserver.observe(stat));

});
