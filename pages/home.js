import Image from "next/image";
import background from "../assets/wallpaper.jpg";
import Menu from "../components/menu/MenuComponent";
import React from "react";

const Home = () => {
    return (
        <>
            <div className="fixed h-screen flex z-1">
                <Image src={background} alt=""/>
            </div>
            <div className="absolute z-10 top-[2%] left-[2%]">
                <Menu/>
            </div>
        </>
    )
}
export default Home;