// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    let currentLang = 'cs';

    // Language toggle
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'cs' ? 'en' : 'cs';
        langToggle.textContent = currentLang === 'cs' ? 'EN' : 'CZ';

        // Update all translatable elements
        document.querySelectorAll('[data-cs][data-en]').forEach(function(element) {
            element.textContent = element.getAttribute('data-' + currentLang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLang === 'cs' ? 'cs' : 'en';

        // Store preference
        localStorage.setItem('preferredLang', currentLang);
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== currentLang) {
        langToggle.click();
    }

    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        // Animate hamburger to X
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
        observer.observe(item);
    });

    // Animate skill categories
    document.querySelectorAll('.skill-category').forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
        observer.observe(item);
    });

    // Animate certification cards
    document.querySelectorAll('.cert-card').forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
        observer.observe(item);
    });
});
