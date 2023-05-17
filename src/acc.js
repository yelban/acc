import './acc.css'

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector("#menu-toggle");
    const menuOpen = document.querySelector("#menu-open");
    const menuClose = document.querySelector("#menu-close");
    const mobileMenu = document.querySelector("#mobile-menu");

    menuToggle.addEventListener("click", function() {
      menuOpen.classList.toggle("hidden");
      menuClose.classList.toggle("hidden");
      mobileMenu.classList.toggle("max-h-0");
      mobileMenu.classList.toggle("max-h-screen");
    });
});