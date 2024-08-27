import { useState } from "react";
import { productsgroups } from "../../data/constants";
import React from "react";
import DetailsProductGroup from "./DetailsProductGroup";

const ProductGroup = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProductsClick = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative flex flex-col items-center">
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center  z-50">
          <DetailsProductGroup
            product={selectedProduct}
            onBack={handleBackToProductsClick}
          />
        </div>
      )}
      <div
        className={`flex flex-wrap justify-center gap-4 my-6 transition-opacity duration-300 ${
          selectedProduct ? " pointer-events-none" : "opacity-100"
        }`}
        // data-aos="fade-up"
        // data-aos-delay="200"
      >
        {productsgroups.map((product, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition-all duration-150 ease-in-out hover:-translate-y-2 hover:brightness-110 p-4"
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-2xl border border-primary shadow-lg shadow-gray-400"
            />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <div className="font-bold text-xl mb-2 text-center">
                {product.name}
              </div>
              <p className="text-gray-700 text-base mb-4 text-center">
                {product.description}
              </p>
            </div>
            <div className="mt-auto grid place-items-center">
              <button
                className="bg-primary text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
                onClick={() => handleViewDetailsClick(product)}
              >
                {product.details}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
