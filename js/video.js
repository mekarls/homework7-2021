var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 +"%";
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	var slider = this.value;
	video.volume = slider/100;
	document.querySelector("#volume").innerHTML=slider+"%";
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
	} else {
		console.log("Unmute Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
	}
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#vintage').addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .95;
	console.log(video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= .95;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	video.loop = true;
	console.log("Skip Ahead");
	video.currentTime += 15;
	console.log(video.currentTime);
	// if (video.ended == true) {
	// 	video.currentTime = 0;
	// 	video.play();
	
});