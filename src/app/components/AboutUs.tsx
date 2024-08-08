import React from 'react'
import Image from 'next/image'
import img from '@/app/images/Group 19.png'
function AboutUs() {
    return (
        <div className='flex gap-14'>
            <div className=''>
                <Image src={img} alt='img' className='' width={2300}></Image>
            </div>

            <div className='mt-5'>
                <h2 className='text-5xl font-semibold'>About Us</h2>
                <p className='mt-10 text-lg mb-2'>For the last 12+ years, we have provided process- driven digital solutions for our clients across the globe. Our skills in innovation and technologies empower us to focus on cutting-edge technologies to create adaptable, secure and simple to-utilize web applications that work over numerous devices. Our vast range of services include custom software development, web application development, mobile application development, Web designing, eCommerce solutions, web hosting solutions, digital marketing and search engine optimization and software testing and QA services.</p>

                <a href="" className='text-[#D31145]'>Read more</a>
            </div>
        </div>
    )
}

export default AboutUs