var head = document.querySelector("header");
let name1 = document.querySelector(".name1-active");
let name2 = document.querySelector(".name2-active");
let placehold = document.querySelector(".placehold")

name1.classList.remove("name1-active")
name2.classList.remove("name2-active")

function placeh() {
	setTimeout(() => {
		placehold.style.opacity = "0"
		setTimeout(() => {
			placehold.style.display = "none"
		},1000)
	},1000)
}

window.onload = function() {
	placeh();
	scroll()
}

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

