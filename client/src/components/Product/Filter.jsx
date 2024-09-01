import React, { useState, useEffect, useRef } from "react";
import Finishes from "./Finishes";
import ProductGroup from "./ProductGroup";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("all");
  const sliderRef = useRef(null);
  const tabRefs = {
    all: useRef(null),
    products: useRef(null),
    finishers: useRef(null),
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (sliderRef.current && tabRefs[activeTab].current) {
      const activeTabElement = tabRefs[activeTab].current;
      sliderRef.current.style.width = `${activeTabElement.offsetWidth}px`;
      sliderRef.current.style.left = `${activeTabElement.offsetLeft}px`;
    }
  }, [activeTab]);

  return (
    <div className="p-4 my-4">
      <div className="relative flex flex-col justify-center space-y-2 gap-5 md:flex-row md:space-x-4 md:space-y-0">
        <div className="relative rounded-lg overflow-hidden">
          {/* Slider - Hidden on mobile */}
          <div
            ref={sliderRef}
            className={`absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-in-out rounded-lg
               ${window.innerWidth >= 768 ? "" : "hidden"}
              `}
            style={{ width: "0px", left: "0px" }}
          ></div>
          <div className="lg:border-2 lg:border-primary/80 md:border-2 md:border-primary/80 rounded-lg">
            {/* Button All */}
            <button
              ref={tabRefs.all}
              onClick={() => handleTabClick("all")}
              className={`relative z-10 w-full md:w-auto px-4 py-2 md:px-16 md:py-2 rounded font-bold text-lg md:text-xl cursor-pointer select-none focus:outline-none transition-colors duration-300 ease-in-out ${
                activeTab === "all"
                  ? "text-white lg:bg-  bg-primary"
                  : "text-primary"
              }`}
            >
              All
            </button>

            {/* Button Product Group */}
            <button
              ref={tabRefs.products}
              onClick={() => handleTabClick("products")}
              className={`relative z-10 w-full md:w-auto px-4 py-2 md:px-16 md:py-2 rounded font-bold text-lg md:text-xl cursor-pointer select-none focus:outline-none transition-colors duration-300 ease-in-out ${
                activeTab === "products"
                  ? "text-white lg:bg-  bg-primary"
                  : "text-primary"
              }`}
            >
              Products Group
            </button>

            {/* Button Finishes */}
            <button
              ref={tabRefs.finishers}
              onClick={() => handleTabClick("finishers")}
              className={`relative z-10 w-full md:w-auto px-4 py-2 md:px-16 md:py-2 rounded font-bold text-lg md:text-xl cursor-pointer select-none focus:outline-none transition-colors duration-300 ease-in-out ${
                activeTab === "finishers"
                  ? "text-white lg:bg-  bg-primary"
                  : "text-primary"
              }`}
            >
              Finishes
            </button>
          </div>
        </div>
      </div>

      {/* Render components based on activeTab */}
      {activeTab === "all" && (
        <div>
          <ProductGroup />
          <Finishes />
        </div>
      )}
      {activeTab === "products" && (
        <div>
          <ProductGroup />
        </div>
      )}
      {activeTab === "finishers" && (
        <div>
          <Finishes />
        </div>
      )}
    </div>
  );
};

export default Filter;

// import React, { useState } from "react";

// import Finishes from "./Finishes";
// import ProductGroup from "./ProductGroup";

// const Filter = () => {
//   const [activeTab, setActiveTab] = useState("all"); // Initialize with 'all'

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="p-4 my-4 ">
//       <div className="flex flex-col justify-center space-y-2 gap-5  md:flex-row md:space-x-4 md:space-y-0  ">
//         <div className="lg:border-2 lg:border-primary/80 md:border-2 md:border-primary/80 rounded-lg">
//           {/* Button All */}
//           <button
//             onClick={() => handleTabClick("all")}
//             className={`w-full md:w-auto px-16 py-2 rounded font-bold text-xl cursor-pointer select-none focus:outline-none ${
//               activeTab === "all"
//                 ? "bg-primary text-white  delay-200"
//                 : "text-primary"
//             }`}
//           >
//             All
//           </button>
//           {/* Button Product Group */}
//           <button
//             onClick={() => handleTabClick("products")}
//             className={`w-full md:w-auto px-16 py-2 rounded font-bold text-xl cursor-pointer select-none focus:outline-none  ${
//               activeTab === "products"
//                 ? "bg-primary text-white  delay-200"
//                 : "text-primary"
//             }`}
//           >
//             Products Group
//           </button>
//           {/* Button Finishes */}
//           <button
//             onClick={() => handleTabClick("finishers")}
//             className={`w-full md:w-auto px-16 py-2 rounded font-bold text-xl cursor-pointer select-none focus:outline-none  ${
//               activeTab === "finishers"
//                 ? "bg-primary text-white  delay-200"
//                 : "text-primary"
//             }`}
//           >
//             Finishes
//           </button>
//         </div>
//       </div>

//       {/* Render components based on activeTab */}
//       {activeTab === "all" && (
//         <div className="">
//           <ProductGroup />

//           <Finishes />
//         </div>
//       )}
//       {activeTab === "products" && (
//         <div>
//           <ProductGroup />
//         </div>
//       )}
//       {activeTab === "finishers" && (
//         <div>
//           <Finishes />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filter;
