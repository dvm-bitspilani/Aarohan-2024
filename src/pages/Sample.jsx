import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import SamplePDF from '/public/document.pdf'
import "../Styles/Sample.css"


export default function Sample() {


        return (
                <>
                        <Navbar />
                        <div className="page">
                                <div className="heading">Sample Paper</div>
                                <div className="PDF-viewer">
                                </div>
                        </div>

                </>
        );
}