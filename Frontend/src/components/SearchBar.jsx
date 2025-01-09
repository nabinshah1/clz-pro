import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true); // Show the search bar only on the 'collection' page
    } else {
      setVisible(false); // Hide it otherwise
    }
  }, [location, showSearch]); // Depend on both location and showSearch to update visibility

  return showSearch && visible ?(
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <img
          className="w-4"
          src={assets.search_icon || '/fallback-icon.png'} // Fallback for missing icon
          alt="Search Icon"
        />
      </div>
      <button
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        aria-label="Close Search Bar"
      >
        <img src={assets.cross_icon || '/fallback-close.png'} alt="Close Icon" />
      </button>
    </div>
  ) : null;
};

export default SearchBar;
