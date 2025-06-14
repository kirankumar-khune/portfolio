// Preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // Sticky Header
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('hide');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Scroll down
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Scroll up
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    // Scroll Animation
    function animateOnScroll() {
        const aboutImg = document.querySelector('.about-img');
        const aboutText = document.querySelector('.about-text');
        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.contact-form');
        const projectCards = document.querySelectorAll('.project-card');
        
        // About section animation
        if (isInViewport(aboutImg)) {
            aboutImg.classList.add('animate');
            aboutText.classList.add('animate');
        }
        
        // Contact section animation
        if (isInViewport(contactInfo)) {
            contactInfo.classList.add('animate');
            contactForm.classList.add('animate');
        }
        
        // Project cards animation
        projectCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 200);
            }
        });
    }
    
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (!name || !email) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            this.reset();
        });
    }
});

document.addEventListener('keydown', function(e) {
    
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
