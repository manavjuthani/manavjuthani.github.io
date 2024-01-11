function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamOverlay = document.querySelector('.ham-overlay');
    const allElements = document.querySelectorAll('body *:not(.nav-links, .nav-links *, .menu-button)');
    const menuButton = document.querySelector('.menu-button');

    // Toggle the display of the navigation links and overlay
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    hamOverlay.style.display = hamOverlay.style.display === 'block' ? 'none' : 'block';

    // Change menu button to 'X' if nav links are visible, or back to menu symbol if not
    if (navLinks.style.display === 'block') {
        menuButton.innerHTML = '✕'; // Change to 'X'
        menuButton.style.color = 'white'
        allElements.forEach(element => {
            element.style.pointerEvents = 'none';
        });
    } else {
        menuButton.innerHTML = '☰'; // Change back to menu symbol
        menuButton.style.color = 'black'
        allElements.forEach(element => {
            element.style.pointerEvents = 'auto';
        });
    }
}