import React from 'react';

const ContactUs = () => {
    return (
        <div className='flex items-center justify-between flex-col md:flex-row py-20 mx-12 px-8 rounded-lg bg-[#42A7C3]'>
            <div className='text-neutral-50 text-center md:text-left max-w-md'>
                <h3 className='text-xl font-semibold mb-8'>Let’s Ready to Explore The World With Us.</h3>
                <p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
            </div>
            <div>
                <button className='btn btn-outline border-neutral-50 bg-neutral-50'>Contact Us</button>
            </div>
        </div>
    );
};

export default ContactUs;