var myForm = document.querySelector(".content .form_info form"),
  emailLogin = document.querySelector(".my_email"),
  passwordlLogin = document.querySelector(".my_pass"),
  loginButton = document.querySelector("button.logBtn"),
  signupButton = document.querySelector(".content .form_info .sign_up"),
  signinButton = document.querySelector(".content .form_info .sign_in"),
  // sign up page variables
  signup_Name = document.querySelector(".myName"),
  signup_email = document.querySelector(".myEmail"),
  signup_password = document.querySelector(".myPassword"),
  signup_warning = document.querySelector(".warning"),
  allSignedUpAccounts;
var accountinfo;
var checkEmail;
var checkName;
if (localStorage.getItem("allSignedupinfo") == null) {
  allSignedUpAccounts = [];
} else {
  allSignedUpAccounts = JSON.parse(localStorage.getItem("allSignedupinfo"));
  console.log(allSignedUpAccounts);
}
for (var i = 0; i < allSignedUpAccounts.length; i++) {
  checkEmail += allSignedUpAccounts[i].email;
  checkName += allSignedUpAccounts[i].name;
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //     loginButton.addEventListener('click',function()
  //     {

  //    /* console.log(emailLogin.value); */

  //     });
});
// sign up button  in Smart Login System
if (location.href.includes("index.html")) {
  signupButton.addEventListener("click", function () {
    location.href = "signup.html";
  });
}
// sign in button in Smart Sign Up System
if (location.href.includes("signup.html")) {
  signinButton.addEventListener("click", function () {
    location.href = "index.html";
  });
  signupButton.addEventListener("click", function () {
    addAccount();
  });
}

function addAccount() {
  if (allSignedUpAccounts.length == 0) {
    accountinfo = {
      name: signup_Name.value,
      email: signup_email.value,
      password: signup_password.value,
    };
    allSignedUpAccounts.push(accountinfo);
    console.log(allSignedUpAccounts);
    localStorage.setItem(
      "allSignedupinfo",
      JSON.stringify(allSignedUpAccounts)
    );
  } else {
    if (
      signup_Name.value == "" ||
      signup_email.value == "" ||
      signup_password.value == ""
    ) {
      signup_warning.classList.remove("d-none");
      signup_warning.classList.add("d-block");
      signup_warning.innerHTML = "All Inputs are required";
    } else if (checkName.includes(signup_Name.value) == true) {
      signup_warning.classList.remove("d-none");
      signup_warning.classList.add("d-block");
      signup_warning.innerHTML = "Name is already exist";
    } else if (checkEmail.includes(signup_email.value) === false) {
      accountinfo = {
        name: signup_Name.value,
        email: signup_email.value,
        password: signup_password.value,
      };
      allSignedUpAccounts.push(accountinfo);
      localStorage.setItem(
        "allSignedupinfo",
        JSON.stringify(allSignedUpAccounts)
      );
      signup_warning.innerHTML = "";
    } else if (checkEmail.includes(signup_email.value) == true) {
      signup_warning.classList.remove("d-none");
      signup_warning.classList.add("d-block");
      signup_warning.innerHTML = "Email is already exist";
    }
  }

  function showsignupWarning() {}
}
