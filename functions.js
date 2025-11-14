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
        menuButton.style.color = 'white'
        allElements.forEach(element => {
            element.style.pointerEvents = 'auto';
        });
    }
}

// Change "Manav Juthani" text color on project box hover
(function() {
    const nameHeading = document.querySelector('.introduction h1');
    const pomotimerBox = document.querySelector('.project-box.pomotimer');
    const budgetTrackerBox = document.querySelector('.project-box.budget-tracker');
    const aiAssistantBox = document.querySelector('.project-box.desktop-ai-assistant');

    // Project box hover colors
    const colors = {
        pomotimer: '#FF6347',
        budgetTracker: '#85BB65',
        aiAssistant: '#341539'
    };

    function setColor(color) {
        nameHeading.style.color = color;
    }

    function resetColor() {
        nameHeading.style.color = 'white';
    }

    // Pomotimer hover
    if (pomotimerBox) {
        pomotimerBox.addEventListener('mouseenter', () => setColor(colors.pomotimer));
        pomotimerBox.addEventListener('mouseleave', resetColor);
    }

    // Budget Tracker hover
    if (budgetTrackerBox) {
        budgetTrackerBox.addEventListener('mouseenter', () => setColor(colors.budgetTracker));
        budgetTrackerBox.addEventListener('mouseleave', resetColor);
    }

    // AI Assistant hover
    if (aiAssistantBox) {
        aiAssistantBox.addEventListener('mouseenter', () => setColor(colors.aiAssistant));
        aiAssistantBox.addEventListener('mouseleave', resetColor);
    }
})();

// Dynamic scrollbar color based on mouse position
(function() {
    const root = document.documentElement;
    const defaultColor = 'rgba(255, 255, 255, 0.5)';
    
    const regionColors = {
        'pomotimer': 'rgba(255, 99, 71, 0.7)',
        'budget-tracker': 'rgba(133, 187, 101, 0.7)',
        'desktop-ai-assistant': 'rgba(52, 21, 57, 0.7)',
        'default': defaultColor
    };

    function updateScrollbarColor(event) {
        const elementUnderMouse = document.elementFromPoint(event.clientX, event.clientY);
        
        if (!elementUnderMouse) {
            root.style.setProperty('--scrollbar-color', defaultColor);
            return;
        }

        // Check if mouse is over a project box
        const pomotimerBox = elementUnderMouse.closest('.project-box.pomotimer');
        const budgetTrackerBox = elementUnderMouse.closest('.project-box.budget-tracker');
        const aiAssistantBox = elementUnderMouse.closest('.project-box.desktop-ai-assistant');

        if (pomotimerBox) {
            root.style.setProperty('--scrollbar-color', regionColors.pomotimer);
        } else if (budgetTrackerBox) {
            root.style.setProperty('--scrollbar-color', regionColors['budget-tracker']);
        } else if (aiAssistantBox) {
            root.style.setProperty('--scrollbar-color', regionColors['desktop-ai-assistant']);
        } else {
            root.style.setProperty('--scrollbar-color', defaultColor);
        }
    }

    // Track mouse movement
    document.addEventListener('mousemove', updateScrollbarColor);
    
    // Reset to default when mouse leaves the document
    document.addEventListener('mouseleave', () => {
        root.style.setProperty('--scrollbar-color', defaultColor);
    });
})();

