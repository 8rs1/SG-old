// variables start
let $ = document; // for access to document easer
// username variables start
let labelUsername = $.getElementById("usernameLabel");
let username = $.getElementById("username");
let isHaveForm = Boolean(username.value);
let haveFormContainer = $.getElementById("haveForm");
let continueForm = $.getElementById("continueForm");
let newForm = $.getElementById("newForm");
let errorUsername = $.getElementById("errorUsername");
// username variables end
// password variables start
let labelPassword = $.getElementById("passwordLabel");
let showPassword = $.getElementById("showPassword");
let showPasswordLine = $.getElementById("showPasswordLine");
let password = $.getElementById("password");
let errorPassword = $.getElementById("errorPass");
let showPassFlag = false; // show password?
// password variables end
// variables end
// username codes start
username.addEventListener("invalid", function () {
  errorUsername.classList.add("block");
  errorUsername.classList.remove("hidden");
  setTimeout(function () {
    errorUsername.classList.add("hidden");
    errorPassword.classList.remove("block");
  },8000)
})
if (isHaveForm) { // check username value when page loaded
  labelUsername.classList.remove("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
  haveFormContainer.classList.add("visible");
  haveFormContainer.classList.add("opacity-1");
  haveFormContainer.classList.remove("invisible");
  haveFormContainer.classList.remove("opacity-0");
}
continueForm.addEventListener("click", function () {
  haveFormContainer.classList.remove("visible");
  haveFormContainer.classList.remove("opacity-1");
  haveFormContainer.classList.add("opacity-0");
  haveFormContainer.classList.add("invisible");
})
newForm.addEventListener("click", function () {
  username.value = "";
  haveFormContainer.classList.remove("visible");
  haveFormContainer.classList.remove("opacity-1");
  haveFormContainer.classList.add("opacity-0");
  haveFormContainer.classList.add("invisible");
})
username.addEventListener("focusin", function () {
  username.addEventListener("keypress", function () {
    labelUsername.classList.remove("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
    username.addEventListener("keyup", function () {
      if (!username.value) {
        labelUsername.classList.add("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
      }
    })
    username.addEventListener("keydown", function () {
      if (!username.value) {
        labelUsername.classList.add("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
      }
    })
  })
})
username.addEventListener("focusout", function () {
  if (!username.value) {
    labelUsername.classList.add("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
  }
})
// username codes end
// password codes start
showPassword.addEventListener("click", function () {
  if (showPassFlag) {
    showPasswordLine.classList.add("w-0");
    showPasswordLine.classList.remove("w-full");
    password.setAttribute("type", "password");
    showPassFlag = false;
  } else {
    showPasswordLine.classList.add("w-full");
    showPasswordLine.classList.remove("w-0");
    password.setAttribute("type", "text");
    showPassFlag = true;
  }
})
password.addEventListener("invalid", function () {
  errorPassword.classList.add("block");
  errorPassword.classList.remove("hidden");
  setTimeout(function () {
    errorPassword.classList.add("hidden");
    errorPassword.classList.remove("block");
  },8000)
})
if (password.value) {
  labelPassword.classList.remove("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
}
password.addEventListener("focusin", function () {
  password.addEventListener("keypress", function () {
    labelPassword.classList.remove("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
    password.addEventListener("keyup", function () {
      if (!password.value) {
        labelPassword.classList.add("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
      }
    })
    password.addEventListener("keydown", function () {
      if (!password.value) {
        labelPassword.classList.add("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
      }
    })
  })
})
password.addEventListener("focusout", function () {
    if (!password.value) {
    labelPassword.classList.add("-translate-x-10", "sm:-translate-x-12", "translate-y-10");
  }
})