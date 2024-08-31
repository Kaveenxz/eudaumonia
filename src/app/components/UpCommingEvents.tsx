import Link from 'next/link'
import React from 'react'

function UpCommingEvents() {
  return (
    <div className='flex gap-14 border-2 rounded-3xl border-gray-300'>
      <div className='mt-6 lg:mx-32 mx-4'>
        <h2 className='text-5xl max-md:text-3xl font-semibold text-[#D31145] text-center'>Up Comming Events</h2>
        <p className='text-lg max-md:text-sm mt-6 text-balance text-center'>
          Insurance is part and parcel of day-to-day activities in life, and more importantly, in a commercial environment. Ceylinco insurance as always given us the best, with minimum hassle, and convenientsolutions, which suit our business, segment the most.
          Mr. <br /> Sheran Karunasena</p>
        <div className=' flex items-center justify-center my-6'>
          <button className='bg-[#B91A45] text-white px-14  text-lg max-md:text-sm py-3'><Link href={'/up-comming-events'}>Join Now</Link></button>
        </div>
      </div>
    </div>
  )
}

export default UpCommingEvents