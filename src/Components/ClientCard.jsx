import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Stars } from "./SVGs";

const ClientCard = ({ name, title }) => {
    return (
        <div className="bg-white max-w-md p-6 text-left space-y-6 drop-shadow-lg rounded-lg relative">
            <Stars />
            <p className="font-normal text-sm md:text-[14px] text-slate-600 leading-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare."
            </p>
            <div>
                <h1 className="font-bold text-base">{name}</h1>
                <p className="font-light text-sm">{title}</p>
            </div>
            <div>
                <FcGoogle className="w-16 h-16 absolute right-2 bottom-2" />
            </div>
        </div>
    );
};

export default ClientCard;
