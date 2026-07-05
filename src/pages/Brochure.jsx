import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Sample.css";
import "../Styles/Brochure.css";
import Preloader from "./Preloader";

const assetsArr = [
  "/src/images/Aarohan2027Poster.png",
];

export default function Brochure() {
  const [isPreLoading, setIsPreLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Brochure");

  const documents = {
    Brochure: {
      title: "Brochure",
      file: "PDFs/Brochure2026-27.pdf",
      type: "pdf",
      heading:"Brochure"
    },
    Poster: {
      title: "Poster",
      file: "PDFs/Aarohan2027Poster.png",
      type: "image",
      heading:"Poster"
    },
  };

  const tabs = Object.keys(documents);

  return (
    isPreLoading ? (
      <Preloader
        onEnter={() => setIsPreLoading(false)}
        assetsArr={assetsArr}
      />
    ) : (
      <>
        <Navbar />

        <div
          className="page"
          style={{ paddingTop: "5rem" }}
        >
          <div
            className="heading"
            style={{
              width: "100%",
              textAlign: "center",
              paddingTop: "0px",
              color: "white",
            }}
          >
            {documents[selectedTab].heading}
          </div>

          <div
            className="tabs"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              margin: "20px 0",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`tab-btn ${
                  selectedTab === tab ? "active" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pdf">
            {documents[selectedTab].type === "pdf" ? (
              <>
                <iframe
                  src={`${documents[selectedTab].file}#toolbar=0&navpanes=0&scrollbar=0`}
                  width="100%"
                  height="600px"
                  title="Brochure PDF"
                />

                <a
                  href={documents[selectedTab].file}
                  download="Brochure.pdf"
                >
                  <button className="download">
                    DOWNLOAD
                  </button>
                </a>
              </>
            ) : (
              <>
                <img
                  src={documents[selectedTab].file}
                  alt="Aarohan Poster"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    display: "block",
                    margin: "0 auto",
                }}
                />

                <a
                  href={documents[selectedTab].file}
                  download="Aarohan2027Poster.png"
                >
                  <button className="download">
                    DOWNLOAD
                  </button>
                </a>
              </>
            )}
          </div>

          <Footer />
        </div>
      </>
    )
  );
}