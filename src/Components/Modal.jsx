import React from "react";
import "../Styles/Modal.css"

export default function Modal({ showModal, message, handleCloseModal }) {
    return (
        <div className={`modal ${showModal ? "show-modal" : "hide-modal"}`}>
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={handleCloseModal}>CLOSE</button>
            </div>
        </div>
    )
}