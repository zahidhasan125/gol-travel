import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const Main = () => {
    return (
        <div style={{
            background: `linear-gradient(180deg, #E5F8FE 14.25%, rgba(6, 6, 6, 0) 100%)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }} className='max-w-[1366px] mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;