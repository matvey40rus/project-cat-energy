var menu_button = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

menu_button.classList.add("main-nav__toggle--js");

if (!menu.classList.contains("main-nav--hide") || !menu.classList.contains("main-nav--show")) {
	menu.classList.add("main-nav--hide");
}

menu_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (menu.classList.contains("main-nav--hide")) {
		menu.classList.remove("main-nav--hide");
		menu.classList.add("main-nav--show");
	} else {
		menu.classList.remove("main-nav--show");
		menu.classList.add("main-nav--hide");
	}
});