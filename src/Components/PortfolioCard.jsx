import React from "react";
import PortImage from "../assets/images/ProtFolio Image.jpg";
import { ArrowRight } from "./SVGs";

const PortfolioCard = () => {
    return (
        <div className=" bg-white max-w-[25rem] p-4 rounded-md drop-shadow-xl ring-1 space-y-10">
            <div className="px-2">
                <img src={PortImage} alt="Portfolio Image" />
            </div>
            <div className="mt-4 text-left px-2">
                <h1 className="font-bold text-2xl my-4">Medical Website</h1>
                <p className="font-normal text-[12px] text-slate-600 my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales
                    enim viverra odio diam. Nascetur dui elementum.
                </p>
            </div>
            <div className="p-2">
                <div className="flex font-semibold text-base items-center gap-3">
                    Read More
                    <span className="mt-1">
                        <ArrowRight stroke="#333333" />
                    </span>
                </div>
                <hr className=" w-[6.5rem] h-[4px] bg-[#0099FF] mt-1" />
            </div>
        </div>
    );
};

export default PortfolioCard;
