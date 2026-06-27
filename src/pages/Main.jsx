import React, { useState } from "react";
import RoadImg from "../images/road.png";
import BackgroundImg from "../images/bg.png";
import Ellipse from "../images/ellipse2.png";
import Contact from "../Components/Contact";
import "../Styles/global.css";
import Testimonials1 from "../Components/Testimonials1";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import RoadToAarohan from "../Components/RoadToAarohan";
import Rounds from "../Components/Rounds";
import AboutApogee from "../Components/AboutApogee";
import Contacts from "../Components/Contact1";
import Query from "../Components/Query";
import Gallery from "./Gallery";

export default function Main() {
  const Round1 =
    "Round one is centered around a single theme based on scientific phenomena. The assessment would be a two hour long, multiple-choice paper. What sets this apart is that there are no prerequisites to appear for the paper as it is designed in a way that students grasp intriguing concepts and answer questions based on knowledge they have already acquired in the school curriculum. The winners of round one are then invited to BITS Pilani to be a part of Round two.";

  const Round2 =
    "Round two is conducted during APOGEE, the technical fest of BITS Pilani. Team Aarohan conducts exclusive events for the students selected for round two. Aarohan has seen a few events like Murder Mystery, Parliamentary Mafia, Escape Room, Extinction Pulse, Cryptic Wordhunt, Missing Flight - Quest for the treasure and many more. Apart from this, the participants also get to meet the distinguished personalities who visit the campus during APOGEE, like the honourable Dr A.P.J Abdul Kalam, Prof. H C Verma, Dr.Walter Lewin, Jimmy Wales, Jefferey Archer and many more.";

  const Round1Sliced = Round1.slice(0, 120);
  const Round2Sliced = Round2.slice(0, 120);

  const [readMore1, setReadMore1] = useState(false);

  const [readMore2, setReadMore2] = useState(false);

  const handleReadMore1 = () => {
    setReadMore1(!readMore1);
  };

  const handleReadMore2 = () => {
    setReadMore2(!readMore2);
  };

  return (
    <>
      <div
        className="main"
      
      >
        <AboutUs />

       <RoadToAarohan />

       <Rounds />

        <AboutApogee />

        <div className="ellipse2">
          <img src={Ellipse} />
        </div>

        <Testimonials1 />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
