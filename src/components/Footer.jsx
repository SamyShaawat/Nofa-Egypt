import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { navItems, contact } from "../data/constants.js";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#e6e6e6] border-t-2 border-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo Section */}
            <div className="text-left">
              <img
                src="../images/logo-without-bg.png"
                alt=""
                className="w-auto h-64 mx-auto md:mx-0"
              />
            </div>
            {/* Shop Links */}
            <div className="text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">Site Navigation</h3>
                <ul className="space-y-1">
                  {navItems.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-slate-900 hover:text-primary"
                    >
                      <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1 mt-2">
                  {contact.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-slate-900 hover:text-primary"
                    >
                      <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Offices Information */}
            <div className="text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">Offices</h3>
                <ul className="space-y-1">
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-1">
                    <FaLocationDot className="text-xl sm:text-2xl" />
                    <a
                      href="https://www.google.com/maps/dir/31.2382831,29.9627838/56+Nehro,+El-Montaza,+Heliopolis,+Cairo+Governorate+4460134/@30.6369557,29.2354185,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1458158f75ba3379:0xad9c5e2e3b3b58ce!2m2!1d31.3210333!2d30.101714?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      56 Nehro Street Behind Merryland park, Heliopolis, Cairo,
                      Egypt.
                    </a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-1">
                    <FaLocationDot className="text-xl sm:text-2xl" />
                    <a
                      href="https://www.google.com/maps/place/Mansheya,+Alexandria+Governorate/@31.198108,29.8802942,15z/data=!3m1!4b1!4m6!3m5!1s0x14f5c3e12aa23501:0x9457520867d4818!8m2!3d31.1993167!4d29.8916441!16s%2Fg%2F1tdrbqkb?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      El Mansheya El Gedida, Moharam Bek, Alexandria, Egypt.
                    </a>
                  </li>
                </ul>
                <div className="mt-2">
                  <img
                    src="../images/certificates/ISO.png"
                    alt="ISO Certified"
                    className="w-24 h-24 scale-100 hover:scale-110 duration-300 mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <ul className="space-y-1">
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-2">
                    <IoMail className="text-xl sm:text-2xl" />
                    <a href="mailto:cairo@nofafloors.com">cairo@nofafloors.com</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-2">
                    <IoMail className="text-xl sm:text-2xl" />
                    <a href="mailto:sales@nofafloors.com">sales@nofafloors.com</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-2">
                    <MdPhone className="text-xl sm:text-2xl" />
                    <a href="tel:+201157670090">+20 115 767 0090</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-2">
                    <MdPhone className="text-xl sm:text-2xl" />
                    <a href="tel:+2022630970">+202 263 0970</a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-2">
                    <MdPhone className="text-xl sm:text-2xl" />
                    <a href="tel:+2033623931">+203 362 3931</a>
                  </li>
                  {/* Social Media handles */}
                  <div className="flex items-center gap-3 p-2">
                    <a
                      href="https://www.facebook.com/NofaFloors/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scale-100 hover:scale-110 duration-300"
                    >
                      <FaFacebook className="text-2xl hover:text-primary scale-100 hover:scale-110 duration-300" />
                    </a>
                    <a
                      href="https://wa.me/201157670090"
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
          </div>
        </div>
        <div>
          <div className="border-t-2 border-slate-300 pt-4 mt-2 text-center">
            <span>Copyright © 2024 </span>
            <a
              className="hover:text-primary hover:underline duration-300"
              href="/"
            >
              Nofa Egypt
            </a>
            <span> All Rights Reserved. Designed by </span>
            <a
              className="text-primary hover:underline duration-300"
              href="https://rowad.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rowad
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
