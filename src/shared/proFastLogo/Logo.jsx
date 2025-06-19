import React from 'react';
import brandLogo from "../../assets/logo.png"
const Logo = () => {
    return (
        <div className='flex relative'>
            <img src={brandLogo} alt="Brand Logo" />
            <strong className='text-3xl absolute top-4 left-6'>Profast</strong>
        </div>
    );
};

export default Logo;