import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';

const InputField = ({ type, placeholder }) => (
  <input
    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
    type={type}
    placeholder={placeholder}
    required
  />
);

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate}=useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/*------------ Left side ------------*/}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <InputField type="text" placeholder="First Name" />
          <InputField type="text" placeholder="Last Name" />
        </div>
        <InputField type="email" placeholder="Enter Valid Email" />
        <InputField type="text" placeholder="Street" />
        <div className="flex gap-3">
          <InputField type="text" placeholder="City" />
          <InputField type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <InputField type="number" placeholder="Zip Code" />
          <InputField type="text" placeholder="Country" />
        </div>
        <InputField type="number" placeholder="Phone" />
      </div>

      {/*------------ Right side ------------*/}
      <div className="flex flex-col gap-8">
        <div>
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Payment options go here */}
            <div
              onClick={() => setMethod('stripe')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === 'stripe' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div
              onClick={() => setMethod('razorpay')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === 'razorpay' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="Razorpay"
              />
            </div>
            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`w-4 h-4 border rounded-full ${
                  method === 'cod' ? 'bg-green-400' : ''
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
