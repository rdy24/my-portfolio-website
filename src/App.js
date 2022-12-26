import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Work from "./components/work/Work";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Qualification />
				<Services />
				<Work />
			</main>
			<Contact />
			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
