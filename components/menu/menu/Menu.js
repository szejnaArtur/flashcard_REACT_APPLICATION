import React from "react";

import {
    RiApps2Line,
    RiCalendar2Line,
    RiFolder2Line,
    RiMailLine,
    RiNotification2Line,
    RiSettings2Line,
    RiSoundModuleFill
} from "react-icons/ri";
import {HiPlus} from "react-icons/hi";

import MenuButton from './MenuButton';
import ValueDot from "./ValueDot";
import PersonDots from "./PersonDots";

const Menu = () => {

    const items = [
        {
            icon: <RiApps2Line className="w-8 h-8"/>,
            name: "Dashboard",
            isActionMarker: false,
            isActive: true,
            other: <RiSoundModuleFill className="absolute lg:flex hidden left-[16.3rem] w-6 h-6 m-1"/>
        },
        {
            icon: <RiFolder2Line className="w-8 h-8"/>,
            name: "Progress",
            isActionMarker: false,
            isActive: true,
        },
        {
            icon: <RiCalendar2Line className="w-8 h-8"/>,
            name: "Calendar",
            isActionMarker: false,
            isActive: true,
            other: <HiPlus
                className="absolute bg-white lg:flex hidden items-center rounded-full w-6 h-6 mt-1 left-[16.5rem] justify-center"/>
        },
        {
            icon: <RiMailLine className="w-8 h-8"/>,
            name: "Messages",
            isActionMarker: false,
            isActive: true,
            other:
                <>
                    <PersonDots/>
                    <ValueDot value="6"/>
                </>
        },
        {
            icon: <RiNotification2Line className="w-8 h-8"/>,
            name: "Notifications",
            isActionMarker: true,
            isActive: true,
        },
        {
            icon: <RiSettings2Line className="w-8 h-8"/>,
            name: "Settings",
            isActionMarker: false,
            isActive: true,
        },
    ];

    return (
        <div className="mt-[0.5rem] w-[82%]">
            <p className="font-semibold text-gray-500 ml-[3px] pb-2 flex lg:justify-start justify-center">
                Menu: <span className="mx-1 font-bold text-gray-700">{items.length}</span>
            </p>

            {items.map(item => {
                return <MenuButton
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    other={item.other}
                    isActionMarker={item.isActionMarker}
                    isActive={item.isActive}
                />
            })}

        </div>
    )
}

export default Menu;

