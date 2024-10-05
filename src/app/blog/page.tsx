'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { getAllBlog } from '@/app/api/blog/api'; // import your API call

export default function Blog() {
  const router = useRouter();

  // Fetch the blogs using useQuery
  const { data: blogPosts, isLoading, error } = useQuery('blogs', getAllBlog);

  // Function to handle the click and navigate to blog/[id] page
  const handleClick = (id: any) => {
    router.push(`/blog/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs</div>;

  return (
    <div className="flex flex-col items-center min-h-screen mx-4 md:mx-10 lg:mx-20 my-10 lg:my-20">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8">All blog posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleClick(post.id)}
            >
              {/* Placeholder image, replace with actual image logic if available */}
              <Image
                src={post?.blogImages[0]?.url || '/placeholder-image.png'}
                alt={post.topic}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.topic}</h2>
                {/* Render HTML description safely */}
                <div
                  className="text-gray-600 mt-2"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <button
                  className="text-red-600 hover:text-red-800 mt-2"
                  onClick={() => handleClick(post.id)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons (if required in the future) */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-gray-200 rounded-2xl mx-2 hover:bg-gray-300">
            &larr;
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-2xl mx-2 hover:bg-gray-300">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
