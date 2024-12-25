onload = () =>{
    document.body.classList.remove("container");
};

const audio = document.getElementById('audio');
        const playStopButton = document.getElementById('playStopButton');

        // Set the button text based on the audio state
        playStopButton.addEventListener('click', () => {
            if (audio.paused) {
                // Play the audio and change button text to "Stop"
                audio.play();
                playStopButton.textContent = 'Stop';
            } else {
                // Pause the audio and change button text to "Play"
                audio.pause();
                playStopButton.textContent = 'Play';
            }
        });