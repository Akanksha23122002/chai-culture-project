

const signupForm = document.querySelector("form");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = signupForm.querySelector('input[placeholder="username"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[placeholder="password"]').value;
  const confirmPassword = signupForm.querySelector('input[placeholder="Confirm password"]').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    username,
    email,
    password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
});
