import React from "react";

const Social = () => {
	return (
		<div className="home__social animate__animated animate__fadeInLeft animate__delay-1s">
			<a
				href="https://www.instagram.com/rdyzar.24/"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-instagram"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/raflizar-deswandi-yahya-643533228/"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-linkedin-alt"></i>
			</a>
			<a
				href="https://github.com/rdy24"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<i className="uil uil-github-alt"></i>
			</a>
		</div>
	);
};

export default Social;
