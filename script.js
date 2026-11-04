let audio = document.querySelector("#drive-audio");
let playButton = document.querySelector("#play-button");
let rainButton = document.querySelector("#rain-button");
let image = document.querySelector("#road");
let rain = document.querySelector("#rain");
let message = document.querySelector("#message");

playButton.addEventListener("click", function() {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener("play", function() {
    playButton.textContent = "Pause Soundscape";
    message.textContent = "The night drive has begun.";

    image.style.transform = "scale(1.1)";
    image.style.filter = "brightness(70%)";
});

audio.addEventListener("pause", function() {
    playButton.textContent = "Play Soundscape";

    image.style.transform = "scale(1)";
    image.style.filter = "brightness(100%)";

    if (!audio.ended) {
        message.textContent = "The drive is paused.";
    }
});

rainButton.addEventListener("click", function() {

    rain.classList.toggle("active");

    if (rain.classList.contains("active")) {
        rainButton.textContent = "Turn Rain Off";
    } else {
        rainButton.textContent = "Turn Rain On";
    }
});

audio.addEventListener("ended", function() {
    playButton.textContent = "Play Soundscape";
    message.textContent = "You've made it home.";

    image.style.transform = "scale(1)";
    image.style.filter = "brightness(100%)";
});
