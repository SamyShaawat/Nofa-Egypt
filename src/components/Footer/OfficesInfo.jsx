import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const OfficesInfo = ({ onCertificateClick }) => {
  return (
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
        <div className="mt-2 sm:mt-0 sm:text-center relative inline-block">
          <div className="relative group">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/certificates%2FISO.png?alt=media&token=e5529caf-83ff-4893-9bbc-bfbe1e397e33"
              alt="ISO Certified"
              className="w-24 h-24 rounded-full scale-100 hover:scale-110 hover:cursor-pointer duration-300 sm:mx-auto md:ml-1 mt-3 sm:text-left"
              onClick={onCertificateClick}
            />
            <button
              onClick={onCertificateClick}
              className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 duration-300 rounded-full bg-primary border-2 border-secondary shadow-lg w-[100px] h-[100px] pointer-events-none group-hover:pointer-events-auto"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficesInfo;
