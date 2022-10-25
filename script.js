const hamburgerMenu = document.querySelector(".hamburger-menu");
const alertEl = document.querySelector(".alert");
const navListEl = document.querySelector(".nav-list");
//const btnEl = document.querySelector(".btn");

// hamburgerMenu functionality
hamburgerMenu.addEventListener("click", () => {
  navListEl.classList.toggle("nav-show");
});

// btnEl.addEventListener("click", () => {
//   if (alertEl.classList.contains("show")) {
//     alertEl.classList.remove("show");
//   }
// });
