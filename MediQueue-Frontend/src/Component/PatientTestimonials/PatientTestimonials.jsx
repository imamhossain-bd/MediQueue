import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const PatientTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Fatima Rahman",
            hospital: "United Hospital",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            quote: "As someone who frequently needs to see specialists, this app has been a lifesaver. Highly recommended!"
        },
        {
            id: 2,
            name: "Ahmed Hassan",
            hospital: "Square Hospital",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            quote: "MediQueue made booking appointments so easy! No more waiting on hold or visiting hospitals just to schedule. Amazing service!"
        },
        {
            id: 3,
            name: "Sarah Johnson",
            hospital: "Apollo Hospital",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
            rating: 4,
            quote: "The reminder system is fantastic. I never miss my appointments anymore. The interface is user-friendly and very efficient."
        }
    ];

    // Auto-slide functionality with smooth transitions
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change slide every 4 seconds for smoother experience

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 transition-all duration-300 hover:scale-110 ${
                    index < rating 
                        ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' 
                        : 'text-gray-300'
                }`}
                style={{
                    animationDelay: `${index * 0.1}s`
                }}
            />
        ));
    };

    return (
        <div className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        What Our Patients Say
                    </h2>
                    <p className="text-xl text-gray-500">
                        Real experiences from people who have used MediQueue
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:scale-110 transition-all duration-300 ease-in-out transform hover:shadow-xl"  aria-label="Previous testimonial">
                        <ChevronLeft className="w-6 h-6 text-white transition-transform duration-200" />
                    </button>

                    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300 ease-in-out transform hover:shadow-xl"
                        aria-label="Next testimonial">
                        <ChevronRight className="w-6 h-6 text-white transition-transform duration-200" />
                    </button>

                    {/* Testimonial Card Container with smooth transitions */}
                    <div className="mx-16 shadow-xl overflow-hidden">
                        <div className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg p-12 relative transform transition-all duration-500 hover:shadow-xl">
                                        {/* Large Quote Mark with animation */}
                                        <div className="absolute top-8 right-8 text-gray-200 text-8xl font-serif leading-none opacity-60 transition-opacity duration-300">
                                            "
                                        </div>

                                        {/* Profile Section with stagger animation */}
                                        <div className="flex items-center mb-8">
                                            <div className="relative">
                                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 transform transition-transform duration-300 hover:scale-105" />
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
                                            </div>
                                            <div className="transform transition-all duration-300 hover:translate-x-1">
                                                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-200">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-gray-500 transition-colors duration-200">
                                                    {testimonial.hospital}
                                                </p>
                                            </div>
                                            <div className="ml-auto flex items-center space-x-1">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>

                                        {/* Quote with fade-in animation */}
                                        <blockquote className="text-2xl text-gray-700 italic leading-relaxed transform transition-all duration-500 hover:text-gray-800">
                                            "{testimonial.quote}"
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots with smooth animations */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonials.map((_, index) => (
                            <button key={index} onClick={() => goToSlide(index)} className={`transition-all duration-300 ease-in-out transform hover:scale-125 ${
                                    index === currentSlide 
                                        ? 'w-8 h-3 bg-blue-500 rounded-full shadow-md' 
                                        : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientTestimonials;