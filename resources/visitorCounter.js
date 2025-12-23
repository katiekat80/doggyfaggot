// Get the current visitor count from local storage (or initialize it if not set)
let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;

// Generate a unique identifier for the current visitor
let visitorId = Math.random().toString(36).substr(2, 9);

// Store the ID in local storage
localStorage.setItem('visitorId', visitorId);

// Update the displayed count
document.getElementById('visitor-count').textContent = `Visitor Count: ${visitorCount + 1}`;

// Add an event listener to update the count on each page load
window.addEventListener('load', () => {
    // Check if this is a repeat visitor (i.e., same ID)
    let storedId = localStorage.getItem('visitorId');
    if (storedId === visitorId) {
        // Update the count only for new visitors
        visitorCount++;
        document.getElementById('visitor-count').textContent = `Unique Visitors: ${visitorCount}`;
    }
});