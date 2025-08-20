import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Hospital from '../Pages/Hospital/Hospital';
import Doctors from '../Pages/Doctors/Doctors';
import Appointments from '../Pages/Appointments/Appointments';
import Reviews from '../Pages/Reviews/Reviews';
import MyAppointments from '../Pages/MyAppointments/MyAppointments';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import DoctorsDetails from '../Component/DoctorsCard/DoctorsDetails';

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
            },
            {
                path: '/doctors-details/:id',
                element: <DoctorsDetails></DoctorsDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Layoutdashboard/>,
        children: [
            {
                path: 'dashboardhome',
                element: <DashboardHome />
            },
            {
                path: 'dashboardproperty',
                element: <DashboardProperty />
            },
            {
                path: 'dashagents',
                element: <DashAgents></DashAgents>
            },
        ]
    }
])

export default Route;