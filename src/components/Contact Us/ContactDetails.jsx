/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className="container mx-auto lg:mt-8 mt-2 px-6 lg:px-52">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-12">
        {/* NOFA Details and Text */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col justify-between"
        >
          <div className="p-6 border-4 rounded-2xl shadow-2xl border-primary bg-white flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-4">
                Contact Us Today
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                At{" "}
                <span className="text-primary font-semibold">NOFA EGYPT</span>,
                we specialize in premium wood flooring solutions with expert
                installations and custom designs. Contact us for stylish,
                durable floors and outstanding service.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-slate-900 gap-2 mb-4 cursor-pointer hover:translate-x-2 transition-transform duration-300 hover:text-primary">
                  <IoMail className="text-2xl" />
                  <a
                    href="mailto:cairo@nofaegypt.com"
                    className="hover:text-primary"
                  >
                    cairo@nofaegypt.com
                  </a>
                </li>
                <li className="flex items-center text-slate-900 gap-2 mb-4 cursor-pointer hover:translate-x-2 transition-transform duration-300 hover:text-primary">
                  <IoMail className="text-2xl" />
                  <a
                    href="mailto:sales@nofaegypt.com"
                    className="hover:text-primary"
                  >
                    sales@nofaegypt.com
                  </a>
                </li>
                <li className="flex items-center text-slate-900 gap-2 mb-4 cursor-pointer hover:translate-x-2 transition-transform duration-300 hover:text-primary">
                  <MdPhone className="text-2xl" />
                  <a href="tel:+201154014646" className="hover:text-primary">
                    +20 115 401 4646
                  </a>
                </li>
                <li className="flex items-center text-slate-900 gap-2 mb-4 cursor-pointer hover:translate-x-2 transition-transform duration-300 hover:text-primary">
                  <MdPhone className="text-2xl" />
                  <a href="tel:+0226390070" className="hover:text-primary">
                    (02) 2639 0070
                  </a>
                </li>
                <li className="flex items-center text-slate-900 gap-2 mb-4 cursor-pointer hover:translate-x-2 transition-transform duration-300 hover:text-primary">
                  <MdPhone className="text-2xl" />
                  <a href="tel:+033623991" className="hover:text-primary">
                    (03) 362 3991
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media handles */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/NofaFloors/"
                target="_blank"
                rel="noopener noreferrer"
                className="scale-100 hover:scale-110 duration-300"
              >
                <FaFacebook className="text-3xl hover:text-primary" />
              </a>
              <a
                href="https://wa.me/201154014646"
                target="_blank"
                rel="noopener noreferrer"
                className="scale-100 hover:scale-110 duration-300"
              >
                <FaWhatsapp className="text-3xl hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Image */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="lg:w-1/2 w-full p-4 lg:p-6 flex items-center "
        >
          <div className="w-full h-full flex justify-center border-4 rounded-2xl shadow-2xl border-primary  bg-white">
            <img
              src="../images/contactUs/africaMap.png"
              alt="Map of Africa"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105 mx-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
