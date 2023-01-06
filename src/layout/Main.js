import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;