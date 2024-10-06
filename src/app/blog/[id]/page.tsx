'use client'
import { useQuery } from 'react-query';
import { getBlogById } from '@/app/api/blog/api'; // Create this API call to fetch a single blog by ID
import Image from 'next/image'; // Make sure to import Image from Next.js
import img1 from '@/app/images/blog2.png'
import Navbar from '@/app/components/Navbar';

function BlogDetails(param: any) {
  const id = param.params.id;
  const img = img1
  console.log(id);
  const { data: blog, isLoading, isError } = useQuery(
    ['getBlogById', id],
    () => getBlogById(id),
    { enabled: !!id }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blog details</p>;

  return (
    <div className="min-h-screen py-8 bg-gray-50 px-4 md:px-8 lg:px-16">
      <div>
      <Navbar/>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mt-14">
        {blog?.topic}
      </h1>

      <div className="border-t-2 border-gray-200 my-8"></div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-lg leading-8 text-gray-600"
             dangerouslySetInnerHTML={{ __html: blog?.description }} 
        />

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mt-8">
              <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={img}
                  alt={blog.topic}
                  
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
      </div>

    </div>
  );
}

export default BlogDetails;
