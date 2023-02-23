import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Islands from '../pages/Islands/Islands';
import MyBooking from '../pages/MyBooking/MyBooking';

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
            }
        ]
    }
])
