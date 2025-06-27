import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#808080] text-gray-600 px-6 py-12'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-12'> 
                <div>
                    <h3 className='text-white text-lg font-semibold mb-6'>Help</h3>
                    <ul className='space-y-4'>
                        <li className='hover:text-white'>Help Center</li>
                        <li className='hover:text-white'>Help Forum</li>
                        <li className='hover:text-white'>Video Tutorials</li>
                    </ul>
                </div>

                <div >
                    <h3 className='text-white text-lg font-semibold mb-6'>Community</h3>
                    <ul className='space-y-4'>
                        <li className='hover:text-white'>Blogger Buzz</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-white text-lg font-semibold mb-6'>Developers</h3>
                    <ul className='space-y-4'>
                        <li className='hover:text-white'>Blogger API</li>
                        <li className='hover:text-white'>Developer Forum</li>
                    </ul>
                </div>
            </div>

            <div className='border-t border-black pt-8'></div>

            <div className='mt-4'>
                <div className='flex justify-between max-w-70 md:flex-row flex-col items-center'> 
                    <span>Terms of policy</span>
                    <span>Privacy</span>
                    <span>Content Policy</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer