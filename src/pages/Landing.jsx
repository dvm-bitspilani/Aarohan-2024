import React from "react";
import AarohanLogo from "../../public/images/aarohanLogo.png"
import ClockTower from "../../public/images/clocktower.svg"
import Ellipse1 from "../../public/images/ellipse1.png"
import Ellipse from "../../public/images/ellipse2.png"

export default function Landing() {
    return (
        <>
        <div className="dummy"> 
            <div className="landing-text-container">
                <img src={AarohanLogo} alt="logo" />
                <div>
                    <button>REGISTER</button>
                </div>
            </div>
            <div className="clocktower">
                <img src={ClockTower} alt="" />
            </div>
            <div className="ellipse1">
                    <img src={Ellipse1}/>
            </div>
            <div className="ellipse2">
                    <img src={Ellipse}/>
            </div>
            </div>
        </>
    )
}