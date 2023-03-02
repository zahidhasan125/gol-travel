import React, { useEffect, useState } from 'react';
import { AiFillCompass } from 'react-icons/ai'
import { API } from '../../constant';

const Banner = () => {
    const [banner, setBanner] = useState(null);

    const callBanner = async () => {
        const response = await fetch(`${API}/banner-home`);
        const responseData = await response.json();
        setBanner(responseData.data.attributes);
    }
    useEffect(() => {
        callBanner();
    }, [])
    return (
        <div style={{
            backgroundImage: `url(${banner?.bg_url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}  >
            <div className='p-16'>
                <button className='btn rounded-full mb-8 leading-loose bg-transparent flex gap-2 items-center text-neutral-900 hover:text-neutral-50'>Visit<AiFillCompass className='text-[#3282AD] text-4xl' /></button>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>
                    {banner?.firstLine}
                    <span className='block text-[#3282AD]'>
                        {banner?.secondLine}
                    </span>
                    {banner?.thirdLine}
                </h1>
                <button className='btn btn-outline-[#3282AD] hover:bg-[#3282AD] hover:border-none mt-8'>Discover Now</button>
            </div>
        </div>
    );
};

export default Banner;