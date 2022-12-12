import React from "react";
import { Diamond } from "./Diamond";

const Pill = ({ text }) => {
    return (
        <div className="bg-very-light-blue flex items-center justify-evenly p-4 max-w-[400px] rounded-full">
            <div>
                <Diamond />
            </div>
            <div className="font-semibold text-slate-600 font-inter text-xl capitalize">{text}</div>
        </div>
    );
};

export default Pill;
