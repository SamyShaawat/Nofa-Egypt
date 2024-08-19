import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const MobileMenu = ({
  navItems,
  isMenuOpen,
  handleNavLinkClick,
  isDropdownOpen,
  handleDropdownMouseEnter,
  handleDropdownMouseLeave,
  contact,
  handleAuthClick,
  userLoggedIn,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`px-4 bg-primary py-5 mb-2 rounded-xl ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        {navItems.map(({ path, title, dropdown, subItems }, index) => (
          <li
            key={path}
            className="relative text-base text-white py-1 hover:text-black/70 duration-300"
            onMouseEnter={() => dropdown && handleDropdownMouseEnter(index)}
            onMouseLeave={() => dropdown && handleDropdownMouseLeave(index)}
          >
            <div className="flex items-center">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-black" : "")}
                onClick={() => handleNavLinkClick(path)}
              >
                {title}
              </NavLink>
              {dropdown && (
                <div className="ml-2">
                  {isDropdownOpen[index] ? <ChevronUp /> : <ChevronDown />}
                </div>
              )}
            </div>
            {dropdown && (
              <ul
                className={`pl-4 mt-2 ${
                  isDropdownOpen[index] ? "block" : "hidden"
                }`}
              >
                {subItems.map((subItem) => (
                  <li
                    key={subItem.path}
                    className="py-1 text-white hover:text-black/70"
                  >
                    <NavLink
                      to={subItem.path}
                      className={({ isActive }) =>
                        isActive ? "active-black block" : "block"
                      }
                      onClick={() => handleNavLinkClick(subItem.path, index)}
                    >
                      {subItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="lg:flex justify-center items-center">
        {contact.map(({ path, title }) => (
          <li
            key={path}
            className="bg-primary text-white hover:text-black duration-300 flex gap-2 hover:translate-x-1"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "active-black flex gap-2" : "flex gap-2"
              }
              onClick={() => handleNavLinkClick(path)}
            >
              {title}
            </NavLink>
          </li>
        ))}
        {/* Login/Logout Button */}
        <li
          className={`bg-primary text-white hover:text-black duration-300 flex gap-2 hover:translate-x-1 ${
            currentPath === "/login" ? "active-black" : ""
          }`}
        >
          <button
            onClick={() => {
              handleAuthClick();
              handleNavLinkClick("/login");
            }}
            className={`flex gap-2 ${
              currentPath === "/login" ? "active-black" : ""
            }`}
          >
            {userLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
