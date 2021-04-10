var button = document.getElementById("but");
var text = document.getElementById("text");

button.addEventListener("click", birthday);

function birthday() {
	button.style.setProperty("font-size", "100px");
	button.style.setProperty("border-radius", "100px 100px 50px 50px");
	button.style.setProperty("transform", " translate(-25px, 0px)");
	button.innerText = "CAKE";
	button.style.setProperty("background-color", "#FC7A6F");
	button.style.setProperty("color", "#FC7A6F");
	button.style.setProperty("border", "10px solid #FC7A6F");

	text.style.visibility = "visible";
}
