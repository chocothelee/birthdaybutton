var button = document.getElementById("but");
var text = document.getElementById("text");
var ptext = document.getElementById("ptext");
var candle = document.getElementById("can");
var flame = document.getElementById("flame");

function birthday() {
	button.style.setProperty("font-size", "100px");
	button.style.setProperty("border-radius", "100px 100px 50px 50px");
	button.innerText = "CAKE";
	button.style.setProperty("background-color", "#FC7A6F");
	button.style.setProperty("color", "#FC7A6F");
	button.style.setProperty("border", "10px solid #FC7A6F");

	text.style.visibility = "visible";
	ptext.style.visibility = "visible";
	candle.style.visibility = "visible";
	flame.style.visibility = "visible";
}

function candlefl() {
	flame.style.visibility = "hidden";
}
