const formBoxEl = document.querySelector('.form-box');
const submittedBoxEl = document.querySelector('.submitted-box');
const ratingEl = document.querySelector('.rating');
const btnEls = document.querySelectorAll('.rating-btn');
const submitEl = document.querySelector('.submit-btn');
let rating;

function uncheckButtons() {
  btnEls.forEach((el) => {
    el.classList.remove('active');
  });
}

btnEls.forEach((el) => {
  el.addEventListener('click', () => {
    uncheckButtons();
    rating = el.value;
    el.classList.add('active');
  });
});

submitEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (!rating) {
    return;
  }
  formBoxEl.classList.add('form-box--hidden');
  submittedBoxEl.classList.remove('submitted-box--hidden');
  ratingEl.innerHTML = rating;
});
