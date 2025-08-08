import React, { useEffect, useState } from 'react';
import api from '../Api/axios';
import DoctorsCard from '../../Component/DoctorsCard/DoctorsCard';

const Doctors = () => {

    const [searchLocation, setSearchLocation] = useState('');
    const [searchDoctorsName, setSearchDoctorsName] = useState('');

    const [doctors, setDoctors] = useState([]);

    // Filter hospitals based on search criteria
    const filteredDoctors = doctors.filter(doctor => {
        const location = doctor?.hospital?.district?.toLowerCase() || '';
        const name = doctor?.name?.toLowerCase() || '';
        return location.includes(searchLocation.toLowerCase()) &&
            name.includes(searchDoctorsName.toLowerCase());
    });


    useEffect(() => {
        const fetchDoctors = async () => {
            const res = await api.get('/doctors');
            setDoctors(res.data.doctors);
        }
        fetchDoctors();
    },[])




    return (
        <div>
            {/* Find Section */}
            <div className='bg-gradient-to-r from-blue-600 to-indigo-700 py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-4xl lg:ml-[-80px] font-bold text-white mb-6'>Find Hospitals</h2>
                    {/* Search Section */}
                    <div className="bg-white w-[85rem] lg:ml-[-70px] ml-[0px] rounded-3xl shadow-xl">
                        <div className="w-[82rem] mx-auto">
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
                                            <input type="text" placeholder="Enter your location" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"/>
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
                                            Hospital
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <input type="text" placeholder="Doctors name" value={searchDoctorsName} onChange={(e) => setSearchDoctorsName(e.target.value)} className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"/>
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

            {/* Doctors List Section */}
            <div className='flex-1 py-12 bg-gray-50'>
                <div className='w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900'>{filteredDoctors.length} Doctors Found</h2>
                        <button className='justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex items-center rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter h-4 w-4 mr-2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                            Filters
                        </button>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {
                                filteredDoctors.map(hospital =>(
                                    <DoctorsCard key={hospital.id} doctor={hospital}></DoctorsCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;