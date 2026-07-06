import "./App.css";
import "./Styles/global.css";

import { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Main from "./pages/Main";
import Landing from "./pages/LandingPart.jsx";
import Preloader from "./pages/Preloader.jsx";


import finalBg from "./images/final_bg.webp";
import aarohanLogo from "./images/aarohanLogo.png";
import quote from "./images/quote.png";
import aarohan2027 from "./images/Aarohan2027.png";
import trophy from "./images/trophy.png";
import bulb from "./images/bulb.png";
import upGraph from "./images/upGraph.png";
import threePeople from "./images/3ppl.png";


import yuva from "./Contact/yuva.jpg";
import tanvi from "./Contact/tanvi.jpg";
import aarnav from "./Contact/aarnav.jpg";
import prisha from "./Contact/prisha_singhal.jpg";
import adarsh from "./Contact/adarsh.jpg";
import trishaa from "./Contact/trishaa.jpg";


import g1 from "./Gallery/1.webp";
import g2 from "./Gallery/2.webp";
import g3 from "./Gallery/3.webp";
import g4 from "./Gallery/4.webp";
import g5 from "./Gallery/5.webp";
import g6 from "./Gallery/6.webp";
import g7 from "./Gallery/7.webp";
import g8 from "./Gallery/8.webp";
import g9 from "./Gallery/9.webp";
import g10 from "./Gallery/10.jpg";
import g11 from "./Gallery/11.jpg";
import g12 from "./Gallery/12.jpg";
import g13 from "./Gallery/13.jpg";
import g14 from "./Gallery/14.jpeg";
import g15 from "./Gallery/15.jpeg";
import g16 from "./Gallery/16.jpeg";
import g17 from "./Gallery/17.jpeg";
import g18 from "./Gallery/18.jpeg";
import g19 from "./Gallery/19.webp";
import g20 from "./Gallery/20.webp";
import g21 from "./Gallery/21.webp";


import montserrat from "./fonts/Montserrat-VariableFont_wght.ttf";

const assetsArr = [
  finalBg,
  aarohanLogo,

  yuva,
  tanvi,
  aarnav,
  prisha,
  adarsh,
  trishaa,

  quote,
  montserrat,
  aarohan2027,

  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,

  trophy,
  bulb,
  upGraph,
  threePeople,
];

function App() {
  const [isPreLoading, setIsPreLoading] = useState(true);

  return isPreLoading ? (
    <Preloader
      assetsArr={assetsArr}
      onEnter={() => setIsPreLoading(false)}
    />
  ) : (
    <>
      <div className="landing-page">
        <Navbar />
        <Landing />
      </div>

      <Main />
    </>
  );
}

export default App;