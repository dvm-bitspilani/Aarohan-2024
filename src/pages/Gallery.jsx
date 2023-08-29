import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundImg from "../images/bg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import "../Styles/Gallery.css"

import img1 from "../Gallery/1.jpg"
import img2 from "../Gallery/2.jpg"
import img3 from "../Gallery/3.jpg"
import img4 from "../Gallery/4.jpg"
import img5 from "../Gallery/5.jpg"
import img6 from "../Gallery/6.jpg"
import img7 from "../Gallery/7.jpg"
import img8 from "../Gallery/8.jpg"
import img9 from "../Gallery/9.jpg"
import img10 from "../Gallery/10.jpg"
import img11 from "../Gallery/11.jpg"
import img12 from "../Gallery/12.jpg"
import img13 from "../Gallery/13.jpg"

export default function Gallery() {

    return (
        <>
            <Navbar />
            <div className="page" style={{ backgroundImage: `url(${BackgroundImg})`, paddingTop: "0px" }}>
                <div className="heading" style={{ width: "100%", textAlign: "center", paddingTop: "1.5rem" }}>Our Gallery</div>
                <Swiper
                    className="gallery-swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards]}
                    spaceBetween={50}
                    keyboard={true}
                    Mousewheel={true}
                    autoplay={{ delay: 1500 }}
                    EffectCards={true}
                    loop={true}
                    navigation= {true}
                    pagination={true}
                    slidesPerView=
                    {window.innerWidth > 900 ? 2 : 1}
                    slidesPerGroup={2}
                >
                    <SwiperSlide>
                        <img src={img1} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img2} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img3} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img4} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img5} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img6} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img7} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img8} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img9} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img10} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img11} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img12} className="gallery-img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img13} className="gallery-img" />
                    </SwiperSlide>

                </Swiper>
            </div >

        </>
    )
}