var form = document.getElementById("form"), // login form
  // login ( index page ) varaibles :
  emailLogin = document.querySelector(".content .form_info .my_email"),
  passwordlLogin = document.querySelector(".content .form_info .my_pass"),
  loginButton = document.querySelector(".content .form_info .log_Btn"),
  login_warning=document.querySelector(".content .form_info.login_warning"),
  signupButton = document.querySelector(".content .form_info .sign_up"),
  signinButton = document.querySelector(".content .form_info .sign_in"),
  // sign up page variables
  signup_Name = document.querySelector(".myName"),
  signup_email = document.querySelector(".myEmail"),
  signup_password = document.querySelector(".myPassword"),
  signup_warning = document.querySelector(".warning"),
  allSignedUpAccounts;
// check variables
var checkEmail=[];
var checkName =[];
var checkpassword =[];
var accountinfo; // my stored object
if (localStorage.getItem("allSignedupinfo") == null) {
  allSignedUpAccounts = [];
} else {
  allSignedUpAccounts = JSON.parse(localStorage.getItem("allSignedupinfo"));
  /*  console.log(allSignedUpAccounts); */
}
// for (var i = 0; i < allSignedUpAccounts.length; i++) {
//   checkEmail.push(allSignedUpAccounts[i].email) ;
//   console.log(checkEmail);
//   checkName.push(allSignedUpAccounts[i].name) ;
//   checkpassword.push(allSignedUpAccounts[i].password) ;
//   console.log(checkpassword);
// }



//  Smart Login System
if (location.href.includes("index.html")) {
  signupButton.addEventListener("click", function () {
    location.href = "signup.html";

  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();


  });
  loginButton.addEventListener('click',function()
    {

   console.log('hi');

    });
}
// Smart Sign Up System
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
    localStorage.setItem( "allSignedupinfo", JSON.stringify(allSignedUpAccounts));
  } else {
    if (signup_Name.value == "" || signup_email.value == "" || signup_password.value == "")
    {
        showsignupWarning();
      signup_warning.innerHTML = "All Inputs are required";
    }
    else if (checkName.toString().includes(signup_Name.value) == true) {
        showsignupWarning();
      signup_warning.innerHTML = "Name is already exist";
    }
    else if (checkEmail.toString().includes(signup_email.value) === false) {
      accountinfo = {
        name: signup_Name.value,
        email: signup_email.value,
        password: signup_password.value,
      };
      allSignedUpAccounts.push(accountinfo);
      localStorage.setItem( "allSignedupinfo",JSON.stringify(allSignedUpAccounts) );
      signup_warning.innerHTML = "";
    } else if (checkEmail.includes(signup_email.value) == true) {
        showsignupWarning();
      signup_warning.innerHTML = "Email is already exist";
    }
  }

}

function showsignupWarning() {
    signup_warning.classList.remove("d-none");
    signup_warning.classList.add("d-block");
  }
function showloginWarning() {
    login_warning.classList.remove("d-none");
    login_warning.classList.add("d-block");
  }
