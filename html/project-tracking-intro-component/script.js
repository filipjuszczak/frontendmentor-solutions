const navToggle = document.querySelector('.header__mobile-toggle');

navToggle.addEventListener('click', () => {
  const isNavExpanded = navToggle.getAttribute('data-nav-expanded');
  if (isNavExpanded === 'false') {
    navToggle.setAttribute('data-nav-expanded', true);
    navToggle.querySelector('.sr-only').setAttribute('aria-expanded', true);
  } else {
    navToggle.setAttribute('data-nav-expanded', false);
    navToggle.querySelector('.sr-only').setAttribute('aria-expanded', false);
  }
});
