// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all dropdowns as closed
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    dropdownContents.forEach(content => {
        content.classList.remove('active');
    });
});

function toggleDropdown(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const arrow = document.getElementById(sectionId + '-arrow');
    
    // Toggle the active class
    content.classList.toggle('active');
    
    // Rotate the arrow
    arrow.classList.toggle('rotated');
    
    // Close other dropdowns (optional - uncomment if you want only one open at a time)
    /*
    const allContents = document.querySelectorAll('.dropdown-content');
    const allArrows = document.querySelectorAll('.dropdown-arrow');
    
    allContents.forEach((otherContent, index) => {
        if (otherContent !== content) {
            otherContent.classList.remove('active');
            allArrows[index].classList.remove('rotated');
        }
    });
    */
}

// Timetable interaction functions
function showSessionDetails(day) {
    const sessionDetails = document.getElementById('session-details');
    const sessionDay = document.getElementById('session-day');
    
    // Show the session details
    sessionDetails.classList.remove('hidden');
    
    // Set the day title
    sessionDay.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)} MMA Training`;
    
    // Scroll to the session details
    sessionDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function bookSession() {
    // This could integrate with a booking system
    alert('Booking functionality coming soon! Please contact us directly to book your session.');
}