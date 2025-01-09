import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import { use } from 'react';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} =useContext(ShopContext);
    const [latestproducts,setLatestProsucts] =useState([]);
    useEffect(()=>{
        setLatestProsucts(products.slice(0,10));

    },[])
   
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto  text-xs sm:text-sm md:text-base text-gray-600 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem lpsum has been the.
            </p>

        </div>
      {/*Rendering Products*/ }
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6 '>
{
    latestproducts.map((items,index)=>(
        <ProductItem key={index} id={items._id} image={items.image}  name={items.name} price={items.price}/>
    ))
}
      </div>

    </div>
  )
}

export default LatestCollection
