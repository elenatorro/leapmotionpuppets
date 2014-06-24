document.getElementById("w-range").onchange = function() {
		document.getElementById("myhead").style.width = this.value+"px";
		document.getElementById("ph-range").setAttribute("min",(this.value*-1));
		document.getElementById("ph-range").setAttribute("max", this.value);
		 
}

document.getElementById("h-range").onchange = function() {
		document.getElementById("myhead").style.height = this.value+"px";
		document.getElementById("pv-range").setAttribute("min",(this.value*-1));
		document.getElementById("pv-range").setAttribute("max", this.value);
		 
}
document.getElementById("b-range").onchange = function() {
		document.getElementById("myhead").style.borderRadius = this.value+"%";
		document.getElementById("myhead").style.WebkitBorderRadius = this.value+"%";
		document.getElementById("myhead").style.MozBorderRadius = this.value+"%";
}

document.getElementById("ph-range").onchange = function() {
	document.getElementById("myhead").style.marginLeft = this.value+"px";
}

document.getElementById("pv-range").onchange = function() {
	document.getElementById("myhead").style.marginTop = this.value+"px";
}

// function saveImage() {
// 	var head = document.getElementById("myhead");
// 	var face = document.getElementById("myhead");
// 	head.style.borderRadius = face.style.borderRadius+"%";
// 	head.style.WebkitBorderRadius = face.style.WebkitBorderRadius+"%";
// 	head.style.MozBorderRadius = face.style.MozBorderRadius+"%";
// 	console.log(face.style.boxShadow);
// 	head.style.width = face.style.width;
// 	head.style.height = face.style.height;
// }