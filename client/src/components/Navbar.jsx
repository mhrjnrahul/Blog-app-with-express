import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[url("/thumbnail.png")] bg-no-repeat bg-cover flex justify-between items-center text-white px-10 w-full h-16'>
      <div className='text-2xl'>Blogger</div>
      <div>
        <button>SIGN IN</button>
      </div>
    </nav>
  )
}

export default Navbar