import { useState } from "react";
import Navbar from "../Components/Navbar";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import "../Styles/Sample.css";
import BackgroundImg from "../images/bg.png";
import Footer from "../Components/Footer";
import Preloader from "./Preloader";

const assetsArr = [
	"/src/images/bg.png",
	"/src/images/ApogeeLogo2026.svg",
]

export default function AnswerKey() {
	const [isPreLoading, setIsPreLoading] = useState(true);
	const [selectedGrade, setSelectedGrade] = useState("Grade 9");
	const documents = {
		"Grade 9": {
			title: "Grade 9 Sample",
			file: "/solutions/Aarohan 2026 Class 9 Solutions.pdf",
		},
		"Grade 10": {
			title: "Grade 10 Sample",
			file: "/solutions/Aarohan 2026 Class 10 Solutions.pdf",
		},
		"Grade 11": {
			title: "Grade 11 Sample",
			file: "/solutions/Aarohan 2026 Class 11 Solutions.pdf",
		},
		"Grade 12": {
			title: "Grade 12 Sample",
			file: "/solutions/Aarohan 2026 Class 12 Solutions.pdf",
		},
	};
	const grades = Object.keys(documents);
	return (
		isPreLoading ? <Preloader onEnter={() => setIsPreLoading(false)} assetsArr={assetsArr} /> :
		<>
			<Navbar />
			<div
				className="page"
				style={{  paddingTop: "5rem" }}
			>
				<div
					className="heading"
					style={{ width: "100%", textAlign: "center", paddingTop: "0px",color:"white" }}
				>
					Answer Key
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
