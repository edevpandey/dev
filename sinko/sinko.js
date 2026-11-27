/* =========================================================
   SINKO — EDIT LINKS HERE
   Leave a link empty ('') to show "Coming soon" instead.
   ========================================================= */
const SINKO = {
  // Google Play listing, once the app is published:
  playStore: '', // 'https://play.google.com/store/apps/details?id=com.edev.sinko'
  // Download link for Sinko Server (Windows), e.g. a GitHub Release asset:
  serverDownload: '',
  // Support email, stored scrambled so scraper bots can't read it (same as the portfolio).
  // To change: [user, domain].map(s => btoa([...s].reverse().join('')))
  emailParts: ['bGFwZW50bmlvcGtn', 'bW9jLmxpYW1n'],
};

(function () {
  const $$ = (s) => document.querySelectorAll(s);
  const email = () => SINKO.emailParts.map((p) => [...atob(p)].reverse().join('')).join('@');

  // Store / download buttons
  function wire(selector, url) {
    $$(selector).forEach((a) => {
      if (url) {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      } else {
        a.removeAttribute('href');
        a.classList.add('is-soon');
        a.setAttribute('aria-disabled', 'true');
        const small = a.querySelector('small');
        if (small) small.textContent = 'Coming soon on';
      }
    });
  }
  wire('[data-link="play"]', SINKO.playStore);
  wire('[data-link="server"]', SINKO.serverDownload);

  // Email: written into the page by script only (not present in the HTML source)
  $$('[data-email]').forEach((el) => {
    const a = document.createElement('a');
    a.href = 'mailto:' + email() + (el.dataset.subject ? '?subject=' + encodeURIComponent(el.dataset.subject) : '');
    a.textContent = email();
    el.replaceChildren(a);
  });

  // Year
  $$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

  // Nav: solid on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (menuBtn && links) {
    const set = (open) => {
      links.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', () => set(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
  }

  // Theme toggle (shares the "theme" setting with the portfolio, same site)
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 70 + 'ms'; io.observe(el); });
  } else {
    $$('.reveal').forEach((el) => el.classList.add('in'));
  }
})();
