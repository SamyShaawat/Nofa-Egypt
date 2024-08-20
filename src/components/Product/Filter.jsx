// AllComponents.js

import React, { useState } from "react";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("all"); // Initialize with 'all'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center space-y-2 gap-5  md:flex-row md:space-x-4 md:space-y-0">
        <button
          onClick={() => handleTabClick("all")}
          className={`w-full md:w-auto px-16 py-2 rounded ${
            activeTab === "all" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleTabClick("products")}
          className={`w-full md:w-auto px-16 py-2 rounded ${
            activeTab === "products" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Products Group
        </button>
        <button
          onClick={() => handleTabClick("finishers")}
          className={`w-full md:w-auto px-16 py-2 rounded ${
            activeTab === "finishers" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Finishers
        </button>
      </div>

      {/* Render components based on activeTab */}
      {activeTab === "all" && <div>All components go here!</div>}
      {activeTab === "products" && <div>Products components go here!</div>}
      {activeTab === "finishers" && <div>Finishers components go here!</div>}
    </div>
  );
};

export default Filter;

// import { useState } from "react";

// const Filter = () => {
//   // initial Value Is All
//   const [activeTab, setActiveTab] = useState("all");
//   // Have Three Tabs all , productsGroup , Finishers
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="py-4 grid  place-items-center ">
//       <div className="flex  gap-10    justify-center">
//         {/* All products   productsGroup + Finishers */}

//         <button
//           onClick={() => handleTabClick("all")}
//           className={`px-4 py-2 w-full h-full rounded ${
//             activeTab === "all" ? "bg-primary text-white" : "bg-gray-200"
//           }`}
//         >
//           All
//         </button>
//         {/* Filter to  productsGroup */}
//         <button
//           onClick={() => handleTabClick("products")}
//           className={`px-8 py-2 w-full h-full rounded ${
//             activeTab === "products" ? "bg-primary text-white" : "bg-gray-200"
//           }`}
//         >
//           Products Group
//         </button>
//         {/* Filter to Finishers */}
//         <button
//           onClick={() => handleTabClick("finishers")}
//           className={`px-8 py-2 w-full h-full rounded ${
//             activeTab === "finishers" ? "bg-primary text-white" : "bg-gray-200"
//           }`}
//         >
//           Finishers
//         </button>
//       </div>

//       {/* Render components based on activeTab */}

//       {activeTab === "all" && <div>All components go here!</div>}
//       {activeTab === "products" && <div>Products components go here!</div>}
//       {activeTab === "finishers" && <div>Finishers components go here!</div>}
//     </div>
//   );
// };

// export default Filter;
