// Loading animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Menu button
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');
let menuOpen = false;

menuBtn.addEventListener('click', function() {
    if (!menuOpen) {
        navbar.classList.add('show');
        menuBtn.innerHTML = '<i class="fas fa-times"></i> Close';
        menuOpen = true;
    } else {
        navbar.classList.remove('show');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu';
        menuOpen = false;
    }
});

// Hide navbar when clicking outside
document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target) && menuOpen) {
        navbar.classList.remove('show');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu';
        menuOpen = false;
    }
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close menu after clicking
        navbar.classList.remove('show');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu';
        menuOpen = false;
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const button = this.querySelector('button');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;

    // Simulate form submission
    setTimeout(function() {
        button.innerHTML = '<i class="fas fa-check"></i> Sent!';
        button.style.background = '#4CAF50';

        setTimeout(function() {
            button.innerHTML = originalText;
            button.style.background = '#ff4a4a';
            button.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Parallax effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrolled = window.scrollY;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});