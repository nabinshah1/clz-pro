import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          {/* Top Border Line */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-[2px] bg-[#414141]"></div>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          {/* Heading */}
          <h1 prata-regular className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1 >
          {/* Bottom Border Line */}
          <div className="flex items-center gap-2 mt-3">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <div className="w-16 h-[2px] bg-[#414141]"></div>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
