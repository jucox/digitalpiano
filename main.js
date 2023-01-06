const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');
let allKeys = [];
let audio = new Audio('audio/w.wav');

function playTune (key) {
    audio.src = `audio/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    
    clickedKey.classList.add('active');
    
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);

    key.addEventListener('click', () => playTune(key.dataset.key));
});

function handleVolume (e) {
    audio.volume = e.target.value;
}

function showHideKeys () {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

function pressedKey (e) {
    if (allKeys.includes(e.key)) {
        playTune(e.key);
    }
}

volumeSlider.addEventListener('input', handleVolume);
keysCheckbox.addEventListener('click', showHideKeys);
document.addEventListener('keydown', pressedKey);