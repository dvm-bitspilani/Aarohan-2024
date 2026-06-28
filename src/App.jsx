import "./App.css";
import "./Styles/global.css";

import { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Main from "./pages/Main";
import Landing from "./pages/LandingPart.jsx";
import Preloader from "./pages/Preloader.jsx";

const assetsArr = [
  "/src/images/ApogeeLogo2026.svg",
  "/src/images/aarohanLogo.png",
  "/src/images/clocktower.svg",
  "/src/images/ellipse1.png",
  "/src/images/ellipse2.png",
  "/src/images/glow.png",
  "/src/images/road.png",
  "/src/images/bg.png",
  "/src/Contact/yuva.png",
  "/src/Contact/tanvi.png",
  "/src/Contact/aarnav.png",
  "/src/Contact/prisha_singhal.png",
  "/src/Contact/adarsh.png",
  "/src/Contact/trishaa.png",
  "/src/images/quote.png",
  "/src/fonts/Montserrat-VariableFont_wght.ttf",
  "/src/images/final_bg.png",
  "/src/images/Aarohan.png",
  "/src/Gallery/1.jpg",
  "/src/Gallery/2.jpg",
  "/src/Gallery/3.jpg",
  "/src/Gallery/4.jpg",
  "/src/Gallery/5.jpg",
  "/src/Gallery/6.jpg",
  "/src/Gallery/7.jpg",
  "/src/Gallery/8.jpg",
  "/src/Gallery/9.jpg",
  "/src/Gallery/10.jpg",
  "/src/Gallery/11.jpg",
  "/src/Gallery/12.jpg",
  "/src/Gallery/13.jpg",
  "/src/Gallery/14.jpeg",
  "/src/Gallery/15.jpeg",
  "/src/Gallery/16.jpeg",
  "/src/Gallery/17.jpeg",
  "/src/Gallery/18.jpeg",
  "/src/Gallery/19.jpg",
  "/src/Gallery/20.jpg",
  "/src/Gallery/21.jpg",
  "/src/images/trophy.png",
  "/src/images/bulb.png",
  "/src/images/upGraph.png",
  "/src/images/3ppl.png"
];

function App() {
  const [isPreLoading, setIsPreLoading] = useState(true);

  return isPreLoading ? (
    <Preloader onEnter={() => setIsPreLoading(false)} assetsArr={assetsArr} />
  ) : (
    <div>
      <div className="landing-page">
        <Navbar />
        <Landing />
      </div>
      <Main className="target" />
    </div>
  );
}

export default App;
