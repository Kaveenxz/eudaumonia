'use client'
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getAllUpCOmiingEvent, upcommingEventRegister } from '@/app/api/upcommingEvent/api'; // Import APIs
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    address: '',
    gender: '',
  });
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the currently displayed event

  // UseQuery to fetch all upcoming events
  const { data: events = [], isLoading, isError } = useQuery('upcomingEvents', getAllUpCOmiingEvent);

  // Function to go to the next event
  const nextEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous event
  const prevEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const showMore = () => {
    router.push('up-comming-events/'+2)
  };


  // Mutation for form submission
  const mutation = useMutation((data) => upcommingEventRegister(data));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      upcomingEventId: events[currentIndex]?.id, // Pass the selected event ID
      createdBy: 1,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Render loading or error states if necessary
  if (isLoading) return <div>Loading events...</div>;
  if (isError) return <div>Error loading events</div>;

  return (
    <div className="flex w-screen mt-14">
      <div>
        <Navbar />
      </div>
      <div className="p-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.length > 0 ? (
            <>
              <div className="border-2 p-5 rounded-2xl flex flex-col justify-between">
                {/* Display the current event details */}
                <div>
                  <h1 className="text-4xl font-bold">{events[currentIndex].topic}</h1>
                  <p className="mt-4 mb-4">
                    <strong>Date:</strong> {new Date(events[currentIndex].date).toDateString()}
                  </p>
                  <p><strong>Location:</strong> {events[currentIndex].location}</p>
                  <p className="mt-4 text-gray-600 leading-8">
                    {events[currentIndex].description}
                  </p>
                </div>

                {/* Arrows to navigate between events */}
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={prevEvent} 
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                  >
                    Previous
                  </button>

                  <button 
                    onClick={showMore} 
                    className="px-4 py-2  rounded-md hover:bg-[#d31145] hover:text-[#fff] transition"
                  >
                    Read more...
                  </button>
                  
                  <button 
                    onClick={nextEvent} 
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                  >
                    Next
                  </button>
                </div>
              </div>

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
                  <button
                    type="submit"
                    className="w-full bg-[#d31145] text-white p-2 rounded-md hover:bg-red-600"
                  >
                    Send
                  </button>
                </form>
                {mutation.isError && <p className="text-red-500 mt-4">Error: {mutation.error as string}</p>}
                {mutation.isSuccess && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
              </div>
            </>
          ) : (
            <p>No events found</p>
          )}
        </div>
      </div>
    </div>
  );
}
