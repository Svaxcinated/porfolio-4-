// Certification Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Create modal HTML structure
    const modalHTML = `
        <div id="certModal" class="modal">
            <div class="modal-content">
                <button class="close-button" id="closeModal">&times;</button>
                <img class="modal-image" id="modalImage" alt="Certificate">
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.getElementById('certModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementById('closeModal');
    
    // Get all certification cards
    const certCards = document.querySelectorAll('.cert-card');
    
    // Add click event to each certification card
    certCards.forEach(card => {
        const certImage = card.querySelector('.cert-logo'); // Changed from .cert-image to .cert-logo
        
        if (certImage) {
            // Add cursor pointer style to cards with images
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', function() {
                // Set modal image source
                modalImage.src = certImage.src;
                modalImage.alt = certImage.alt;
                
                // Show modal
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            });
        } else {
            // Remove cursor pointer for cards without images
            card.style.cursor = 'default';
        }
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore background scroll
    }
    
    // Close modal events
    closeButton.addEventListener('click', closeModal);
    
    // Close when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Prevent modal image click from closing modal
    modalImage.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});