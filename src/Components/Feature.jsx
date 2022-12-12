import React from "react";
import { FeatureIcon } from "./SVGs";

const Feature = ({ Icon, title, text }) => {
    return (
        <div className="flex max-w-fit space-x-10 items-start">
            <div className="p-4 py-6 bg-light-blue rounded-full ">
                <FeatureIcon />
            </div>
            <div className="text-left">
                <p className="font-semibold text-xl text-slate-600 leading-loose">Track Your ROI</p>
                <p className="font-normal text-md text-slate-600">
                    Collect 100+ data points and set goals for conversions. <br /> Understand your traffic source and
                    how to convert.
                </p>
            </div>
        </div>
    );
};

export default Feature;
