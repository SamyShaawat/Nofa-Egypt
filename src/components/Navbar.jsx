import React, { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import { navItems, contact } from "../data/constants";

const Navbar = () => {
  const { userLoggedIn } = useAuth(); // Access userLoggedIn
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMaximize = useCallback(() => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnMaximize);
    return () => {
      window.removeEventListener("resize", closeMenuOnMaximize);
    };
  }, [closeMenuOnMaximize]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleNavLinkClick = (path, index = null) => {
    handleCloseMenu();
    if (index !== null) {
      setIsDropdownOpen((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
    navigate(path);
  };

  const handleAuthClick = () => {
    if (userLoggedIn) {
      doSignOut().then(() => {
        navigate("/login");
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
          <nav className="flex justify-between items-center py-3">
            {/* logo */}
            <a
              href="/"
              className="flex items-center gap-3 text-2xl text-black font-semibold"
            >
              <img src="../images/logo/logo.png" alt="" className="w-28 mr-2" />
            </a>

            {/* nav items for large devices */}
            <ul className="hidden lg:flex gap-12">
              {navItems.map(({ path, title, dropdown, subItems }, index) => (
                <li
                  key={path}
                  className="relative text-base text-black hover:text-primary duration-300 flex items-center group"
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  onMouseEnter={() => dropdown && toggleDropdown(index)}
                  onMouseLeave={() =>
                    dropdown &&
                    setIsDropdownOpen((prevState) => ({
                      ...prevState,
                      [index]: false,
                    }))
                  }
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                  {dropdown && (
                    <>
                      <div className="ml-2">
                        {isDropdownOpen[index] ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </div>
                      <ul
                        className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isDropdownOpen[index] ? "opacity-100" : ""
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
                              onClick={() =>
                                handleNavLinkClick(subItem.path, index)
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <ul className="hidden lg:flex justify-center space-x-5 items-center">
              {contact.map(({ path, title }) => (
                <li
                  key={path}
                  className="bg-primary text-white rounded-md flex gap-2 hover:bg-primary/80 duration-300"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold flex gap-2 py-2 px-3"
                        : "flex gap-2 py-2 px-3"
                    }
                  >
                    {title} <ArrowRight />
                  </NavLink>
                </li>
              ))}
              {/* Login/Logout Button */}
              <li className="hover:bg-primary border-primary hover:text-slate-100 text-black border-2  rounded-md flex gap-2  duration-300">
                <button
                  onClick={handleAuthClick}
                  className="flex gap-2 py-2 px-3"
                >
                  {userLoggedIn ? "Logout" : "Login"}
                </button>
              </li>
            </ul>

            {/* mobile menu */}
            <div className="lg:hidden block">
              <button onClick={handleMenuToggler}>
                {isMenuOpen ? (
                  <FaXmark className="w-5 h-5 text-primary" />
                ) : (
                  <FaBarsStaggered className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          </nav>

          {/* mobile menu items */}
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
                  onMouseEnter={() => dropdown && toggleDropdown(index)}
                  onMouseLeave={() =>
                    dropdown &&
                    setIsDropdownOpen((prevState) => ({
                      ...prevState,
                      [index]: false,
                    }))
                  }
                >
                  <div className="flex items-center">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "active-black" : ""
                      }
                      onClick={() => handleNavLinkClick(path)}
                    >
                      {title}
                    </NavLink>
                    {dropdown && (
                      <div className="ml-2">
                        {isDropdownOpen[index] ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
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
                            onClick={() =>
                              handleNavLinkClick(subItem.path, index)
                            }
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
              <li className="hover:bg-primary border-primary text-white hover:text-black duration-300 flex gap-2 hover:translate-x-1">
                <button
                  onClick={handleAuthClick}
                  className={({ isActive }) =>
                    isActive ? "active-black flex gap-2" : "flex gap-2"
                  }
                >
                  {userLoggedIn ? "Logout" : "Login"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
