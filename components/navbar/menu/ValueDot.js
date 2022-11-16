import React from "react";

const ValueDot = (props) => {
    return (
        <p className="
            absolute
            lg:left-[16.5rem]
            left-[4.5rem]
            flex
            items-center
            justify-center
            bg-red-500
            w-6
            h-6
            rounded-full
            lg:mt-1
            -mt-1
            text-white
            font-semibold"
        >
            {props.value}
        </p>
    )
}

export default ValueDot;