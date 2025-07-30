import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import SamplePDF from '/public/document.pdf'
import "../Styles/Sample.css"
import { Link } from "react-router-dom";
import BackgroundImg from "../images/bg.png"
import Footer from "../Components/Footer";


export default function Sample() {
        const [selectedGrade, setSelectedGrade] = useState("Grade 9");
        const documents = {
    "Grade 9": {
      title: "Grade 9 Sample",
      file: "/grades/Aarohan SQP 9th.pdf",
    },
    "Grade 10": {
      title: "Grade 10 Sample",
      file: "/grades/Aarohan SQP 10th.pdf",
    },
    "Grade 11": {
      title: "Grade 11 Sample",
      file: "/grades/Aarohan SQP 11th.pdf",
    },
    "Grade 12": {
      title: "Grade 12 Sample",
      file: "/grades/Aarohan SQP 12th.pdf",
    },
  };
    const grades = Object.keys(documents);
        return (
                <>
                        <Navbar />
                        <div className="page" style={{ backgroundImage: `url(${BackgroundImg})`, paddingTop: "0px" }}>
                                <div className="heading" style={{ width: "100%", textAlign: "center", paddingTop: "0px" }}>Sample Paper</div>
                                <div className="tabs" style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`tab-btn ${selectedGrade === grade ? "active" : ""}`}
            >
              {grade}
            </button>
          ))}
        </div>
                                <div className="pdf">
                                        {/* <iframe src="https://drive.google.com/file/d/1epMPX3r90rrt6Sa0TEsWfDEG8XO5WCz4/preview" allow="autoplay"></iframe> */}
                                        {/* <a href="https://drive.google.com/u/0/uc?id=1epMPX3r90rrt6Sa0TEsWfDEG8XO5WCz4&export=download"><button className="download">DOWNLOAD</button></a> */}
                                           {/* Google Doc iframe */}
                    <iframe
                        src={`${documents[selectedGrade].file}#toolbar=0&navpanes=0&scrollbar=0`}
                        width="100%"
                        height="600px"
                        allow="autoplay"
                        title={`${selectedGrade} PDF`}

                    ></iframe>

                      {/* dowmload but docs */}
                      <a href={documents[selectedGrade].file}>
                        <button className="download">DOWNLOAD </button>
                    </a>
                                </div>
                                <Footer />
                        </div>

                </>
        );
}