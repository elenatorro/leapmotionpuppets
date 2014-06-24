function changeMusic(song) {
	var music = document.getElementById('music');
	music.src = song;
	music.load();
	music.play();
}