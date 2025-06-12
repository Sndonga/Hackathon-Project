// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Mobile Hamburger Menu Toggle =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===== Dark Mode Toggle =====
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save preference to localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// ===== Animate Elements on Scroll =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Run on page load