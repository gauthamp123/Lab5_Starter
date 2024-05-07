// expose.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  
    const hornSelect = document.getElementById('horn-select');
    const volumeControl = document.getElementById('volume');
    const playButton = document.querySelector('button'); 
    const audioPlayer = document.querySelector('audio');
    const volumeImage = document.querySelector('#volume-controls img');
    const hornImage = document.querySelector('#expose img');


    hornSelect.addEventListener('change', function() {
        switch(this.value) {
            case 'air-horn':
                hornImage.src = 'assets/images/air-horn.svg';
                audioPlayer.src = 'assets/audio/air-horn.mp3';
                break;
            case 'car-horn':
                hornImage.src = 'assets/images/car-horn.svg';
                audioPlayer.src = 'assets/audio/car-horn.mp3';
                break;
            case 'party-horn':
                hornImage.src = 'assets/images/party-horn.svg';
                audioPlayer.src = 'assets/audio/party-horn.mp3';
                break;
        }
    });


    volumeControl.addEventListener('input', function() {
        let volumeLevel = parseInt(this.value);
        audioPlayer.volume = volumeLevel / 100;

        if (volumeLevel === 0) {
            volumeImage.src = 'assets/icons/volume-level-0.svg';
        } else if (volumeLevel < 33) {
            volumeImage.src = 'assets/icons/volume-level-1.svg';
        } else if (volumeLevel < 67) {
            volumeImage.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeImage.src = 'assets/icons/volume-level-3.svg';
        }
    });


    playButton.addEventListener('click', function() {
        if (audioPlayer.src) {
            audioPlayer.play();
            if (hornSelect.value === 'party-horn') {
                const jsConfetti = new JSConfetti();
                jsConfetti.addConfetti();
            }
        } else {
            alert("Please select a horn sound first.");
        }
    });
};
