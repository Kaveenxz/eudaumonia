'use client'
import Image from 'next/image'
import logo from '@/app/images/logo.png'
import Link from 'next/link'
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#B91A45] fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">EUDAIMONIA</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
          <ul className="font-medium text-xl flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 items-center">
            <li>
              <Link href="/#hero" className="block py-2 px-3 text-white rounded lg:bg-transparent lg:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/#about" className="block py-2 px-3 text-white rounded lg:hover:bg-transparent lg:p-0">About</Link>
            </li>
            <li>
              <Link href="/#products" className="block py-2 px-3 text-white rounded lg:hover:bg-transparent lg:p-0">Products</Link>
            </li>
            <li>
              <Link href="/#activities" className="block py-2 px-3 text-white rounded lg:hover:bg-transparent lg:p-0">Activities</Link>
            </li>
            <li>
              <Link href="/#events" className="block py-2 px-3 text-white rounded lg:hover:bg-transparent lg:p-0">Events</Link>
            </li>
            <li>
              <Link href="/#blog" className="block py-2 px-3 text-white rounded lg:hover:bg-transparent lg:p-0">Blogs</Link>
            </li>
            <li>
              <Link href="/#contact" className="block py-2 px-3 text-[#B91A45] rounded bg-white lg:hover:bg-transparent lg:px-5 lg:py-1">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
