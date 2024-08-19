import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const NavItem = ({
  path,
  title,
  dropdown,
  subItems,
  index,
  isDropdownOpen,
  handleNavLinkClick,
  handleDropdownMouseEnter,
  handleDropdownMouseLeave,
}) => (
  <li
    className="relative text-base text-black hover:text-primary duration-300 flex items-center group"
    onMouseEnter={() => dropdown && handleDropdownMouseEnter(index)}
    onMouseLeave={() => dropdown && handleDropdownMouseLeave(index)}
  >
    <NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
      {title}
    </NavLink>
    {dropdown && (
      <>
        <div className="ml-2">
          {isDropdownOpen[index] ? <ChevronUp /> : <ChevronDown />}
        </div>
        <ul
          className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isDropdownOpen[index] ? "block" : "hidden"
          }`}
        >
          {subItems.map((subItem) => (
            <li
              key={subItem.path}
              className="px-4 py-2 hover:bg-gray-100 text-black hover:text-primary duration-300"
            >
              <NavLink
                to={subItem.path}
                className="block"
                onClick={() => handleNavLinkClick(subItem.path, index)}
              >
                {subItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    )}
  </li>
);

export default NavItem;
