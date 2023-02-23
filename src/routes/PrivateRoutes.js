import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoutes = ({ children }) => {

    const { user, isLoading } = useAuthContext();
    const location = useLocation();

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>;
    }

    return children;
};

export default PrivateRoutes;