import React from "react";
import BgPath from "../../public/images/Path2.png"
import Quote from "../../public/images/quote.svg"
import "../Styles/testimonials.css"

export default function Testimonials() {
    return (
        <>
            <div className="testi-page">
                <div className="heading" style={{ width: "100%", textAlign: "center" }}>Testimonials</div>
                <div className="testi-container">
                    <div className="col1">
                        <div className="quote-box">
                            <img src={Quote} alt="" />
                            <p className="text3 breaker">
                                It's a great opportunity and you get to learn and experience
                                various new, innovative things. The team challenges were fun and
                                you learn how to think on the spot and coordinate with brilliant
                                minds that you haven't met before from around the country. The
                                talks were inspiring as well since you get to hear ingenious
                                people talk about their experiences and ask them questions. I
                                felt really privileged and excited to attend the second round.
                            </p>
                            <p className="text3">
                                Shreya Bhoi, R. N Podar School, Santacruz (West), Mumbai (Winner
                                Aarohan 2022)
                            </p>
                        </div>
                    </div>
                    <div className="col2">
                    <div className="quote-box">
                            <img src={Quote} alt="" />
                            <p className="text3 breaker">

                                You should definitely participate in this exam. It cannot even
                                be called an exam. It's more like an experience which everyone
                                should experience. It's really fulfilling and enriching
                                experience and you will definitely enjoy every part of it.

                            </p>
                            <p className="text3">
                                Kamya Singh, Smt. Sulochanadevi Singnaia School (Winner,
                                Aarohan 2022)
                            </p>
                            <img src={Quote} alt="" />
                            <p className="text3 breaker">
                                Aarohan is beneficial and identifies the finest of the minds
                                among the participants through its comprehensive, IQ & logical
                                reasoning-based tests and events, similar to NTSE.
                            </p>
                            <p className="text3">
                                Akshita Tejwani (Winner Round-2 Aarohan 2022)
                            </p>
                        </div>
                    </div>
                    <div className="col3">
                    <div className="quote-box">
                            <img src={Quote} alt="" />
                            <p className="text3 breaker">
                                I would like to suggest all my friends and schoolmates to
                                participate in Aarohan because I have great experience in level
                                1 and level 2 about science learning on application based
                                criteria It was very interesting , brain challenging and
                                learning experience. It was great fun to join with all Admins. I
                                also like to participate in future till my last attempt as I am
                                in grade 9 now. Thank you so much all the Admins for such a
                                wonderful event for us.
                            </p>
                            <p className="text3">
                                Anish Gajanan Parlikar (Participant Aarohan 2022)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}