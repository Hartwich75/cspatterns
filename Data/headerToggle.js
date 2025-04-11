document.addEventListener("DOMContentLoaded", function () {
    console.log("Header toggle script loaded");
    const toggleButton = document.querySelector(".nav-toggle");
    const navItems = document.querySelectorAll(".nav-item");

    if (!toggleButton) {
        console.error("Toggle button not found!");
        return;
    }

    let menuVisible = true;

    toggleButton.addEventListener("click", () => {
        menuVisible = !menuVisible;
        navItems.forEach(item => {
            item.classList.toggle("nav-hidden", !menuVisible);
        });
    });
});
