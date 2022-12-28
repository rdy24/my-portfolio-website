import React, { useState, useEffect } from "react";
import "./qualification.css";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="qualification section">
			<h2
				className="section__title"
				data-aos="flip-right"
				data-aos-duration="1500"
			>
				Qualification
			</h2>
			<span
				className="section__subtitle"
				data-aos="flip-left"
				data-aos-duration="2000"
			>
				My personal journey
			</span>

			<div className="qualification__container container">
				<div
					className="qualification__tabs"
					data-aos="flip-right"
					data-aos-duration="1500"
				>
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>{" "}
						Education
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
						Experience
					</div>
				</div>
				<div
					className="qualification__sections"
					data-aos="zoom-in-up"
					data-aos-duration="3000"
				>
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Bachelor Degree</h3>
								<span className="qualification__subtitle">
									Computer Science, Institut Teknologi Nasional Malang
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> 2020 - Present
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Devlopment Laravel</h3>
								<span className="qualification__subtitle">
									Intern at PT. Solusi Tiga Selaras
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i> Aug 2022 - Des 2022
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
