function toggleMenu(btn){
  const nav = document.getElementById('mobile-nav');
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  btn.classList.toggle('is-active', !open);
  nav.classList.toggle('open', !open);
  nav.setAttribute('aria-hidden', String(open));
}
function closeMenu(){
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('mobile-nav');
  if(!btn || !nav) return;
  btn.setAttribute('aria-expanded','false');
  btn.classList.remove('is-active');
  nav.classList.remove('open');
  nav.setAttribute('aria-hidden','true');
}


// close with ESC
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });


    // Simple horizontal scroll controls
    function scrollByAmount(selector, direction = 1) {
      const track = document.querySelector(selector);
      if (!track) return;
      const amount = track.clientWidth * 0.8 * direction;
      track.scrollBy({ left: amount, behavior: 'smooth' });
    }

    document.getElementById('year').textContent = new Date().getFullYear();