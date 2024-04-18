import {React, useState} from "react";
import "./Grid.css";
import Modal from './Modal';

// Импортируем изображения в массив
import Opinion from '/src/icons/grid_icons/Opinion.png';
import Profilactic from '/src/icons/grid_icons/Profilactic.png';
import Healing from '/src/icons/grid_icons/Healing.png';
import Parodontology from '/src/icons/grid_icons/Parodontology.png';
import Implant from '/src/icons/grid_icons/Implant.png';
import Kids from '/src/icons/grid_icons/Kids.png';
// import Diagnosis from '/src/icons/grid_icons/Diagnosis.png';
import Light from '/src/icons/grid_icons/Light.png';
import Remove from '/src/icons/grid_icons/Remove.png';


const icons = [
  
  { image: Opinion, title: 'Экспертное мнение врача' },
  { image: Healing, title: 'Лечение зубов' },
  { image: Remove, title: 'Удаление зуба' },
  { image: Implant, title: 'Имплантация зубов' },
  { image: Light, title: 'Осветление' },
  { image: Parodontology, title: 'Пародонтология' },
  { image: Profilactic, title: 'Профилактика' },
  { image: Kids, title: 'Детская стоматология' },
  // { image: Diagnosis, title: 'Диагностика' },
 

];

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

      {icons.map((icon, index) => (

        <div className={`column ${icon.title === 
          'Диагностика' ? 'hide-mobile' : ''}`} key={index} onClick={() => handleOpenModal(icon)}>

          <div className="icon_cover">
            {/* Используем деструктуризацию для получения image и title */}
            <img src={icon.image} alt="teeth_logo" />
          </div>
          
          <h4 style={{ marginTop: '10px' }}>{icon.title}</h4>

          <a href="" >Подробнее</a>
          
        </div>

          ))}
        
        {isOpenModal && selectedService && (
          <Modal
            serviceInfo={selectedService}
            onClose={handleCloseModal}
          />
        )}
    </div>
  );
};

export default Grid;



// import React from "react";
// import "./Css/Grid.css";
// import Opinion from'./grid_icons/Opinion.png';
// import Profilactic from'./grid_icons/Profilactic.png';
// import Healing from'./grid_icons/Healing.png';
// import Parodontology from'./grid_icons/Parodontology.png';
// import Implant from'./grid_icons/Implant.png';
// import Kids from'./grid_icons/Kids.png';
// import Diagnosis from'./grid_icons/Diagnosis.png';
// import Light from'./grid_icons/Light.png';
// import Remove from'./grid_icons/Remove.png';

// const Grid = () => {
//   return (
//     <div className="grid-content">

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Opinion} alt="teeth_logo" />
//         </div>
//         <h4>Экспертное мнение врача</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Profilactic} alt="teeth_logo" />
//         </div>
//         <h4>Профилактика</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Healing} alt="teeth_logo" />
//         </div>
//         <h4>Лечение зубов</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Parodontology} alt="teeth_logo" />
//         </div>
//         <h4>Пародонтология</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Implant} alt="teeth_logo" />
//         </div>
//         <h4>Имплантация зубов</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Kids} alt="teeth_logo" />
//         </div>
//         <h4> Детская стоматология</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Diagnosis} alt="teeth_logo" />
//         </div>
//         <h4> Диагностика</h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Light} alt="teeth_logo" />
//         </div>
//         <h4> Осветление </h4>
//         <a href="">Подробнее</a>
//       </div>

//       <div className="column">
//         <div className="icon_cover">
//           <img src={Remove} alt="teeth_logo" />
//         </div>
//         <h4> Удаление зуба</h4>
//         <a href="">Подробнее</a>
//       </div>

//     </div>
//   );
// };

// export default Grid;
