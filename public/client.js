console.log("Client-side code running");

const imageSquare = document.getElementById("imageSquare");
const photoInput = document.getElementById("photoInput");
const subtitle = document.getElementsByClassName("subTitle");

if (imageSquare) {
	imageSquare.addEventListener("click", function (e) {
		//console.log("imageSquare was clicked");
		photoInput.click();
	});
}

if (subtitle) {
	Array.from(subtitle).forEach(function (item) {
		let value = item.innerText;
		item.innerText = "";
		var d = document.createElement("div");
		d.innerHTML = value;
		item.appendChild(d);
	});
}

// photoInput.addEventListener("change", function (e) {
// 	console.log("photoInput was clicked");
// });

function photoSeleted(element) {
	//console.log(element);
	//console.log(element.target);
	//console.log(element.files[0]);
	if (element.files && element.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			imageSquare.setAttribute("src", e.target.result);
		};
		reader.readAsDataURL(element.files[0]);
	}
}

var elements = document.getElementsByClassName("carousel-item");

for (var i = 0; i < elements.length; i++) {
	if (i === 0) continue;
	elements[i].classList.remove("active");
	//console.log(elements[i]);
}
