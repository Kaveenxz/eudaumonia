import Image from "next/image";
import img from '@/app/images/Image (1).png'
import { BsDribbble, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function ContactForm() {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center px-10">
        <div className="bg-white py-14 rounded-2xl border-2 w-full md:w-1/2 mb-6 md:mb-0 ">
          <Image
            src={img}
            alt="Olivia Rhye"
            className="w-80 h-80 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-center">Olivia Rhye</h3>
          <p className="text-center text-gray-600 my-8 text-lg">
            Thank you for considering us for your insurance needs. We're dedicated to providing personalized solutions and support to ensure your peace of mind. Trust us to protect what matters most to you.
          </p>
          <hr />
          <div className="mt-4 flex justify-start space-x-8 mx-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
             <BsTwitter/>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <BsLinkedin/>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <BsDribbble/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-10 mt-6">
          <h2 className="text-3xl font-bold mb-4">
            Let's level up your brand, together
          </h2>
          <p className="mb-4">
            You can reach us anytime via{' '}
            <a href="mailto:eudaimonia@gmail.com" className="text-red-500">
              eudaimonia@gmail.com
            </a>
          </p>
          <form className="bg-white p-6 rounded-lg ">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Phone number</label>
              <input
                type="text"
                placeholder="+94 71 361 960"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">How can we help?</label>
              <textarea
                placeholder="Tell us a little about the project..."
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Products</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Health</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Retirement</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Savings</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Protection</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#D31145] text-white font-bold py-2 px-4 rounded w-full hover:bg-[#e10d46]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
  