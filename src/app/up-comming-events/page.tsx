'use client'
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { upcommingEventRegister } from '@/app/api/upcommingEvent/api'; // Import your API function
import Navbar from '../components/Navbar';

const eventDetails = {
  title: 'InsureFest 2024',
  subtitle: 'Safeguarding Your Future',
  date: '2024/02/22',
  location: 'Colombo',
  description: `InsureFest 2024 is a premier event for insurance professionals and enthusiasts alike. 
  Featuring keynote presentations, panel discussions, and interactive workshops, attendees will gain insights into emerging trends, innovative solutions, and best practices in the insurance industry. 
  Network with industry experts, explore cutting-edge technologies in the exhibitor showcase, and celebrate excellence at the awards ceremony. 
  Don't miss this opportunity to join the conversation, forge new partnerships, and stay ahead of the curve in an ever-evolving insurance landscape. Register now to secure your spot at InsureFest 2024 and safeguard your future with insurance.`,
};

export default function Home() {
  const [formData, setFormData]:any = useState({
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    address: '',
    gender: '',
  });

  // Mutation for submitting the form
  const mutation = useMutation((data) => upcommingEventRegister(data));

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      upcomingEventId: 1, // Add default value
      createdBy: 1, // Add default value
    });
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex w-screen mt-14">
      <div>
      <Navbar/>
      </div>
      <div className="p-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className='border-2 p-3 rounded-2xl'>
            <h1 className="text-4xl font-bold">{eventDetails.title}</h1>
            <h2 className="text-xl text-gray-700 mt-2">{eventDetails.subtitle}</h2>
            <p className="mt-4 mb-4"><strong>Date:</strong> {eventDetails.date}</p>
            <p><strong>Location:</strong> {eventDetails.location}</p>
            <p className="mt-4 text-gray-600 leading-8">{eventDetails.description}</p>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-3xl font-bold text-[#d31145] mb-4 text-center">Register Now</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="+94 71 361 960"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Age"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="form-radio"
                    required
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="form-radio"
                    required
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              <button type="submit" className="w-full bg-[#d31145] text-white p-2 rounded-md hover:bg-red-600">
                Send
              </button>
            </form>
            {mutation.isError && <p className="text-red-500 mt-4">Error: {mutation.error as string}</p>}
            {mutation.isSuccess && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
