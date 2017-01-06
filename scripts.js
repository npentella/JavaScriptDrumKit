window.addEventListener('keydown', function(e) {
	console.log(e.keyCode);
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	console.log(audio);
	audio.play();
});