import Image from "next/image";
import background from "../assets/wallpaper.jpg";
import Navbar from "../components/navbar/Navbar";
import React from "react";

const Home = () => {
    return(
        <>
            <div className="fixed h-screen flex z-1">
                <Image src={background}  alt=""/>
            </div>
            <div className="absolute z-10 top-[2%] left-[2%]">
                <div className="flex justify-center items-center">
                    <Navbar />
                </div>
            </div>
        </>
    )
}
export default Home;