import React from 'react';
import {SlArrowRight} from 'react-icons/sl'
const Discover = () => {
    return (
        <div className='bg-[#F6FDFF] w-[90%] mx-auto md:mb-24'>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex flex-col md:flex-row">
                    <div className='md:max-w-md'>
                        <h1 className="text-5xl font-bold">Discover Beautiful Places with Gol</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien arcu, luctus sit amet enim ac, rutrum finibus risus. Nullam pellentesque massa vel lacus posuere fringilla.</p>
                        <div className="flex flex-col gap-2">
                            <p className='flex items-center gap-2'><SlArrowRight /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className='flex items-center gap-2'><SlArrowRight />Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center gap-2'><SlArrowRight />Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <button className="btn bg-[#3282AD] mt-4">Contact Us</button>
                    </div>
                    <img src="https://www.golakshadweep.com/assets/images/gal_6.jpg" className="md:max-w-xs lg:max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Discover;