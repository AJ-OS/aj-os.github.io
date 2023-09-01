// button
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    themeToggle.addEventListener("click", () => {
        console.log("Button Clicked!");
        body.classList.toggle("night-theme");
    });
});

