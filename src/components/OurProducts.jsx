import React from "react";

export const woodSpeciesImages = [
  "../images/woodColors/Afromosia.png",
  "../images/woodColors/Cherry.png",
  "../images/woodColors/Doussie.png",
  "../images/woodColors/Iroko.png",
  "../images/woodColors/Mahogany.png",
  "../images/woodColors/Padouk.png",
  "../images/woodColors/Panga.png",
  "../images/woodColors/Pine.png",
  "../images/woodColors/RedOak.png",
  "../images/woodColors/Sapelli.png",
  "../images/woodColors/Tali.png",
  "../images/woodColors/Teak.png",
  "../images/woodColors/Walnut.png",
  "../images/woodColors/Wenge.png",
  "../images/woodColors/WhiteOak.png",
  "../images/woodColors/YellowPine.png",
];

const OurProducts = () => {
  return (
    <div className="flex  justify-center items-center mt-10 space-y-4 sm:space-y-0">
      {/* Column 1 */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/Afromosia.png"
          className="w-28 h-24 mb-2"
          alt="Afromosia"
        />
        <img
          src="../images/woodColors/Cherry.png"
          className="w-28 h-24"
          alt="Cherry"
        />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/Doussie.png"
          className="w-28 h-24 mb-2"
          alt="Doussie"
        />
        <img
          src="../images/woodColors/Iroko.png"
          className="w-28 h-24 mb-2"
          alt="Iroko"
        />
        <img
          src="../images/woodColors/Mahogany.png"
          className="w-28 h-24"
          alt="Mahogany"
        />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/Padouk.png"
          className="w-28 h-24 mb-2"
          alt="Padouk"
        />
        <img
          src="../images/woodColors/Panga.png"
          className="w-28 h-24"
          alt="Panga"
        />
      </div>

      {/* Column Center - Contains Our Products */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/Pine.png"
          className="w-28 h-24 mb-2"
          alt="Pine"
        />
        <p className="text-3xl text-center font-bold my-2">Our Products</p>
        <img
          src="../images/woodColors/RedOak.png"
          className="w-28 h-24"
          alt="Red Oak"
        />
      </div>

      {/* Column 5 */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/Tali.png"
          className="w-28 h-24 mb-2"
          alt="Tali"
        />
        <img
          src="../images/woodColors/Sapelli.png"
          className="w-28 h-24"
          alt="Sapelli"
        />
      </div>

      {/* Column 6 */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/Teak.png"
          className="w-28 h-24 mb-2"
          alt="Teak"
        />
        <img
          src="../images/woodColors/Walnut.png"
          className="w-28 h-24 mb-2"
          alt="Walnut"
        />
        <img
          src="../images/woodColors/Wenge.png"
          className="w-28 h-24"
          alt="Wenge"
        />
      </div>

      {/* Column 7 */}
      <div className="flex flex-col items-center space-y-2 sm:mr-4">
        <img
          src="../images/woodColors/YellowPine.png"
          className="w-28 h-24 mb-2"
          alt="Yellow Pine"
        />
        <img
          src="../images/woodColors/Pine.png"
          className="w-28 h-24"
          alt="Pine"
        />
      </div>
    </div>
  );
};

export default OurProducts;
