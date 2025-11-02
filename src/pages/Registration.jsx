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
                message={"Kindly note that students registering after 31st October—whether through schools or individually—will be eligible to appear only for the second attempt. The final date for registration is 5th November."} 
                handleCloseModal={() => setShowModal(false)}
            />
            <Navbar />
            <div className="page" style={{ backgroundImage: `url(${BackgroundImg})` }}>
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