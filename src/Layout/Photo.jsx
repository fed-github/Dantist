
import React from "react";
import Avatar from '../icons/negro.jpg';

function MainComponent({ photoUrl, name, address }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-[#31135E] to-[#220D48] text-white rounded-lg shadow-md max-w-[90%] mx-auto">
      <img
        src={Avatar}
        alt="Dentist portrait"
        className="w-44 h-44 rounded-full mb-4 bg-white"
      />
      <h2 className="font-semibold text-lg">Vadim Bulatov</h2>
      <p className="text-sm">Address: Сhirakchi</p>

      
    </div>
  );
}

// function StoryComponent() {
//   return (
//     <div>
//       <MainComponent
//         photoUrl="/images/dentist.jpg"
//         name="Dr. Ivan Petrov"
//         address="Moscow, Red Square 1"
//       />
//     </div>
//   );
// }

export default MainComponent;