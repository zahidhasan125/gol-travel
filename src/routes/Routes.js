import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import MyBooking from '../pages/Home/MyBooking/MyBooking';

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
            }
        ]
    }
])
