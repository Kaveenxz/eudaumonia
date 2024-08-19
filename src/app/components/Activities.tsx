import React from 'react'
import Image from 'next/image'
import img from '@/app/images/activity.png'
function Activities() {
  return (
         <div className='flex gap-14 border-2 rounded-3xl border-gray-300'>
            <div className='w-full  object-cover max-lg:hidden'>
                    <Image src={img} alt='img' className='w-screen object-cover rounded-tl-3xl rounded-bl-3xl h-full'></Image>
            </div>

            <div className='mt-5'>
                <h2 className='text-5xl font-semibold text-[#D31145] text-center max-md:text-3xl'>ACTIVITIES</h2>
                <p className='mt-6 text-lg max-md:text-sm max-lg:mx-3'>Insurance is part and parcel of day-to-day activities in life, and more importantly, in a commercial environment. Ceylinco insurance as always given us the best, with minimum hassle, and convenient solutions, which suit our business, segment the most. and convenient solutions, which suit our business, segment the most.</p>
                <p className='my-2 text-lg max-md:text-sm max-lg:mx-3'>Mr. Sheran Karunasena</p>
            </div>
        </div>
  )
}

export default Activities