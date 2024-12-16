import React from 'react'
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <div className='h-[80px] w-full  flex justify-between px-[20px] bg-[#fff] items-center border-[2px] shadow-lg'>
    <h1 className='text-[24px] md:text-[48px] font-semibold italic'>TECH HACKATHON</h1>
        <div className="LOGO flex justify-center items-center">
            <img src={logo} className='md:h-[60px] md:w-[50px] h-[30px] w-[30px]'/>
        </div>
    </div>
  )
}
