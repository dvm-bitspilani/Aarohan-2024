import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import AarohanLogo from "../images/Aarohan2027.png"

import "../Styles/Navbar.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }

    return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    };
}, [isMenuOpen]);

    const isHomeRoute = location.pathname === "/" || location.pathname === "/aarohan2027";

    useEffect(() => {
        if (isHomeRoute && location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            let clearStateTimeout;

            const timeoutId = setTimeout(() => {
                if (targetId === "top") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }
                
                clearStateTimeout = setTimeout(() => {
                    navigate("/", { replace: true, state: {} });
                }, 800);

            }, 300);

            return () => {
                clearTimeout(timeoutId);
                if (clearStateTimeout) clearTimeout(clearStateTimeout);
            };
        }
    }, [isHomeRoute, location, navigate]);

    const handleScrollToSection = (sectionId) => (e) => {
        e.preventDefault();
        closeMenu();

        if (isHomeRoute) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            navigate("/", { state: { scrollTo: sectionId } });
        }
    };

    const handleGoHome = (e) => {
        e.preventDefault();
        closeMenu();

        if (isHomeRoute) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: "top" } });
        }
    };

    return (
        <header className="global-header">
            <div className="logo-container">
                <Link to="/" onClick={handleGoHome}>
                    <img src={AarohanLogo} className="aarohan-logo" alt="Aarohan 2026 Logo" />
                </Link>
            </div>

            <div className={`hamburger-menu ${isMenuOpen ? "hidden" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <nav className={`main-nav ${isMenuOpen ? "nav-open" : ""}`}>
                <div className="close-menu" onClick={closeMenu}>
                    &times;
                </div>

                <ul className="main-ul">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            end
                            onClick={handleGoHome}>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#about-container"
                            className="section-link"
                            onClick={handleScrollToSection("about-container")}
                        >
                            ABOUT US
                        </a>
                    </li>
                    <li>
                        <a
                            href="#wissenova-rankings"
                            className="section-link"
                            onClick={handleScrollToSection("wissenova-rankings")}
                        >
                            WISSENOVA
                        </a>
                    </li>
                    <li>
                        <NavLink
                            to="/brochure"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            BROCHURE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/SamplePaper"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            SAMPLE PAPER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/AnswerKey"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            ANSWER KEY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/FAQs"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            FAQs
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
