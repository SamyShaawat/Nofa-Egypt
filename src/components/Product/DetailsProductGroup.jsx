import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { AvailableWoodSpecies } from "../../data/constants";
const DetailsProductGroup = ({ product, onBack }) => {
  const navigate = useNavigate();
  const handleContactUsClick = () => {
    navigate("/contact-us");
  };
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);

  return (
    <div className=" p-6 rounded-lg  mx-auto relative z-40 mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex bg-white flex-col md:flex-row justify-center  md:gap-5 gap-2 border rounded-lg shadow-md p-4 ">
          <div className="flex flex-row md:flex-col  flex-wrap justify-center">
            {/* Name and Icon Close  */}
            <div className="flex justify-between">
              <p className="text-center font-bold text-2xl mt-1 mb-1 md:mb-5  mr-8 md:ml-48">
                {product.name}
              </p>
              <FontAwesomeIcon
                icon={faSquareXmark}
                style={{ fontSize: "25px" }}
                className="text-red-600 text-bold text-lg cursor-pointer mt-2 "
                onClick={onBack}
              />
            </div>
            {/* Div  content under the name card  */}
            <div className="flex gap-5 flex-col  md:flex-row">
              {/* Image Left */}
              <div className="flex flex-row justify-center md:flex-col flex-wrap gap-2 mb-0 md:mb-10 ">
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
                  <h3 className="text-xl font-semibold">Specification</h3>
                  <p className="text-gray-600">{product.Specifications}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Available Wood Species
                  </h3>
                </div>
                {/* AvailableWoodSpecies */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductGroup;

// import { useState } from "react";
// import { productsgroups } from "../../data/constants";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const DetailsProductGroup = () => {
//   const navigate = useNavigate();
//   const handleContactUsClick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {productsgroups.map((product, index) => {
//           const [selectedImage, setSelectedImage] = useState(
//             product.gallery[0]
//           );

//           return (
//             <>
//               <div
//                 key={index}
//                 className="flex  gap-5 border rounded-lg shadow-md p-5 overflow-hidden  mx-auto"
//               >
//                 {/* images  */}
//                 <div className="flex flex-col space-y-3">
//                   {product.gallery.map((img, idx) => (
//                     <img
//                       key={idx}
//                       src={img}
//                       alt={`${product.name} ${idx + 1}`}
//                       className={`h-8 w-16 object-cover cursor-pointer ${
//                         selectedImage === img ? "border-2 border-blue-500" : ""
//                       }`}
//                       onClick={() => setSelectedImage(img)}
//                     />
//                   ))}
//                 </div>
//                 {/* end Images */}
//                 {/* Single Image and button */}
//                 <div className="">
//                   <img
//                     src={selectedImage}
//                     alt={product.name}
//                     className="h-64 w-80 object-cover rounded-md shadow-gray-400 shadow-lg"
//                   />
//                   <div className="mt-4">
//                     <button
//                       className="bg-primary text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
//                       onClick={handleContactUsClick}
//                     >
//                       Contact Us
//                       <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
//                     </button>
//                   </div>
//                 </div>
//                 {/* End Single Image and button */}

//                 {/* Name ,Specification and Description */}
//                 <div className="flex flex-col gap-2 ">
//                   <div className=" flex justify-between">
//                     <p className="text-center font-bold text-2xl mb-5 ml-16 ">
//                       {product.name}
//                     </p>
//                     {/* <FontAwesomeIcon icon="fa-solid fa-x" /> */}
//                     <p className="text-red-900  text-bold text-lg ">X</p>
//                   </div>
//                   <h3 className="text-xl font-semibold">Description</h3>
//                   <p className="text-gray-600 mt-2 grow ">
//                     {product.description}
//                   </p>
//                   <h3 className="text-xl font-semibold">Specification</h3>
//                   <p className="text-gray-600 mt-2 grow ">
//                     {product.Specifications}
//                   </p>
//                 </div>
//                 {/* End Name ,Specification and Description */}
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default DetailsProductGroup;
