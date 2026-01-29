const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = loginForm.querySelector('input[placeholder="username"]').value;
  const password = loginForm.querySelector('input[placeholder="password"]').value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    alert("Login successful!");

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", username);
    
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
});
