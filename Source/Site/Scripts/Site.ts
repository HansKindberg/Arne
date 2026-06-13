//import "bootstrap";
import { Collapse } from "bootstrap";
import "svgxuse";

const navigation = document.getElementById("navigation");
const navigationToggler = document.getElementById("navigation-toggler");
const navigationCloser = document.getElementById("navigation-closer");

if(navigation && navigationToggler) {
	const collapse = new Collapse(navigation, { toggle: false });

	navigationToggler.addEventListener("click", () => {
		collapse.toggle();
	});

	if(navigationCloser) {
		navigationCloser.addEventListener("click", () => {
			collapse.toggle();
		})
	}
}