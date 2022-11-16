import {HiPlus} from "react-icons/hi";
import {
    RiBriefcase2Fill,
    RiBuilding2Fill,
    RiHandHeartLine,
    RiHazeLine,
    RiNurseLine,
    RiPencilLine,
    RiSyringeLine
} from "react-icons/ri";
import React from "react";
import SecondMenuButton from "./SecondMenuButton";

const SecondMenu = () => {

    const items = [
        {
            icon: <RiBuilding2Fill className="w-8 h-8"/>,
            name: "Places",
            isActionMarker: true,
        },
        {
            icon: <RiBriefcase2Fill className="w-8 h-8"/>,
            name: "Business",
            isActionMarker: true,
        },
        {
            icon: <RiHandHeartLine className="w-8 h-8"/>,
            name: "Relations",
            isActionMarker: false,
        },
        {
            icon: <RiNurseLine className="w-8 h-8"/>,
            name: "Competition",
            isActionMarker: false,
        },
        {
            icon: <RiSyringeLine className="w-8 h-8"/>,
            name: "Medicine",
            isActionMarker: false,
        },
        {
            icon: <RiHazeLine className="w-8 h-8"/>,
            name: "Weather",
            isActionMarker: true,
        },
    ]
    return (
        <>
            <div className="mt-[0.5rem] w-[82%] flex lg:justify-start justify-center">
                <p className="font-semibold text-gray-500 ml-[3px] pb-2 flex lg:justify-start justify-center">
                    Lessons: <span className="mx-1 font-bold text-gray-700">{items.length}</span>
                </p>
                <HiPlus className="absolute bg-white lg:flex hidden items-center rounded-full w-6 h-6 mt-1 left-[14.7rem] justify-center easy-in-out duration-500 hover:scale-90 cursor-pointer"/>
                <RiPencilLine className="absolute lg:flex hidden left-[16.5rem] w-6 h-6 m-1 easy-in-out duration-500 hover:scale-90 cursor-pointer"/>
            </div>

            <div className="h-auto w-[85%] bg-white m-[0.6rem] rounded-[1rem]">
                <SecondMenuButton key={items[0].name} icon={items[0].icon} name={items[0].name}
                                  isActionMarker={items[0].isActionMarker}/>
                <SecondMenuButton key={items[1].name} icon={items[1].icon} name={items[1].name}
                                  isActionMarker={items[1].isActionMarker}/>
                <SecondMenuButton key={items[2].name} icon={items[2].icon} name={items[2].name}
                                  isActionMarker={items[2].isActionMarker}/>
                <SecondMenuButton key={items[3].name} icon={items[3].icon} name={items[3].name}
                                  isActionMarker={items[3].isActionMarker}/>
                {items.length > 4 &&
                    <SecondMenuButton icon={<HiPlus className="w-8 h-8"/>} name="More..."
                                      isActionMarker={items[3].isActionMarker}/>
                }
            </div>
        </>
    )
}

export default SecondMenu;