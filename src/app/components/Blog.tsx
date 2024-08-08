
import React from 'react'
import Image from 'next/image'
import img1 from '@/app/images/2.png'
import img2 from '@/app/images/3.png'
import img3 from '@/app/images/image.png'
import Link from 'next/link'
import { ArrowBigRight } from 'lucide'

function Blog() {

 const blogs = [
    {
        id: 1,
        image: img1,
        name: "PM mental models",
        shortDesc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    },
    {
        id: 2,
        image: img2,
        name: "PM mental models",
        shortDesc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    },
    {
        id: 3,
        image: img3,
        name: "PM mental models",
        shortDesc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    }
 ]
  return (
    <div>
        <div>
            <h1 className='text-center text-5xl font-semibold'>Read our blog</h1>
        </div>

        <div className='grid grid-cols-3 gap-6 mt-10'>
            {blogs.map((blog:any) => (
                <div key={blog.id} className='px-14'>
                    <Image src={blog.image} alt='img' width={300} height={200} />
                    <h1 className='text-xl font-semibold mt-2'>{blog.name}</h1>
                    <p className='mr-3 mb-3'>{blog.shortDesc}</p>
                    <Link href={"#"} className='text-[#D31145]'>Learn More</Link>
                </div>
            ))}
        </div>
        <div className='flex justify-center'>
        <div className='text-center mt-8 border-2 w-24 border-gray-300'>Next</div>
        </div>
    </div>
  )
}

export default Blog