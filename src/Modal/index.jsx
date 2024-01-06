import React from "react";
import ReactDOM from "react-dom";

function Modal ({ children }) {
    return ReactDOM.createPortal(
        <div className="modal-form">
            { children }
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }