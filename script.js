const hamburgerMenu = document.querySelector(".hamburger-menu");
const alertEl = document.querySelector(".alert");
const btnEl = document.querySelector(".btn");

hamburgerMenu.addEventListener("click", () => {
  alertEl.classList.toggle("show");
});

btnEl.addEventListener("click", () => {
  if (alertEl.classList.contains("show")) {
    alertEl.classList.remove("show");
  }
});
