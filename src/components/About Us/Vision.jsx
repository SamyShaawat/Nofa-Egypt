import { ArrowRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Vision = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact-us");
  };
  return (
    <div className="p-6 lg:px-8 lg:py-8">
      <div className="lg:flex lg:items-start lg:justify-between lg:max-w-4xl lg:mx-auto">
        {/* Image on the left */}
        <div className="w-full flex justify-center lg:justify-start lg:pr-4">
          <img
            className="w-full h-auto max-w-sm rounded-lg border-2 border-primary hover:shadow-xl object-cover"
            src="../images/aboutUs/aboutImage_4.jpg"
            alt="Vision"
          />
        </div>
        {/* Text on the right */}
        <div className="w-full max-w-lg flex items-center mt-4 lg:mt-0 lg:pl-4">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-3">Our Vision</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At NOFA Egypt we have changed the idea of parquetry from being exclusively to restored places. Now you can enjoy the soul of art with NOFA parquetry.
            </p>
            <div className="flex gap-5 mt-2">
              <button
                className="bg-primary text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg"
                onClick={handleContactUsClick}
              >
                Contact Us
                <GoArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
