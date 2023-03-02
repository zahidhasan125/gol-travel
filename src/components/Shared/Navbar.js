import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { removeToken } from '../../helpers';

const Navbar = () => {
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        setUser(undefined);
        console.log(user);
        navigate("/login", { replace: true });
    };
    const menuItems = <>
        <li><Link to="/bookings" >Find Reservations</Link></li>
        <li tabIndex={0} className='dropdown'>
            <a>
                Packages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
        </li>
        <li tabIndex={0}>
            <Link to="/islands">
                About Lakshadweep
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
        </li>
        <li><a>About Us</a></li>
        <li><a>Gol</a></li>
        <li><a>Support</a></li>
    </>
    return (
        <div className='' style={{
            background: `linear-gradient(0deg, #E5F8FE 100%, rgba(6, 6, 6, 0) 100%) `
        }}>
            <div className="navbar justify-between bg-none">
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
                <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='w-20' src="https://i.ibb.co/GdbXs3K/image.png" alt="logo" /></Link>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className=''>
                    {
                        user ? <div className="navbar-end flex lg:gap-4 items-center">
                        <Link to="/dashboard" className="mr-1 cursor-pointer text-[#3282AD]">Dashboard</Link>
                        <a onClick={handleLogout} className="btn bg-[#3282AD] rounded-full border-none hidden lg:flex">Log Out</a>
                    </div>
                    :
                    <div className="navbar-end flex lg:gap-4 items-center">
                        <Link to="/login" className="mr-1 cursor-pointer text-[#3282AD]">Login</Link>
                        <Link to="/signup" className="btn bg-[#3282AD] rounded-full border-none hidden lg:flex">Sign Up</Link>
                    </div>
                    }
                    <div className="">
                        <div className="dropdown dropdown-end hidden md:block">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 justify-start">
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