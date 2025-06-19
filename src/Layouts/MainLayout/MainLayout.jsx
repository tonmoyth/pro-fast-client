import React from 'react';
import { Outlet } from 'react-router';
import NavBer from '../../shared/header/NavBer';
import Footer from '../../shared/footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto pt-6'>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;