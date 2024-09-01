import React from "react";
import { NavLink } from "react-router-dom";
import { navItems, contact } from "../../data/constants";

const SiteNavigation = () => {
  return (
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
  );
};

export default SiteNavigation;
