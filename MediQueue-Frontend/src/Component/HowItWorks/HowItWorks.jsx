import React from 'react';
import { Search, Calendar, Check, Bell } from 'lucide-react';

const HowItWorks = () => {
    return (
        <div className="py-20 px-4 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-500">
                        Book your appointment in 4 simple steps
                    </p>
                </div>

                {/* Steps Section */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-[6.4rem] left-0 right-0 h-0.5 bg-[#337afd] hidden lg:block"></div>
                    
                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Step 1 - Search */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto relative z-10">
                                    <Search className="w-8 h-8 text-white stroke-2" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-blue-500 bg-[#dfdfdf] px-5 rounded-full py-[5px] font-semibold text-lg">Step 1</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Search
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Find doctors by specialty, hospital, or location
                            </p>
                        </div>

                        {/* Step 2 - Book */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                                    <Calendar className="w-8 h-8 text-white stroke-2" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-indigo-600 bg-[#dfdfdf] px-5 rounded-full py-[5px] font-semibold text-lg">Step 2</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Book
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Select a convenient time slot and book instantly
                            </p>
                        </div>

                        {/* Step 3 - Confirm */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                                    <Check className="w-8 h-8 text-white stroke-2" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-purple-600 bg-[#dfdfdf] px-5 rounded-full py-[5px] font-semibold text-lg">Step 3</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Confirm
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Receive booking confirmation via email and SMS
                            </p>
                        </div>

                        {/* Step 4 - Reminder & Visit */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto relative z-10">
                                    <Bell className="w-8 h-8 text-white stroke-2" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-red-500 bg-[#dfdfdf] px-5 rounded-full py-[5px] font-semibold text-lg">Step 4</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Reminder & Visit
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Get reminders before your appointment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;