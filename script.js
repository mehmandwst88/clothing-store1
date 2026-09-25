const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector("aside");

menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("closed");
    menuButton.classList.toggle("closed");
});