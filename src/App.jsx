import "./App.css";
import "./Styles/global.css";

import { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Main from "./pages/Main";
import Landing from "./pages/LandingPart.jsx";
import Preloader from "./pages/Preloader.jsx";

const assetsArr = [
  "/src/images/final_bg.webp",
  "/src/images/aarohanLogo.png",
  "/src/Contact/yuva.jpg",
  "/src/Contact/tanvi.jpg",
  "/src/Contact/aarnav.jpg",
  "/src/Contact/prisha_singhal.jpg",
  "/src/Contact/adarsh.jpg",
  "/src/Contact/trishaa.jpg",
  "/src/images/quote.png",
  "/src/fonts/Montserrat-VariableFont_wght.ttf",
  "/src/images/Aarohan2027.jpg",
  "/src/Gallery/1.webp",
  "/src/Gallery/2.webp",
  "/src/Gallery/3.webp",
  "/src/Gallery/4.webp",
  "/src/Gallery/5.webp",
  "/src/Gallery/6.webp",
  "/src/Gallery/7.webp",
  "/src/Gallery/8.webp",
  "/src/Gallery/9.webp",
  "/src/Gallery/10.jpg",
  "/src/Gallery/11.jpg",
  "/src/Gallery/12.jpg",
  "/src/Gallery/13.jpg",
  "/src/Gallery/14.jpeg",
  "/src/Gallery/15.jpeg",
  "/src/Gallery/16.jpeg",
  "/src/Gallery/17.jpeg",
  "/src/Gallery/18.jpeg",
  "/src/Gallery/19.webp",
  "/src/Gallery/20.webp",
  "/src/Gallery/21.webp",
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
