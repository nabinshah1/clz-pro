import React from 'react';
import { NavLink } from 'react-router-dom'; // Correctly import NavLink
import { assets } from '../assets/assets'; // Ensure the correct asset path

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-gray-800 p-4 shadow-lg">
      <div className="flex flex-col gap-6 pt-6">
        {/* Add Item */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md ${isActive ? 'bg-gray-200' : ''}`
          }
          to="/add"
        >
          <img className="w-6 h-6" src={assets.add_icon} alt="Add Item" />
          <p className="hidden md:block text-sm">Add Item</p>
        </NavLink>

        {/* Item List */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md ${isActive ? 'bg-gray-200' : ''}`
          }
          to="/items"
        >
          <img className="w-6 h-6" src={assets.order_icon} alt="Item List" />
          <p className="hidden md:block text-sm">Item List</p>
        </NavLink>

        {/* Orders */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md ${isActive ? 'bg-gray-200' : ''}`
          }
          to="/orders"
        >
          <img className="w-6 h-6" src={assets.order_icon} alt="Orders" />
          <p className="hidden md:block text-sm">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
