import React, { useState } from "react";
import "./Grid.css";
import Modal_Grid from "./Modal_Grid";
import { serviceData } from "/src/data.js";

const Grid = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (serviceInfo) => {
    setSelectedService(serviceInfo);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div className="grid-content">
      {serviceData.map((serviceInfo, index) => (
        <div
          className="column block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          key={index}
          onClick={() => handleOpenModal(serviceInfo)}
        >
          <div className="icon_cover">
            <img src={serviceInfo.image} alt="teeth_logo" />
          </div>
          <h4 className="mt-2">{serviceInfo.title}</h4>
        </div>
      ))}

      {selectedService && (
        <Modal_Grid
          serviceInfo={selectedService}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Grid;
