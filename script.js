document.getElementById('playMusicButton').addEventListener('click', function() {
    var music = document.getElementById('backgroundMusic');
    music.play(); // Play the music

    // Hide the button
    this.style.display = 'none'; 

    // Change the background image
    var container = document.querySelector('.container');
    container.style.backgroundImage = "url('bg-2.png')"; // Change to bg-2.jpg

    // Hide the images and text overlays
    var elementsToHide = [
        document.querySelector('.top-right-image'),
        document.querySelector('.bottom-left-image'),
        document.querySelector('.center-image'),
        document.querySelector('.center-flower'),
        document.querySelector('.text-overlay'),
        document.querySelector('.text-overlay1')
    ];

    elementsToHide.forEach(function(element) {
        if (element) {
            element.style.display = 'none'; // Set display to none
        }
    });

    // Combine the text elements into an array
    var textsToShow = [
        document.querySelector('.assalam-text'),
        document.querySelector('.shukri-zubaidah-text'),
        document.querySelector('.invitation-text'), // Add the new text here
        document.querySelector('.naufal-nadhirah-text'),
        document.querySelector('.tempat'),
        document.querySelector('.lokasi'),
        document.querySelector('.hitung'),
        document.querySelector('.spaceBelow'),
    ];

    // Show each text in the array
    textsToShow.forEach(function(textElement) {
        if (textElement) {
            textElement.style.display = 'block'; // Show the text
        }
    });

    // Show the countdown element
    document.getElementById('countdown').style.display = 'block'; // Make countdown visible

    // Show the navigation bar
    document.querySelector('.nav-bar').style.display = 'flex'; // Make nav bar visible

    // Start the countdown
    startCountdown(new Date('February 1, 2025 00:00:00').getTime());
    // Get the elements
const giftButton = document.querySelector('.nav-button:nth-child(1)'); // Assuming it's the first button
const popup = document.querySelector('.popup');
const closePopup = document.getElementById('closePopup');

// Show the popup when the gift button is clicked
giftButton.addEventListener('click', function() {
    popup.style.display = 'flex'; // Show the popup
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside of the image
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});
});

// Add this code to your script.js file
window.addEventListener('load', function() {
    const elementsToFadeIn = [
        document.querySelector('.top-right-image'),
        document.querySelector('.bottom-left-image'),
        document.querySelector('.center-image'),
        document.querySelector('.center-flower'),
        document.querySelector('.text-overlay'),
        document.querySelector('.text-overlay1'),
        document.getElementById('playMusicButton') // Include the playMusicButton
    ];

    elementsToFadeIn.forEach(function(element) {
        if (element) {
            element.classList.add('fade-in'); // Add the fade-in class
        }
    });
});;