// Typed Effect
const typedText = document.querySelector(".typed-text");
const titles = ["Software Engineer", "Web Developer", "Problem Solver"];
let titleIndex = 0, charIndex = 0;

function type() {
    if (charIndex < titles[titleIndex].length) {
        typedText.textContent += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = titles[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Smooth Scroll for Buttons & Nav Links
// Smooth scroll only for in-page links
// Smooth scroll only for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior:'smooth'});
        }
    });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: true,
    interval: 200
});

// Hero Section
sr.reveal('.hero-text', { origin: 'left' });
sr.reveal('.hero-img', { origin: 'right' });

// About Section
sr.reveal('.about-section h2, .about-section p, .skill');

// Projects
sr.reveal('.project-card', { origin: 'bottom' });

// Certificates
sr.reveal('.certificate-card', { origin: 'bottom' });

// Contact
sr.reveal('.contact-section h2, .contact-section form');

// Skill Bars Animation
const skills = document.querySelectorAll(".skill-fill");
skills.forEach(skill => {
    const width = skill.dataset.fill;
    skill.style.width = "0";
    sr.reveal(skill, { beforeReveal: () => { skill.style.width = width; } });
});

// Hover scale effect on project and certificate buttons
document.querySelectorAll('.project-btn, .cert-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
