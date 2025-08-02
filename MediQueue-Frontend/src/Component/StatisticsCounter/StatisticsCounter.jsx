import React, { useState, useEffect } from 'react';
import { Users, Building, Star } from 'lucide-react';

const StatisticsCounter = () => {
    const [patientsCount, setPatientsCount] = useState(0);
    const [hospitalsCount, setHospitalsCount] = useState(0);
    const [satisfactionCount, setSatisfactionCount] = useState(0);

    // Animation function for counting up
    const animateCounter = (setter, target, duration = 2000, suffix = '') => {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target + suffix);
                clearInterval(timer);
            } else {
                if (suffix === '%') {
                    setter(Math.floor(start) + suffix);
                } else if (suffix === '+') {
                    setter(Math.floor(start).toLocaleString() + suffix);
                } else {
                    setter(Math.floor(start).toLocaleString() + suffix);
                }
            }
        }, 16);
    };

    // Start animations when component mounts
    useEffect(() => {
        // Delay the start of animations slightly for better effect
        const timer = setTimeout(() => {
            animateCounter(setPatientsCount, 1000, 2500, '+');
            animateCounter(setHospitalsCount, 50, 2000, '+');
            animateCounter(setSatisfactionCount, 95, 1800, '%');
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900" >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Patients Served */}
                    <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-600 border-opacity-30">
                        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {patientsCount}
                        </div>
                        <div className="text-gray-300 text-lg font-medium">
                            Patients Served
                        </div>
                    </div>

                    {/* Hospitals Onboarded */}
                    <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-600 border-opacity-30">
                        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Building className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {hospitalsCount}
                        </div>
                        <div className="text-gray-300 text-lg font-medium">
                            Hospitals Onboarded
                        </div>
                    </div>

                    {/* Satisfaction Rating */}
                    <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-600 border-opacity-30">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {satisfactionCount}
                        </div>
                        <div className="text-gray-300 text-lg font-medium">
                            Satisfaction Rating
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsCounter;