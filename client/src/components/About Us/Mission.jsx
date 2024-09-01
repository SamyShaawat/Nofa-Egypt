/* eslint-disable react/no-unescaped-entities */
const Mission = () => {
  return (
    <div className="p-6 lg:px-8 lg:py-8">
      <div className="lg:flex lg:items-start lg:justify-between lg:max-w-4xl lg:mx-auto">
        {/* Text on the left */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-full max-w-lg lg:pr-4 flex items-center"
        >
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-3">Our Mission</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Is your home missing that extra special thing? We have the spirit.
              We have the skill. We have the wood. And you have the place.
              <span className="font-semibold text-gray-900"> Let's do it.</span>
            </p>
          </div>
        </div>
        {/* Image on the right */}
        <div className="w-full flex justify-center lg:justify-end lg:pl-4">
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            className="w-full h-auto max-w-sm rounded-lg border-2 border-primary shadow-xl object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FaboutImage_3.png?alt=media&token=bd802509-2e62-4851-bed0-4272a7374a0a"
            alt="Mission"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
