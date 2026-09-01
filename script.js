const langToggle = document.getElementById('langToggle');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
let lang = 'fr';

langToggle.addEventListener('click', () => {
  lang = lang === 'fr' ? 'rn' : 'fr';
  document.documentElement.lang = lang === 'fr' ? 'fr' : 'rn';
  document.querySelectorAll('[data-fr][data-rn]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langToggle.textContent = lang === 'fr' ? 'RN' : 'FR';
});

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
