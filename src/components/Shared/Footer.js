import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className=''>
            {/* Download our app */}
            <div className='flex justify-between items-center gap-4 bg-neutral-900 relative rounded-xl px-4 md:px-16 py-8 mx-6 md:mx-20 lg:mx-24 z-20'>
                <div className='text-neutral-100 flex md:flex-col gap-6 items-center md:items-start'>
                    <div>
                        <h2 className='text:xl font-bold md:text-4xl'>Download Our App</h2>
                        <p className='text-xs'>The best travel in the world</p>
                    </div>
                    <img className='w-1/3 md:2/3 h-2/3 border border-neutral-50 rounded-md' src="https://i.ibb.co/LgjVT5t/png-transparent-android-google-play-app-store-google-play-text-computer-logo-thumbnail-removebg-prev.png" alt="download app" />
                </div>
                <div className='hidden md:inline-block mt-[-120px]'>
                    <img className='w-2/3 mx-auto border rounded-xl border-neutral-50 border-t-0' src="https://i.ibb.co/M1VNx6v/smart-phone-smartphone-n1-PD9-VB-600-removebg-preview.png" alt="" />
                </div>
            </div>
            {/* Footer Section */}
            <div className='px-16 pb-8 pt-28 bg-[#41A5C1] text-neutral-content z-10 -mt-24'>

                <footer className="footer">
                    <div className='w-52'>
                        <img className='w-28' src="https://www.golakshadweep.com/assets/new-theme/img/logo2.png" alt="" />
                        <p>Lorem Ipsum is simply dummy
                            text of the printing and type
                            setting industry.</p>
                        <div className='flex text-3xl gap-4'>
                            <a href='#' className="link link-hover"><FiFacebook className='border p-1 rounded-full' /></a>
                            <a href='#' className="link link-hover"><FiTwitter className='border p-1 rounded-full' /></a>
                            <a href='#' className="link link-hover"><FiLinkedin className='border p-1 rounded-full' /></a>
                            <a href='#' className="link link-hover"><FiInstagram className='border p-1 rounded-full' /></a>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a href='#' className="link link-hover">About us</a>
                        <a href='#' className="link link-hover">Contact</a>
                        <a href='#' className="link link-hover">Jobs</a>
                        <a href='#' className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">About</span>
                        <a href='#' className="link link-hover">Terms of use</a>
                        <a href='#' className="link link-hover">Privacy policy</a>
                        <a href='#' className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Contact Us</span>
                        <a href='#' className="link link-hover">Terms of use</a>
                        <a href='#' className="link link-hover">Privacy policy</a>
                        <a href='#' className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <div className='border-t-2 mt-16 pt-8 flex items-center justify-center'>
                    <p>Copyright ?? 2023 GoL Travels Private Limited. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;