import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Work />
			</main>
			<Testimonials />
		</>
	);
}

export default App;
