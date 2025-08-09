import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Plus, Stethoscope } from 'lucide-react';

const Navbar = () => {
        const [hidden, setHidden] = useState(false);
        const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
        let lastScroll = 0;

    // Hide navbar on scroll down and show on scroll up
        useEffect(() => {
            const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScroll = currentScroll;
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    // Open and close login modal
        const openLoginModal = (e) => {
            e.preventDefault();
            setIsLoginModalOpen(true);
        };

        const closeLoginModal = () => {
            setIsLoginModalOpen(false);
        };

  const navLinks = (
    <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/hospital'}>Hospital</NavLink></li>
      <li><NavLink to={'/doctors'}>Doctors</NavLink></li>
      <li><NavLink to={'/appointments'}>Appointments</NavLink></li>
      <li><NavLink to={'/reviews'}>Reviews</NavLink></li>
    </>
  );

  return (
    <>
      {/* Navbar */}
      <div className='h-[100px]'>
        <nav className={`fixed top-0 left-0 w-full z-50 transition-transform h-[100px] duration-300 bg-white shadow ${hidden ? '-translate-y-full' : ''}`}>
          <div className="container mx-auto flex justify-between items-center h-full px-4">
            {/* Logo */}
            <a className='flex items-center gap-1' href="/">
              <div className='w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center relative'>
                <Stethoscope className="h-6 w-6 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Plus className="h-2 w-2 text-white" />
                </div>
              </div>
              <h1 className='ml-3 text-3xl font-black bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'>MediQueue</h1>
            </a>

            {/* Links */}
            <ul className='flex gap-14 text-lg font-semibold'>
              {navLinks}
            </ul>

            {/* Login Button */}
              <div className='flex items-center gap-4'>
                <NavLink to={'/login'} className="px-6 py-2 rounded-lg text-white text-lg font-medium bg-gradient-to-r from-gray-900 to-blue-600 hover:from-blue-600 hover:to-gray-900 transition-all duration-1000 ease-in-out">Login</NavLink>
              </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
