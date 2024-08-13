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
            <a href="/" className="text-left">
              <img
                data-aos="zoom-in"
                data-aos-delay="300"
                src="../images/logo/logo-without-bg.png"
                alt=""
                className="w-auto h-64 mx-auto lg:ml-[-60px] md:mx-0"
              />
            </a>
            {/* Site Navigation Links */}
            <div className="text-left">
              <div data-aos="zoom-in" data-aos-delay="400">
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
            <div className="text-left lg:ml-[-100px]">
              <div data-aos="zoom-in" data-aos-delay="500">
                <h3 className="text-lg font-semibold mb-2">Offices</h3>
                <ul className="space-y-1">
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <FaLocationDot className="text-xl sm:text-2xl mr-2 lg:mb-4" />
                    <a
                      href="https://www.google.com/maps/place/Nouf/@31.1730423,29.902566,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c3b5f0932a07:0x91c56612de726146!8m2!3d31.1730377!4d29.9051409!16s%2Fg%2F11c5_7rv_k?authuser=0&coh=219816&entry=tt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Industrial Zone,El Manshia El Gedida, Moharam Bek,
                      Alexandria, Egypt.
                    </a>
                  </li>
                  <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-primary items-center text-slate-900 gap-1 mb-3">
                    <FaLocationDot className="text-xl sm:text-2xl mr-2 lg:mb-4" />
                    <a
                      href="https://www.google.com/maps/place/Nofa+Egypt/@30.1016302,31.3184812,17z/data=!3m1!4b1!4m6!3m5!1s0x1458158f74f3fa43:0x37fb38fb92f93f11!8m2!3d30.1016256!4d31.3210561!16s%2Fg%2F11c563gbt7?authuser=0&coh=219816&entry=tt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      56 Nehro Street Behind Merryland park, Heliopolis, Cairo,
                      Egypt.
                    </a>
                  </li>
                </ul>
                <div className="mt-2 sm:mt-0 sm:text-center">
                  <img
                    src="../images/certificates/ISO.png"
                    alt="ISO Certified"
                    className="w-24 h-24 scale-100 hover:scale-110 hover:cursor-pointer duration-300 sm:mx-auto md:ml-1 mt-3 sm:text-left"
                  />
                </div>
              </div>
            </div>
            {/* Contact Information */}
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
                  <MdPhone  className="text-xl sm:text-2xl mr-1" />
                    <a href="tel:+033623991">(03) 362 3991</a>
                  </li>
                  {/* Social Media handles */}
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
