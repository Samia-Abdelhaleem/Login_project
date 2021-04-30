"use strict";

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

if (localStorage.getItem("allSignedupinfo") == null) {
  allSignedUpAccounts = [];
} else {
  allSignedUpAccounts = JSON.parse(localStorage.getItem("allSignedupinfo"));
  console.log(allSignedUpAccounts);
}

myForm.addEventListener('submit', function (e) {
  e.preventDefault(); //     loginButton.addEventListener('click',function()
  //     {
  //    /* console.log(emailLogin.value); */
  //     });
}); // sign up button  in Smart Login System

if (location.href.includes("index.html")) {
  signupButton.addEventListener('click', function () {
    location.href = "signup.html";
  });
} // sign in button in Smart Sign Up System


if (location.href.includes("signup.html")) {
  signinButton.addEventListener('click', function () {
    location.href = "index.html";
  });
  signupButton.addEventListener('click', function () {
    addAccount();
  });
}

function addAccount() {
  var accountinfo = {
    name: signup_Name.value,
    email: signup_email.value,
    password: signup_password.value
  };

  if (allSignedUpAccounts.length == 0) {
    allSignedUpAccounts.push(accountinfo);
    console.log(allSignedUpAccounts);
    localStorage.setItem("allSignedupinfo", JSON.stringify(allSignedUpAccounts));
  } else {
    for (var i = 0; i < allSignedUpAccounts.length; i++) {
      if (signup_email.value != allSignedUpAccounts[i].email) {
        allSignedUpAccounts.push(accountinfo);
        console.log(allSignedUpAccounts);
        localStorage.setItem("allSignedupinfo", JSON.stringify(allSignedUpAccounts));
      } else {
        signup_warning.classList.remove("d-none");
        signup_warning.classList.add("d-block");
        signup_warning.innerHTML = "Email is already exist";
        /*  console.log("No"); */
      }
    }
  }
}

function showsignupWarning() {}