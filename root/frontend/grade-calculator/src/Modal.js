import React from 'react';
import './style/styles.css';

function Modal({ isOpen, onClose, grade}) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Result Grade</h2>
                <p>Final Grade: {grade}</p>
            </div>
        </div>
    )
}

export default Modal;