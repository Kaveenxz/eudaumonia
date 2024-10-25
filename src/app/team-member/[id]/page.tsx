'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation } from 'react-query';
import { getTeamMemberById } from '@/app/api/team-member/api';
import { addMemberReferance } from '@/app/api/team-member/api';
import Image from 'next/image';
import { BsDribbble, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Navbar from '@/app/components/Navbar';

export default function ContactForm(para: any) {
  const router = useRouter();
  const id = para.params.id;

  // second number also need to add
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    description: '',
    productCategoryId: 1,
  });

  const { data, isLoading, isError } = useQuery(['teamMember', id], () => getTeamMemberById(id), {
    enabled: !!id,
  });

  const mutation = useMutation(addMemberReferance, {
    onSuccess: () => {
      alert('Form submitted successfully!');
    },
    onError: () => {
      alert('Error submitting the form.');
    },
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e: any) => {
    const categoryMapping: { [key: string]: number } = {
      Health: 1,
      Retirement: 2,
      Savings: 3,
      Protection: 4,
    };
    setFormData({
      ...formData,
      productCategoryId: categoryMapping[e.target.value],
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      teamMemberId: id,
    };

    mutation.mutate(finalData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading team member details.</div>;
  }

  if (!data) {
    return <div>No data found for this team member.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 max-lg:mt-6 mx-4 md:mx-10 lg:mx-20 my-10 lg:my-20">
      <div>
      <Navbar/>
      </div>
      <div className="bg-white py-10 md:py-14 rounded-2xl border-2 w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src={data.imagePath}
          alt={data.name}
          width={320}
          height={320}
          className="w-60 h-60 md:w-80 md:h-80 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg md:text-xl font-bold text-center">{data.name}</h3>
        <p className="text-center text-gray-600 my-4 md:my-8 text-base md:text-lg">{data.description}</p>
        <hr />
        <div className="mt-4 flex justify-center md:justify-start space-x-6 md:space-x-8 mx-6">
          <a href={data.link3} target="_blank" className="text-gray-600 hover:text-gray-800">
            <BsTwitter />
          </a>
          <a href={data.link1} target="_blank" className="text-gray-600 hover:text-gray-800">
            <BsLinkedin />
          </a>
          <a href={data.link2} target="_blank" className="text-gray-600 hover:text-gray-800">
            <BsDribbble />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:mx-10 mt-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's level up your brand, together</h2>
        <p className="mb-4 text-base md:text-lg">
          You can reach us anytime via{' '}
          <a href="mailto:eudaimonia@gmail.com" className="text-red-500">
            eudaimonia@gmail.com
          </a>
        </p>
        <form className="bg-white p-4 md:p-6 rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+94 71 361 960"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <label className="block text-gray-700 font-bold mb-2">Phone number 2 (optional)</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+94 71 361 960"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">How can we help?</label>
            <textarea
              name="description"
              placeholder="Tell us a little about the project..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Products</label>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:flex md:space-x-4">
              {['Health', 'Retirement', 'Savings', 'Protection'].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="productCategory"
                    value={category}
                    onChange={handleCategoryChange}
                    checked={formData.productCategoryId === {
                      Health: 1,
                      Retirement: 2,
                      Savings: 3,
                      Protection: 4,
                    }[category]}
                  />
                  <span className="ml-2">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#D31145] text-white font-bold py-2 px-4 rounded w-full hover:bg-[#e10d46]"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
