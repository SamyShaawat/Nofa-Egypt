import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Vision = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact-us");
  };

  const handleProductsClick = () => {
    navigate("/our-products");
  };

  return (
    <div className="p-6 lg:px-8 lg:py-8">
      <div className="lg:flex lg:items-start lg:justify-between lg:max-w-4xl lg:mx-auto">
        {/* Image on the left */}
        <div className="w-full flex justify-center lg:justify-start lg:pr-4">
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            className="w-full h-auto max-w-sm rounded-lg border-2 border-primary shadow-xl object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FaboutImage_4.png?alt=media&token=dd6d6520-187e-4119-92e6-78739d718fe5"
            alt="Vision"
          />
        </div>
        {/* Text on the right */}
        <div className="w-full max-w-lg flex items-center mt-4 lg:mt-0 lg:pl-4">
          <div data-aos="fade-left" data-aos-delay="200">
            <p className="text-3xl font-bold text-gray-900 mb-3">Our Vision</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At NOFA Egypt, we have changed the idea of parquetry from being
              exclusively to restored places. Now you can enjoy the soul of art
              with NOFA parquetry.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex gap-5 mt-2"
            >
              <button
                className="bg-primary text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap"
                onClick={handleContactUsClick}
              >
                Contact Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              <button
                className="text-black border-2 border-slate-400 font-semibold px-4 py-2 rounded-full flex items-center gap-2 w-full sm:w-auto hover:bg-primary duration-300 text-sm sm:text-base lg:text-lg hover:text-white whitespace-nowrap"
                onClick={handleProductsClick}
              >
                View Our Products
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6  lg:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
