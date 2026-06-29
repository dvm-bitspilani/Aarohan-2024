import Quote from "../images/quote.png";
import "../Styles/TestimonialCard.css";

export default function TestimonialCard({
    words,name,standard,className = ""}) {
    return (
        <section className={`testimonial-container ${className}`}>
            <div className="testimonial">
                <img src={Quote} alt="Quotation Mark" />
                <br />
                <p>{words}<br /><br /></p>
                <h3><br />{name}, Class {standard}<sup>th</sup></h3>
            </div>
        </section>
    );
}