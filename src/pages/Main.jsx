import React, { useState } from "react";
import RoadImg from "../images/road.png"
import BackgroundImg from "../images/bg.png"
import Ellipse from "../images/ellipse2.png"
import Contact from "../Components/Contact";
import "../Styles/global.css"
import Testimonials from "../Components/Testimonials"

export default function Main() {

    const Round1 = "Round one is centered around a single theme based on scientific phenomena. The assessment would be a two hour long, multiple-choice paper. What sets this apart is that there are no prerequisites to appear for the paper as it is designed in a way that students grasp intriguing concepts and answer questions based on knowledge they have already acquired in the school curriculum. The winners of round one are then invited to BITS Pilani to be a part of Round two."


    const Round2 = "Round two is conducted during APOGEE, the technical fest of BITS Pilani. Team Aarohan conducts exclusive events for the students selected for round two. Aarohan has seen a few events like Murder Mystery, Parliamentary Mafia, Escape Room, Extinction Pulse, Cryptic Wordhunt, Missing Flight - Quest for the treasure and many more. Apart from this, the participants also get to meet the distinguished personalities who visit the campus during APOGEE, like the honourable Dr A.P.J Abdul Kalam, Prof. H C Verma, Dr.Walter Lewin, Jimmy Wales, Jefferey Archer and many more."

    const Round1Sliced = Round1.slice(0, 120)
    const Round2Sliced = Round2.slice(0, 120)

    const [readMore1, setReadMore1] = useState(false)

    const [readMore2, setReadMore2] = useState(false)

    const handleReadMore1 = () => {
        setReadMore1(!readMore1)
    }

    const handleReadMore2 = () => {
        setReadMore2(!readMore2)
    }

    return (
        <>
            <div className="main"
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            >
                <div className="para">
                    <img src={Ellipse} className="ellipse3" />
                    <div className="heading" id="about">ABOUT US</div>
                    <div className="text">Aarohan is a national-level olympiad organized by the students of BITS Pilani to inspire scientific curiosity in young minds. We believe that intelligence, creativity and problem-solving ability are associated with inquisitiveness. Our aim is to foster critical analysis skills and encourage their natural curiosity through this endeavor.  Aarohan has grown rapidly since 2012. What started off as a small idea has now blossomed into a big event across the nation. We have made an impact internationally with participation from Abu Dhabi and Germany.
                    <br/><br/>
                    Apart from the primary examination, we also provide opportunities to engage with inspiring personalities who share their insights on a range of subjects, via both physical gatherings and online events.Register for Aarohan and embrace an enriching learning experience!
                    </div>
                </div>

                <div className="road-to">
                    <div className="heading">Road to Aarohan</div>
                    <div className="road-to-container">
                        <div className="left">
                            <p className="text1">“The doors closed to plain sight can only be opened by the dimensions of knowledge.”</p>
                            <div className="right-mobile">
                                <img src={RoadImg} alt="" draggable="false"/>
                            </div>
                            <p className="text1"
                                style={{ color: "white" }}
                            >The first student run Indian series aims to provide its participants an enriching experience in the form of workshops and seminars apart from the examination.
                                The motivation behind this is to not limit the learning experience just with a time bound test rather take it to actual experience. You get to attend sessions on topics like career building, soft skills development, competitive preparation from the speakers you daily watch and admire. As a part of Road to Aarohan you will also get a chance to submit your project in the research exhibition conducted after aarohan round 1.</p>
                        </div>
                        <div className="right">
                            <img src={RoadImg} alt="" draggable="false"/>
                        </div>
                    </div>
                </div>

                <div className="process">
                    <img src={Ellipse} className="ellipse4" />
                    <div className="heading">The Examination Process</div>
                    <div className="cards-container">
                        <div className="card 1">
                            <h1>Round 1</h1>
                            <p className="card-desktop">{Round1}</p>
                            <span className="card-mobile">
                                <p>{readMore1 ? Round1 : Round1Sliced + '...'}</p>
                                <div className="read-more" onClick={handleReadMore1}>{readMore1 ? 'Show Less' : 'Read More'}</div>
                            </span>

                        </div>
                        <div className="card 2">
                            <h1>Round 2</h1>
                            <p className="card-desktop">{Round2}</p>
                            <span className="card-mobile">
                                <p>{readMore2 ? Round2 : Round2Sliced + '...'}</p>
                                <div className="read-more" onClick={handleReadMore2}>{readMore2 ? 'Show Less' : 'Read More'}</div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="para">
                    <img src={Ellipse} className="ellipse3" />
                    <div className="heading">About Apogee</div>
                    <div className="text">APOGEE, the international annual technical fest of BITS Pilani is one of the largest technological symposiums in the country. Truly justifying its dictionary meaning as "the highest point", Apogee signifies the zenith of science, engineering and path-breaking technology in a landscape of future visionaries, scientists, corporate bigwigs and inventors. APOGEE enjoys a footfall of over 8000 students from more than 100 colleges nationwide. Dr A.P.J. Abdul Kalam, Mugdha Saini, Danielle Feinberg, Simon Taufel, Stephen P Morse, Rakesh Sharma and many more distinguished personalities have been a part of APOGEE. Technical Events like Full Throttle Grand Prix, Indian Navy Demo, IDRL (Indian Drone Race League), International Coding League, Robots-at-War, and many more sum up to 80+ events which steer to challenge the intellect of the participants and pique the minds of the audience.
                    </div>
                </div>
                
                <div className="ellipse2">
                    <img src={Ellipse} />
                </div>

                <Testimonials />
                <Contact />
            </div>
        </>
    )
}