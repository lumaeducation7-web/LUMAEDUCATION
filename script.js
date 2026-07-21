/**
 * Luma Education - Core Website Functionality
 * Developed for Darpan Prajapati
 */

// 1. Handle Study Material Downloads
function downloadMaterial(fileName) {
    // Check if the filename passed is a string (handles potential unquoted parameters in HTML)
    const materialName = typeof fileName === 'string' ? fileName : 'તમારું મટીરીયલ';
    
    // Provide a friendly non-intrusive alert to confirm the action to the student
    alert(`📥 ${materialName} ડાઉનલોડ થઈ રહ્યું છે...`);
    
    // Diagnostic log for development tracking
    console.log(`Initiating download for: ${materialName}`);
}

// 2. Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target attribute value (e.g., #dhoran10)
            const targetId = this.getAttribute('href');
            
            // Only apply smooth scroll if it's an internal anchor link
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Smoothly slide down to the selected section
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
