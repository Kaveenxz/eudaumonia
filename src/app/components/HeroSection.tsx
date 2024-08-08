import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className='flex gap-14'>
        <div className=''>
            <div className='w-[27rem] h-[30rem] bg-gray-300 rounded-3xl'></div>
        </div>

        <div className='mt-5'>
            <h2 className='text-5xl font-semibold'>Fore Healthier Longer <br /> And Better Lives</h2>
            <p className='mt-10 text-lg'>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>

            <button className='mt-10 bg-[#B91A45] text-white px-10 rounded-2xl text-lg py-3'>Get Started</button>

            <h3 className='mt-10 text-lg font-bold'>240+</h3>
            <p className='mt-3'>People Joined</p>
        </div>
    </div>
  )
}

export default HeroSection