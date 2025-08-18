import React from 'react';
import Navbar from '../Pages/Sheard/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer';
import { AuthProvider } from '../context/AuthContext';

const Root = () => {
    return (
        <AuthProvider>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </AuthProvider>
    );
};

export default Root;