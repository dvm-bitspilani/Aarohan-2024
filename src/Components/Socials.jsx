import "../Styles/Socials.css";

export default function Socials() {
    async function copyMail() {
        try {
            await navigator.clipboard.writeText("aarohan@bits-apogee.org")
            alert("E-mail ID copied to clipboard!")
        } catch(err) {
            console.error("Failed to copy: ", err)
        }
    }

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

                    <div className="socials-sites gmail" onClick={copyMail}>
                        <i className="fas fa-envelope"></i>
                        <span>aarohan@bits-apogee.org</span>
                    </div>
                </div>
            </div>
        </section>
    );
}