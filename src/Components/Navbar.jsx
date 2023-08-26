import React, { useState, useEffect } from "react";
import ApogeeLogo from '../images/apogeeLogo.png'
import { Link } from "react-router-dom";
import "../Styles/Hamburger.css"

export default function Navbar({ scrollToTarget }) {
    const [isHamOpen, setIsHamOpen] = useState(false)

    const handleHamOpen = () => {
        setIsHamOpen(!isHamOpen)
    }

    useEffect(() => {
                isHamOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";
              }, [isHamOpen])

    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link to={"/"} style={{ textDecoration: "none" }}><img src={ApogeeLogo} alt="logo" draggable="false"/></Link>
                    </div>
                    <div>
                        <ul className="nav-list">
                            <Link to={"/"} style={{ textDecoration: "none" }}><li>HOME</li></Link>
                            <a href="/#about" style={{ textDecoration: "none" }}><li>ABOUT US</li></a>
                            <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}><li>SAMPLE PAPER</li></Link>
                            <li>RESULTS</li>
                            <Link to={"/FAQ"} style={{ textDecoration: "none" }}><li>FAQ</li></Link>
                            <Link to={"/Gallery"} style={{ textDecoration: "none"}}><li>GALLERY</li></Link>
                            
                        </ul>
                    </div>


                    <div className="row ham" >
                        <input type="checkbox" id="hamburger" checked={isHamOpen}/>
                        <label for="hamburger" class="hamburger" onClick={handleHamOpen}>
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </label>
                    </div>

                    <div className={`ham-menu ${isHamOpen && 'open'}`}>
                    <ul className="ham-list">
                            <Link to={"/"} style={{ textDecoration: "none" }}><li onClick={handleHamOpen}>HOME</li></Link>
                            <a href="/#about" style={{ textDecoration: "none" }}><li onClick={handleHamOpen}>ABOUT US</li></a>
                            <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}><li onClick={handleHamOpen}>SAMPLE PAPER</li></Link>
                            <li onClick={handleHamOpen}>RESULTS</li>
                            <Link to={"/FAQ"} style={{ textDecoration: "none" }}><li onClick={handleHamOpen}>FAQ</li></Link>
                            <li onClick={handleHamOpen}>GALLERY</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}