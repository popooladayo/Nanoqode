import React from "react";

const Button = ({ children, colour }) => {
    return (
        <div className={`bg-${colour} text-center py-4 opacity-[0.9] rounded-md w-[200px] sm:max-w-[253px]`}>
            <button className="uppercase font-semibold text-white font-inter text-base sm:text-xl">{children}</button>
        </div>
    );
};

export default Button;
