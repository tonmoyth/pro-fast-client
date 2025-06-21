import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {loader,user} = useAuth();

    if(loader){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;