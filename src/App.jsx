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
  "/src/Contact/aman_sharma.jpg",
  "/src/Contact/anirvan_kanavi.jpg",
  "/src/Contact/bhoomi_motihar.jpg",
  "/src/Contact/maanas_popuri.jpg",
  "/src/Contact/varenyam_bharti.jpg",
  "/src/images/quote.png",
  "/src/fonts/Montserrat-VariableFont_wght.ttf"
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
