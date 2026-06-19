import React from "react";
import AarohanLogo from "../images/aarohanLogo.png"
// import SponsLogo from "../images/spons.png"
import ClockTower from "../images/clocktower.svg"
import Ellipse1 from "../images/ellipse1.png"
import Ellipse from "../images/ellipse2.png"
import Glow from "../images/glow.png"
import { useEffect, useRef } from 'react';
import { gsap, MotionPathPlugin } from 'gsap/all';
gsap.registerPlugin(MotionPathPlugin);
import { Link } from "react-router-dom";

export default function Landing() {
    const glowRef = useRef(null);


    useEffect(() => {
        const ball = glowRef.current;

        gsap.to(ball, {
            duration: 50,
            motionPath: {
                path: '#path',
                align: '#path',
                start: 1,
                end: 0,
                curviness: 1,
            },
            repeat: 1,
        });
    }, []);

    return (
        <>
            <div className="dummy">
                <div className="landing-text-container">
                    <img src={AarohanLogo} alt="logo" draggable="false" />
                    {/* <img src={SponsLogo} alt="logo" draggable="false" className="spons"/> */}
                    <div>
                        <Link to="/Registration">
                            <button>REGISTER</button>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="glow" ref={glowRef}>
                <img src={Glow} alt="" />
            </div>
            <div className="ellipse1">
                <img src={Ellipse1} />
            </div>
            <div className="ellipse2">
                <img src={Ellipse} />
            </div>

        </>
    )
}