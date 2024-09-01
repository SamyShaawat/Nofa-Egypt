import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import { navItems, contact } from "../../data/constants";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

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

  const handleDropdownMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleDropdownMouseLeave = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownTimeout(
      setTimeout(() => {
        setIsDropdownOpen((prevState) => ({
          ...prevState,
          [index]: false,
        }));
      }, 200)
    );
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

  // Dynamically add "Control Panel" to the navItems when logged in
  const dynamicNavItems = userLoggedIn
    ? [...navItems, { path: "/control-panel", title: "Control Panel" }]
    : navItems;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-3">
          <Logo />
          <DesktopNav
            navItems={dynamicNavItems}
            contact={contact}
            isDropdownOpen={isDropdownOpen}
            handleNavLinkClick={handleNavLinkClick}
            handleDropdownMouseEnter={handleDropdownMouseEnter}
            handleDropdownMouseLeave={handleDropdownMouseLeave}
            handleAuthClick={handleAuthClick}
            userLoggedIn={userLoggedIn}
          />
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
        <MobileMenu
          navItems={dynamicNavItems}
          isMenuOpen={isMenuOpen}
          handleNavLinkClick={handleNavLinkClick}
          isDropdownOpen={isDropdownOpen}
          handleDropdownMouseEnter={handleDropdownMouseEnter}
          handleDropdownMouseLeave={handleDropdownMouseLeave}
          contact={contact}
          handleAuthClick={handleAuthClick}
          userLoggedIn={userLoggedIn}
        />
      </div>
    </header>
  );
};

export default Navbar;
