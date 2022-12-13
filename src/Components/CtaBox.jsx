import React from "react";
import { Phone, Message } from "./SVGs";

const CTABox = () => {
    return (
        <div className="items-center justify-around rounded-[18px] p-6 max-w-[848px] shadow-lg shadow-light-blue">
            <div className="gap-10">
                <div className="pt-3">
                    <Phone />
                </div>
                <div className="text-xl font-light text-slate-500 text-left leading-10">
                    <p>Toll Free Number</p>
                    <p className="text-slate-900 font-medium text-4xl leading-[3rem]">800-361-2961</p>
                </div>
            </div>

            <hr className="h-[89px] w-[.2rem] bg-light-blue" />

            <div className="flex-row-reverse gap-10">
                <div className="pt-3">
                    <Message />
                </div>
                <div className="text-xl font-light text-slate-500 text-left leading-10">
                    <p>Get a quote</p>
                    <p className="text-slate-900 font-medium text-4xl leading-[3rem]">Live Chat With Us</p>
                </div>
            </div>
        </div>
    );
};

export default CTABox;
