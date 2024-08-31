import React from 'react'
import Image from 'next/image'
import img from '@/app/images/download (1) 1.png'

function ContactUs() {
    return (
        <div className='flex flex-col lg:flex-row border-2 rounded-3xl border-gray-300  mx-auto'>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start max-lg:hidden'>
                <Image src={img} alt='Contact Us' className='rounded-xl' width={500}/>
            </div>

            <div className='w-full lg:w-1/2 mt-2'>
                <h2 className='text-3xl lg:text-5xl font-semibold text-[#D31145] text-center'>Contact Us</h2>

                <form className='flex flex-col space-y-5 p-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='mb-2 font-medium'>Name</label>
                        <input type="text" id="name" placeholder='Your name' className='border rounded-lg p-3' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="email" className='mb-2 font-medium'>Email</label>
                        <input type="email" id="email" placeholder='you@company.com' className='border rounded-lg p-3' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="number" className='mb-2 font-medium'>Phone number</label>
                        <input type="tel" id="number" placeholder='+94 71 361 690' className='border rounded-lg p-3' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="help" className='mb-2 font-medium'>How can we help?</label>
                        <textarea id="help" placeholder='Tell us a little about the project...' rows="4" className='border rounded-lg p-3'></textarea>
                    </div>

                    <button type="submit" className='bg-[#D31145] text-white rounded-lg p-3 mt-5'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
