import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import "../Styles/Sample.css";
import { Link } from "react-router-dom";
import BackgroundImg from "../images/bg.png";
import Footer from "../Components/Footer";
import Preloader from "./Preloader";
import FinalBg from "../images/final_bg.png"
import '../Styles/Brochure.css'


const Brochure = () =>{
const [numPages, setNumPages] = useState(0);
 return(
 <>
<Navbar />
<div className="Brochure"  > 
<h1 >Brochure</h1>
</div>

 <div className="pdf-wrapper">
  <Document
    file="/Aarohan_SQP_9th.pdf"
    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
  >
    {Array.from({ length: numPages }, (_, i) => (
      <Page
        key={i}
        pageNumber={i + 1}
        
      />
    ))}
  </Document>
</div>
<div className='brochure_button'>
    <a  href="./Aarohan_SQP_9th.pdf" download="Brochure.pdf">
        Download PDF
    </a>
   </div>
<Footer />
    
    </>
 )
}
export default Brochure