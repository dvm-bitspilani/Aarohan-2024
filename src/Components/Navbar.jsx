import React, { useState } from "react";
import ApogeeLogo from '../images/apogeeLogo.png'
import { Link } from "react-router-dom";

export default function Navbar({ scrollToTarget }) {
    const [isHamOpen, setIsHamOpen] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link to={"/"} style={{ textDecoration: "none" }}><img src={ApogeeLogo} alt="logo" /></Link>
                    </div>
                    <div>
                        <ul className="nav-list">
                            <Link to={"/"} style={{ textDecoration: "none" }}><li>HOME</li></Link>
                            <a href="/#about" style={{ textDecoration: "none" }}><li>ABOUT US</li></a>
                            <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}><li>SAMPLE PAPER</li></Link>
                            <li>RESULTS</li>
                            <Link to={"/FAQ"} style={{ textDecoration: "none" }}><li>FAQ</li></Link>
                            <li>GALLERY</li>
                        </ul>

                        <div class="row ham" >
                            <input type="checkbox" id="hamburger"/>
                                <label for="hamburger" class="hamburger">
                                    <span class="line"></span>
                                    <span class="line"></span>
                                    <span class="line"></span>
                                </label>
                        </div>

                        {/* <div className="ham-menu">
                        <ul className="ham-list">
                            <Link to={"/"} style={{ textDecoration: "none" }}><li>HOME</li></Link>
                            <a href="/#about" style={{ textDecoration: "none" }}><li>ABOUT US</li></a>
                            <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}><li>SAMPLE PAPER</li></Link>
                            <li>RESULTS</li>
                            <Link to={"/FAQ"} style={{ textDecoration: "none" }}><li>FAQ</li></Link>
                            <li>GALLERY</li>
                        </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}