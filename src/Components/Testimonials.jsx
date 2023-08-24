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
    console.log(window.innerWidth)


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
                    Mousewheel={true}
                    autoplay={{ delay: 2000 }}
                    EffectCards={true}
                    loop={true}
                    navigation=
                        {window.innerWidth > 900 ? true : false}
                    
                    pagination={true}
                >
                    <SwiperSlide>
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
                                <div className="text5">It's a great opportunity and you get to learn and experience various new, innovative things. The team challenges were fun and you learn how to think on the spot and coordinate with brilliant minds that you haven't met before from around the country. The talks were inspiring as well since you get to hear ingenious people talk about their experiences and ask them questions. I felt really privileged and excited to attend the second round.</div>
                                <div className="breaker"></div>
                                <div className="text5">Shreya Bhoi, R. N Podar School, Santacruz (West), Mumbai (Winner Aarohan 2022)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}