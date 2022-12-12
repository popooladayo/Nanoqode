import React from "react";

const Button = ({ children, colour }) => {
    return (
        <div className={`bg-${colour} px-6 py-4 opacity-[0.9] rounded-md max-w-[253px]`}>
            <button className="uppercase font-semibold text-white font-inter text-xl">{children}</button>
        </div>
    );
};

export default Button;
