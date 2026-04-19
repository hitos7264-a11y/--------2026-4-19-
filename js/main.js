/* ロームら三社統合 | Main JS
   - Drawer / Menu
   - Scroll reveal
   - Back-to-top
*/

(function(){
  'use strict';

  // ---------- Drawer ----------
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.querySelector('.drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer(){
    if(drawer){ drawer.classList.add('open'); }
    if(drawerBackdrop){ drawerBackdrop.classList.add('open'); }
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(){
    if(drawer){ drawer.classList.remove('open'); }
    if(drawerBackdrop){ drawerBackdrop.classList.remove('open'); }
    document.body.style.overflow = '';
  }
  if(menuBtn){ menuBtn.addEventListener('click', openDrawer); }
  if(drawerClose){ drawerClose.addEventListener('click', closeDrawer); }
  if(drawerBackdrop){ drawerBackdrop.addEventListener('click', closeDrawer); }
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ closeDrawer(); }
  });

  // ---------- Scroll Reveal ----------
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((ent)=>{
        if(ent.isIntersecting){
          ent.target.classList.add('visible');
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ---------- Highlight current in drawer ----------
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.drawer-nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)){
      a.classList.add('current');
    }
  });

  // ---------- Bottom nav active ----------
  document.querySelectorAll('.bottom-nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && (href.endsWith(path) || (path==='index.html' && href==='index.html'))){
      a.classList.add('active');
    }
  });

  // ---------- Smooth internal anchor scroll adjust ----------
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href').slice(1);
      if(!id) return;
      const target = document.getElementById(id);
      if(target){
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
