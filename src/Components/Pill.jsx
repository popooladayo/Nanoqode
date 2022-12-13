import React from "react";
import { Diamond } from "./SVGs";

const Pill = ({ text }) => {
    return (
        <div className="bg-very-light-blue flex items-center justify-start space-x-6 py-2 px-14 sm:py-4 max-w-xs sm:max-w-[600px] rounded-full">
            <div>
                <Diamond />
            </div>
            <div className="font-semibold text-slate-600 font-inter text-base md:text-xl capitalize">{text}</div>
        </div>
    );
};

export default Pill;
