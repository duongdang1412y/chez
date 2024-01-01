// Play sound when user click;
document.addEventListener('click', () => {
	// If user enable sound;
	if (localStorage.getItem('volume') === 'true') {
		const click = document.getElementById('click');

		// Check if the video is playing;
		if (click.paused) {
			click.play();
		} else {
			// Reset the video to start;
			click.currentTime = 0;
			click.play();
		}
	}
});
