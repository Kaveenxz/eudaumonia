import React from 'react'
import Image from 'next/image'
import img from '@/app/images/Rectangle 81.png'
function page() {
  return (
    <div className='mx-20 my-20'>
        <h1 className='text-5xl text-[#D31145] mb-5'>About Us</h1>
        <div className='flex gap-10'>
            <div>
                
                <p className=' leading-8'>For the last 12+ years, we have provided process- driven digital solutions for our clients across the globe. Our skills in innovation and technologies empower us to focus on cutting-edge technologies to create adaptable, secure and simple to-utilize web applications that work over numerous devices. Our vast range of services include custom software development, web application development, mobile application development, Web designing, eCommerce solutions, web hosting solutions, digital marketing and search engine optimization and software testing and QA services.For the last 12+ years, we have provided process- driven digital solutions for our clients across the globe. Our skills in innovation and technologies empower us to focus on cutting-edge technologies to create adaptable, secure and simple to-utilize web applications that work over numerous devices. Our vast range of services include custom software development, web application development, mobile application development, Web designing, eCommerce </p>
            </div>

            <div>
                <Image src={img} alt='' width={2700}></Image>
            </div>
        </div>
        <div className='mt-8'>
            <p className='leading-8'>For the last 12+ years, we have provided process- driven digital solutions for our clients across the globe. Our skills in innovation and technologies empower us to focus on cutting-edge technologies to create adaptable, secure and simple to-utilize web applications that work over numerous devices. Our vast range of services include custom software development, web application development, mobile application development, Web designing, eCommerce solutions, web hosting solutions, digital marketing and search engine optimization and software testing and QA services.For the last 12+ years, we have provided process- driven digital solutions for </p>
        </div>
    </div>
  )
}

export default page