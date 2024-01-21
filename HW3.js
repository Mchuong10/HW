document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("pick").classList.remove("disabled");
  document.getElementById("newuser").classList.add("disabled");
  document.getElementById("existinguser").classList.add("disabled");
});

function activateSection(sectionId) {
  document.getElementById("newuser").classList.add("disabled");
  document.getElementById("existinguser").classList.add("disabled");

  document.getElementById(sectionId).classList.remove("disabled");
}

function verifyCredentials() {
  let enteredUsername = document.getElementById("existing").value;
  let enteredPassword = document.getElementById("expass").value;

  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    alert(
      "Login successful! Redirect to dashboard or perform further actions."
    );
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

function formSubmitEvent() {
  let name = document.getElementById("username").value;
  let secret = document.getElementById("password").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  if (
    name.length > 2 &&
    secret.length > 4 &&
    city.length > 2 &&
    state.length > 1
  ) {
    localStorage.setItem("username", name);
    localStorage.setItem("password", secret);
  } else {
    alert("Please fill in all fields");
  }
}
