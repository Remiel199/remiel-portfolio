const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");


// Mobile Menu


menuIcon.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });

});

// Section Scroll Animation

const sections = document.querySelectorAll("section");

// Add animation class to all sections except Home
sections.forEach(function(section) {

    if (section.id !== "home") {
        section.classList.add("animate");
    }

});


// Show sections when they enter the screen

function showSections() {

    sections.forEach(function(section) {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
            section.classList.add("show");
        }

    });

}


// Check sections when scrolling

window.addEventListener("scroll", showSections);


// Check sections immediately when page loads

showSections();