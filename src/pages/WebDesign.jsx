import React from "react";

import Pill from "../Components/Pill";
import Button from "../Components/Button";
import CTABox from "../Components/CtaBox";

import { pillLists } from "../data/staticData";
import WebsiteMain from "../assets/images/Webiste-Image.jpg";

const WebDesign = () => {
    return (
        <section className="space-y-9">
            <div className="space-y-9">
                <h1 className="font-bold text-4xl md:text-6xl">
                    <span className="text-deep-orange border-t-[4px] border-deep-orange pt-3 ">Creative| </span>
                    Websites
                </h1>
                <p className="font-sm md:font-normal text-xl md:text-3xl max-w-[30ch]">
                    Stand out and generate more leads. Custom Websites Starting $999*
                </p>
                <div className="space-y-6 text-left">
                    {pillLists.map((pill, index) => (
                        <Pill text={pill} key={index} />
                    ))}
                </div>
                <div className="w-max m-auto">
                    <Button colour="deep-orange">book a free consult</Button>
                </div>
            </div>
            <div className="bg-light-blue p-5 rounded-tl-[4rem] rounded-br-[4rem]">
                <img src={WebsiteMain} alt="Website main" />
            </div>
            <div>
                <CTABox />
            </div>
        </section>
    );
};

export default WebDesign;
