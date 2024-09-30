import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Insert from './Insert';


const Home = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Insert></Insert>

            
        </div>
    );
};

export default Home;