import React from "react";

const Feature = ({ Icon, title, text }) => {
    return (
        <div className="flex max-w-fit lg:space-x-10 items-center lg:items-center flex-wrap lg:flex-nowrap justify-center lg:justify-start">
            <div className="p-4 py-6 bg-light-blue rounded-full ">
                <Icon />
            </div>
            <div className="text-center lg:text-left p-4">
                <p className="font-semibold text-xl text-slate-600 leading-loose">{title}</p>
                <p className="font-normal text-md text-slate-600">{text}</p>
            </div>
        </div>
    );
};

export default Feature;
