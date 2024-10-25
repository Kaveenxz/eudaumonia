'use client'
import React from 'react'
import Image from 'next/image'
import prd1 from '@/app/images/Rectangle 60.png'
import prd3 from '@/app/images/Rectangle 61.png'
import prd2 from '@/app/images/Rectangle 62.png'
import { useParams, useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
    const url = useParams()
    console.log(url)
    const products = [
        {
            id: 1,
            title: "HEALTH",
            image: prd1,
            desc: "This journey we call life has many different milestones and each of us are at a different stage. Our experiences, our needs, our dreams and aspirations Our experiences, our needs, our dreams and aspirations…Our experiences, our needs, our dreams and aspirations…Our experiences, our ne "
        },
        {
            id: 2,
            title: "HEALTH",
            image: prd3,
            desc: "This journey we call life has many different milestones and each of us are at a different stage. Our experiences, our needs, our dreams and aspirations Our experiences, our needs, our dreams and aspirations… Our experiences, our needs, our dreams and aspirations…Our experiences, our ne "
        },
        {
            id: 3,
            title: "HEALTH",
            image: prd2,
            desc: "This journey we call life has many different milestones and each of us are at a different stage. Our experiences, our needs, our dreams and aspirations Our experiences, our needs, our dreams and aspirations…Our experiences, our needs, our dreams and aspirations…Our experiences, our ne "
        }
    ]

    const handleClick = (id:any)=> {
        router.push("/"+url.products+"/"+url.id+"/"+id)
    }
    return (
        <div className='lg:mx-20 lg:my-20 mx-6 my-20 '>
            <div>
                {products.map((product: any) => (
                    <div key={product.id} className='flex gap-5 my-5 max-md:flex-col'>
                        <Image src={product.image} alt='product-img'></Image>
                        <div>
                            <div className='flex gap-2 items-center mb-3'>
                                <div className='w-4 h-4 bg-[#d31145] rounded-full'></div>
                                <h1 className='text-xl font-semibold'>{product.title}</h1>
                            </div>
                            <p>{product.desc}</p>
                            <div className='flex justify-end mt-5 max-md:justify-start'>
                                <button className='bg-[#D31145] text-white text-nowrap h-10 px-3 rounded-2xl' onClick={()=> handleClick(product.id)}>More Details --{'>'}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page