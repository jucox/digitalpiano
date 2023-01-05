const keyboardKeys = document.querySelectorAll('.key')

for (let i = 0; i < keyboardKeys.length; i++) {
    const keyboardKey = keyboardKeys[i]
    const keySound = `#${keyboardKey.id}_sound` 
    
    keyboardKey.onclick = function () {
        playKeySound(keySound)
    }   
}

function playKeySound (key) {
    const keySound = document.querySelector(key)
    keySound.currentTime = 0
    keySound.play()
}