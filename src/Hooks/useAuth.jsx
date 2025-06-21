import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthConext/AuthContext';

const useAuth = () => {
    const authInfo = useContext(AuthContext);
    return authInfo;
};

export default useAuth;