import React from 'react'
import Link from 'next/link'

const NotFound = () => {


  return (
    <div className='bg-[#F0F3FF] w-full h-screen flex justify-center flex-col gap-20 max-sm:gap-10 items-center'>
        <h1 className='uppercase text-5xl max-sm:text-3xl font-extrabold tracking-wide text-[#D31145]'>EUDAIMONIA</h1>
        <h1 className='text-9xl max-sm:text-7xl font-bold'>404</h1>

        <p className='text-center max-sm:text-xs max-sm:tracking-tighter px-28 max-sm:px-5'>Page you are looking for cannot be found,

         you are in the world of lost urls dont worry click the below home button to get back to where you
         came from</p>

        <Link href='/'>
         <button className='border-2 px-8 py-4 text-white bg-[#D31145] rounded-lg hover:bg-[#a50d36] hover:text-[#F0F3FF] max-sm:px-5 max-sm:py-3 max-sm:text-xs'> Go to home </button>
        </Link>
    </div>
  )
}

export default NotFound
