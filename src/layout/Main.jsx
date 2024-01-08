import React from 'react';
import Navbar from '../pages/shared/Navbar/navbar';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           
        </div>
    );
};

export default Main;