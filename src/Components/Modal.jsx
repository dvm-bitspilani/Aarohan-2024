import React, { useState } from "react";
import "../Styles/Modal.css"

export default function Modal(props) {

    return (
        <div className={`modal ${props.showModal ? "show-modal" : "hide-modal"}`}>
            <div className="modal-content">
                <p>{props.message}</p>
                <button onClick={props.handleCloseModal}>CLOSE</button>
            </div>
        </div>
    )
}