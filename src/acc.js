import "./acc.css";

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-toggle");
    const menuOpen = document.querySelector("#menu-open");
    const menuClose = document.querySelector("#menu-close");
    const mobileMenu = document.querySelector("#mobile-menu");

    menuToggle.addEventListener("click", function () {
        menuOpen.classList.toggle("hidden");
        menuClose.classList.toggle("hidden");
        mobileMenu.classList.toggle("max-h-0");
        mobileMenu.classList.toggle("max-h-screen");
    });

    // setTimeout(function () {
    //     const selects = document.querySelectorAll("select");
    //     for (let i = 0; i < selects.length; i += 1) {
    //         selects[i].classList.remove("form-control", "mr-1", "ml-1");
    //         selects[i].classList.add("border", "border-gray-400", "rounded", "shadow", "leading-tight");
    //     }
    // }, 500); // 5 seconds
});
