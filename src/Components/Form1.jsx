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
                <label >Student Name</label>
                <input type="text" className="input-box" placeholder="Enter Name" />
                <label >Father (or Mother) Name</label>
                <input type="text" className="input-box" placeholder="Enter Father (or Mother) Name" />
                <label >School/Institute</label>
                <input type="text" className="input-box" placeholder="Enter School/Institute Name" />
                <label >Class: </label>

                <div className="class-radio">
                    <input type="radio" className="input-radio" name="class" value="9"
                        checked={selectedOption === "9"}
                        onChange={handleChange}
                        id="class9"
                    />
                    <label htmlFor="class9" onClick={handleChange} value="10">Class 9</label>


                    <input type="radio" className="input-radio" name="class" value="10"
                        id="class10"
                        checked={selectedOption === "10"}
                        onChange={handleChange}
                    />
                    <label htmlFor="class10" onClick={handleChange}>Class 10</label>


                    <input type="radio" className="input-radio" name="class" value="11"
                        checked={selectedOption === "11"}
                        onChange={handleChange}
                        id="class11"
                    />
                    <label htmlFor="class11" onClick={handleChange}>Class 11</label>


                    <input type="radio" className="input-radio" name="class" value="12"
                        checked={selectedOption === "12"}
                        onChange={handleChange}
                        id="class12"
                    />
                    <label htmlFor="class12">Class 12</label>
                </div>

                <div className="form-location">
                    <label className="form-state">
                        State
                        <select
                        ></select>
                    </label>

                    <label className="form-city">
                        City
                        <select  ></select>
                    </label>
                </div>

                <label htmlFor="email" >Email ID</label>
                <input type="text" className="input-box" placeholder="Enter Email ID" />

                <div className="submit-buttons">
                    <button className="form-cancel">CANCEL</button>
                    <button className="form-submit">SUBMIT</button>
                </div>

            </form>
        </>
    )
}