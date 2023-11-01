import React from 'react';
import './Modale.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
