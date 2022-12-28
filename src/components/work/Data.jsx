import youpay from "../../assets/portfolio-img/youpay.PNG";
import si from "../../assets/portfolio-img/si.PNG";
import apiyoupay from "../../assets/portfolio-img/apiyoupay.PNG";
import rdymovie from "../../assets/portfolio-img/rdymovie.PNG";
// import Work5 from "../../assets/work5.jpg";

export const projectsData = [
	{
		id: 1,
		image: youpay,
		title: "Youpay",
		category: "web",
		tech: "Next.js, Bootstrap, API, TypeScript",
		url: "https://youpay-checkout.vercel.app/",
		url_git: "https://github.com/rdy24/rdystore",
	},
	{
		id: 2,
		image: si,
		title: "SI Flights Airplane",
		category: "web",
		tech: "Laravel, Bootstrap, MySQL",
		url: "https://si-flights-airplane.herokuapp.com/",
		url_git: "https://github.com/rdy24/si-flights-airplane",
	},
	{
		id: 3,
		image: apiyoupay,
		title: "API Youpay",
		category: "api",
		tech: "MongoDB, Express, Node.js",
		url: "https://api-rdystore.herokuapp.com/",
		url_git: "https://github.com/rdy24/api-rdystore",
	},
	{
		id: 4,
		image: rdymovie,
		title: "rdymovie",
		category: "web",
		tech: "Javascript, Bootstrap, TMDB API",
		url: "https://rdy-movie.netlify.app/",
		url_git: "https://github.com/rdy24/rdy-movie",
	},
];

export const projectsNav = [
	{
		name: "all",
	},
	{
		name: "web",
	},
	{
		name: "api",
	},
];
