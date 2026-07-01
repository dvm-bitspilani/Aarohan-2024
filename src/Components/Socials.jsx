import "../Styles/Socials.css";

export default function Socials() {
    return (
        <section className="socials-container">
            <div className="socials-box">
                <h2>Our Socials</h2>

                <div className="socials-links">
                    <a href="https://www.instagram.com/aarohan_bits.pilani/" target="_blank" rel="noopener noreferrer" className="socials-sites">
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                    </a>

                    <a href="https://www.facebook.com/aarohan.bits/" target="_blank" rel="noopener noreferrer" className="socials-sites">
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                    </a>

                    <a href="https://linkedin.com/company/aarohan-bits-pilani/" target="_blank" rel="noopener noreferrer" className="socials-sites">
                        <i className="fab fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>

                    <div className="socials-sites gmail">
                        <i className="fas fa-envelope"></i>
                        <span>aarohan@bits-apogee.org</span>
                    </div>
                </div>
            </div>
        </section>
    );
}