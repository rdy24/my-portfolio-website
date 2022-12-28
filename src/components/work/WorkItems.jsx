import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkItems = ({ item }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="work__card" key={item.id} data-aos="fade-up">
			<img src={item.image} alt="" className="work__img" />
			<h3 className="work__title">{item.title}</h3>
			<span className="work__tech">Tech Stack : {item.tech}</span>
			<div className="work__button-div">
				<a
					href={item.url}
					className="work__button"
					target="_blank"
					rel="noreferrer"
				>
					Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
				</a>
				<a
					href={item.url_git}
					className="work__button-git"
					target="_blank"
					rel="noreferrer"
				>
					Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
				</a>
			</div>
		</div>
	);
};

export default WorkItems;
