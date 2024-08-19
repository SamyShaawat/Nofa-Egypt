import { services } from "../../data/constants";

const WhoWeAre = () => {
  return (
    <div className="p-6 lg:px-8 lg:py-8">
      <h2 className="text-center text-3xl font-bold my-5">Who We Are</h2>
      <div className="lg:flex lg:items-center lg:justify-between lg:max-w-4xl lg:mx-auto">
        {/* Image on the left */}
        <div className="w-full flex justify-center lg:justify-start lg:pr-4">
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            className="w-full h-auto max-w-sm rounded-lg border-2 border-primary shadow-xl"
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FaboutImage_2.png?alt=media&token=6f9e58e9-545d-46fe-84e8-e7e658be49a9"
            alt="aboutImage_2"
          />
        </div>
        {/* Text on the right */}
        <div className="w-full max-w-lg mt-6 lg:mt-0 lg:pl-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={services.aosDelay}
              className={`flex items-start mb-5  lg:mb-10 relative ${
                index < services.length - 1 ? "pb-12" : ""
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white text-lg font-bold drop-shadow-lg z-10">
                {service.number}
              </div>
              {index < services.length - 1 && (
                <div
                  data-aos="fade-up"
                  data-aos-delay={services.aosDelay}
                  className="absolute left-6 top-12 h-full border-l-4 border-gray-300 z-0"
                ></div>
              )}
              <div className="ml-6 lg:ml-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
