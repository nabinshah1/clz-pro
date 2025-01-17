import React from 'react';
import Title from '../components/Title';
import Newsletter from '../components/Newsletter';
import { assets } from '../assets/assets';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa"; 

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t-4">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-10 mb-28 px-4 lg:px-20">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-[480px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Contact Information */}
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4 p-6 bg-white shadow-lg rounded-lg">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            <FaLocationDot /> Lamki Chuha Municipility 01 <br />
            Lamki, Kailali, Sudurpaschim province, Nepal
          </p>
          <p className='text-gray-500'>
            <BsTelephoneFill /> Tel: (01-56236) <br />
            <MdOutlineEmail /> Email: thakurinabin150@gmail.com
          </p>

          <p className='font-semibold text-xl text-gray-600'>Careers at Sajilo Bazar</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>

          <button 
            onClick={() => window.location.href = "/careers"} 
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 transform hover:scale-105'>
            Explore Jobs
          </button>
        </div>
      </div>
      
      <div className="text-center text-2xl pt-10 border-t-4">
        <Title text1="OUR" text2="TEAM" />
      </div>

      {/* Divided Section with 3 Parts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {/* Part 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
          <img
            className="w-32 h-32 object-cover rounded-full mb-4 transition-all duration-300 hover:scale-110"
            src={assets.image_1}  // Ensure this path is correct
            alt="Nabin Shah"
          />
          <h3 className="font-semibold text-xl text-gray-600">Nabin Shah</h3>
          <p className="text-gray-500">Owner of Sajilo Bazar</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <a href="tel:+9869310109" className="transition-all duration-300 hover:text-blue-500" aria-label="Phone number of Nabin Shah">
              <FaPhoneAlt className="text-xl" />
            </a>
            <a href="mailto:thakurinabin150@gmail.com" className="transition-all duration-300 hover:text-blue-500" aria-label="Email Nabin Shah">
              <MdOutlineEmail className="text-xl" />
            </a>
            <a href="https://www.facebook.com/share/1Ekfb5RLQL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-blue-500" aria-label="Facebook profile of Nabin Shah">
              <FaFacebookF className="text-xl" />
            </a>
          </div>
        </div>

        {/* Part 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
          <img
            className="w-32 h-32 object-cover rounded-full mb-4 transition-all duration-300 hover:scale-110"
            src={assets.image_2}  // Ensure this path is correct
            alt="Anjana Shrestha"
          />
          <h3 className="font-semibold text-xl text-gray-600">Anjana Shrestha</h3>
          <p className="text-gray-500">IT </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <a href="tel:+01-56236" className="transition-all duration-300 hover:text-blue-500" aria-label="Phone number of Anjana Shrestha">
              <FaPhoneAlt className="text-xl" />
            </a>
            <a href="mailto:thakurinabin150@gmail.com" className="transition-all duration-300 hover:text-blue-500" aria-label="Email Anjana Shrestha">
              <MdOutlineEmail className="text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-blue-500" aria-label="Facebook profile of Anjana Shrestha">
              <FaFacebookF className="text-xl" />
            </a>
          </div>
        </div>

        {/* Part 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
          <img
            className="w-32 h-32 object-cover rounded-full mb-4 transition-all duration-300 hover:scale-110"
            src={assets.image_3}  // Ensure this path is correct
            alt="Gaurab Lama"
          />
          <h3 className="font-semibold text-xl text-gray-600">Gaurab Lama</h3>
          <p className="text-gray-500">Managing Director</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <a href="tel:+01-56236" className="transition-all duration-300 hover:text-blue-500" aria-label="Phone number of Gaurab Lama">
              <FaPhoneAlt className="text-xl" />
            </a>
            <a href="mailto:thakurinabin150@gmail.com" className="transition-all duration-300 hover:text-blue-500" aria-label="Email Gaurab Lama">
              <MdOutlineEmail className="text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-blue-500" aria-label="Facebook profile of Gaurab Lama">
              <FaFacebookF className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
