// src/components/Navbar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PawfectCareLogo from "../../assets/User-Page-Image/PawfectCareLogo.svg";

const TopNavUser = () => {
  const navigate = useNavigate();
  const location = useLocation(); // get current path

  const delayedNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full flex items-center px-10 py-3 z-50 bg-white shadow-md caret-transparent">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src={PawfectCareLogo}
          alt="Pawfect Care Logo"
          className="w-10 h-10"
        />
        <span className="text-2xl font-bold">Pawfect Care</span>
      </div>

      {/* Center: Navigation */}
      <nav className="flex-grow flex justify-center gap-10 text-sm font-medium">
        <button
          onClick={() => delayedNavigate("/user/dashboard")}
          className={`hover:text-[#ff7e67] transition-colors font-bold text-lg ${
            isActive("/user/dashboard") ? "underline" : ""
          }`}
        >
          About Us
        </button>
        <button
          onClick={() => delayedNavigate("/user/adoption")}
          className={`hover:text-[#ff7e67] transition-colors font-bold text-lg ${
            isActive("/user/adoption") ? "underline" : ""
          }`}
        >
          Adoption
        </button>
        <button
          onClick={() => delayedNavigate("/user/booking")}
          className={`hover:text-[#ff7e67] transition-colors font-bold text-lg ${
            isActive("/user/booking") ? "underline" : ""
          }`}
        >
          Book
        </button>
      </nav>

      {/* Right: Sign in */}
      <button
        onClick={() => navigate("/user/login")}
        className="ml-auto px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
      >
        Sign in
      </button>
    </header>
  );
};

export default TopNavUser;
