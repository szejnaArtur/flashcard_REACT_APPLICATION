import React from "react";
import ActionMarker from "../secondMenu/ActionMarker";

const SecondMenuButton = (props) => {
    return (
        <div className="flex lg:justify-start justify-center easy-in-out duration-500 cursor-pointer m-3 hover:ring-offset-2 hover:ring-2">
            {props.icon}
            <p className="lg:flex hidden m-1 font-semibold ml-2 text-gray-800">{props.name}</p>
            {props.isActionMarker && <ActionMarker className="left=[4rem]" />}
        </div>
    )
}

export default SecondMenuButton;