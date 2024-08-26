import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AvailableWoodSpecies } from "../../data/constants";
// import AvailableWood from "./AvailableWood";

const DetailsProductGroup = ({ product, onBack }) => {
  const navigate = useNavigate();
  const handleContactUsClick = () => {
    navigate("/contact-us");
  };
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);

  return (
    <div className=" p-6 rounded-lg  mx-auto relative z-40 my-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
        {/* Div Of Card  */}
        <div className="flex lg:translate-x-1/2 md:translate-x-1/2 bg-white flex-col md:flex-row md:gap-5 gap-2 border-2 border-primary rounded-lg shadow-md p-4 ">
          <div className="flex flex-row md:flex-col space-x-3  flex-wrap justify-center">
            {/* Name and Icon Close  */}
            {/* <div className="flex justify-between "> */}
            <p className=" text-center font-bold text-2xl mb-4 ">
              <span className="text-center">{product.name}</span>
              <FontAwesomeIcon
                icon={faSquareXmark}
                style={{ fontSize: "25px" }}
                // translate-x-14 md:translate-x-2
                className="text-red-600 text-bold text-lg cursor-pointer translate-x-16 lg:translate-x-56 md:translate-x-20    "
                onClick={onBack}
              />
            </p>

            {/* </div> */}
            {/* Div  content under the name card  */}
            <div className="flex lg:gap-5 md:gap-2 gap-2 flex-col lg:flex-row  md:flex-col">
              {/* Image Left */}
              <div className="flex flex-row justify-center md:flex-row lg:flex-col  flex-wrap gap-2 mb-0 lg:mb-20 ">
                {product.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className={`h-8 w-16 object-cover cursor-pointer ${
                      selectedImage === img ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              {/* Single Image and Contact Button  */}
              <div>
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="md:h-64 md:w-80 h-32 w-full object-cover rounded-md shadow-gray-400 shadow-lg"
                />
                <div className="mt-2">
                  <button
                    className="bg-primary text-white font-semibold px-4 py-2 rounded-full flex items-center  gap-2 w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
                    onClick={handleContactUsClick}
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
              {/* Description , Specification and Available Wood Species */}
              <div className="flex flex-col gap-2 ">
                <div>
                  <h3 className="text-xl font-semibold">Description</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold ">Specification</h3>
                  <p className="text-gray-600">{product.Specifications}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Available Wood Species
                  </h3>

                  {/*  AvailableWoodSpecies */}
                  <div className="flex flex-col justify-center items-center mt-3 w-full px-4">
                    {/* Original layout preserved for laptop screens */}
                    <div className=" flex flex-row justify-center items-center w-full">
                      {AvailableWoodSpecies.map((column, columnIndex) => (
                        <div
                          key={columnIndex}
                          className={`flex flex-col justify-center items-center 
                        space-y-1  w-full md:w-auto`}
                        >
                          {column.map(
                            (item, itemIndex) => (
                              // Div Contain Images And Title of image
                              <div
                                key={itemIndex}
                                className="relative w-14 h-14  md:w-16 md:h-16 lg:w-20 lg:h-20"
                              >
                                {/* imagesss */}
                                <img
                                  src={item.src}
                                  className="w-full h-full "
                                  alt={item.title}
                                  data-aos="fade-up"
                                  data-aos-delay={item.aosDelay}
                                />
                                {/* Name OF image  */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <p
                                    data-aos="zoom-in"
                                    data-aos-delay={item.delayTitle}
                                    className="text-xs sm:text-xs md:text-xs lg:text-xs text-white "
                                  >
                                    {item.title}
                                  </p>
                                </div>
                              </div>
                            )
                            //  End  Div Contain Images And Title of image
                            //   )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductGroup;
