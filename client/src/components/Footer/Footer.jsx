import React from "react";
import LogoSection from "./LogoSection";
import SiteNavigation from "./SiteNavigation";
import OfficesInfo from "./OfficesInfo";
import ContactInfo from "./ContactInfo";

const Footer = ({ onCertificateClick }) => {
  return (
    <>
      <footer className="bg-[#e6e6e6] border-t-2 border-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo Section */}
            <LogoSection />
            
            {/* Site Navigation Links */}
            <SiteNavigation />
            
            {/* Offices Information */}
            <OfficesInfo onCertificateClick={onCertificateClick} />
            
            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
        
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
      </footer>
    </>
  );
};

export default Footer;
