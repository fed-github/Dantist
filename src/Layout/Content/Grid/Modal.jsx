import React, { useState, useEffect } from "react";
import './Modal.css'

const Modal = ({ serviceInfo, onClose }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (serviceInfo) {
      setShowContent(true);
    }
  }, [serviceInfo]);

  const handleClose = () => {
    setShowContent(false);
    onClose();
  };

  return (
    
    <div className={`modal-container ${showContent ? 'active' : ''}`}>
      <div className="modal-content ">
        <h2>{serviceInfo.title}</h2>
        {showContent && <p>{serviceInfo.description}</p>}
        <p>Цена: {serviceInfo.price}</p>
        <button
          onClick={handleClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
