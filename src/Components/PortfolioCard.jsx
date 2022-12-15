import React from "react";
import { ArrowRight } from "./SVGs";

const PortfolioCard = ({ PortImage, title, text }) => {
    return (
        <div className=" bg-white max-w-[25rem] p-4 rounded-md drop-shadow-xl ring-1 space-y-10">
            <div className="px-2">
                <img src={PortImage} alt="Portfolio Image" />
            </div>
            <div className="mt-4 text-left px-2">
                <h1 className="font-bold text-2xl my-4">{title}</h1>
                <p className="font-normal text-[12px] text-slate-600 my-4">{text}</p>
            </div>
            <div className="p-2 cursor-pointer w-fit hover:bg-[#0099FF] hover:scale-[1.05] hover:text-white rounded-md transition duration-700 origin-left">
                <div className="flex font-semibold text-base items-center gap-3">
                    Read More
                    <span className="mt-1">
                        <ArrowRight stroke="#333333" />
                    </span>
                </div>
                <hr className=" w-[6.5rem] bg-[#0099FF] mt-1 hover:bg-white h-[2px]" />
            </div>
        </div>
    );
};

export default PortfolioCard;
