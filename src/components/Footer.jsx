import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white border-t-2 border-blue-500 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="../images/logo.png" alt="" className="w-40" />
          </div>
          {/* Shop Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul>
              <li className="my-2">
                <a href="/" className="text-gray-600   hover:text-primary ">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/about-us"
                  className="text-gray-600   hover:text-primary "
                >
                  About Us
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/our-products"
                  className="text-gray-600  hover:text-primary "
                >
                  Products
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/events-news"
                  className="text-gray-600   hover:text-primary "
                >
                  News & Events
                </a>
              </li>
            </ul>
          </div>
          {/* Offices Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Offices</h3>
            <ul>
              <li className="my-2 text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i> 56 Nehro Street
                Behind Meryland park, Heliopolis, Cairo, Egypt.
              </li>
              <li className="my-2 text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i> Industrial Zone,
                El Manchia El Gedida, Moharam Bek, Alexandria, Egypt.
              </li>
            </ul>
            <div className="mt-4">
              <img
                src="../images/certificates/ISO9001_GB__RGB.jpg"
                alt="ISO Certified"
                className="w-24"
              />
            </div>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul>
              <li className="my-2">
                <a
                  href="mailto:cairo@nofafloors.com"
                  className="text-gray-600 hover:underline"
                >
                  cairo@nofafloors.com
                </a>
              </li>
              <li className="my-2">
                <a
                  href="mailto:sales@nofafloors.com"
                  className="text-gray-600 hover:underline"
                >
                  sales@nofafloors.com
                </a>
              </li>
              <li className="my-2 text-gray-600">
                <a href="tel:+2022630970">(202) 2630970</a>
              </li>
              <li className="my-2 text-gray-600">
                <a href="tel:+2033623931" c>
                  (203) 3623931 / (203)
                </a>
              </li>
              <li className="my-2 text-gray-600">
                <a href="tel:+201157670090">(2) 01157670090</a>
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
