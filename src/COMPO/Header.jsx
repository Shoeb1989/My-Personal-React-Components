import React from 'react';
import Marquee from "react-fast-marquee";
import Insert from './Insert';

const Header = () => {
    return (
        <div className='flex border border-spacing-2 mt-4 text-3xl bg-black text-white' >
            <Marquee pauseOnHover={true} speed={80} >
              All My Component
            </Marquee>

         
        


        </div>
    );
};

export default Header;