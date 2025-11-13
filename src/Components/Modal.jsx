import React from "react";
import "../Styles/Modal.css"

export default function Modal({ showModal, message, handleCloseModal, title="" }) {
    return (
        <div className={`modal ${showModal ? "show-modal" : "hide-modal"}`}>
            <div className="modal-content">
                {
                    title && <h3>{title}</h3>
                }
                <p>{message}</p>
                <button onClick={handleCloseModal}>CLOSE</button>
            </div>
        </div>
    )
}
