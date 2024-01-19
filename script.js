/* Hamburger Menu Toggle */
const toggle_menu = document.getElementById("toggle-menu");
const navLinks = document.querySelector(".nav-links ul");

toggle_menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});