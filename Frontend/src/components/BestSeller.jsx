import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext); // Accessing products from context
  const [bestseller, setBestseller] = useState([]);

  // Filter and set best-selling products
  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestseller(bestProduct.slice(0, 5)); // Limit to top 5
    }
  }, [products]);

  return (
    <div className="my-10">
      {/* Title Section */}
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestseller.map((item) => (
          <ProductItem
            key={item._id} // Unique key
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price} // Added price prop
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
