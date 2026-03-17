/* ============================================================
   ANIMATIONS.JS - Onscreen Animations & Scroll Effects
   ============================================================ */

(function() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-in animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    function initAnimations() {
        // Animate service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });

        // Animate about section content
        const aboutPhoto = document.querySelector('.about-photo');
        const aboutText = document.querySelector('.about-text');
        if (aboutPhoto) {
            aboutPhoto.style.opacity = '0';
            aboutPhoto.style.transform = 'translateY(30px)';
            aboutPhoto.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(aboutPhoto);
        }
        if (aboutText) {
            aboutText.style.opacity = '0';
            aboutText.style.transform = 'translateY(30px)';
            aboutText.style.transition = 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s';
            observer.observe(aboutText);
        }

        // Animate testimonials placeholder
        const testimonialPlaceholder = document.querySelector('.placeholder-content');
        if (testimonialPlaceholder) {
            testimonialPlaceholder.style.opacity = '0';
            testimonialPlaceholder.style.transform = 'translateY(30px)';
            testimonialPlaceholder.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(testimonialPlaceholder);
        }

        // Animate contact section content
        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.contact-form');
        if (contactInfo) {
            contactInfo.style.opacity = '0';
            contactInfo.style.transform = 'translateY(30px)';
            contactInfo.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(contactInfo);
        }
        if (contactForm) {
            contactForm.style.opacity = '0';
            contactForm.style.transform = 'translateY(30px)';
            contactForm.style.transition = 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s';
            observer.observe(contactForm);
        }
    }

    // Parallax effect on hero section (subtle)
    function setupHeroParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const parallaxValue = scrollPosition * 0.5;
            hero.style.backgroundPosition = `center ${parallaxValue}px`;
        }, { passive: true });
    }

    // Number counter animation for stats (if added in future)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // Stagger animation for list items
    function staggerListItems(listSelector) {
        const items = document.querySelectorAll(listSelector);
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
            
            observer.observe(item);
        });
    }

    // Smooth scroll anchor behavior
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Page load animations
    window.addEventListener('load', () => {
        initAnimations();
        staggerListItems('.experience-list li');
        staggerListItems('.service-list li');
        setupHeroParallax();
    });

    // Fallback if load event doesn't fire in time
    document.addEventListener('DOMContentLoaded', () => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            if (!document.readyState === 'complete') {
                initAnimations();
            }
        }, 100);
    });

    // Reveal elements that are already visible on page load
    setTimeout(() => {
        document.querySelectorAll('[style*="opacity"]').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }, 500);

    // Scroll to top button (optional - can add to HTML if needed)
    function setupScrollToTop() {
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'scroll-to-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background-color: #0F766E;
            color: white;
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            font-size: 1.25rem;
            cursor: pointer;
            display: none;
            z-index: 999;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;

        document.body.appendChild(scrollTopBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
                scrollTopBtn.style.alignItems = 'center';
                scrollTopBtn.style.justifyContent = 'center';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        scrollTopBtn.addEventListener('mouseenter', () => {
            scrollTopBtn.style.backgroundColor = '#0D5B57';
            scrollTopBtn.style.transform = 'scale(1.1)';
        });

        scrollTopBtn.addEventListener('mouseleave', () => {
            scrollTopBtn.style.backgroundColor = '#0F766E';
            scrollTopBtn.style.transform = 'scale(1)';
        });
    }

    // Initialize scroll-to-top button
    if (window.innerHeight < document.body.scrollHeight) {
        setupScrollToTop();
    }

})();
