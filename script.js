// email validation
let emailInput = document.getElementById("email");
let form = document.querySelector(".form");
let newletter = document.querySelector(".newletter-signup");

let submitBtn = document.querySelector(".submit-btn");
let dismissBtn = document.querySelector(".dismiss-btn");
let success = document.querySelector(".success");

function validateEmail() {
  let email = emailInput.value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern) || email.length == 0) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
}

emailInput.addEventListener("input", validateEmail);

console.log("hello");

submitBtn.addEventListener("click", (e) => {
  // check if email is valid before submitting or if email is empty
  if (form.classList.contains("error") || emailInput.value.length == 0) {
    return;
  }

  e.preventDefault();
  success.classList.remove("hide");
  newletter.classList.add("hide");
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  success.classList.add("hide");
  newletter.classList.remove("hide");

  // clear input field
  emailInput.value = "";
});
