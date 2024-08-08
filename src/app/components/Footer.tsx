import Image from 'next/image';
import React from 'react';
import twiter from '@/app/images/i1.png'
import instr from '@/app/images/i3.png'
import git from '@/app/images/i4.png'
import fb from '@/app/images/i2.png'

function Footer() {
    return (
        <div className='bg-gray-100 py-10'>
            <div className=' px-4 sm:px-6 lg:px-8'>
                <div className='text-left mb-10'>
                    <h2 className='text-3xl font-bold text-gray-800'>Learn how to grow <span role="img" aria-label="muscle">💪</span> audience fast in Twitter</h2>
                </div>
                <div className='border-t border-gray-300 pt-10 grid grid-cols-1 md:grid-cols-4 gap-10'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-4'>About Rareblocks</h3>
                        <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                        <div className='flex space-x-8'>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                                <Image src={twiter} alt='img'></Image>
                            </a>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                            <Image src={fb} alt='img'></Image>

                            </a>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                            <Image src={instr} alt='img'></Image>
                            </a>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                            <Image src={git} alt='img'></Image>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-4'>Company</h3>
                        <ul className='space-y-2'>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>About</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Features</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Works</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Career</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-4'>Help</h3>
                        <ul className='space-y-2'>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Customer Support</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Delivery Details</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Terms & Conditions</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Free eBooks</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Development Tutorial</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>How to - Blog</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-800'>Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
