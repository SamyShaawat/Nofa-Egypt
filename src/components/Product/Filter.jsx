import React, { useState } from "react";

import Finishes from "./Finishes";
import ProductGroup from "./ProductGroup";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("all"); // Initialize with 'all'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4 my-4 ">
      <div className="flex flex-col justify-center space-y-2 gap-5  md:flex-row md:space-x-4 md:space-y-0 ">
        <div className="border-2 border-primary/80 rounded-lg">
          <button
            onClick={() => handleTabClick("all")}
            className={`w-full md:w-auto px-16 py-2 rounded font-bold text-xl ${
              activeTab === "all" ? "bg-primary text-white" : "text-primary"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleTabClick("products")}
            className={`w-full md:w-auto px-16 py-2 rounded font-bold text-xl ${
              activeTab === "products"
                ? "bg-primary text-white"
                : "text-primary"
            }`}
          >
            Products Group
          </button>
          <button
            onClick={() => handleTabClick("finishers")}
            className={`w-full md:w-auto px-16 py-2 rounded font-bold text-xl ${
              activeTab === "finishers"
                ? "bg-primary text-white"
                : "text-primary"
            }`}
          >
            Finishes
          </button>
        </div>
      </div>

      {/* Render components based on activeTab */}
      {activeTab === "all" && (
        <div className="">
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
