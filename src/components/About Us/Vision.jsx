import { ArrowRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
const Vision = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2   gap-5 place-items-center p-5">
      {/* Image */}
      <div>
        <img
          className="rounded-lg"
          src="../images/aboutUs/aboutImage_4.jpg"
          alt=""
        />
      </div>
      {/* Text */}
      <div className="">
        <p className="text-3xl font-bold mb-5">Our Vision</p>
        <p>
          At NOFA Egypt we have changed the idea of parquetry from being
          exclusively to restored places. Now you can enjoy the soul of art with
          NOFA parquetry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  flex gap-5 mt-5">
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg"
          >
            Make an Appointment
            <GoArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className=" border border-primary font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary duration-500 hover:text-white text-sm sm:text-base lg:text-lg"
          >
            Learn More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Vision;
