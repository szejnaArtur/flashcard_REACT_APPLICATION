import React from 'react';
import background from '../assets/wallpaper.jpg';
import user from '../assets/user.png';
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center">
            <div
                className="absolute z-10 h-[55rem] w-[20rem] bg-white flex justify-center items-center mt-20 top-[14rem] rounded-[2rem] bg-gray-200 opacity-90">

                <div className="absolute top-4 right-6 flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>

                </div>

                <div className="absolute w-[6.5rem] h-[6.5rem] top-12 left-4 flex">
                    <Image src={user} className="object-cover rounded-full p-2 bg-white"/>
                </div>
                <div className="absolute left-[8.5rem] top-[4.4rem]">
                    <p className="text-[17px] font-semibold top-[2rem] text-gray-500">
                        Good Day 👋

                    </p>
                </div>
                <div className="absolute left-[8.5rem] top-[5.2rem]">
                    <p className="font-bold text-[30px] text-black">
                        Anna B.
                    </p>
                </div>
                <div className="absolute bg-white h-[1px] w-[17rem] top-[11rem] bg-gray-300" />
            </div>


            <div className="absolute top-0 fixed h-screen flex z-1">
                <Image src={background} className="object-cover"/>
            </div>
        </div>
    )
}

export default Navbar;