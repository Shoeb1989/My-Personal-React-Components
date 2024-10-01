import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Insert from './Insert';
import Marquee from "react-fast-marquee";
import ParticleBackground from './Particle';






const Home = () => {
    return (
        <div> 
            
            <ParticleBackground></ParticleBackground>

            


            <Header></Header>
            <Outlet></Outlet>
            <Insert></Insert>
            <div className='flex border border-spacing-2 mt-4 text-3xl bg-black text-white' >
            <Marquee pauseOnHover={true} speed={80} >
              COM NO: 2
            </Marquee>

           



            

            

            </div>

            
        </div>
    );
};

export default Home;