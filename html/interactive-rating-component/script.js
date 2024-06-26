const formBoxEl = document.querySelector(".form-box");
const submittedBoxEl = document.querySelector(".submitted-box");
const resultEl = document.querySelector(".result");
const btnEls = document.querySelectorAll(".rating-btn");
const errorEl = document.querySelector(".error");
const submitBtn = document.querySelector(".submit-btn");
let rating;

function uncheckButtons() {
  btnEls.forEach(btn => {
    btn.classList.remove("active");
  });
}

btnEls.forEach(el => {
  el.addEventListener("click", () => {
    uncheckButtons();

    rating = el.dataset.value;
    el.classList.add("active");
  });
});

submitBtn.addEventListener("click", e => {
  e.preventDefault();

  if (!rating) {
    errorEl.setAttribute("aria-hidden", "false");
    return;
  }

  formBoxEl.classList.add("form-box--hidden");
  formBoxEl.setAttribute("aria-hidden", "true");

  submittedBoxEl.classList.remove("submitted-box--hidden");
  submittedBoxEl.setAttribute("aria-hidden", "false");

  resultEl.textContent = `You selected ${rating} out of 5`;
});
