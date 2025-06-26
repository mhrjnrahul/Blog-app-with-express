import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black text-white px-10 w-full h-16'>
      <div>Blogger</div>
      <div>
        <button>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar