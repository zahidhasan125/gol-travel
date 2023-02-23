import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../layouts/Dashboard';
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Islands from '../pages/Islands/Islands';
import Login from '../pages/Login/Login';
import MyBooking from '../pages/MyBooking/MyBooking';
import Profile from '../pages/Profile/Profile';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/bookings',
                element: <MyBooking />
            },
            {
                path: '/islands',
                element: <Islands />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/',
                element: <Profile />
            }
        ]
    }
])
