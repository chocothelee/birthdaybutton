var button = document.getElementById("but");

button.addEventListener("click", birthday);

function birthday() {
	button.style.setProperty("font-size", "100px");
	button.style.setProperty("border-radius", "100px 100px 50px 50px");
	button.style.setProperty("transform", " translate(-50px, 0px)");
	button.innerText("");
}

for (var i = 0; i < 30; i++) {
	create(i);
}

function create(i) {
	var width = Math.random();

	var height = width * 0.4;

	if (width < 0.3) {
		color = "yellow";
	} else if (0.3 <= width && width < 0.5) {
		color = "red";
	} else if (0.5 <= width && width < 0.7) {
		color = "blue";
	} else {
		color = "green";
	}

	fall(i);
}
