import { HelpCircle, PhoneCall } from 'lucide-react';
import React from 'react';

function Footer() {
    return (
        <div className='bg-gray-100 py-10'>
            <div className=' px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-10'>
                    <h2 className='text-3xl font-bold text-gray-800'>Learn how to grow <span role="img" aria-label="muscle">💪</span> audience fast in Twitter</h2>
                </div>
                <div className='border-t border-gray-300 pt-10 grid grid-cols-1 md:grid-cols-4 gap-10'>
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800 mb-4'>About Rareblocks</h3>
                        <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                        <div className='flex space-x-3'>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                                <Facebook/>
                            </a>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                                <Twitter/>
                            </a>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.48v-1.68c-2.78.6-3.36-1.34-3.36-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.26-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.26-.44-1.31.1-2.73 0 0 .83-.27 2.73 1.02a9.5 9.5 0 0 1 2.48-.33c.84 0 1.68.11 2.48.33 1.9-1.29 2.73-1.02 2.73-1.02.54 1.42.2 2.47.1 2.73.63.7 1.02 1.59 1.02 2.68 0 3.85-2.33 4.69-4.56 4.94.36.31.69.92.69 1.86v2.75c0 .27.18.58.69.48a10.014 10.014 0 0 0 6.83-9.49c0-5.52-4.48-10-10-10z' /></svg>
                            </a>
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.302 4.335 9.8 9.688 10.687v-7.554h-2.897v-3.133h2.897v-2.397c0-2.877 1.747-4.442 4.297-4.442 1.221 0 2.266.09 2.572.131v2.981h-1.766c-1.383 0-1.652.656-1.652 1.616v2.111h3.303l-.431 3.133h-2.872v7.554c5.352-.887 9.688-5.385 9.688-10.687 0-6.627-5.373-12-12-12z' /></svg>
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
