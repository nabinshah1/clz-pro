import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { IoHome } from "react-icons/io5";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const{setShowSearch,getCartCount, navigate, token,setToken, setCartItem }=useContext(ShopContext);
  const logout = ()=>{
    navigate("/login")
    localStorage.removeItem('token')
    setToken('')
    setCartItem({})
    
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
    {/* Logo Section */}
    <Link to="/" ><img src={assets.loogo} className="w-36" alt="Logo" /></Link> {/* Link to home */}
  
    {/* Navigation Menu */}
    <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-1 text-purple-700 font-bold"
            : "flex flex-row items-center gap-1 hover:text-purple-700"
        }
      >
        <p> Home</p>
        <hr className="w-full border-none h-[1.5px] bg-gray-700" />
      </NavLink>
  <NavLink
    to="/collection"
    className={({ isActive }) =>
      isActive
        ? "flex flex-row items-center gap-1 text-purple-700 font-bold underline"
        : "flex flex-row items-center gap-1 hover:text-purple-700"
    }
  >
    <p>Collection</p>
    <hr className="w-full border-none h-[1.5px] bg-gray-700" />
  </NavLink>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive
        ? "flex flex-row items-center gap-1 text-purple-700 font-bold underline"
        : "flex flex-row items-center gap-1 hover:text-purple-700"
    }
  >
    <p>About</p>
    <hr className="w-full border-none h-[1.5px] bg-gray-700" />
  </NavLink>
  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? "flex flex-row items-center gap-1 text-purple-700 font-bold"
        : "flex flex-row items-center gap-1 hover:text-purple-700"
    }
  >
    <p>Contact</p>
    <hr className="w-full border-none h-[1.5px] bg-gray-700" />
  </NavLink>
</ul>

      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search Icon" />

        {/* Profile Dropdown */}
        <div className="group relative">
  {/* Profile Icon */}
  <img
    onClick={() => (token ? null : navigate('/login'))}
    className="w-5 cursor-pointer"
    src={assets.profile_icon}
    alt="Profile Icon"
  />

  {/* Dropdown Menu - Visible only when user is logged in */}
  {token && (
    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
      <div className="flex flex-col gap-2 w-36 py-5 bg-slate-100 text-gray-500 rounded">
        <p
          onClick={() => navigate('/profile')}
          className="cursor-pointer hover:text-black"
        >
          My Profile
        </p>
        <p
          onClick={() => navigate('/orders')}
          className="cursor-pointer hover:text-black"
        >
          Orders
        </p>
        <p
          onClick={() => logout()}
          className="cursor-pointer hover:text-black"
        >
          Logout
        </p>
      </div>
    </div>
  )}
</div>


        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon for Small Screens */}
        <img 
          onClick={() => setVisible(true)} 
          src={assets.menu_icon} 
          className="w-5 cursor-pointer sm:hidden" 
          alt="Menu Icon" 
        />
      </div>

      {/* Sidebar Menu for Small Screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div 
            onClick={() => setVisible(false)} 
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 borde" to="/">
  HOME
</NavLink>
<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 borde" to="/collection">
  COLLECTION
</NavLink>
<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 borde" to="/about">
  ABOUT
</NavLink>
<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 borde" to="/contact">
  CONTACT
</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
