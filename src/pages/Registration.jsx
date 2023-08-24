import React, { useEffect, useState } from "react";
import "../Styles/Registration.css"
import Navbar from "../Components/Navbar";
import 'react-tabs/style/react-tabs.css';
import Form1 from "../Components/Form1";
import BackgroundImg from "../images/bg.png"
import Form2 from "../Components/Form2";


export default function Registration() {

    const Student = document.getElementById('#student')
    const School = document.getElementById("#school")

    const [isStudentTab, setIsStudentTab] = useState(true)

    const handleStudentClick = () => {
        setIsStudentTab(true)
    }

    const handleSchoolClick = () => {
        setIsStudentTab(false)
    }

    return (
        <>
            <Navbar />
            <div className="page" style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <div className="heading" style={{ width: "100%", textAlign: "center", paddingTop: "0px" }}>Registration Form</div>
            
            <div className="tabs-container">
                <div className={`tab ${isStudentTab && 'active2'}`}  onClick={handleStudentClick}>Register as a Student</div>
                <div className={`tab ${!isStudentTab && 'active2'}`} onClick={handleSchoolClick}>Register as a School</div>
            </div>
            <div className="forms">
                <div className={`${!isStudentTab && 'invisible'}`}><Form1/></div>
                <div className={`${isStudentTab && 'invisible'}`}><Form2/></div>
            </div>
            </div>

        </>
    )
}