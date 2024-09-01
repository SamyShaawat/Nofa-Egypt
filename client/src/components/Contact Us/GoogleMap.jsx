import React from "react";

const GoogleMap = () => {
  return (
    <div className="container mx-auto lg:mt-8 mt-2 px-6 lg:px-52">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Alexandria Office */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col gap-6"
        >
          <div className="p-6 border-4 rounded-2xl shadow-2xl border-primary bg-white flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Alexandria Office
            </h3>
            <div className="h-72 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.733060879482!2d29.89899277667069!3d31.173032573411334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3b5f0932a07%3A0x91c56612de726146!2sIndustrial%20Zone%2CEl%20Manshia%20El%20Gedida%2C%20Moharam%20Bek%2C%20Alexandria%2C%20Egypt!5e0!3m2!1sen!2sus!4v1693480680722!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alexandria Office"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Cairo Office */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col gap-6"
        >
          <div className="p-6 border-4 rounded-2xl shadow-2xl border-primary bg-white flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Cairo Office
            </h3>
            <div className="h-72 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226074.2717083684!2d31.295347862781627!3d30.09751140767431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458158f74f3fa43%3A0x37fb38fb92f93f11!2s56%20Nehro%20Street%20Behind%20Merryland%20park%2C%20Heliopolis%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1693480754058!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cairo Office"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
