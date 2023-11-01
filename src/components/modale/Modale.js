import React from 'react';
import './Modale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <div className="header">
          <h2>Modal Title</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="close-icon" />
          </button>
        </div>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button className="footer-button" onClick={onClose}>
            <FontAwesomeIcon icon={faCheck} className="close-icon" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
