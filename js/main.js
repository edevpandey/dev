/* =========================================================
   EDIT YOUR CONTENT HERE
   Everything on the page (skills, services, projects, links)
   is generated from this one object.
   ========================================================= */
const data = {
  roles: ['Software Developer', 'Flutter App Developer', 'Technical Writer', 'Accounting Teacher'],

  /* Email is stored scrambled so scraper bots can't read it from the source.
     It is only assembled in the browser when a visitor clicks.
     To change it, run this in the browser console and paste the two results:
       [user, domain].map(s => btoa([...s].reverse().join('')))
     e.g. for "name@gmail.com": user = 'name', domain = 'gmail.com' */
  emailParts: ['bGFwZW50bmlvcGtn', 'bW9jLmxpYW1n'],
  location: 'Kathmandu, Nepal',
  phone: '', // e.g. '+977 98XXXXXXXX' — leave empty to hide

  socials: [
    { name: 'GitHub', url: 'https://github.com/edevpandey', icon: 'github' },
    { name: 'Facebook', url: 'https://facebook.com/edevpandey', icon: 'facebook' },
    { name: 'Email', url: 'email', icon: 'mail' }, // 'email' = protected address
  ],

  skills: [
    { name: 'Flutter', color: '#38bdf8' },
    { name: 'Dart', color: '#22d3ee' },
    { name: 'Firebase', color: '#fbbf24' },
    { name: 'Android', color: '#4ade80' },
    { name: 'Java', color: '#f97316' },
    { name: 'Python', color: '#facc15' },
    { name: 'JavaScript', color: '#fde047' },
    { name: 'HTML & CSS', color: '#fb7185' },
    { name: 'REST APIs', color: '#a78bfa' },
    { name: 'SQL', color: '#60a5fa' },
    { name: 'Git & GitHub', color: '#f87171' },
    { name: 'UI / UX Design', color: '#e879f9' },
  ],

  services: [
    { icon: 'phone', title: 'Mobile App Development', text: 'Cross-platform Android & iOS apps with Flutter and Firebase: auth, databases, push notifications, offline support and Play Store publishing.' },
    { icon: 'layers', title: 'Business Software', text: 'Custom ERP, accounting and inventory tools that fit how your business actually works, with clean dashboards and reports.' },
    { icon: 'pen', title: 'UI / UX Design', text: 'Simple, friendly interfaces designed mobile-first, with consistent visuals and smooth user flows.' },
    { icon: 'bolt', title: 'Rapid Prototyping', text: 'Turn an idea into a working MVP fast, so you can test with real users before investing more.' },
    { icon: 'book', title: 'E-Learning Apps', text: 'Study and exam-prep apps with lessons, quizzes and video content, built from experience teaching real students.' },
    { icon: 'doc', title: 'Technical Writing', text: 'Clear documentation, tutorials and READMEs that make complex topics easy to follow.' },
  ],

  /* category is used by the filter buttons.
     Set playStore / github / website to a URL, or leave '' to hide that link. */
  projects: [
    {
      title: 'Sinko',
      subtitle: 'Your phone, pinned to your PC',
      category: 'Tools',
      image: 'sinko/img/feature.webp',
      icon: 'sinko/img/icon-192.png',
      text: 'Turns an Android phone into a numpad, air mouse, keyboard, media remote, barcode & document scanner and file sharer for your PC, over Bluetooth or Wi-Fi.',
      tags: ['Flutter', 'Bluetooth HID', 'OpenCV', 'Kotlin'],
      playStore: '', github: '', website: 'sinko/index.html',
    },
    {
      title: 'Account Sir',
      subtitle: 'Kairavi Education',
      category: 'Education',
      image: 'assets/img/welcome_accountsir.jpg',
      icon: 'assets/img/icon_accountsir.png',
      text: 'An accounting learning app — "simplicity in learning". Lessons, notes and video classes that make accounting easy for students.',
      tags: ['Flutter', 'Firebase', 'Video'],
      playStore: '', github: '', website: '',
    },
    {
      title: 'Lok Sewa Margadarshan',
      subtitle: 'लोकसेवा मार्गदर्शन',
      category: 'Education',
      image: 'assets/img/welcome_loksewa.jpg',
      icon: 'assets/img/icon_loksewa.png',
      text: 'Strategic preparation for Nepal\'s Lok Sewa (public service) exams, with General Knowledge lessons, practice questions and video guidance.',
      tags: ['Flutter', 'Quiz', 'Nepali'],
      playStore: '', github: '', website: '',
    },
    {
      title: 'Learn English',
      subtitle: 'English–Nepali learning app',
      category: 'Education',
      image: 'assets/img/welcome_english.jpg',
      icon: 'assets/img/icon_english.png',
      text: '"Let\'s learn English together." Helps Nepali speakers build vocabulary, grammar and confidence in spoken English.',
      tags: ['Flutter', 'Firebase', 'E-Learning'],
      playStore: '', github: '', website: '',
    },
    {
      title: 'Constitution – NP',
      subtitle: 'नेपालको संविधान (२०७२)',
      category: 'Law & Reference',
      image: 'assets/img/welcome_constitution.png',
      icon: 'assets/img/icon_constitution.png',
      text: 'The full Constitution of Nepal 2072 in a clean, searchable, offline-friendly reader for students, lawyers and citizens.',
      tags: ['Flutter', 'Offline', 'Search'],
      playStore: '', github: '', website: '',
    },
    {
      title: 'Muluki Ain – NP',
      subtitle: 'मुलुकी ऐन / संहिता (२०७४)',
      category: 'Law & Reference',
      image: 'assets/img/welcome_muluki.png',
      icon: 'assets/img/icon_muluki.png',
      text: 'Nepal\'s Muluki Civil and Criminal Codes 2074 on your phone, organised by chapter and section for quick reference.',
      tags: ['Flutter', 'Offline', 'Reference'],
      playStore: '', github: '', website: '',
    },
    {
      title: 'DeBooks',
      subtitle: 'ERP software · in progress',
      category: 'Business',
      image: '',
      icon: '',
      text: 'An ERP system for small and medium businesses, covering accounting, inventory, sales and reporting in one place.',
      tags: ['ERP', 'Backend', 'Accounting'],
      playStore: '', github: 'https://github.com/edevpandey/debooks-server', website: '',
    },
  ],
};

/* =========================================================
   Icons (inline SVG, no external library)
   ========================================================= */
const svg = (d, size = 20, extra = '') =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;

const icons = {
  github: (s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>`,
  facebook: (s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>`,
  linkedin: (s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
  mail: (s) => svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', s),
  pin: (s) => svg('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>', s),
  call: (s) => svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>', s),
  phone: (s) => svg('<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>', s),
  layers: (s) => svg('<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>', s),
  pen: (s) => svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>', s),
  bolt: (s) => svg('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>', s),
  book: (s) => svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>', s),
  doc: (s) => svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>', s),
  play: (s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true"><path d="M3.6 1.8c-.4.2-.6.6-.6 1.1v18.2c0 .5.2.9.6 1.1L13.4 12 3.6 1.8zm11 11.4 2.6 2.6-11 6.3 8.4-8.9zm3.7-3.6 3 1.7c.8.5.8 1.6 0 2.1l-3 1.7-2.9-2.8 2.9-2.7zM6.2 1.9l11 6.3-2.6 2.6-8.4-8.9z"/></svg>`,
  ext: (s) => svg('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>', s),
};

/* =========================================================
   Render
   ========================================================= */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ext = (url) => (url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '');

function renderSocials(el, size) {
  el.innerHTML = data.socials
    .map((s) => s.url === 'email'
      ? `<a href="#contact" class="js-email" aria-label="${esc(s.name)}" title="${esc(s.name)}">${icons[s.icon](size)}</a>`
      : `<a href="${esc(s.url)}" aria-label="${esc(s.name)}" title="${esc(s.name)}"${ext(s.url)}>${icons[s.icon](size)}</a>`)
    .join('');
}

renderSocials($('#heroSocials'), 20);
renderSocials($('#footerSocials'), 16);

$('#skillsList').innerHTML = data.skills
  .map((s) => `<span class="skill" style="--c:${esc(s.color)}"><i></i>${esc(s.name)}</span>`)
  .join('');

$('#servicesList').innerHTML = data.services
  .map((s) => `<article class="card reveal"><div class="svc-icon">${icons[s.icon](24)}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`)
  .join('');

function projectCard(p) {
  const media = p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'p-fallback',textContent:'${esc(p.title[0])}'}))" />`
    : `<div class="p-fallback">${esc(p.title[0])}</div>`;
  const icon = p.icon ? `<img src="${esc(p.icon)}" alt="" loading="lazy" />` : '';
  const links = [
    p.playStore && `<a href="${esc(p.playStore)}"${ext(p.playStore)}>${icons.play(15)} Play Store</a>`,
    p.github && `<a href="${esc(p.github)}"${ext(p.github)}>${icons.github(16)} Source</a>`,
    p.website && `<a href="${esc(p.website)}"${ext(p.website)}>${icons.ext(16)} Website</a>`,
  ].filter(Boolean);
  return `
    <article class="card project reveal" data-cat="${esc(p.category)}">
      <div class="p-media">${media}</div>
      <div class="p-body">
        <div class="p-title">${icon}<div><h3>${esc(p.title)}</h3><small>${esc(p.subtitle)}</small></div></div>
        <p>${esc(p.text)}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <div class="p-links">${links.join('') || '<a class="disabled">Coming soon</a>'}</div>
      </div>
    </article>`;
}

$('#projectsList').innerHTML = data.projects.map(projectCard).join('');

// Filters
const cats = ['All', ...new Set(data.projects.map((p) => p.category))];
const filters = $('#filters');
filters.innerHTML = cats
  .map((c, i) => `<button class="filter${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
  .join('');
filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  filters.querySelectorAll('.filter').forEach((b) => {
    const on = b === btn;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  const cat = btn.dataset.cat;
  document.querySelectorAll('.project').forEach((card) => {
    card.classList.toggle('hide', cat !== 'All' && card.dataset.cat !== cat);
  });
});

// Contact
// Protected email: decoded only on user interaction, never written into the page source.
const getEmail = () => data.emailParts.map((p) => [...atob(p)].reverse().join('')).join('@');

$('#mailBtn').classList.add('js-email');
$('#mailBtn').href = '#contact';
$('#contactMeta').innerHTML = [
  `<button type="button" class="reveal-email" id="revealEmail">${icons.mail(18)} <span>Show email</span></button>`,
  data.phone && `<a href="tel:${esc(data.phone.replace(/\s/g, ''))}">${icons.call(18)} ${esc(data.phone)}</a>`,
  `<span>${icons.pin(18)} ${esc(data.location)}</span>`,
].filter(Boolean).join('');

document.addEventListener('click', (e) => {
  const link = e.target.closest('.js-email');
  if (link) {
    e.preventDefault();
    window.location.href = 'mailto:' + getEmail();
    return;
  }
  const btn = e.target.closest('#revealEmail');
  if (btn) {
    const a = document.createElement('a');
    a.href = 'mailto:' + getEmail();
    a.innerHTML = `${icons.mail(18)} ${esc(getEmail())}`;
    btn.replaceWith(a);
    a.focus();
  }
});

$('#year').textContent = new Date().getFullYear();

/* =========================================================
   Interactions
   ========================================================= */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Typed roles
(function typed() {
  const el = $('#typed');
  if (reduceMotion) { el.textContent = data.roles[0]; return; }
  let r = 0, i = 0, deleting = false;
  (function tick() {
    const word = data.roles[r];
    el.textContent = word.slice(0, i);
    if (!deleting && i < word.length) { i++; setTimeout(tick, 75); }
    else if (!deleting) { deleting = true; setTimeout(tick, 1600); }
    else if (i > 0) { i--; setTimeout(tick, 35); }
    else { deleting = false; r = (r + 1) % data.roles.length; setTimeout(tick, 300); }
  })();
})();

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el, idx) => {
  el.style.transitionDelay = `${(idx % 3) * 80}ms`;
  io.observe(el);
});

// Nav: scrolled state + active link
const nav = $('#nav');
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const y = window.scrollY + window.innerHeight * 0.35;
  let current = -1;
  sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = $('#menuBtn');
const navLinks = $('#navLinks');
function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Theme toggle
$('#themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', next === 'light' ? '#f4f8f6' : '#07110e');
  try { localStorage.setItem('theme', next); } catch (e) {}
});
