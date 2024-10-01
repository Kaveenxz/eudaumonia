'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { getProductCategories } from '@/app/api/product/apit' // Make sure the path is correct
import { useQuery } from 'react-query'

function Products() {
    const router = useRouter()

    // Fetch categories using React Query
    const { data: categories, isLoading, isError } = useQuery({
        queryKey: ['productCategories'],
        queryFn: getProductCategories
    })

    if (isLoading) return <div>Loading categories...</div>
    if (isError) return <div>Error fetching categories</div>

    const handleClick = (id: number, name: string) => {
        router.push(`/products/${id}`)
    }

    return (
        <div>
            <div>
                <h1 className='text-5xl font-semibold text-[#D31145] text-center max-md:text-3xl'>OUR PRODUCTS</h1>
                <p className='text-lg text-center mt-2 max-md:text-sm'>Find The Right Insurance For You And Your Loved Ones</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-8'>
                {
                    categories?.data?.map((category: any) => (
                        <div 
                            key={category.id} 
                            className='border-2 border-gray-300 rounded-2xl flex py-5 px-8 gap-5 cursor-pointer' 
                            onClick={() => handleClick(category.id, category.name)}
                        >
                            <div className='w-6 h-6 rounded-full bg-blue-400'></div>
                            <div>
                                <h3 className='text-xl font-semibold max-md:text-lg'>{category.name}</h3>
                                <p className='max-md:text-sm'>{category.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;
