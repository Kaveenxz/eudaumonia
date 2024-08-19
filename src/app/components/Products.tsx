'use client'
import React from 'react'

function Products() {
    const products = [
        {
            id:1,
            title:"HEALTH",
            paragraph:"This journey we call life has many different milestones and each of us are at a different stage" 
        },
        {
            id:2,
            title:"RETIREMENT",
            paragraph:"This journey we call life has many different milestones and each of us are at a different stage" 
        },
        {
            id:3,
            title:"SAVINGS",
            paragraph:"This journey we call life has many different milestones and each of us are at a different stage" 
        },
        {
            id:4,
            title:"PROTECTION",
            paragraph:"This journey we call life has many different milestones and each of us are at a different stage" 
        }
    ]

    const handleClick = (id:any)=> {
        console.log("Button clicked"+id);
    }
    return (
        <div>
            <div>
                <h1 className='text-5xl font-semibold text-[#D31145] text-center max-md:text-3xl'>OUR PRODUCTS</h1>
                <p className='text-lg text-center mt-2 max-md:text-sm'>Find The Right Insurance For You And Your Loved Ones</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-8'>
               

                {
                    products.map((product:any) => (
                        <div className='border-2 border-gray-300 rounded-2xl flex py-5 px-8 gap-5 cursor-pointer' key={product.id} onClick={()=> handleClick(product.id)}>
                        <div className='w-6 h-6 rounded-full bg-blue-400'></div>
                        <div>
                            <h3 className='text-xl font-semibold max-md:text-lg'>{product.title}</h3>
                            <p className='max-md:text-sm'>{product.paragraph}</p>
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Products