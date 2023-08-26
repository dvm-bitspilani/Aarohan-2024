import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundImg from "../images/bg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, Mousewheel, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'

export default function Gallery(){
    return(
        <>
            <Navbar/>
            <div className="page" style={{backgroundImage: `url(${BackgroundImg})`, paddingTop: "0px"}}>
                <div className="heading" style={{width: "100%", textAlign:"center", paddingTop:"1.5rem"}}>Our Gallery</div>
                
            </div>

        </>
    )
}