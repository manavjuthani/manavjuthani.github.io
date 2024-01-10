function toggleMenu() {
    var navLinks = document.querySelector('.nav-links'); // The navigation links container
    var menuBtn = document.querySelector('.menu-btn'); // The button to open the menu
    var overlay = document.querySelector('.ham-overlay'); // The overlay

    if (navLinks.style.display === 'block' || getComputedStyle(navLinks).display === 'block') {
        // If the navigation links are currently displayed, hide them
        navLinks.style.display = 'none';
        // Hide the overlay
        overlay.style.display = 'none';
        // Show the menu button (hamburger icon)
        menuBtn.style.display = 'block';
    } else {
        // If the navigation links are currently hidden, display them
        navLinks.style.display = 'block';
        // Show the overlay
        overlay.style.display = 'block';
        // Hide the menu button (hamburger icon)
        menuBtn.style.display = 'none';
    }
}

// Hide the navigation links and overlay by default
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelector('.nav-links');
    var overlay = document.querySelector('.overlay');
    navLinks.style.display = 'none';
    overlay.style.display = 'none';
});

// Add event listener for the hamburger menu button
var menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);

// Add event listener to the menu button
document.querySelector('.menu-button').addEventListener('click', toggleOverlay);

