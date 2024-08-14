import { services } from "../../data/constants";

const WhoWeAre = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-5 ">Who We Are</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2   gap-5 place-items-center ">
        {/* image left  */}
        <div className="p-3">
          <img
            className="w-full h-full"
            src="../images/aboutUs/aboutImage_2.png"
            alt="aboutImage_2"
          />
        </div>
        {/* text right */}
        <div>
          <div className="w-full max-w-2xl ">
            {services.map((service, index) => (
              <div key={index} className="flex items-start mb-4 sm:mb-32 ">
                <div className="flex items-center justify-center p-2 rounded-full bg-white text-lg font-bold  drop-shadow-lg">
                  {service.number}
                </div>
                <div className="ml-6">
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
    </div>
  );
};
export default WhoWeAre;
