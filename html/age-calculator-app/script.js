const form = document.querySelector('.age-form');
const submitBtn = document.querySelector('.btn');

const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];

function calculateAge(birthDate, currentDate) {
  const birth = birthDate;
  const current = currentDate;

  let ageYears = current.getFullYear() - birth.getFullYear();
  let birthMonth = birth.getMonth();
  let currentMonth = current.getMonth();

  // Check if the current month and date are earlier than the birth month and date
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && current.getDate() < birth.getDate())
  ) {
    ageYears--;
  }

  var ageMonths;
  if (currentMonth === birthMonth) {
    ageMonths = 0;
  } else if (currentMonth < birthMonth) {
    ageMonths = 12 - (birthMonth - currentMonth);
  } else {
    ageMonths = currentMonth - birthMonth;
  }

  // Calculate the difference in days
  var ageDays = current.getDate() - birth.getDate();

  // Adjust the age months and days
  if (ageDays < 0) {
    var lastMonth = new Date(current.getFullYear(), current.getMonth() - 1, 0);
    ageDays = lastMonth.getDate() - birth.getDate() + current.getDate();
    ageMonths--;
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays
  };
}

function updateResults(age) {
  const yearEl = document.querySelector('.year-span');
  const monthEl = document.querySelector('.month-span');
  const dayEl = document.querySelector('.day-span');

  yearEl.innerHTML = age.years;
  monthEl.innerHTML = age.months;
  dayEl.innerHTML = age.days;
}

function resetClasses() {
  const inputEls = document.querySelectorAll('input');
  inputEls.forEach((inputEl) => {
    inputEl.classList.remove('red-border');
    const parentEl = inputEl.parentElement;
    parentEl.classList.remove('text-light-red');
  });
}

function hideErrors() {
  const errorEls = document.querySelectorAll('.error');
  errorEls.forEach((errorEl) => errorEl.classList.add('hidden'));
}

function validateValues(values) {
  const [day, month, year] = values;
  const today = new Date();
  const errors = [{ day: false }, { month: false }, { year: false }];

  if (day < 1 || day > 31) errors[0].day = true;
  if (month === 2 && (day < 1 || day > 28)) errors[0].day = true;
  if (month < 1 || month > 12) errors[1].month = true;
  if (today.getFullYear() < year) errors[2].year = true;
  if (year === 0) errors[2].year = true;
  if (!monthsWith31Days.includes(month)) {
    if (day < 1 || day > 30) errors[0].day = true;
  }

  return errors;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  resetClasses();
  hideErrors();

  const values = [];
  for (const value of formData.values()) {
    values.push(+value);
  }

  let valid = true;
  const errors = validateValues(values);
  errors.forEach((error) => {
    const key = Object.keys(error)[0];
    if (error[key]) {
      valid = false;
      const errorEl = document.querySelector(`[data-error-for="${key}"]`);
      errorEl.classList.remove('hidden');
      const parentEl = errorEl.parentElement;
      parentEl.classList.add('text-light-red');
      const inputEl = errorEl.previousElementSibling;
      inputEl.classList.add('red-border');
    }
  });

  if (valid) {
    const currentDate = new Date();
    const birthDate = new Date(values[2], values[1] - 1, values[0]);
    updateResults(calculateAge(birthDate, currentDate));
  }
});
