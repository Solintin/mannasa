import React from 'react';
import logo from '../Assets/Svg/logo.svg';


const Header = () => {
    return (
        <div className="bg-[#FFFFFF05] flex justify-between items-center md:px-16 px-4 md:py-9 py-6">
            <div className='md:block hidden'></div>
            <div> <img src={logo} alt="" className='h-10 w-40' /></div>
            <div> <button className="rounded-md font-bold text-sm text-[#D3FFE8] p-3 border border-[#D3FFE8]">Get in Touch</button> </div>
        </div>
    );
};

export default Header;