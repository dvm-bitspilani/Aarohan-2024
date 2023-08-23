import React from "react";
import "../Styles/Form.css"
import { useState } from "react";

export default function Form1() {

    const [selectedOption, setSelectedOption] = useState('10')

    function handleChange(event) {
        setSelectedOption(event.target.value)
    }

    return (
        <>
            <form className="form">
                <label >School Name</label>
                <input type="text" className="input-box" placeholder="Enter School Name"/>
                <label >School POC Name</label>
                <input type="text" className="input-box" placeholder="Enter School POC name"/>

                <div className="form-location">
                    <label className="form-state">
                        State
                        <select
                            id="sts"
                        ></select>
                    </label>

                    <label className="form-city">
                        City
                        <select  ></select>
                    </label>
                </div>

                <label >Contact Number of In-Charge</label>
                <input type="text" className="input-box" placeholder="Enter Contact Number"/>

                <label >Email ID</label>
                <input type="text" className="input-box" placeholder="Enter Email ID"/>

                <label >Class-wise split up of no of students: </label>
                <div className="split-up">
                    <div className="class">
                        <label htmlFor="">Class 09</label>
                        <input type="number" className="input-box" placeholder="Enter Number"/>
                    </div>

                    <div className="class">
                        <label htmlFor="">Class 10</label>
                        <input type="number" className="input-box" placeholder="Enter Number"/>
                    </div>

                    <div className="class">
                        <label htmlFor="">Class 11</label>
                        <input type="number" className="input-box" placeholder="Enter Number"/>
                    </div>

                    <div className="class">
                        <label htmlFor="">Class 12</label>
                        <input type="number" className="input-box" placeholder="Enter Number"/>
                    </div>
                </div>

                <label >Total Amount to be paid</label>
                <input type="text" className="input-box" placeholder="Enter Total Amount to be paid"/>


                <div className="submit-buttons">
                    <button className="form-cancel">CANCEL</button>
                    <button className="form-submit">SUBMIT</button>
                </div>

            </form>
        </>
    )
}