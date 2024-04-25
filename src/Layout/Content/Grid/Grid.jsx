import React, { useState } from "react";
import "./Grid.css";
import Modal from "./Modal";
import { serviceData } from "/src/data.js";


const Grid = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = (serviceInfo) => {
    setSelectedService(serviceInfo);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="grid-content">
      {serviceData.map((serviceData, index) => (
        <div
          className={`column ${serviceData.title === "Диагностика" ? "hide-mobile" : ""}`}
          key={index}
          onClick={() => handleOpenModal(serviceData)}
        >
          <div className="icon_cover">
            <img src={serviceData.image} alt="teeth_logo" />
          </div>
          <h4>{serviceData.title}</h4>
          {/* <p>Цена: ${serviceData.price}</p>  */}
          <a href="#">Подробнее</a>
        </div>
      ))}

      {isOpenModal && selectedService && (
        <Modal
        serviceInfo={selectedService}
        onClose={handleCloseModal}
      >
        <p>Цена: ${parseInt(selectedService.price)}</p>
      </Modal>
      )}
    </div>
  );
};

export default Grid;
