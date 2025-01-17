import React from "react";
// Ensure the correct import path and extension
import { assets } from "../assets/assets"; 

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Call the setToken function to update the state and log the user out
    setToken('');
  };

  return (
    <div className="flex items-center py-2 px-[04%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.loogo} alt="Logo" />
      <button 
        onClick={handleLogout} 
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
