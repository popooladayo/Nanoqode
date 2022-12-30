import React from "react";
import { Phone, Message } from "./SVGs";

const CTABox = () => {
    return (
        <div className="lg:flex items-center justify-around rounded-[18px] p-2 md:p-4 max-w-[848px] shadow-lg shadow-light-blue bg-white">
            <div className="flex gap-5 sm:gap-10 pl-5">
                <div className="hidden lg:block">
                    <Phone />
                </div>
                <div className="text-base lg:text-xl font-light text-slate-500 text-left leading-10">
                    <p>Toll Free Number</p>
                    <p className="text-slate-900 font-medium text-xl lg:text-2xl leading-[3rem]">800-361-2961</p>
                </div>
            </div>

            <hr className="w-full h-[6px] lg:h-[89px] lg:w-[.3rem] lg:mx-2  bg-light-blue" />

            <div className="flex lg:flex-row-reverse gap-5 sm:gap-10 pl-5">
                <div className="hidden lg:block pt-3">
                    <Message />
                </div>
                <div className="text-base lg:text-xl font-light text-slate-500 text-left leading-10">
                    <p>Get a quote</p>
                    <p className="text-slate-900 font-medium text-xl lg:text-2xl leading-[3rem]">Live Chat With Us</p>
                </div>
            </div>
        </div>
    );
};

export default CTABox;
