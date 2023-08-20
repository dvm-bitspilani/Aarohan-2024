import { useState, useRef, useEffect} from "react";
import React from "react";

export default function FAQbox(props) {
    const [isActive, setIsActive] = useState(false);

    // const handleCrossClick = () => {
    //     setIsActive(!isActive);
    //     setTimeout(() => {
    //         !isVisible ? setIsVisible(!isVisible) : "" 
    //     }, 400)
    //     setTimeout(() => {
    //         isVisible ? setIsVisible(!isVisible) : "" 
    //     }, 0)
    //   };

    const handleCrossClick = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <div className={`FAQbox ${isActive ? 'active' : ''}`} onClick={handleCrossClick} style={{
                // height: `${!isActive ? 35 : 100}` + 'px'
            }}
            >   
            <div className="FAQ-question">
                <div>{props.question}</div>
                <div className={`plusminus ${isActive ? 'active' : ''}`} onClick={handleCrossClick}></div>

            </div>
                {/* <div className={`plusminus ${isActive ? 'active' : ''}`} onClick={handleCrossClick}></div> */}
                {/* <div className="FAQ-question">{props.question}</div> */}
                <div className={ 'FAQ-answer ' + `${isActive ? 'FAQvisible' : 'FAQinvisible'}`}
                style={{
                    // height: `${!isActive ? 0 : 20}` + 'px'
                }}
                >{props.answer}</div>
            </div>
        </>
    )
}