// Form Validation

// Bill input
const bill = document.querySelector("input[name=bill]");

// Tip % input
const tip = document.querySelector("input[name=tip]");

// Number of people input
const numPeople = document.querySelector("input[name=people]");

// Plus and minus buttons
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

function increment(evnt) {
  evnt.preventDefault();
  const inputField = this.previousElementSibling;
  let inputValue;
  switch (inputField.getAttribute("name")) {
    case "tip":
      inputValue = parseInt(
        inputField.value.slice(0, inputField.value.length - 1)
      );
      if (inputValue < 100) {
        inputField.value = `${inputValue + 1}%`;
      }
      break;
    case "people":
      inputValue = parseInt(inputField.value);
      if (inputValue < 100) {
        inputField.value = inputValue + 1;
      }
      break;
  }
}

function decrement(evnt) {
  evnt.preventDefault();
  const inputField = this.nextElementSibling;
  let inputValue;
  switch (inputField.getAttribute("name")) {
    case "tip":
      inputValue = inputValue = parseInt(
        inputField.value.slice(0, inputField.value.length - 1)
      );
      if (inputValue > 1) {
        inputField.value = `${inputValue - 1}%`;
      }
      break;
    case "people":
      inputValue = parseInt(inputField.value);
      if (inputValue > 1) {
        inputField.value = inputValue - 1;
      }
      break;
  }
}

// Add eventlistener to plus and minus buttons
Array.from(plusBtns).forEach(btn => {
  btn.addEventListener("click", increment);
});

Array.from(minusBtns).forEach(btn => {
  btn.addEventListener("click", decrement);
});
