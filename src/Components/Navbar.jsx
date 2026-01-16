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
              <li>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/aarohan2025"
                  style={{ textDecoration: "none" }}
                  onClick={(e) => {
                    setTimeout(() => {
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}>
                  SAMPLE PAPER
                </Link>
              </li>
              <li>
                <Link to={"/AnswerKey"} style={{ textDecoration: "none" }}>
                  ANSWER KEY
                </Link>
              </li>
              <li>
                <Link to={"/FAQ"} style={{ textDecoration: "none" }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
                  GALLERY
                </Link>
              </li>
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
              <li onClick={handleHamOpen}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  HOME
                </Link>
              </li>
              <li onClick={handleHamOpen}>
                <Link
                  to={"/aarohan2025"}
                  onClick={(e) => {
                    setTimeout(() => {
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  style={{ textDecoration: "none" }}
                >
                  ABOUT US
                </Link>
              </li>
              <li onClick={handleHamOpen}>
                <Link to={"/SamplePaper"} style={{ textDecoration: "none" }}>
                  SAMPLE PAPER
                </Link>
              </li>
              <li onClick={handleHamOpen}>
                <Link to={"/AnswerKey"} style={{ textDecoration: "none" }}>
                  ANSWER KEY
                </Link>
              </li>
              <li onClick={handleHamOpen}>
                <Link to={"/FAQ"} style={{ textDecoration: "none" }}>
                  FAQ
                </Link>
              </li>
              <li onClick={handleHamOpen}>
                <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
                  GALLERY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
