import React, { useState } from "react";
import "./Grid.css"; // Assuming Grid.css styles your grid layout
import New_Modal from "./New_Modal";
import { serviceData } from "/src/data.js"; // Assuming data.js provides service information

const Grid = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (serviceInfo) => {
    setSelectedService(serviceInfo);
  };

  // Fix 1: Implement the onClose function with logic
  const onClose = () => {
    // Perform actions you want to do when the modal closes (e.g., reset state)
    setSelectedService(null); // Reset selected service on close
  };

  return (
    <div className="grid-content">
      {serviceData.map((serviceInfo, index) => (
        <div
          // data-modal-target="default-modal" 
          // data-modal-toggle="default-modal" 
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
        <New_Modal
          serviceInfo={selectedService}
          onClose={onClose} // Pass the implemented onClose function
        />
      )}
    </div>
  );
};

export default Grid;
