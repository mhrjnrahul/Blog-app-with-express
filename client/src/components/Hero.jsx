import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='flex flex-col mt-10'>
            <p className='text-4xl text-center'>Publish your passions, your way</p>
            <p className='text-2xl text-center mt-3'>Create a unique and beautiful blog easily.</p>
        </div>
        <button className='bg-black text-xl text-white p-5 rounded-2xl mt-15'>CREATE YOUR BLOG</button>
    </div>
  )
}

export default Hero