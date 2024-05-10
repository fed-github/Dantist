import React, { useState } from "react";
import "./Grid.css";
import New_Modal from "./New_Modal";
import { serviceData } from "/src/data.js";

const Grid = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (serviceInfo) => {
    setSelectedService(serviceInfo);
  };


  return (
    <div className="grid-content">
      {serviceData.map((serviceData, index) => (
        <div
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className=" column     block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          
          key={index}
          onClick={() => handleOpenModal(serviceData)}
        >
          <div className="icon_cover">
            <img src={serviceData.image} alt="teeth_logo" />
          </div>
          <h4>{serviceData.title}</h4>
          {/* <p>Цена: ${serviceData.price}</p>  */}
        </div>
      ))}

      {selectedService && (
        <New_Modal
          serviceInfo={selectedService}

        ></New_Modal>
      )}
    </div>
  );
};

export default Grid;
