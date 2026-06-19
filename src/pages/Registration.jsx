import React, { useEffect, useState } from "react";
import "../Styles/Registration.css"
import Navbar from "../Components/Navbar";
import 'react-tabs/style/react-tabs.css';
import Form1 from "../Components/Form1";
import BackgroundImg from "../images/bg.png"
import Form2 from "../Components/Form2";
import Footer from "../Components/Footer";
import Preloader from "./Preloader";
import Modal from "../Components/Modal";

const assetsArr = [
    "/src/images/bg.png",
    "/src/images/ApogeeLogo2026.svg",
];

export default function Registration() {

    const [showModal, setShowModal] = useState(true);

    const [isPreLoading, setIsPreLoading] = useState(true);

    const [isStudentTab, setIsStudentTab] = useState(true)

    const handleStudentClick = () => {
        setIsStudentTab(true)
    }

    const handleSchoolClick = () => {
        setIsStudentTab(false)
    }

    return (
        isPreLoading ? <Preloader onEnter={() => setIsPreLoading(false)} assetsArr={assetsArr} /> :
        <>
            <Modal 
                showModal={showModal}
                title="Important Notice: Third and Final Examination Attempt"
                message={"Please be informed that a third and final examination attempt has been scheduled for 23rd November 2025. This opportunity is available exclusively for students who have not yet appeared for the examination. Registration Deadline: 20th November 2025."} 
                handleCloseModal={() => setShowModal(false)}
            />
            <Navbar />
            <div className="page" >
                <div className="heading" style={{ width: "100%", textAlign: "center", paddingTop: "0px" }}>Registration Form</div>

                <div className="tabs-container">
                    <div className={`tab ${isStudentTab && 'active2'}`} onClick={handleStudentClick}>Register as a Student</div>
                    <div className={`tab ${!isStudentTab && 'active2'}`} onClick={handleSchoolClick}>Register as a School</div>
                </div>
                <div className="forms">
                    <div className={`${!isStudentTab && 'invisible'}`}><Form1 /></div>
                    <div className={`${isStudentTab && 'invisible'}`}><Form2 /></div>
                </div>
                <Footer />
            </div>

        </>
    )
}
