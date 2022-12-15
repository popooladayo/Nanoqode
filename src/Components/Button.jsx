import React from "react";

const Button = ({ children, colour }) => {
    return (
        <div className={`bg-${colour} text-center py-4 lg:py-6 opacity-[0.9] rounded-md w-[120px] lg:w-[200px]`}>
            <button className="capitalize font-semibold text-white font-inter text-xs lg:text-xl">{children}</button>
        </div>
    );
};

export default Button;
