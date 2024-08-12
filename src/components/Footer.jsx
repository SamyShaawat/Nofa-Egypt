import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  // FaFax,
  // FaLocationDot,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#e6e6e6] border-t-2 border-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img
              src="../images/logo-without-bg.png"
              alt=""
              className="w-auto h-36"
            />
          </div>
          {/* Shop Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Site Navigation</h3>
            <ul>
              <li className="my-2">
                <a
                  href="/"
                  className="text-gray-600   hover:text-primary cursor-pointer hover:translate-x-1 duration-300"
                >
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
                src="../images/certificates/ISO.png"
                alt="ISO Certified"
                className="w-24 h-24"
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
                <a href="tel:+2033623931">(203) 3623931 / (203)</a>
              </li>
              <li className="my-2 text-gray-600">
                <a href="tel:+201157670090">(2) 01157670090</a>
              </li>
              {/* Social Media handles */}
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaFacebook className="text-2xl hover:text-primary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaInstagram className="text-2xl hover:text-primary scale-100 hover:scale-110 duration-300" />
                </a>
                {/* <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaLinkedin className="text-2xl hover:text-primary scale-100 hover:scale-110 duration-300" />
                </a> */}
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaXTwitter className="text-2xl hover:text-primary scale-100 hover:scale-110 duration-300" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
