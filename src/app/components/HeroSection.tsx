import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className='flex lg:gap-14 max-lg:flex-col'>
      <div className='flex items-center justify-center'>
        <div className='w-96 h-96 bg-gray-300 rounded-3xl'></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-5xl font-semibold max-md:text-3xl'>Fore Healthier Longer And Better Lives</h2>
        <p className='mt-6 text-lg'>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>

        <button className='mt-6 bg-[#B91A45] text-white px-10 rounded-2xl text-lg py-3'>Get Started</button>

        <div className='lg:flex-col flex gap-5 max-lg:items-center max-lg:mt-6'>
          <h3 className='lg:mt-6 text-lg font-bold'>240+</h3>
          <p className=''>People Joined</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection