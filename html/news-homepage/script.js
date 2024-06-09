const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('#primary-navigation');
const html = document.documentElement;

navToggle.addEventListener('click', () => {
  const isExpanded = nav.getAttribute('aria-expanded');

  if (isExpanded === 'true') {
    nav.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('data-expanded', 'false');
    html.classList.remove('scroll-lock');
  } else {
    nav.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('data-expanded', 'true');
    html.classList.add('scroll-lock');
  }
});
