import React from 'react'
import Image from 'next/image'
import img from '@/app/images/activity.png'
function Activities() {
  return (
         <div className='flex gap-14 border-2 rounded-3xl border-gray-300'>
            <div className='w-full'>
                    <Image src={img} alt='img'></Image>
            </div>

            <div className='mt-5'>
                <h2 className='text-5xl font-semibold text-[#D31145] text-center'>ACTIVITIES</h2>
                <p className='mt-10 text-lg '>Insurance is part and parcel of day-to-day activities in life, and more importantly, in a commercial environment. Ceylinco insurance as always given us the best, with minimum hassle, and convenient solutions, which suit our business, segment the most. and convenient solutions, which suit our business, segment the most.</p>
                <p className='mt-4 text-lg '>Mr. Sheran Karunasena</p>
            </div>
        </div>
  )
}

export default Activities