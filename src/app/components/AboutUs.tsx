import React from 'react'
import Image from 'next/image'
import img from '@/app/images/Group 19.png'
import Link from 'next/link'
function AboutUs() {
    return (
        <div className='flex gap-14 max-md:flex-col-reverse'>
            <div className='flex items-center justify-center'>
                <Image src={img} alt='img' className='' width={3200}></Image>
            </div>

            <div className='mt-5'>
                <h2 className='text-5xl font-semibold max-md:text-center max-md:text-3xl'>About Us</h2>
                <p className='mt-10 max-md:mt-5 text-lg mb-2 max-md:text-md'>For the last 12+ years, we have provided process- driven digital solutions for our clients across the globe. Our skills in innovation and technologies empower us to focus on cutting-edge technologies to create adaptable, secure and simple to-utilize web applications that work over numerous devices. Our vast range of services include custom software development, web application development, mobile application development, Web designing, eCommerce solutions, web hosting solutions, digital marketing and search engine optimization and software testing and QA services.</p>

                <Link href="/about-us" className='text-[#D31145]'>Read more</Link>
            </div>
        </div>
    )
}

export default AboutUs