import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const DetailsFinishes = ({ finish, onBack }) => {
  const navigate = useNavigate();
  const handleContactUsClick = () => {
    navigate("/contact-us");
  };
  const [selectedImage, setSelectedImage] = useState(finish.gallery[0]);

  return (
    <div
      className=" p-6 rounded-lg  mx-auto relative z-40 mt-10 "
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
        {/* Div of Card */}
        <div className="flex lg:translate-x-1/2 md:translate-x-1/2 bg-white flex-col md:flex-row md:gap-5 gap-2 border-2 border-primary rounded-lg shadow-md p-4 ">
          <div className="flex flex-row md:flex-col space-x-3  flex-wrap justify-center">
            {/* Name and Icon Close  */}
            <div className="flex justify-between mb-4 p-0 lg:p-3">
              <div className=" font-bold text-2xl md:text-2xl lg:text-2xl px-4 translate-x-0 lg:translate-x-52 ">
                <p>{finish.name}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faSquareXmark}
                  style={{ fontSize: "25px" }}
                  className="text-red-600  text-bold text-lg cursor-pointer px-3  "
                  onClick={onBack}
                />
              </div>
            </div>

            {/* Div  content under the name card  */}
            <div className="flex lg:gap-2 md:gap-2 flex-col lg:flex-row  md:flex-col">
              {/* Images Left  */}
              <div
                className="flex flex-row justify-center md:flex-row lg:flex-col flex-wrap gap-2 mb-2 lg:mb-16 "
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {finish.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${finish.name} ${idx + 1}`}
                    className={`h-8 w-16 lg:h-14 lg:w-28 object-cover cursor-pointer rounded-lg ${
                      selectedImage === img ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
              {/* Single Image And Button Contact Us */}
              <div>
                <img
                  src={selectedImage}
                  alt={finish.name}
                  className="md:h-64 md:w-80 h-32 w-full lg:h-96 lg:w-96 object-cover rounded-md shadow-gray-400 shadow-lg"
                />
                <div className="mt-2 ">
                  <button
                    className="bg-primary text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
                    onClick={handleContactUsClick}
                  >
                    <span className="text-center">Contact Us</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
              {/* Descripion  */}
              <div className="flex flex-col ">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-600 p-1">{finish.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFinishes;
