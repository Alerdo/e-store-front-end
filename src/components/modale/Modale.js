import React from 'react';
import './Modale.css';
import { FaTimes, FaCheck } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="header">
          <h2>Modal Title</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes className="close-icon" />
          </button>
        </div>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button className="footer-button" onClick={onClose}>
            <FaCheck className="close-icon" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
