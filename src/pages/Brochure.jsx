import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Sample.css";
import "../Styles/Brochure.css";

export default function Brochure() {
  const brochureFile = "PDFs/Brochure2026-27.pdf";

  return (
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
          Brochure
        </div>

        <div className="pdf">
          <iframe
            src={`${brochureFile}#toolbar=0&navpanes=0&scrollbar=0`}
            width="100%"
            height="600px"
            title="Brochure PDF"
          ></iframe>

          <a href={brochureFile} download="Brochure.pdf">
            <button className="download">
              DOWNLOAD
            </button>
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}