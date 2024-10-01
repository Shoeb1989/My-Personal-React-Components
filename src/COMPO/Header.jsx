import React from 'react';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div className='flex border border-spacing-2 mt-4 text-3xl bg-black text-white' >
            <Marquee pauseOnHover={true} speed={80} >
              COM NO: 1 <span className=  'text-yellow-400 ml-2 font-bold' >Image = Insert/Delete/Drag and Drop</span>
            </Marquee>

         
        


        </div>
    );
};

export default Header;