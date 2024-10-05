'use client'
import React from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlog } from '@/app/api/blog/api'; 
import img1 from '@/app/images/blog1.png'

function Blog() {

  const img = img1
  const { data: blogs, isLoading, isError } = useQuery('getBlogs', getAllBlog);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blogs</p>;

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-5xl font-semibold max-md:text-3xl">
          Read our blog
        </h1>
      </div>

      <div className="flex overflow-x-scroll mt-6 space-x-6">
        {blogs?.map((blog: any) => (
          <div key={blog.id} className="min-w-[300px]">
            <Image
              src={
                img
              }
              alt={blog.topic}
              width={300}
              height={200}
            />
            <h1 className="text-xl font-semibold mt-2">{blog.topic}</h1>
            <p className="mr-3 mb-3">
              {truncateDescription(blog.description.replace(/<\/?[^>]+(>|$)/g, ''), 100)}
            </p>
            <Link href={`/blog/${blog.id}`} className="text-[#D31145]">
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="text-center mt-8 border-2 w-24 border-gray-300">
          
          <Link href={`/blog`} className="text-[#D31145]">
              All
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
