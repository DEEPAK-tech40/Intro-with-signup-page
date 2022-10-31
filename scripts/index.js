const emailField = document.querySelector("#email");
const emailError = document.querySelector(`.error.email`);
const formEl = document.querySelector(`form`);
const btn = document.querySelector("#submit");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate(event) {
  let flag = false;

  for (let i = 1; i < 5; i++) {
    const inputField = document.querySelector(`.grp${i}.inputField`);
    const errorMsg = document.querySelector(`.grp${i}.error`);
    if (inputField.value === "") {
      inputField.style.outline = `1px solid red`;
      errorMsg.style.display = `inline`;
      flag = true;
    }
  }

  if (emailField.value.match(mailFormat)) {
    console.log("hiii");
  } else {
    emailError.style.display = `inline`;
    flag = true;
  }
  if (flag) {
    event.preventDefault();
  }
}

formEl.addEventListener("submit", validate);
for (let i = 1; i < 5; i++) {
  const inputField = document.querySelector(`.grp${i}.inputField`);
  const errorMsg = document.querySelector(`.grp${i}.error`);
  inputField.addEventListener("keydown", function () {
    inputField.style.outline = `1px solid var(--DarkBlue)`;
    errorMsg.style.display = `none`;
  });
}
