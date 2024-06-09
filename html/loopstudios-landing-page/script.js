const htmlEl = document.documentElement;
const headerEl = document.querySelector('.header');
const menuBtnEl = document.querySelector('.nav__menu-btn');
const menuEl = document.querySelector('.nav__links');

menuBtnEl.addEventListener('click', () => {
  htmlEl.classList.toggle('scroll-lock');
  headerEl.classList.toggle('nav--open');
  menuEl.classList.toggle('nav__links--open');
});

navLinkEls.forEach((el) => {
  el.addEventListener('click', (e) => {});
});
