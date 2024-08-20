import React, { useState } from "react";
import ProductsGroup from "./ProductsGroup";
import Finishers from "./Finishers";

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
      {activeTab === "all" && (
        <div>
          <ProductsGroup />
          <Finishers />
        </div>
      )}
      {activeTab === "products" && (
        <div>
          <ProductsGroup />
        </div>
      )}
      {activeTab === "finishers" && (
        <div>
          <Finishers />
        </div>
      )}
    </div>
  );
};

export default Filter;
