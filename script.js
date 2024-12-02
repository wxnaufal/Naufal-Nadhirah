const button = document.getElementById("playButton");
const audio = document.getElementById("audio");
const infoParagraph = document.getElementById("ayat"); // Reference to the paragraph
const titleDiv = document.querySelector(".title"); // Reference to the title div

button.addEventListener("click", function () {
    audio.play();
    button.style.display = "none"; // Hide the button after clicking
    infoParagraph.style.display = "block"; // Show the paragraph
    titleDiv.style.display = "none"; // Hide the title div
});