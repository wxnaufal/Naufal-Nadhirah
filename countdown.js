// countdown.js
document.getElementById('playMusicButton').addEventListener('click', function() {
    // Start the countdown after the music plays
    startCountdown(new Date('February 1, 2025 00:00:00').getTime());
});

function startCountdown(targetDate) {
    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
}