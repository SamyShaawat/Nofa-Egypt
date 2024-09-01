import { useState } from "react";
import { finishes } from "../../data/constants";
import React from "react";
import DetailsFinishes from "./DetailsFinishes";

const Finishes = () => {
  const [selectedFinish, setSelectedFinish] = useState(null);

  const handleViewDetailsClick = (finish) => {
    setSelectedFinish(finish);
  };

  const handleBackToFinishesClick = () => {
    setSelectedFinish(null);
  };

  return (
    <div className="relative flex flex-col items-center">
      {selectedFinish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center  z-50">
          <DetailsFinishes
            finish={selectedFinish}
            onBack={handleBackToFinishesClick}
          />
        </div>
      )}
      <div
        className={`flex flex-wrap justify-center gap-4 my-6 transition-opacity duration-300 ${
          selectedFinish ? "pointer-events-none" : "opacity-100"
        }`}
      >
        {finishes.map((finish, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition-all duration-150 ease-in-out hover:-translate-y-2 hover:brightness-110 p-4"
            data-aos="fade-up"
            data-aos-delay={finish.aosDelay}
          >
            <img
              src={finish.image}
              alt={finish.name}
              className="w-full h-64 object-cover rounded-2xl border border-primary shadow-lg shadow-gray-400"
            />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <div className="font-bold text-xl mb-2 text-center">
                {finish.name}
              </div>
              <p className="text-gray-700 text-base mb-4 text-center">
                {finish.description}
              </p>
            </div>
            <div className="mt-auto grid place-items-center">
              <button
                className="bg-primary text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
                onClick={() => handleViewDetailsClick(finish)}
              >
                {finish.details}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finishes;
// import { useState } from "react";
// import { finishes } from "../../data/constants";
// import React from "react";
// import DetailsFinishes from "./DetailsFinishes";

// const Finishes = () => {
//   const [selectedFinish, setSelectedFinish] = useState(null);

//   const handleViewDetailsClick = (finish) => {
//     setSelectedFinish(finish);
//   };

//   const handleBackToFinishesClick = () => {
//     setSelectedFinish(null);
//   };

//   return (
//     <div className="relative flex flex-col  items-center">
//       {selectedFinish && (
//         <div className="fixed inset-0  bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10">
//           <DetailsFinishes
//             finish={selectedFinish}
//             onBack={handleBackToFinishesClick}
//           />
//         </div>
//       )}
//       <div
//         className={`flex flex-wrap justify-center gap-4 my-6 transition-opacity duration-300 ${
//           selectedFinish ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//       >
//         {finishes.map((finish, index) => (
//           <div
//             key={index}
//             className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition-all duration-150 ease-in-out hover:-translate-y-2 hover:brightness-110 p-4"
//             data-aos="fade-up"
//             data-aos-delay={finish.aosDelay}
//           >
//             <img
//               src={finish.image}
//               alt={finish.name}
//               className="w-full h-64 object-cover rounded-2xl border border-primary shadow-lg shadow-gray-400"
//             />
//             <div className="px-6 py-4 flex flex-col flex-grow">
//               <div className="font-bold text-xl mb-2 text-center">
//                 {finish.name}
//               </div>
//               <p className="text-gray-700 text-base mb-4 text-center">
//                 {finish.description}
//               </p>
//             </div>
//             <div className="mt-auto grid place-items-center">
//               <button
//                 className="bg-primary text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
//                 onClick={() => handleViewDetailsClick(finish)}
//               >
//                 {finish.details}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Finishes;

// import { finishes } from "../../data/constants";

// const Finishes = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 my-6 ">
//       {finishes.map((product, index) => (
//         <div
//           key={index}
//           className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1  duration-300 p-4 "
//           data-aos="fade-up"
//           data-aos-delay={product.aosDelay}
//         >
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-64 object-cover rounded-2xl border border-primary  shadow-lg shadow-gray-400"
//           />
//           {/* // title and description */}
//           <div className="px-6 py-4 flex flex-col flex-grow ">
//             <div className="font-bold text-xl mb-2 text-center ">
//               {product.name}
//             </div>
//             <p className="text-gray-700 text-base mb-4 text-center">
//               {product.description}
//             </p>
//           </div>
//           <div className="mt-auto grid place-items-center">
//             <button
//               className={`bg-primary text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto
//         hover:bg-primary/80 duration-300 text-sm sm:text-base
//          lg:text-lg whitespace-nowrap`}
//             >
//               {product.details}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Finishes;
