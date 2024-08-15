import React from 'react';
import Image from 'next/image';
import blog1 from '@/app/images/blog1.png'
import blog2 from '@/app/images/blog2.png'
import blog3 from '@/app/images/blog3.png'
import blog4 from '@/app/images/blog4.png'
import blog5 from '@/app/images/blog5.png'
import blog6 from '@/app/images/blog-6.png'

const blogPosts = [
  {
    title: 'Bill Walsh leadership lessons',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    image: blog1,
  },
  {
    title: 'PM mental models',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    image: blog2,
  },
  {
    title: 'What is Wireframing?',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    image: blog3,
  },
  {
    title: 'How collaboration makes us better designers',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    image: blog4,
  },
  {
    title: 'Our top 10 Javascript frameworks to use',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    image: blog5,
  },
  {
    title: 'Podcast: Creating a better CX Community',
    description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    image: blog6,
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-3xl font-bold mb-8">All blog posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
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
