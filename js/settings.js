function changeDisco() {
	document.getElementById("canvas").style.backgroundImage="url('img/dancefloor.JPG')";
	document.body.style.backgroundPosition="cover";
	changeMusic("audio/fever.mp3");
}

function changeBeach() {
	document.getElementById("canvas").style.backgroundImage="url('img/beach.jpg')";
	document.body.style.backgroundPosition="cover";
	changeMusic("audio/beach.mp3");
}

function changeLandscape() {
	document.getElementById("canvas").style.backgroundImage="url('img/landscape.jpg')";
	document.body.style.backgroundPosition="cover";
	changeMusic("audio/oktoberfest.mp3");
}

function changeMarioBG() {
	document.getElementById("canvas").style.backgroundImage="url('img/mariobrosbackground.png')";
	document.body.style.backgroundPosition="cover";
	changeMusic("audio/mariobros.mp3");
}

function changeMoon() {
	document.getElementById("canvas").style.backgroundImage="url('img/moon.jpg')";
	document.body.style.backgroundPosition="cover";
	changeMusic("audio/starwars.mp3");
}

function changeNewYork() {
	document.getElementById("canvas").style.backgroundImage="url('img/city.jpg')";
	document.body.style.backgroundPosition="cover";
	changeMusic("audio/spiderman.mp3");
}

function changeFace() {
	document.getElementById("myhead").src = document.getElementById("img-url").value;
}

function changeChewbacca() {
	document.getElementById("mybody").src = 'img/chewbacca.png';
	document.getElementById("mybody").className = 'normal';
}

function changeMarioBros() {
	document.getElementById("mybody").src = 'img/mariobros.png';
	document.getElementById("mybody").className = 'normal';
}

function changeJohnTravolta() {
	document.getElementById("mybody").src = 'img/johntravolta.png';
	document.getElementById("mybody").className = 'normal';
}

function changeOktoberfestBoy() {
	document.getElementById("mybody").src = 'img/oktoberfest_boy.png';
	document.getElementById("mybody").className = 'normal';
}

function changeOktoberfestGirl() {
	document.getElementById("mybody").src = 'img/oktoberfest.png';
	document.getElementById("mybody").className = 'normal';
}

function changeSpiderman() {
	document.getElementById("mybody").src = 'img/spiderman.png';
	document.getElementById("mybody").className = 'big';
}