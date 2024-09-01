import React from 'react';
import NavItem from './NavItem';
import AuthButton from './AuthButton';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const DesktopNav = ({ navItems, contact, isDropdownOpen, handleNavLinkClick, handleDropdownMouseEnter, handleDropdownMouseLeave, handleAuthClick, userLoggedIn }) => (
  <>
    {/* nav items for large devices */}
    <ul className="hidden lg:flex gap-12">
      {navItems.map(({ path, title, dropdown, subItems }, index) => (
        <NavItem
          key={path}
          path={path}
          title={title}
          dropdown={dropdown}
          subItems={subItems}
          index={index}
          isDropdownOpen={isDropdownOpen}
          handleNavLinkClick={handleNavLinkClick}
          handleDropdownMouseEnter={handleDropdownMouseEnter}
          handleDropdownMouseLeave={handleDropdownMouseLeave}
        />
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
      <AuthButton
        userLoggedIn={userLoggedIn}
        handleAuthClick={handleAuthClick}
      />
    </ul>
  </>
);

export default DesktopNav;
