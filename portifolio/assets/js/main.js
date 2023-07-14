/* main.js */

// Toggle menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Scroll reveal animations
ScrollReveal().reveal('.home__data, .home__social, .home__img', { delay: 300 });
ScrollReveal().reveal('.about__img, .about__subtitle, .about__text', { delay: 300 });
ScrollReveal().reveal('.skills__subtitle, .skills__text, .skills__data', { delay: 300 });
ScrollReveal().reveal('.work__img', { delay: 300 });
ScrollReveal().reveal('.contact__input, .contact__button', { delay: 300 });

// Progress bars animation
const skillsBars = document.querySelectorAll('.skills__bar');

skillsBars.forEach(bar => {
  const percentage = bar.querySelector('.skills__percentage').textContent;
  bar.style.width = percentage;
});

