document.addEventListener('DOMContentLoaded',function(){
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('show');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); }
        // close mobile nav on selection
        if(nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });

  // Gallery / lightbox
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.close');

  gallery.querySelectorAll('img').forEach(img=>{
    img.addEventListener('click',()=>{
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  lbClose.addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox) closeLightbox(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLightbox(); });
  function closeLightbox(){ lightbox.classList.remove('show'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; }

  // Back to top button
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll',()=>{
    if(window.scrollY>300) back.style.display='block'; else back.style.display='none';
  });
  back.addEventListener('click',()=>{ window.scrollTo({top:0,behavior:'smooth'}); });

  // Contact form simple handler
  const form = document.getElementById('contactForm');
  form.addEventListener('submit',()=>{
    alert('Thanks — your message was received (demo).');
    form.reset();
  });
});
