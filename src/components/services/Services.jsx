import React, { useState, useEffect } from "react";
import "./services.css";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="services section" id="services">
			<h2
				className="section__title"
				data-aos="fade-down"
				data-aos-duration="1500"
			>
				Services
			</h2>
			<span
				className="section__subtitle"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				What I Offer
			</span>

			<div className="services__container container grid">
				<div
					className="services__content"
					data-aos="fade-right"
					data-aos-duration="1500"
				>
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">
							Web <br /> Development
						</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(1)}>
						View More{" "}
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 1
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">
								Building a custom website from scratch
							</h3>
							<p className="services__modal-description">
								Custom website design and development from scratch. I'm create
								unique websites that meet your specific needs and goals.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Build websites that meet your specific needs and goals
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Design and create custom layouts and features
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Provide ongoing support and maintenance
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Work with you to make sure the website meets your needs.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					className="services__content"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">
							API <br /> Development
						</h3>
					</div>
					<span className="services__button" onClick={() => toggleTab(2)}>
						View More{" "}
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 2
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">
								Build a custom API for your business
							</h3>
							<p className="services__modal-description">
								Build APIs that allow different software systems to communicate
								with each other. Design and create the API, test it to make sure
								it works, and provide ongoing support and maintenance.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Design, create, and maintain the API
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Build APIs that allow different software systems to
										communicate
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Ensure that the API works properly
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Have expertise in programming and software architecture.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
