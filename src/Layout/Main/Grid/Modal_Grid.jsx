import React, { useState } from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal_Grid = ({ serviceInfo, onClose }) => {
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [position, setPosition] = useState({ top: "auto", left: "auto" });
  const [question, setQuestion] = useState(
    `Вы действительно хотите купить услугу ${serviceInfo.title} ?`
  );
  const [imageSrc, setImageSrc] = useState(serviceInfo.image); // Placeholder for the first image

  const handleBuyClick = () => {
    setSecondModalOpen(true);
  };

  const handleYesClick = () => {
    setQuestion("я в этом не уверен");
    setImageSrc("path/to/second-image.jpg"); // Placeholder for the second image
    const newTop = Math.random() * 80 + 10; // Рандомное значение между 10% и 90%
    const newLeft = Math.random() * 80 + 10; // Рандомное значение между 10% и 90%
    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const handleMouseEnter = () => {
    const newTop = Math.random() * 80 + 10; // Рандомное значение между 10% и 90%
    const newLeft = Math.random() * 80 + 10; // Рандомное значение между 10% и 90%
    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const handleNoClick = () => {
    setSecondModalOpen(false);
  };

  return (
    <>
      <Modal
        open={!!serviceInfo}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-lg w-80 sm:w-full relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-gray-400"
            >
              <CloseIcon />
            </button>
            <h2 id="modal-modal-title" className="text-2xl mb-4">
              {serviceInfo.title}
            </h2>
            <div className="flex justify-center items-center mb-4">
              <img
                src={serviceInfo.image}
                alt="Service"
                className="object-cover w-1/2 h-auto rounded-lg"
              />
            </div>
            <p id="modal-modal-description" className="mb-4 text-lg">
              {serviceInfo.description}
            </p>
            <p className="text-lg font-bold mb-4 text-center text-gray-200">
              Цена: <span className="text-green-400">${serviceInfo.price}</span>
            </p>
            <div className="flex justify-center space-x-4 relative">
              <button
                onClick={handleBuyClick}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Купить
              </button>
              <button
                onClick={onClose}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Назад
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={isSecondModalOpen}
        onClose={handleNoClick}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-lg w-80 sm:w-full relative">
            <h2
              id="confirmation-modal-title"
              className="text-2xl mb-4 text-center"
            >
              {question}
            </h2>
            <div className="flex justify-center items-center mb-4">
              <img
                src={imageSrc}
                alt="Confirmation"
                className="object-cover w-1/2 h-auto rounded-lg mb-40"
              />
            </div>
            <div className="absolute bottom-10 right-10 flex space-x-4">
              <button
                onClick={handleYesClick}
                onMouseEnter={handleMouseEnter}
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300"
                style={position}
              >
                Да
              </button>
              <button
                onClick={handleNoClick}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Modal_Grid;
