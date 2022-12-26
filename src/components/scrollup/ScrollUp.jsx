import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
	window.addEventListener("scroll", () => {
		const scrollup = document.querySelector(".scrollup");
		if (window.pageYOffset >= 560) {
			scrollup.classList.add("show-scroll");
		} else {
			scrollup.classList.remove("show-scroll");
		}
	});
	return (
		<a href="#home" className="scrollup">
			<i className="uil uil-arrow-up scrollup_icon"></i>
		</a>
	);
};

export default ScrollUp;
