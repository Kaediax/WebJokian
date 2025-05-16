document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.letterSpacing = "2px";
        });

        link.addEventListener("mouseout", () => {
            link.style.letterSpacing = "normal";
        });
    });
});
