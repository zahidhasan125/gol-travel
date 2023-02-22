import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li><a>Find Reservations</a></li>
        <li tabIndex={0} className='dropdown'>
            <a>
                Packages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
        </li>
        <li tabIndex={0}>
            <a>
                About Lakshadweep
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
        </li>
        <li><a>About Us</a></li>
        <li><a>Gol</a></li>
        <li><a>Support</a></li>
    </>
    return (
        <div className=''>
            <div className="navbar justify-between">
                <div className="md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-20' src="https://i.ibb.co/GdbXs3K/image.png" alt="logo" /></a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className=''>
                    <div className="navbar-end flex items-center">
                        <a className="mr-1 cursor-pointer text-[#3282AD]">Login</a>
                        <a className="btn bg-[#3282AD] rounded-full border-none hidden lg:flex">Sign Up</a>
                    </div>
                    <div className="">
                        <div className="dropdown dropdown-end hidden md:block">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;