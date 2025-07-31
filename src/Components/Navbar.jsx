import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApogeeLogo2026 from "../images/ApogeeLogo2026.svg";
import "../Styles/Hamburger.css";

export default function Navbar(props) {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const handleHamOpen = () => {
    setIsHamOpen(!isHamOpen);
  };

  useEffect(() => {
    isHamOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [isHamOpen]);

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={ApogeeLogo2026} alt="logo" draggable="false" />
            </Link>
          </div>
          <div>
            <ul className="nav-list">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <li>HOME</li>
              </Link>
              <a href="/aarohan2025/#about" style={{ textDecoration: "none" }}>
                <li>ABOUT US</li>
              </a>
              <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}>
                <li>SAMPLE PAPER</li>
              </Link>
              <Link to={"/FAQ"} style={{ textDecoration: "none" }}>
                <li>FAQ</li>
              </Link>
              <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
                <li>GALLERY</li>
              </Link>
            </ul>
          </div>

          <div className="row ham">
            <input type="checkbox" id="hamburger" checked={isHamOpen} />
            <label
              htmlFor="hamburger"
              className="hamburger"
              onClick={handleHamOpen}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </label>
          </div>

          <div className={`ham-menu ${isHamOpen && "open"}`}>
            <ul className="ham-list">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <li onClick={handleHamOpen}>HOME</li>
              </Link>
              <a href="/aarohan2025/#about" style={{ textDecoration: "none" }}>
                <li onClick={handleHamOpen}>ABOUT US</li>
              </a>
              <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}>
                <li onClick={handleHamOpen}>SAMPLE PAPER</li>
              </Link>
              <Link to={"/FAQ"} style={{ textDecoration: "none" }}>
                <li onClick={handleHamOpen}>FAQ</li>
              </Link>
              <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
                <li onClick={handleHamOpen}>GALLERY</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
