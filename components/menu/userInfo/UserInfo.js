import React from "react";
import Image from "next/image";

const UserInfo = (props) => {

    const name = props.name.toString().substring(0, props.name.toString().indexOf(" ") + 2) + ".";


    return(
            <div className="flex flex-col items-center mt-3">
                <div className="w-[6.5rem] h-[6.5rem] flex">
                    <Image src={props.src} className="object-cover rounded-full p-2 bg-white" alt=""/>
                </div>
                <div className="flex flex-col items-center mt-3">
                    <p className="flex text-[17px] font-semibold text-gray-500">
                        {props.message}
                    </p>
                    <p className="font-bold lg:text-[30px] text-[22px] text-black">
                        {name}
                    </p>
                </div>
            </div>
    )
}

export default UserInfo;