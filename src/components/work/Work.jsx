import React, { useEffect } from "react";
import "./work.css";
import Works from "./Works";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="work section" id="portfolio">
			<h2
				className="section__title"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				Portfolio
			</h2>
			<span
				className="section__subtitle"
				data-aos="fade-left"
				data-aos-duration="2000"
			>
				Most recent project
			</span>
			<Works />
		</section>
	);
};

export default Work;
