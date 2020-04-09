let category = document.getElementsByClassName("make__nav-elem");

function make(n){
	for (i = 0; i < category.length; i++) {
		category[i].classList.remove("nav-active")
	}
	category[n].classList.add("nav-active")
}