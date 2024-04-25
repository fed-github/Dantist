import React, { useState, useEffect } from "react";
import "./Modal.css";

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
    <div
      className={`fixed top-0 left-0 w-full h-full overflow-hidden bg-gray-500/75 z-10 flex justify-center items-center`}
      onClick={handleClose}
    >
      <div
        className={`absolute bg-white rounded-lg shadow-lg p-4 max-w-sm w-full`}
      >
        <h2 className={`text-blue-700 font-bold `}>{serviceInfo.title}</h2>
        <img
          src={serviceInfo.image}
          alt="service_icon"
          className={`w-24 h-24 mx-auto mt-10 mb-10`}
        />
        {showContent && (
          <p className={`text-gray-600 mb-4`}>{serviceInfo.description}</p>
        )}
        <p className={`text-gray-700 font-bold`}>Цена: ${serviceInfo.price}</p>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded`}
          onClick={handleClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <div className={`modal-container ${showContent ? "active" : ""}`}>

<div className="modal-content">

  <h2>{serviceInfo.title}</h2>
  <img src={serviceInfo.image} alt="service_icon" className="modal-image" />
  {showContent && <p>{serviceInfo.description}</p>}
  <p>Цена: ${serviceInfo.price}</p>
  <button onClick={handleClose}>Закрыть</button>

</div>

</div> */
}
