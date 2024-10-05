'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { getProductCategories } from '@/app/api/product/apit' 
import { useQuery } from 'react-query'
import img from '@/app/images/Rectangle 60.png'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function ProductsPage() {
  const { id }: any = useParams()
  const router = useRouter()

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['productCategories'],
    queryFn: getProductCategories
  })

  const fallbackImage = img

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error fetching products</div>

  const selectedCategory = categories?.data?.find((category: any) => category.id === parseInt(id))

  return (
    <div className="lg:mx-20 lg:my-20 mx-6 my-20">
      <div>
        {selectedCategory?.products?.map((product: any) => (
          <div key={product.id} className="flex gap-5 my-5 max-md:flex-col">
            {/* Product Image */}
            <Image
              src={product.imageUrl ? product.imageUrl : fallbackImage}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-md max-md:w-full" // Ensure responsive and proper sizing
            />
            {/* Product Info */}
            <div className="flex-1">
              {/* Product Name and Red Dot */}
              <div className="flex gap-2 items-center mb-3 mt-3">
                <div className="w-4 h-4 bg-[#d31145] rounded-full"></div>
                <h1 className="text-xl font-semibold text-[#d31145]">{product.name}</h1>
              </div>
              {/* Product Description */}
              <p className="text-gray-700">
                {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
              </p>
              {/* More Details Button */}
              <div className="flex justify-end mt-5 max-md:justify-start">
                <button 
                  className="bg-[#D31145] text-white text-sm h-10 px-6 rounded-2xl flex items-center justify-center"
                  onClick={() => router.push(`${id}/${product.id}`)}
                >
                  More Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage;
