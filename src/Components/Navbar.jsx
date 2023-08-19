import React from "react";
import ApogeeLogo from '../../public/images/apogeeLogo.png'

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo"><img src={ApogeeLogo} alt="logo" /></div>
                    <div>
                        <ul className="nav-list">
                            <li>HOME</li>
                            <li>ABOUT US</li>
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