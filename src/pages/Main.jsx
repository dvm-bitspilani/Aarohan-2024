import React from "react";
import RoadImg from "../images/road.png"
import BackgroundImg from "../images/bg.png"
import Ellipse from "../images/ellipse2.png"
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ"
import Contact from "../Components/Contact";

export default function Main() {
    return (
        <>
            <div className="main"
                style={{ backgroundImage: `url(${BackgroundImg})` }}
            >
                <div className="para">
                    <img src={Ellipse} className="ellipse3"/>
                    <div className="heading">ABOUT US</div>
                    <div className="text">Aarohan is a national-level olympiad crafted and conducted by the students of BITS Pilani, which aims to inculcate scientific temperament in the minds of the young generation. The examination is conducted for the classes IX, X, XI and XlIth. It is conducted in two rounds. With this, we are trying to revive the lost essence of real education, which involves questioning the very fundamentals of any phenomenon. Aarohan has been growing exponentially ever since its inception in 2012. What started as a humble attempt to rekindle curiosity is now a nationwide event. We also made a mark on the international stage with participation from Abu Dhabi and Germany.</div>
                </div>
                <div className="para">
                    <div className="heading">How Aarohan is Unique</div>
                    <div className="text">When you register for Aarohan you register for an experience that strives more on teaching than testing. Apart from the main exam we offer a chance to interact with personalities ,each speaking in detail about a different horizon.</div>
                </div>
                <div className="process">
                <img src={Ellipse} className="ellipse4"/>
                    <div className="heading">The Examination Process</div>
                    <div className="cards-container">
                        <div className="card 1">
                            <h1>Round 1</h1>
                            <p>Round one comprises a computer-based exam based on a single theme based on scientific phenomena. The paper would be multiple choice type, being 2 hours long. There are no prerequisites required to attempt the paper as the syllabus would be the same as the syllabus for the student's respective class, and it would be purely application based. The winners of round 1 are then invited to BITS Pilani to be a part of Round 2.</p>
                        </div>
                        <div className="card 2">
                            <h1>Round 2</h1>
                            <p>Round 2 is conducted during APOGEE. Team Aarohan conducts exclusive events for the students selected for round 2. Aarohan has seen a few events like Murder Mystery, Anti Chess, Parliamentary Mafia, Escape Room, Cryptic Wordhunt and many more. Round 2 participants get to meet the distinguished personalities who visit the campus during APOGEE, like the honourable Dr A.P.J Abdul Kalam, Prof. H C Verma, Dr. Walter Lewin, Jimmy Wales, Jefferey Archer and many more.</p>
                        </div>
                    </div>
                </div>
                <div className="road-to">
                    <div className="heading">Road to Aarohan</div>
                    <div className="road-to-container">
                        <div className="left">
                            <p className="text1">“The doors closed to plain sight can only be opened by the dimensions of knowledge.”</p>
                            <p className="text1"
                                style={{color: "white"}}
                            >The first student run Indian series aims to provide its participants an enriching experience in the form of workshops and seminars apart from the examination.
                                The motivation behind this is to not limit the learning experience just with a time bound test rather take it to actual experience. You get to attend sessions on topics like career building, soft skills development, competitive preparation from the speakers you daily watch and admire. As a part of Road to Aarohan you will also get a chance to submit your project in the research exhibition conducted after aarohan round 1.</p>
                        </div>
                        <div className="right">
                            <img src={RoadImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="ellipse2">
                    <img src={Ellipse} />
                </div>

                <Testimonials/>
                <FAQ/>
                <Contact/>
            </div>
        </>
    )
}