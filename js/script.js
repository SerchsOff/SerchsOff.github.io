var head = document.querySelector("header")

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