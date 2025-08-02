import React, { useState } from 'react';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, Stethoscope } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email.trim()) {
            // Handle newsletter subscription
            console.log('Subscribing email:', email);
            setEmail('');
        }
    };

    return (
        <footer className="bg-slate-800 text-gray-300">
            <div className="w-full px-20 mx-auto py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <a className='flex items-center gap-1' href="/">
                            <div className='w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center relative'>
                                <Stethoscope className="h-6 w-6 text-white" />
                            </div>
                            <h1 className='ml-3 text-3xl font-black bg-white bg-clip-text text-transparent'>MediQueue</h1>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Find and book doctors instantly in Bangladesh. Simplified healthcare access for everyone.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            QUICK LINKS
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <NavLink className="text-gray-400 hover:text-white transition-colors text-sm" to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-400 hover:text-white transition-colors text-sm" to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-400 hover:text-white transition-colors text-sm" to={'/doctors'}>Doctors</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-400 hover:text-white transition-colors text-sm" to={'/hospitals'}>Hospitals</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            SUPPORT
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            CONTACT
                        </h3>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">support@mediqueue.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">+880 1234 567890</span>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div>
                            <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-l text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r hover:bg-blue-700 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 MediQueue. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;