import React from 'react';
import { NavLink } from 'react-router-dom';

const DoctorsCard = ({ doctor }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 w-full hover:shadow-lg transition-all duration-500 relative overflow-hidden border-l-4 border-emerald-500 group transform hover:-translate-y-3 ">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 animate-pulse"></div>
            
            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-300 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-teal-300 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-12 right-6 w-1 h-1 bg-emerald-400 rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
            
            <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-20 h-20 rounded-full border-4 border-emerald-100 shadow-lg group-hover:border-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    />
                    {/* Online status dot */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-ping"></div>
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">{doctor.name}</h2>
                    <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium inline-block mt-1 mb-2 animate-pulse group-hover:animate-none group-hover:bg-emerald-200 transition-colors duration-300">
                        {doctor.speciality.name}
                    </div>
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {doctor.hospital.name}, {doctor.hospital.district}
                    </p>
                </div>
            </div>

            <div className="mt-6 space-y-4 relative z-10">
                {/* Available Days */}
                <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-emerald-50 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold text-gray-700 text-sm">Available Days</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        {(Array.isArray(doctor.available_days) ? doctor.available_days : JSON.parse(doctor.available_days)).join(' • ')}
                    </p>
                </div>

                {/* Time and Patients Info */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:from-emerald-50 group-hover:to-teal-50 transition-colors duration-300">
                        <svg className="w-5 h-5 text-indigo-600 group-hover:text-emerald-600 mx-auto mb-1 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs text-gray-500 mb-1">Working Hours</p>
                        <p className="text-sm font-semibold text-gray-700">{doctor.start_time} - {doctor.end_time}</p>
                    </div>
                    
                    <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg group-hover:from-emerald-50 group-hover:to-teal-50 transition-colors duration-300">
                        <svg className="w-5 h-5 text-purple-600 group-hover:text-emerald-600 mx-auto mb-1 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-xs text-gray-500 mb-1">Daily Capacity</p>
                        <p className="text-sm font-semibold text-gray-700">{doctor.max_patients_per_day} patients</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 relative flex gap-4 items-center z-10">
                <NavLink to={"/appointments"} className="w-full bg-emerald-600 text-white text-center font-medium py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group animate-slideInUp">
                    <span className="relative z-10">Book Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    {/* Ripple effect */}
                    <div className="absolute inset-0 bg-emerald-400 rounded-lg transform scale-0 group-hover:scale-100 opacity-20 transition-transform duration-300"></div>
                </NavLink>
                <NavLink to={`/doctors-details/${doctor.id}`} className="w-full bg-emerald-600 text-white text-center font-medium py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group animate-slideInUp">
                    <span className="relative z-10">Dr Details</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    {/* Ripple effect */}
                    <div className="absolute inset-0 bg-emerald-400 rounded-lg transform scale-0 group-hover:scale-100 opacity-20 transition-transform duration-300"></div>
                </NavLink>
            </div>
        </div>
    );
};

export default DoctorsCard;
