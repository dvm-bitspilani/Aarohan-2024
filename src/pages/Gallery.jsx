import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Preloader from "./Preloader";
import Footer from "../Components/Footer";
import "../Styles/Gallery.css";

import img1 from "../Gallery/1.webp";
import img2 from "../Gallery/2.webp";
import img3 from "../Gallery/3.webp";
import img4 from "../Gallery/4.webp";
import img5 from "../Gallery/5.webp";
import img6 from "../Gallery/6.webp";
import img7 from "../Gallery/7.webp";
import img8 from "../Gallery/8.webp";
import img9 from "../Gallery/9.webp";
import img10 from "../Gallery/10.jpg";
import img11 from "../Gallery/11.jpg";
import img12 from "../Gallery/12.jpg";
import img13 from "../Gallery/13.jpg";
import img14 from "../Gallery/14.jpeg";
import img15 from "../Gallery/15.jpeg";
import img16 from "../Gallery/16.jpeg";
import img17 from "../Gallery/17.jpeg";
import img18 from "../Gallery/18.jpeg";
import img19 from "../Gallery/19.webp";
import img20 from "../Gallery/20.webp";
import img21 from "../Gallery/21.webp";


const col1Images = [img1, img2, img3, img4, img5];
const col2Images = [img6, img7, img8, img9, img10, ];
const col3Images = [img11,img12, img13, img14, img15, img16];
const col4Images = [img17, img18, img19, img20, img21];

const row1Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
const row2Images = [img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];



export default function Gallery() {
  
 return (
    <>

      <div className="page" >
        <div
          className="gallery-heading"
          style={{ width: "100%", textAlign: "center", paddingTop: "1.5rem" , color: 'white'}}
        >
          <h2>GALLERY</h2>
        </div>


        <div className="gallery-grid">
          <div className="gallery-col">
            <div className="gallery-col-track scroll-up">
              {[...col1Images, ...col1Images].map((img, i) => (
                <div className="gallery-card" key={i}>
                  <img src={img} className="gallery-img" alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-col">
            <div className="gallery-col-track scroll-down">
              {[...col2Images, ...col2Images].map((img, i) => (
                <div className="gallery-card" key={i}>
                  <img src={img} className="gallery-img" />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-col">
            <div className="gallery-col-track scroll-up">
              {[...col3Images, ...col3Images].map((img, i) => (
                <div className="gallery-card" key={i}>
                  <img src={img} className="gallery-img"  />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-col">
            <div className="gallery-col-track scroll-down">
              {[...col4Images, ...col4Images].map((img, i) => (
                <div className="gallery-card" key={i}>
                  <img src={img} className="gallery-img"  />
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="gallery-grid-mobile">
          <div className="gallery-row">
            <div className="gallery-row-track scroll-left">
              {[...row1Images, ...row1Images].map((img, i) => (
                <div className="gallery-card-h" key={i}>
                  <img src={img} className="gallery-img"  />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-row">
            <div className="gallery-row-track scroll-right">
              {[...row2Images, ...row2Images].map((img, i) => (
                <div className="gallery-card-h" key={i}>
                  <img src={img} className="gallery-img"  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}