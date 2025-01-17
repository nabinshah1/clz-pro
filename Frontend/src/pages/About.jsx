import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title'; // Ensure this is the correct path to the Title component
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img 
          className="w-full md:max-w-[450px]" 
          src={assets.about_img} 
          alt="An image representing our brand and values" 
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-10">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default About;
