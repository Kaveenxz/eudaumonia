'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import img from '@/app/images/activity.png'
import { useQuery } from 'react-query'
import { getallActivities } from '../api/activities/api'

function Activities() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => getallActivities(),
    staleTime: 3000,
    retry: 3
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % data.length)
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [data])

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % data.length)
  }

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length)
  }

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading activities</p>

  return (
    <div className='flex flex-col lg:flex-row gap-14 border-2 rounded-3xl border-gray-300'>
      <div className='relative w-full lg:w-1/2 max-lg:hidden'>
        {data?.map((activity:any, index:any) => (
          <div
            key={activity.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={img} alt={activity.topic} layout='fill' objectFit='cover' className='rounded-tl-3xl rounded-bl-3xl' />
          </div>
        ))}
        <button onClick={handlePrev} className='absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl'>‹</button>
        <button onClick={handleNext} className='absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl'>›</button>
      </div>

      <div className='w-full  p-6'>
        <h2 className='text-4xl font-semibold text-[#D31145] text-center max-md:text-3xl'>ACTIVITIES</h2>
        {data && (
          <div className='mt-6 text-center'>
            <h3 className='text-3xl font-bold'>{data[currentSlide].topic}</h3>
            <p className='mt-4 text-lg max-md:text-sm'>{data[currentSlide].description}</p>
            <p className='mt-2 text-lg max-md:text-sm font-semibold'>{`Created by: User ${data[currentSlide].createdBy}`}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Activities
