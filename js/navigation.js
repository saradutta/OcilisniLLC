/* ============================================================
   NAVIGATION.JS - Header Navigation, Sticky Header, Mobile Menu
   ============================================================ */

(function() {
    // Navigation Elements
    const header = document.getElementById('header');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerCTA = document.querySelector('.header-cta');

    // Toggle mobile menu
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-container')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Sticky header shadow on scroll
    function updateHeaderOnScroll() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    }

    window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

    // Update active nav link based on current section
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100; // Offset for sticky header

        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    link.classList.add('active');
                }
            }
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Initialize on page load
    updateHeaderOnScroll();

    // Keyboard navigation: Close menu on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

})();
