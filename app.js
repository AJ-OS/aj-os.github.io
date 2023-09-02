document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    let isNightTheme = false;

    themeToggle.addEventListener("click", () => {
        console.log("Button Clicked!");


        body.classList.toggle("night-theme");

        if (isNightTheme) {
            themeIcon.src = "/Icons/5ea56758df7bd.png";
        } else {
            themeIcon.src = "/Icons/sun-1.png";
        }

        // Update the theme state
        isNightTheme = !isNightTheme;
    });
});
