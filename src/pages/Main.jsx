import "@fortawesome/fontawesome-free/css/all.min.css";

import Contact from "../Components/Contact";
import "../Styles/global.css";
import Testimonials1 from "../Components/Testimonials1";
import Wissenova from "../Components/Wissenova";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import Rounds from "../Components/Rounds";
import AboutApogee from "../Components/AboutApogee";

import Gallery from "./Gallery";
import Socials from "../Components/Socials";

export default function Main() {
  return (
    <div className="main">
      <AboutUs />
      <Rounds />
      <AboutApogee />
      <Testimonials1 />
      <Wissenova />
      <Gallery />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}
