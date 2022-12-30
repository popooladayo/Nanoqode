import React from "react";

const Button = ({ children, colour, classes }) => {
    return (
        <div
            className={`${classes} bg-${colour} text-center py-4 opacity-[0.9] rounded-md w-[120px] lg:w-[200px] cursor-pointer`}
        >
            <button className="capitalize font-semibold text-white font-inter text-xs lg:text-base">{children}</button>
        </div>
    );
};

export default Button;
