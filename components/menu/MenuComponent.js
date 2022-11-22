import React from 'react';

import user from "../../assets/user.png";

import Menu from './menu/Menu';

import SecondMenu from "./secondMenu/SecondMenu";
import UserInfo from "./userInfo/UserInfo";

const MenuComponent = () => {
    return (
        <div className="flex justify-center items-center">
            <div
                className="lg:w-[20rem] w-[9.2rem] h-auto inline rounded-[2rem] bg-gray-200 opacity-90 lg:pb-[0.8rem] pb-[0.1rem] flex flex-col items-center">
                <div className="flex space-x-1 mt-5 justify-center ">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <UserInfo src={user} name="Matylda Kowalska" message="Good Day 👋"/>
                <div className="bg-white h-[1px] w-[80%] my-[0.5rem] bg-gray-300"/>
                <Menu/>
                <div className=" bg-white h-[1px] w-[80%] my-[0.5rem] bg-gray-300"/>
                <SecondMenu/>
            </div>
        </div>


    )
}

export default MenuComponent;