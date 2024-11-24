import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="text-left">
      <div data-aos="zoom-in" data-aos-delay="600">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <ul className="space-y-1">
        <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <IoMail className="text-xl sm:text-2xl mr-1" />
                    <a href="mailto:cairo@nofaegypt.com">cairo@nofaegypt.com</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <IoMail className="text-xl sm:text-2xl mr-1" />
                    <a href="mailto:sales@nofaegypt.com">sales@nofaegypt.com</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <MdPhone className="text-xl sm:text-2xl mr-1" />
                    <a href="tel:+201154014646">+20 115 401 4646</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <MdPhone className="text-xl sm:text-2xl mr-1" />
                    <a href="tel:+0226390070">(02) 2639 0070</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <MdPhone className="text-xl sm:text-2xl mr-1" />
                    <a href="tel:+033623991">(03) 362 3991</a>
                  </li>
          <div className="flex items-center gap-3 p-2">
                    <a
                      href="https://www.facebook.com/NofaFloors/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scale-100 hover:scale-110 duration-300"
                    >
                      <FaFacebook className="text-2xl  hover:text-primary scale-100 hover:scale-110 duration-300" />
                    </a>
                    <a
                      href="https://wa.me/201154014646"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scale-100 hover:scale-110 duration-300"
                    >
                      <FaWhatsapp className="text-2xl hover:text-primary scale-100 hover:scale-110 duration-300" />
                    </a>
                  </div>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
