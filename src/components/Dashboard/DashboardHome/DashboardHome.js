import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className='my-32 text-center text-3xl'>
            Hello Gol-User
            <div className='flex gap-4 items-center justify-center'>
                <Link to="/dashboard/profile"><button className='btn btn-info btn-sm text-neutral-50'>Profile</button></Link>
                <Link to="/dashboard/edit-banner"><button className='btn btn-info btn-sm text-neutral-50'>Edit Banner</button></Link>
            </div>
        </div>
    );
};

export default DashboardHome;