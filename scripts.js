window.addEventListener('keydown', function(e) {
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var icon = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio) { return };
	icon.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
});

function removeTransition(e) {
	this.classList.remove('playing');
};

var icons = document.querySelectorAll('.key');
icons.forEach( icon => icon.addEventListener("transitionend", removeTransition) );