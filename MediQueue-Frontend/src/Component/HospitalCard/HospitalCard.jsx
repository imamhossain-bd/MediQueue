import React from 'react';
import { Phone, MapPin, Star } from 'lucide-react';


const HospitalCard = ({hospital}) => {
    return (
        <div>
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-[450px] w-full flex flex-col">
            {/* Image Container with Gradient Overlay */}
            <div className="relative overflow-hidden flex-shrink-0">
                <img src={hospital.image} alt={hospital.name} className="w-full h-[15rem] object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">4.8</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                {/* Hospital Name */}
                <div className="flex-1">
                    <div className='flex justify-between'>
                        <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                            {hospital.name}
                        </h2>
                         <p className="text-sm text-gray-600 mb-3">
                            {hospital.type}
                        </p>
                    </div>
                    {/* Type */}
                   
                    {/* Address */}
                    <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                            {hospital.address}, {hospital.district}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-2 mb-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <p className="text-gray-600 text-sm font-medium truncate">
                            {hospital.contact}
                        </p>
                    </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm">
                    View Details
                </button>
            </div>

            {/* Subtle Border Animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-transparent group-hover:to-blue-500/20 transition-all duration-500 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default HospitalCard;