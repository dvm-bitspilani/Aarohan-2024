import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import SamplePDF from '/public/document.pdf'
import "../Styles/Sample.css"
import { Link } from "react-router-dom";


export default function Sample() {


        return (
                <>
                        <Navbar />
                        <div className="page">
                                <div className="heading" style={{width: "100%", textAlign: "center", paddingTop: "0px"}}>Sample Paper</div>
                                <div className="pdf">
                                <iframe src="https://drive.google.com/file/d/1epMPX3r90rrt6Sa0TEsWfDEG8XO5WCz4/preview" allow="autoplay"></iframe>

                                <a href="https://drive.google.com/u/0/uc?id=1epMPX3r90rrt6Sa0TEsWfDEG8XO5WCz4&export=download"><button className="download">DOWNLOAD</button></a>
                                </div>
                        </div>

                </>
        );
}