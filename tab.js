// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and panels
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    // Function to switch tabs
    function switchTab(clickedTab) {
        // Get the target panel ID from the aria-controls attribute
        const targetPanel = clickedTab.getAttribute('aria-controls');
        
        // Reset all tabs
        tabButtons.forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
        });
        
        // Hide all panels
        tabPanels.forEach(panel => {
            panel.hidden = true;
        });
        
        // Activate clicked tab
        clickedTab.setAttribute('aria-selected', 'true');
        
        // Show target panel
        const targetPanelElement = document.getElementById(targetPanel);
        if (targetPanelElement) {
            targetPanelElement.hidden = false;
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchTab(this);
        });
        
        // Also handle keyboard navigation
        button.addEventListener('keydown', function(e) {
            // Handle Enter and Space keys
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                switchTab(this);
            }
            
            // Handle arrow key navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const currentIndex = Array.from(tabButtons).indexOf(this);
                let nextIndex;
                
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % tabButtons.length;
                } else {
                    nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
                }
                
                tabButtons[nextIndex].focus();
                switchTab(tabButtons[nextIndex]);
            }
        });
    });

    // Initialize - make sure the first tab is active
    if (tabButtons.length > 0) {
        switchTab(tabButtons[0]);
    }
});