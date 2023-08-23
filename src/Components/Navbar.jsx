import React from "react";
import ApogeeLogo from '../images/apogeeLogo.png'
import { Link } from "react-router-dom";

export default function Navbar({scrollToTarget}){
    return(
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                    <Link to={"/"} style={{textDecoration: "none"}}><img src={ApogeeLogo} alt="logo" /></Link>
                        </div>
                    <div>
                        <ul className="nav-list">
                        <Link to={"/"} style={{textDecoration: "none"}}><li>HOME</li></Link>
                            <a href="/#about" style={{textDecoration: "none"}}><li>ABOUT US</li></a>
                            <Link to={"/SamplePaper"} style={{textDecoration: "none"}}><li>SAMPLE PAPER</li></Link>
                            <li>RESULTS</li>
                            <Link to={"/FAQ"} style={{textDecoration: "none"}}><li>FAQ</li></Link>
                            <li>GALLERY</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}