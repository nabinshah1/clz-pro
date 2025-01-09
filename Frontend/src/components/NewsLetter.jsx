import React from 'react'

const NewsLetter = () => {
    const onSubmitHandler=(event)=>{
        event.pteventDefult();

    }
  return (
    <div className='text-center'>
        <p className=' text-2xl font-medium text-gray-800'>Subscribe now & 20% off</p>
        <p className=' text-gray-400 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and testing industry.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email'  required />
            <button type='submit' className='bg-black text-white text-xs py-4 px-10 '>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetter
