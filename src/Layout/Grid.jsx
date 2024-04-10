import React from "react";
import "./Css/Grid.css";

// Импортируем изображения в массив
import Opinion from './grid_icons/Opinion.png';
import Profilactic from './grid_icons/Profilactic.png';
import Healing from './grid_icons/Healing.png';
import Parodontology from './grid_icons/Parodontology.png';
import Implant from './grid_icons/Implant.png';
import Kids from './grid_icons/Kids.png';
import Diagnosis from './grid_icons/Diagnosis.png';
import Light from './grid_icons/Light.png';
import Remove from './grid_icons/Remove.png';

const icons = [
  { image: Opinion, title: 'Экспертное мнение врача' },
  { image: Profilactic, title: 'Профилактика' },
  { image: Healing, title: 'Лечение зубов' },
  { image: Parodontology, title: 'Пародонтология' },
  { image: Implant, title: 'Имплантация зубов' },
  { image: Kids, title: 'Детская стоматология' },
  { image: Diagnosis, title: 'Диагностика' },
  { image: Light, title: 'Осветление' },
  { image: Remove, title: 'Удаление зуба' }
];

const Grid = () => {
  return (
    <div className="grid-content">
      {icons.map((icon, index) => (

        <div className={`column ${icon.title === 
          'Пародонтология' ? 'hide-mobile' : ''}`} key={index}>

          <div className="icon_cover">
            {/* Используем деструктуризацию для получения image и title */}
            <img src={icon.image} alt="teeth_logo" />
          </div>
          
          <h4 style={{ marginTop: '5px' }}>{icon.title}</h4>

          <a href="">Подробнее</a>
        </div>
      ))}
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
