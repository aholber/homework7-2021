var video = document.querySelector("#player1");
var volume = document.querySelector("#volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

// plays video & add that it updates volume when played
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	if (video.play()){
		volume.innterHTML = document.querySelector("#slider").value + "%";
	}

	document.querySelector("#slider").addEventListener("input", function(){
		volume.innerHTML = this.value + "%"
		video.volume = this.value / 100;
		console.log("Volume is " + video.volume);
	})
});

// pauses video
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Video Paused")
	video.pause();
})

// slows down video by 5% and logs speed of video
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.95
	console.log("Video speed is " + video.playbackRate)
})

// speeds up video by 5% and logs speed of video
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 1.05
	console.log("Video speed is " + video.playbackRate)
})

// skips video forward 15 secs, starts over if reached end, logs location 
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Original time: " + video.currentTime)
	if (video.currentTime + 15 >= video.duration){
		video.currentTime = 0
		video.play()
	}
	else{
		video.currentTime = video.currentTime + 15
	}
	console.log("Updated time: " + video.currentTime)
})

// mutes and unmutes video when clicking button
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted != true) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is muted");
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is unmuted");
	}
})


document.querySelector("#vintage").addEventListener("click", function(){
 	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})