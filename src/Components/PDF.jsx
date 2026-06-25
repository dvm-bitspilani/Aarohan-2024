import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PDF.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF = ({ pdfName }) => {
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    if (e.ctrlKey) { // Ctrl + Wheel (or trackpad pinch on many browsers)
      e.preventDefault();

      setScale((prev) =>
        Math.min(Math.max(prev + (e.deltaY > 0 ? -0.1 : 0.1), 0.5), 4)
      );
    }
  };

  return (
    <div
      className="pdf-wrapper"
      onWheel={handleWheel}
    >
      <Document
        file={`${import.meta.env.BASE_URL}${pdfName}`}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            scale={scale}
          />
        ))}
      </Document>
    </div>
  );
};

export default PDF;