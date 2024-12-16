import React from 'react'
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <div className='navbar h-[70px] w-full items-center  shadow-lg'>
    <h1 className='text-[24px] md:text-[34px] font-semibold italic text-center'>TECH HACKATHON</h1>
        <div className="LOGO flex justify-center items-center">
            <img src={logo} className='md:h-[60px] md:w-[50px] h-[30px] w-[30px]'/>
        </div>
    </div>
  )
}
