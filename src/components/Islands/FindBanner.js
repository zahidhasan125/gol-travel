import React from 'react';
import { FiSearch } from 'react-icons/fi';

const FindBanner = () => {
    return (
        <div className=''>
            <div style={{
                background: `url(https://i.ibb.co/1T2HFxX/Screenshot-2023-02-23-at-4-39-58-AM.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} className='flex flex-col items-center justify-center mb-12 py-12'>
                <h3 className='text-5xl font-bold text-center py-12 md:py-24'>Find Islands</h3>
                <div className='flex items-center border p-2 gap-4 rounded-full'>
                    <input type="text" placeholder='Find your adventure' className='input border-none rounded-full' />
                    <button className='btn bg-[#3282AD] rounded-full'><FiSearch className='text-xl'/></button>
                </div>
            </div>
        </div>
    );
};

export default FindBanner;