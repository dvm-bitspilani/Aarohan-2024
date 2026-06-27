import React from "react";
import AarohanLogo from "../images/aarohanLogo.png"
import { Link } from "react-router-dom";
import HeroSection from "../Components/Hero";
import "../Styles/Hero.css"

import challengeImage from "../images/trophy.png"
import exploreImage from "../images/bulb.png"
import innovateImage from "../images/upGraph.png"
import excelImage from "../images/3ppl.png"


export default function Landing() {
    

    return (
        <>
           <div className="registration-container">
            <div className="registration-div">
                <img src={AarohanLogo} className="aarohan-intro-img" alt="Aarohan Logo" />

                <p className="aarohan-intro">A premier STEM Olympiad for high school students to challenge, explore and excel in the disciplines that shape our future.</p>
                <br />
                <Link to="/Registration" >
                  <button  className="registration-link">REGISTER</button>
                </Link>
             </div>   
        </div>
        <section className="hero-div-container">
            <div className="hero-div">
                <HeroSection
                    imagePath={challengeImage}
                    heading="Challenge"
                    line="Test your knowledge with the best"
                    isLast={false} />
                <HeroSection
                    imagePath={exploreImage}
                    heading="Explore"
                    line="Discover new ideas and perspectives"
                    isLast={false} />
                <HeroSection
                    imagePath={innovateImage}
                    heading="Innovate"
                    line="Solve real-world problems and build the future"
                    isLast={false} />
                <HeroSection
                    imagePath={excelImage}
                    heading="Excel"
                    line="Achieve excellence in STEM disciplines"
                    isLast={true} />
            </div>
        </section>  
        </>
    )
}

