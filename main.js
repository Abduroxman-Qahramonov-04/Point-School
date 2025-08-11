function toggleMenu(btn) {
  const nav = document.getElementById('mobile-nav');
  const open = btn.getAttribute('aria-expanded') === 'true';

  btn.setAttribute('aria-expanded', String(!open));
  btn.classList.toggle('is-active', !open);  // animate icon
  nav.classList.toggle('open', !open);       // animate drawer
  nav.setAttribute('aria-hidden', String(open));

  // optional: lock body scroll when open
  document.body.classList.toggle('menu-open', !open);
}

function closeMenu() {
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.setAttribute('aria-expanded', 'false');
  btn.classList.remove('is-active');
  nav.classList.remove('open');
  nav.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
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

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();