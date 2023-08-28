import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundImg from "../images/bg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'

export default function Gallery() {
    return (
        <>
            <Navbar />
            <div className="page" style={{ backgroundImage: `url(${BackgroundImg})`, paddingTop: "0px" }}>
                <div className="heading" style={{ width: "100%", textAlign: "center", paddingTop: "1.5rem" }}>Our Gallery</div>
                <Swiper
                    className="swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards]}
                    spaceBetween={50}
                    keyboard={true}
                    Mousewheel={true}
                    autoplay={{ delay: 1500 }}
                    EffectCards={true}
                    loop={true}
                    navigation=
                    {window.innerWidth > 900 ? true : false}

                    pagination={true}
                slidesPerView= {2}
                slidesPerColumn= {2}
                slidesPerGroup = {2}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div >

        </>
    )
}