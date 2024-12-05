document.getElementById('playMusicButton').addEventListener('click', function() {
    var music = document.getElementById('backgroundMusic');
    music.play(); // Play the music
    this.style.display = 'none'; // Hide the button

    // Change the background image
    document.querySelector('.container').style.backgroundImage = "url('bg-2.png')";

    // Hide unnecessary elements
    const elementsToHide = [
        '.top-right-image',
        '.bottom-left-image',
        '.center-image',
        '.center-flower',
        '.text-overlay',
        '.text-overlay1'
    ];
    elementsToHide.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.style.display = 'none';
    });

    // Show text elements
    const textsToShow = [
        '.assalam-text',
        '.shukri-zubaidah-text',
        '.invitation-text',
        '.naufal-nadhirah-text',
        '.tempat',
        '.lokasi',
        '.hitung',
        '.spaceBelow'
    ];
    textsToShow.forEach(selector => {
        const textElement = document.querySelector(selector);
        if (textElement) textElement.style.display = 'block';
    });

    // Show countdown and navigation bar
    document.getElementById('countdown').style.display = 'block';
    document.querySelector('.nav-bar').style.display = 'flex';

    // Start the countdown
    startCountdown(new Date('February 1, 2025 00:00:00').getTime());

    // Popup functionality
    const giftButton = document.querySelector('.nav-button:nth-child(1)');
    const popup = document.querySelector('.popup');
    const closePopup = document.getElementById('closePopup');

    giftButton.addEventListener('click', () => popup.style.display = 'flex');
    closePopup.addEventListener('click', () => popup.style.display = 'none');
    popup.addEventListener('click', (event) => {
        if (event.target === popup) popup.style.display = 'none';
    });
});

// Fade-in effect on load
window.addEventListener('load', () => {
    const elementsToFadeIn = [
        '.top-right-image',
        '.bottom-left-image',
        '.center-image',
        '.center-flower',
        '.text-overlay',
        '.text-overlay1',
        '#playMusicButton'
    ];
    elementsToFadeIn.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.classList.add('fade-in');
    });
});

function startCountdown(targetDate) {
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display countdown
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Countdown expired
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
}