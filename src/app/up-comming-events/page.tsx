import React from 'react';

const eventDetails = {
  title: 'InsureFest 2024',
  subtitle: 'Safeguarding Your Future',
  date: '2024/02/22',
  location: 'Colombo',
  description: `InsureFest 2024 is a premier event for insurance professionals and enthusiasts alike. 
  Featuring keynote presentations, panel discussions, and interactive workshops, attendees will gain insights into emerging trends, innovative solutions, and best practices in the insurance industry. 
  Network with industry experts, explore cutting-edge technologies in the exhibitor showcase, and celebrate excellence at the awards ceremony. 
  Don't miss this opportunity to join the conversation, forge new partnerships, and stay ahead of the curve in an ever-evolving insurance landscape. Register now to secure your spot at InsureFest 2024 and safeguard your future with insurance.`
};

export default function Home() {
  return (
    <div className="flex w-srceen mt-14">
      <div className=" p-8  w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className=' border-2 p-3 rounded-2xl'>
            <h1 className="text-4xl font-bold">{eventDetails.title}</h1>
            <h2 className="text-xl text-gray-700 mt-2">{eventDetails.subtitle}</h2>
            <p className="mt-4 mb-4"><strong>Date:</strong> {eventDetails.date}</p>
            <p><strong>Location:</strong> {eventDetails.location}</p>
            <p className="mt-4 text-gray-600 leading-8">{eventDetails.description}</p>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-3xl font-bold text-[#d31145] mb-4 text-center">Registrar Now</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="+94 71 361 960" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Age" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Address" />
              </div>
              <div className="flex items-center space-x-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="Male" className="form-radio" />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="Female" className="form-radio" />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              <button className="w-full bg-[#d31145] text-white p-2 rounded-md hover:bg-red-600">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
