import React from 'react';
import { Heart } from 'lucide-react';
import WhatWeOffer from '../../Component/WhatWeOffer/WhatWeOffer';
import HowItWorks from '../../Component/HowItWorks/HowItWorks';
import PatientTestimonials from '../../Component/PatientTestimonials/PatientTestimonials';
import StatisticsCounter from '../../Component/StatisticsCounter/StatisticsCounter';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#f3f3f3]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
                        {/* Left Content */}
                        <div className="flex flex-col items-center justify-center px-8 py-16 text-center bg-[#f3f3f3]">
                            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-12">
                                <Heart className="w-8 h-8 text-white fill-white" />
                            </div>

                            <h1 className="text-5xl font-bold mb-8 leading-tight">
                                <span className="text-gray-900">Find & Book Doctors</span>
                                <br />
                                <span className="text-blue-600">Instantly in Bangladesh</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-12 max-w-md leading-relaxed">
                                Simplified appointment booking, hospital and doctor info, 
                                reminders & more. Get the healthcare you need, when you need it.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200">
                                    Get Started
                                </button>
                                <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200 flex items-center justify-center">
                                    Learn More
                                    <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-screen flex items-center justify-center overflow-hidden">
                            <div className="relative">
                                <img
                                    src="https://i.ibb.co/SDx4drJ0/download-3.png"
                                    alt="Professional Doctors"
                                    className="w-full h-auto max-w-lg rounded-3xl shadow-2xl"
                                />

                                {/* Floating icons */}
                                <div className="absolute -top-8 -left-8 w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                                    <div className="w-6 h-2 bg-white rounded-full"></div>
                                    <div className="absolute w-2 h-6 bg-white rounded-full"></div>
                                </div>

                                <div className="absolute -top-4 -right-12 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                    <Heart className="w-5 h-5 text-white fill-white" />
                                </div>

                                <div className="absolute -bottom-8 -left-12 w-8 h-8 bg-blue-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>

                                <div className="absolute -bottom-4 -right-8 w-6 h-6 bg-purple-500 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                            <div className="absolute top-40 right-32 w-6 h-6 bg-blue-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
                            <div className="absolute bottom-32 left-16 w-5 h-5 bg-blue-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-600 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '3s' }}></div>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="bg-white ml-12 rounded-3xl shadow-2xl absolute mt-[-90px]">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
                                    {/* Location */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Enter your location"
                                                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Search by</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 appearance-none">
                                                <option value="hospital">Hospital</option>
                                                <option value="specialty">Specialty</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Hospital/Specialty
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Hospital name or specialty"
                                                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div>
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Offer */}
            <div className='mt-20'>
                <WhatWeOffer></WhatWeOffer>
            </div>

            {/* HowItWorks */}
            <div>
                <HowItWorks></HowItWorks>
            </div>

            {/* PatientTestimonials */}
            <div>
                <PatientTestimonials></PatientTestimonials>
            </div>

            {/* StatisticsCounter */}
            <div>
                <StatisticsCounter></StatisticsCounter>
            </div>
        </div>
    );
};

export default Home;
