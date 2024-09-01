import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AuthButton = ({ userLoggedIn, handleAuthClick }) => (
  <li className="hover:bg-primary border-primary hover:text-slate-100 text-black border-2 rounded-md flex gap-2 duration-300">
    <button onClick={handleAuthClick} className="flex gap-2 py-2 px-3">
      {userLoggedIn ? "Logout" : "Login"}
    </button>
  </li>
);

export default AuthButton;
