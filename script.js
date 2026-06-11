const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const backToTop = document.getElementById('back-to-top');
const galleryButtons = document.querySelectorAll('.thumb');
const mainGalleryImage = document.getElementById('main-gallery-image');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    siteNav.classList.remove('open');
  }
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      siteNav.classList.remove('open');
    }
  });
});

galleryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const src = button.dataset.src;
    if (src && mainGalleryImage) {
      mainGalleryImage.src = src;
      galleryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    }
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
