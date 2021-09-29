const form = document.getElementById("form");
const first_name = document.getElementById("first name");
const last_name = document.getElementById("last name");
// const username = document.getElementById("username");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cmf_password = document.getElementById("confirm password");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordsMatch(password1, cmf_password) {
  if (password1.value !== cmf_password.value) {
    showError(cmf_password, "Password do not match");
  }
}

function checkLength(input, min, max) {
  if (input.value.length <= min) {
    showError(
      input,
      `${getFieldName(input)} must be more than ${min} characters`
    );
  } else if (input.value.length >= max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // checkRequired([username, email, password, cmf_password]);
  // checkLength(username, 3, 15);
  checkRequired([first_name, last_name, gender, email, password, cmf_password]);
  checkLength(first_name, 6, 25);
  checkLength(last_name, 6, 25);
  checkLength(password, 6, 25);
  checkEmail(email);
  if (cmf_password.value !== "") {
    checkPasswordsMatch(password, cmf_password);
  }
});
