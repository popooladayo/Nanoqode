import React from "react";

const Card = ({ Icon, title, text, list }) => {
    return (
        <div className="max-w-[350px] bg-white shadow-sm shadow-light-blue rounded-md flex items-center relative group hover:scale-[1.05] hover:-translate-y-6 hover:bg-deep-orange transition duration-700 ease-in-out cursor-pointer">
            <div className="absolute top-[-2.5rem] left-[1rem] bg-[#5AA6B1] p-4 rounded-full">
                <Icon />
            </div>
            <div className="text-left p-10 group-hover:text-white">
                <h1 className="text-2xl font-bold my-4">{title}</h1>
                <p className="text-xl font-normal text-deep-orange leading-8 group-hover:text-white">{text}</p>
                <ul className="mt-4 colored-bullet w-full pb-4 ">
                    {list?.map((text, index) => (
                        <li className="text-lg font-light my-4" key={index}>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
