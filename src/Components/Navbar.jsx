import React from "react";
import ApogeeLogo from '../images/apogeeLogo.png'

export default function Navbar({scrollToTarget}){
    return(
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo"><img src={ApogeeLogo} alt="logo" /></div>
                    <div>
                        <ul className="nav-list">
                            <li>HOME</li>
                            <li onClick={scrollToTarget}>ABOUT US</li>
                            <li>SAMPLE PAPER</li>
                            <li>RESULTS</li>
                            <li>FAQS</li>
                            <li>GALLERY</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}