import React from 'react';
import ActionMarker from "./ActionMarker";

const MenuButton = (props) => {
    return(
        <div className={
            props.isActive ? "flex lg:justify-start justify-center easy-in-out duration-500 cursor-pointer py-1 mt-1 hover:ring-offset-2 hover:ring-2"
                : "hidden"
        } >
            {props.icon}
            <p className="lg:flex hidden font-semibold text-gray-800 m-1">{props.name}</p>
            {props.other != null && props.other}
            {props.isActionMarker === true && <ActionMarker />}
        </div>
    )
}

export default MenuButton;