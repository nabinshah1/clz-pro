import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-6 px-4 py-6">
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <img src={assets.loogo} className="mb-5 w-32 cursor-pointer" alt="Logo" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and testing industry.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/" className="hover:text-gray-800">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-800">About us</Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:text-gray-800">Delivery</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-800">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977-9869310109</li>
            <li>
              <a href="mailto:Thakurinabin150@gmail.com" className="hover:text-gray-800">
                Thakurinabin150@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300">
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright 2025 @ SajiloBAZZAR.com- All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
