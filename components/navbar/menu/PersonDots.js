import React from "react";
import Image from "next/image";
import woman from "../../../assets/woman.png";
import man from "../../../assets/man.png";

const PersonDots = () => {
    return(
        <div className="absolute left-[10.5rem] lg:flex hidden mt-1">
            <Image src={woman} className="w-6 h-6 rounded-full" alt=""/>
            <Image src={man} className="w-6 h-6 -ml-2 rounded-full" alt=""/>
            <Image src={woman} className="w-6 h-6 -ml-2 rounded-full" alt=""/>
            <Image src={man} className="w-6 h-6 -ml-2 rounded-full" alt=""/>
        </div>
    )
}

export default PersonDots;