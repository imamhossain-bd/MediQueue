import React from 'react';
import { Search, Calendar, Bell, Calculator } from 'lucide-react';

const WhatWeOffer = () => {
    return (
        <div className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        What We Offer
                    </h2>
                    <p className="text-xl text-gray-500 font-normal">
                        Everything you need for a seamless healthcare experience
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Search Hospitals & Doctors */}
                    <div className="bg-white rounded-2xl h-[290px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="p-6">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Search className="w-10 h-10 text-white stroke-2" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Search Hospitals &<br />Doctors
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Find the right healthcare provider based on location, specialty, ratings.
                            </p>
                        </div>
                        <div className="h-1.5 mt-[11px] w-full bg-opacity-80 bg-gradient-to-br from-blue-600 to-blue-400" />
                    </div>

                    {/* Book Appointments Instantly */}
                    <div className="bg-white rounded-2xl h-[290px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="p-6">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="w-10 h-10 text-white stroke-2" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Book Appointments<br />Instantly
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Schedule appointments with just a few clicks, no phone calls needed.
                            </p>
                        </div>
                        <div className="h-1.5 mt-[37px] w-full bg-opacity-80 bg-gradient-to-br from-indigo-600 to-indigo-400" />
                    </div>

                    {/* Get Reminders & Updates */}
                    <div className="bg-white rounded-2xl h-[290px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="p-6">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Bell className="w-10 h-10 text-white stroke-2" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Get Reminders &<br />Updates
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Receive timely notifications about your upcoming appointments.
                            </p>
                        </div>
                        <div className="h-1.5 mt-[37px] w-full bg-opacity-80 bg-gradient-to-br from-purple-600 to-purple-400" />
                    </div>

                    {/* Hospital Queue Management */}
                    <div className="bg-white rounded-2xl h-[290px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="p-6">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Calculator className="w-10 h-10 text-white stroke-2" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Hospital Queue<br />Management
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Hospitals can manage patient queues efficiently through our system.
                            </p>
                        </div>
                        <div className="h-1.5 mt-[11px] w-full bg-opacity-80 bg-gradient-to-br from-rose-500 to-rose-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
