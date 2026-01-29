const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")
const logoutBtn = document.getElementById("logout");
menuOpenButton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");

})

menuCloseButton.addEventListener("click",() =>menuOpenButton.click());

if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
  }
  if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
}