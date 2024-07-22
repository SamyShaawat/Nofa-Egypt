import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { navItems } from "./../data/constants";
import { contact } from "./../data/constants";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
          <nav className="flex justify-between items-center py-3">
            {/* logo */}
            <a
              href="/"
              className="flex items-center gap-3 text-2xl text-black font-semibold "
            >
              <img src="../images/logo.png" alt="" className="w-28 mr-2" />
            </a>

            {/* nav items for large devices */}
            <ul className="hidden lg:flex gap-12">
              {navItems.map(({ path, title }) => (
                <li
                  key={path}
                  className="text-base text-BLACK hover:text-primary duration-300"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="hidden lg:flex justify-center space-x-12 items-center">
              {contact.map(({ path, title }) => (
                <li
                  key={path}
                  className="bg-primary text-white rounded-md flex gap-2 scale-100 hover:scale-110 duration-300"
                >
                  <NavLink to={path} className={({ isActive }) => (isActive ? "font-semibold flex gap-2 py-2 px-3" : "flex gap-2 py-2 px-3")}>
                  {title} <ArrowRight />
                  </NavLink>
                </li>
              ))}
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
              {navItems.map(({ path, title }) => (
                <li
                  key={path}
                  className="text-base text-white first:text-white py-1 hover:text-black/70 duration-300 hover:translate-x-1"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active-black" : ""
                    }
                    onClick={handleCloseMenu}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="lg:flex justify-center space-x-12 items-center">
              {contact.map(({ path, title }) => (
                <li
                  key={path}
                  className="bg-primary  text-white hover:text-black duration-300  flex gap-2 hover:translate-x-1"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active-black flex gap-2" : "flex gap-2 "
                    }
                    onClick={handleCloseMenu}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
