import React from 'react'
import { CiSearch,CiShoppingCart,CiHeart } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className={"sticky w-full  flex flex-row h-10 justify-between items-center font-primary border border-red-700"}>
        <div className='w-[15%]   flex flex-row justify-center'>
            <p className='text-xl cursor-pointer  '><CiSearch></CiSearch></p>
        </div>

        <div className='w-[60%] h-full '>
            <p className='text-5xl text-center tracking-[1rem]'>SPIRO</p>
        </div>
        <div className='w-[20%] flex flex-row justify-evenly '>
            <p className='w-[4%] text-xl cursor-pointer'><CiShoppingCart></CiShoppingCart></p>
            <p className='w-[4%] text-xl cursor-pointer'><CiHeart></CiHeart></p>
        </div>
    </div>
  )
}

export default NavBar