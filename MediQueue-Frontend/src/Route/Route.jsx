import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Hospital from '../Pages/Hospital/Hospital';
import Doctors from '../Pages/Doctors/Doctors';
import Appointments from '../Pages/Appointments/Appointments';
import Reviews from '../Pages/Reviews/Reviews';
import MyAppointments from '../Pages/MyAppointments/MyAppointments';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hospital',
                element: <Hospital></Hospital>
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>
            },
            {
                path: '/appointments',
                element: <Appointments></Appointments>
            },
            {
                path: '/my-appointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            }
        ]
    }
])

export default Route;