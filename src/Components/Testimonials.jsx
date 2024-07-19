import React from "react";
import BgPath from "../images/Path2.png"
import Quote from "../images/quote.png"
import "../Styles/testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { useRef } from "react";


export default function Testimonials() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    // console.log(window.innerWidth)


    return (
        <>
            <div>
                <div className="heading" style={{ width: "100%", textAlign: "center" }}>Testimonials</div>
                <Swiper
                    className="swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards]}
                    spaceBetween={50}
                    slidesPerView={1}
                    keyboard={true}
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    navigation=
                    {window.innerWidth > 900 ? true : false}

                    pagination={true}
                >
                    {/* <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">It's a great opportunity and you get to learn and experience various new, innovative things. The team challenges were fun and you learn how to think on the spot and coordinate with brilliant minds that you haven't met before from around the country. The talks were inspiring as well since you get to hear ingenious people talk about their experiences and ask them questions. I felt really privileged and excited to attend the second round.</div>
                                <div className="breaker"></div>
                                <div className="text5">Shreya Bhoi, R. N Podar School, Santacruz (West), Mumbai (Winner Aarohan 2022)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">You should definitely participate in this exam. It cannot even be called an exam. It's more like an experience which everyone should experience. It's really fulfilling and enriching experience and you will definitely enjoy every part of it. </div>
                                <div className="breaker"></div>
                                <div className="text5">Kamya Singh, Smt. Sulochanadevi Singnaia School (Winner, Aarohan 2022) </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">Aarohan is beneficial and identifies the finest of the minds among the participants through its comprehensive, IQ & logical reasoning-based tests and events, similar to NTSE. </div>
                                <div className="breaker"></div>
                                <div className="text5">Akshita Tejwani (Winner Round-2 Aarohan 2022) </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">I would like to suggest all my friends and schoolmates to participate in Aarohan because I have great experience in level 1 and level 2 about science learning on application based criteria It was very interesting , brain challenging and learning experience. It was great fun to join with all Admins. I also like to participate in future till my last attempt as I am in grade 9 now. Thank you so much all the Admins for such a wonderful event for us. </div>
                                <div className="breaker"></div>
                                <div className="text5">Anish Gajanan Parlikar (Participant Aarohan 2022) </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">Overall it was an amazing experience. The programme aimed at promoting creative thinking through brilliant puzzles and activities which is far from the rote learning in school. All the guides were really knowledgeable and helpful. The programme also gave us an opportunity to have a tour of the campus that too during the Technical fest organized. </div>
                                <div className="breaker"></div>
                                <div className="text5">Pranshu Goel, Class 10th </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">Its an excellent opportunity to explore math and science beyond school level. Not having a subjective written paper pattern makes this exam interesting. The entire exam is fun learning and tests our IQ which makes the entire exposure worth experiencing. </div>
                                <div className="breaker"></div>
                                <div className="text5">Dherya Shreyashkumar Limbhetwala, Class 10th </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">The experience at BITS Pilani is truly surreal. The intricate planning of the Aarohan committee proved to be extraordinary. All types of intriguing events were hosted with the logic behind each one in mind. I got to learned various things throughout the entire round and was an unforgettable experience of learning and growing. This once in a lifetime experience is truly something very few get. Team Aarohan was helpful and supportive of everyone and explained everything perfectly to ensure every instruction was clear and concise. One thing remains, the experience of Aarohan Round 2 is very special and memorable. </div>
                                <div className="breaker"></div>
                                <div className="text5">Aarav, Class 9th </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">{`I participated in the Aarohan competition at BITS, Pilani in 2024. What impressed me most was the format - it was both challenging and unique, which made it a truly engaging experience. The competition also provided great exposure to BITS Pilani. The Apogee fest is also great with a multitude of events and lectures taking place. I even made some new friends and learned a lot from the experience.
Aarohan was a rewarding competition that pushed my limits and helped me grow as a participant.
Aarohan not only allowed me to showcase my abilities but also opened doors to new opportunities and connections. It was an unforgettable experience that I would highly recommend to anyone looking to challenge themselves, achieve recognition, and immerse themselves in a top-tier college festival environment.
`} </div>
                                <div className="breaker"></div>
                                <div className="text5">Amogh Achyut Hirve, Class 10th </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">The second round was series of events like murder mystery, battleship, bidding wars, a genetic game, etc. We got to meet Mohit Chauhan, saw a rocket launch and had a QnA session with the rocket builders. We also had lots of fun in the Annual BITS PILANI fest going on at the time. The Bhaiyas and Didis were awesome too! Totally worth giving the exam! Good luck! </div>
                                <div className="breaker"></div>
                                <div className="text5">Nilay, Class 11th </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testi-container">
                            <div className="testi-content">
                                <div className="quote">
                                    <img src={Quote} alt="" />
                                </div>
                                <div className="text5">It was an incredible experience. Team Aarohan creates such creative and innovative challenges based on real world application of sciences. Its not like any other exam and I would encourage everyone to give it a try. I feel very fortunate to have been able to attend the second round and APOGEE 2024, and interact with such great people from all across India. </div>
                                <div className="breaker"></div>
                                <div className="text5">Abhiraj Pharate, Class 11th </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}