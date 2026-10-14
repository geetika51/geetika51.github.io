const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    // Toggle active classes
    navMenu.classList.toggle("active");
    
    // Animate hamburger icon between bars and 'X'
    if (navMenu.classList.contains("active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
    } else {
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
    }
});

// Close mobile menu when clicking on any nav link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
}));

const scrollBtn = document.getElementById("scrollBtn");
const scrollIcon = document.getElementById("scrollIcon");

// Monitor scroll position to toggle the icon direction (pointing up vs down)
window.addEventListener("scroll", () => {
    // Check if scrolled more than half of the first viewport height
    if (window.scrollY > window.innerHeight / 2) {
        // Point Up
        scrollIcon.classList.remove("fa-chevron-down");
        scrollIcon.classList.add("fa-chevron-up");
    } else {
        // Point Down
        scrollIcon.classList.remove("fa-chevron-up");
        scrollIcon.classList.add("fa-chevron-down");
    }
});

// Handle click action: Scroll to bottom/next section or back to top
scrollBtn.addEventListener("click", () => {
    if (window.scrollY > window.innerHeight / 2) {
        // Scroll back to top smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        // Scroll down to the next section smoothly
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }
});