function register() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  var flag = true;

  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  });

  const nameRegex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";

  if (fullName == "") {
    fullNameError = "User Name is required";
    document.getElementById("fullNameError").setAttribute("class", "error");
    document.getElementById("fullNameError").innerHTML = fullNameError;
    setTimeout(function () {
      document.getElementById("fullNameError").innerHTML = "";
      flag = false;
    }, 5000);
  } else if (!fullName.match(nameRegex)) {
    fullNameError = "Enter a valid User Name";
    document.getElementById("fullNameError").setAttribute("class", "error");
    document.getElementById("fullNameError").innerHTML = fullNameError;
    setTimeout(function () {
      document.getElementById("fullNameError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  const emailRegex =
    "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" +
    "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

  if (email == "") {
    emailError = "Email is required";
    document.getElementById("emailError").setAttribute("class", "error");
    document.getElementById("emailError").innerHTML = emailError;
    setTimeout(function () {
      document.getElementById("emailError").innerHTML = "";
      flag = false;
    }, 5000);
  } else if (!email.match(emailRegex)) {
    emailError = "Enter a valid Email";
    document.getElementById("emailError").setAttribute("class", "error");
    document.getElementById("emailError").innerHTML = emailError;
    setTimeout(function () {
      document.getElementById("emailError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  if (password == "") {
    passwordError = "Password is required";
    document.getElementById("passwordError").setAttribute("class", "error");
    document.getElementById("passwordError").innerHTML = passwordError;
    setTimeout(function () {
      document.getElementById("passwordError").innerHTML = "";
      flag = false;
    }, 5000);
  } else if (password.length < 8) {
    passwordError = "Password should be of minimum length 8";
    document.getElementById("passwordError").setAttribute("class", "error");
    document.getElementById("passwordError").innerHTML = passwordError;
    setTimeout(function () {
      document.getElementById("passwordError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  if (confirmPassword == "") {
    confirmPasswordError = "Confirm Password is required";
    document
      .getElementById("confirmPasswordError")
      .setAttribute("class", "error");
    document.getElementById("confirmPasswordError").innerHTML =
      confirmPasswordError;
    setTimeout(function () {
      document.getElementById("confirmPasswordError").innerHTML = "";
      flag = false;
    }, 5000);
  } else if (password.localeCompare(confirmPassword) != 0) {
    confirmPasswordError = "Confirm Password does't match with Password";
    document
      .getElementById("confirmPasswordError")
      .setAttribute("class", "error");
    document.getElementById("confirmPasswordError").innerHTML =
      confirmPasswordError;
    setTimeout(function () {
      document.getElementById("confirmPasswordError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  if (!this.form.terms.checked) {
    termsError = "Please agree to Terms";
    document.getElementById("termsError").setAttribute("class", "error");
    document.getElementById("termsError").innerHTML = termsError;
    setTimeout(function () {
      document.getElementById("termsError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  if (
    fullName != "" &&
    email != "" &&
    password != "" &&
    confirmPassword != "" &&
    this.form.terms.checked &&
    password.localeCompare(confirmPassword) == 0
  ) {
    var registerData = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    $.ajax({
      url: "/php/register.php",
      type: "POST",
      data: registerData,

      success: function () {
        document
          .getElementById("userAdded")
          .setAttribute("class", "success textCenter");
        document.getElementById("userAdded").innerHTML =
          "user added successfully";
      },

      error: function (error) {
        document
          .getElementById("userAdded")
          .setAttribute("class", "error textCenter");
        document.getElementById("userAdded").innerHTML = "Something went wrong";
      },
    });
  }
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  var flag = true;

  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  });

  const emailRegex =
    "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" +
    "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

  if (email == "") {
    emailError = "Email is required";
    document.getElementById("emailError").setAttribute("class", "error");
    document.getElementById("emailError").innerHTML = emailError;
    setTimeout(function () {
      document.getElementById("emailError").innerHTML = "";
      flag = false;
    }, 5000);
  } else if (!email.match(emailRegex)) {
    emailError = "Enter a valid Email";
    document.getElementById("emailError").setAttribute("class", "error");
    document.getElementById("emailError").innerHTML = emailError;
    setTimeout(function () {
      document.getElementById("emailError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  if (password == "") {
    passwordError = "Password is required";
    document.getElementById("passwordError").setAttribute("class", "error");
    document.getElementById("passwordError").innerHTML = passwordError;
    setTimeout(function () {
      document.getElementById("passwordError").innerHTML = "";
      flag = false;
    }, 5000);
  }

  if (email != "" && password != "") {
    var loginData = {
      email: email,
      password: password,
    };

    $.ajax({
      url: "/php/login.php",
      type: "POST",
      data: loginData,

      success: function (data) {
        loginValidation = data;
        // console.log(loginValidation);

        if (data == "200") {
          document
            .getElementById("loginValidation")
            .setAttribute("class", "success textCenter");
          document.getElementById("loginValidation").innerHTML =
            "Login Successful redirecting in 3 seconds";
          setTimeout(function () {
            window.location.href = "../index2.html";
          }, 3000);
        } else if (data == "401") {
          document
            .getElementById("loginValidation")
            .setAttribute("class", "error textCenter");
          document.getElementById("loginValidation").innerHTML =
            "Invalid Credentials";
          setTimeout(function () {
            document.getElementById("loginValidation").innerHTML = "";
          }, 5000);
        } else {
          document
            .getElementById("loginValidation")
            .setAttribute("class", "error textCenter");
          document.getElementById("loginValidation").innerHTML =
            loginValidation;
          setTimeout(function () {
            document.getElementById("loginValidation").innerHTML = "";
          }, 5000);
        }
      },

      error: function (error) {
        console.log("hi");
        console.log(error);
      },
    });
  }
}
