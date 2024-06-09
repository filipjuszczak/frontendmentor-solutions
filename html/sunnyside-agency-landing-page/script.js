const html = document.documentElement;
const navToggle = document.querySelector('.header__mobile-nav-toggle');
const nav = document.querySelector('#primary-navigation');

navToggle.addEventListener('click', () => {
  const isNavExpanded = navToggle.getAttribute('data-nav-expanded');
  if (isNavExpanded === 'false') {
    navToggle.setAttribute('data-nav-expanded', true);
    navToggle.querySelector('.sr-only').setAttribute('aria-expanded', true);
    nav.setAttribute('data-expanded', true);
    html.classList.add('scroll-lock');
  } else {
    navToggle.setAttribute('data-nav-expanded', false);
    navToggle.querySelector('.sr-only').setAttribute('aria-expanded', false);
    nav.setAttribute('data-expanded', false);
    html.classList.remove('scroll-lock');
  }
});
