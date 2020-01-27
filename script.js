const removeTransition = e => e.currentTarget.classList.remove('active'); 

const keysArr = [...document.querySelectorAll('.key')];

keysArr.forEach(key => {
    key.addEventListener('click', e => playSound(e.currentTarget.dataset.key));
    key.addEventListener('transitionend', removeTransition);

});

const playSound = key => {
    const sound = document.querySelector(`audio[data-key="${key}"]`);
    if (sound) {
        const divKey = document.querySelector("div[data-key='"+ key +"']");
        divKey.classList.add('active');
        sound.currentTime = 0;
        sound.play();
        
    }
    
}
//divKey.classList.remove('active');

window.addEventListener("keydown", e => {
    playSound(e.keyCode);
  },false);