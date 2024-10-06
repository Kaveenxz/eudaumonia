'use client'
import React from 'react'
import { getProductById } from '@/app/api/product/apit'
import { useQuery } from 'react-query'
import prd2 from '@/app/images/Rectangle 62.png'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'

const defaultImageUrl = prd2;

function ProductDetails(a: any) {
  const id = a.params.detail

  const { data, error, isLoading } = useQuery(['product', id], () => getProductById(id), {
    staleTime: 1000 * 60 * 5
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load product details</p>;

  const { name, description, categoryId, productImages } = data || {};
  const imageUrl = productImages && productImages.length > 0 ? productImages[0].url : defaultImageUrl;

  // Adding fake data for fields missing in API response
  const mainTitle = "AIA Health Protector";
  const maximumCoverAge = "Up to age 75";
  const issueAge = "Age 19-60";
  const purchaseSource = "AIA Wealth Planner / Financial Planning Executive / Authorized Broker";

  return (
    <div className='mx-4 md:mx-10 lg:mx-20 my-10 lg:my-20'>
      <div>
      <Navbar/>
      </div>
      {/* Main Title */}
      <h1 className='text-3xl lg:text-5xl font-bold text-[#D31145] mb-6'>{mainTitle}</h1>

      {/* Flex layout for large screens */}
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Left section with text content */}
        <div className='flex-1'>
          <h2 className='text-2xl font-bold mb-4'>What is {mainTitle}?</h2>
          <p className='text-lg mb-6'>
            {description || 'A comprehensive health cover that allows you and your family to afford the best healthcare anywhere in the world.'}
          </p>

          <div className='bg-gray-100 p-4 rounded-md mb-6'>
            <h3 className='text-xl font-semibold mb-2'>Maximum Cover Ceasing Age</h3>
            <p>{maximumCoverAge}</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-md mb-6'>
            <h3 className='text-xl font-semibold mb-2'>Issue Age</h3>
            <p>{issueAge}</p>
          </div>

          <p className='text-md text-gray-700'>
            You can buy this from a <strong>{purchaseSource}</strong>
          </p>
        </div>

        {/* Right section with image */}
        <div className='flex-1'>
          <Image 
            src={imageUrl} 
            alt={name || prd2} 
            className='w-full h-auto object-cover rounded-md'
            width={600}
            height={400} // Add dimensions to control the size
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
