const html = document.documentElement;
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  const isNavExpanded = navToggle.getAttribute('aria-expanded');
  if (isNavExpanded === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
    nav.setAttribute('data-expanded', 'true');
    html.classList.add('scroll-lock');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('data-expanded', 'false');
    html.classList.remove('scroll-lock');
  }
});
