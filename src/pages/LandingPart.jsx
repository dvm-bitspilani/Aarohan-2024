import React from "react";
import AarohanLogo from "../images/aarohanLogo.png"
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
                    <div>
                        <Link to="/Registration">
                            <button>REGISTER</button>
                        </Link>
                    </div>
                </div>
                <div className="clocktower">
                    <div className="clocktower-container">
                    <img src={ClockTower} alt="" draggable="false" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1099 882" fill="none">
                        <path id="path" d="M142.703 758.473H2V808.355V880.408L142.703 880.586L345.314 880.842L391.947 880.901L706.317 881.298L748.125 881.351L954.757 881.612L1098.68 881.794V809.741V758.473H954.757V695.427V649.008H738.477V603.976H666.116L646.016 274.89L656.468 270.733V262.419L641.996 256.877V183.438H625.915V151.569H589.735L588.931 89.2159L596.971 87.1375L602.599 97.5297V66.3531L590.539 59.425L587.323 37.255C587.323 37.255 568.83 32.4053 562.398 26.8628C555.966 21.3203 550.338 4 550.338 4C550.338 4 544.852 20.3694 537.474 26.8628C530.095 33.3563 512.549 37.255 512.549 37.255L510.137 59.425L496.469 66.3531V97.5297L504.509 87.1375L510.137 89.2159V151.569H473.153V183.438H457.072V256.877L443.404 262.419V270.733L453.856 274.89L431.344 603.976H358.178V649.008H142.703V694.734V758.473Z" stroke="#1F95FC" strokeWidth="2.14306" />
                    </svg>
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