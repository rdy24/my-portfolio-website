import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">rdy24</h1>
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Portfolio
						</a>
					</li>
					<li>
						<a href="#services" className="footer__link">
							Services
						</a>
					</li>
				</ul>
				<div className="footer__social">
					<a
						href="https://web.facebook.com/people/Raflizar-Deswandi-Yahya/100008851968955/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/rdyzar.24/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-instagram"></i>
					</a>
					<a
						href="https://t.me/rdyzar_24"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-telegram"></i>
					</a>
				</div>
				<span className="footer__copy">&#169; rdy24. All rigths reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
