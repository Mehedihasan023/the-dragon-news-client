/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../Shared/NavigationBar/Navigationbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;