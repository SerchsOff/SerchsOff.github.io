var head = document.querySelector("header");
let name1 = document.querySelector(".name1-active");
let name2 = document.querySelector(".name2-active")

name1.classList.remove("name1-active")
name2.classList.remove("name2-active")

window.onscroll = function() {
	scroll()
}

function scroll() {
	if (window.pageYOffset >= 300) {
		head.style.position = "fixed"
		head.style.background = "#000"
	}
	else {
		head.style.position = "absolute"
		head.style.background = "initial"
	}
};

