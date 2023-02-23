import React from 'react';
import { FiMail } from 'react-icons/fi';

const Subscribe = () => {
    return (
        <div style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 100%), url(https://www.golakshadweep.com/assets/images/gal_4.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} className='flex flex-col items-center justify-center gap-4 py-12 text-neutral-50 md:rounded-lg  md:mx-16 my-20'>
            <h4 className='text-2xl md:text-3xl'>Get Every Tour & Packages Update</h4>
            <div className='flex items-center gap-2 border p-2 rounded-md bg-neutral-50'>
                <FiMail className='text-[#3282AD] text-xl' />
                <input type="text" placeholder='Enter your email' className='input-sm text-neutral-900'/>
            </div>
            <button className='btn bg-[#3282AD]'>Subscribe</button>
        </div>
    );
};

export default Subscribe;