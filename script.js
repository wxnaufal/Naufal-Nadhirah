document.getElementById('musicButton').addEventListener('click', function() {
    // Create a new window or tab
    const musicWindow = window.open('music.html', '_blank');

    // Wait for the new window to load
    musicWindow.onload = function() {
        // Play music when the new window is fully loaded
        musicWindow.document.getElementById('music').play();
    };
});