import React from "react";

import Pill from "../Components/Pill";
import Button from "../Components/Button";
import CTABox from "../Components/CtaBox";
import Card from "../Components/Card";

import { pillLists, cardData } from "../data/staticData";
import WebsiteMain from "../assets/images/Webiste-Image.jpg";

const WebDesign = () => {
    return (
        <main>
            <section className="space-y-10 relative pt-20">
                <div className="flex flex-col md:flex-row md:gap-6 items-center lg:justify-center">
                    <div className="space-y-12 text-center lg:ml-auto lg:max-w-[30%]">
                        <h1 className="font-bold text-4xl xl:text-6xl">
                            <span className="text-deep-orange border-t-[4px] border-deep-orange pt-3">Creative| </span>
                            Websites
                        </h1>
                        <p className="font-sm lg:font-normal text-xl xl:text-3xl">
                            Stand out and generate more leads. <br /> Custom Websites Starting at $999*
                        </p>
                        <div className="space-y-6">
                            {pillLists.map((pill, index) => (
                                <Pill text={pill} key={index} />
                            ))}
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <Button colour="deep-orange">book a free consult</Button>
                        </div>
                    </div>

                    <div
                        className="bg-light-blue p-10 rounded-tl-[4rem] rounded-br-[4rem] rounded-lg mt-10 lg:mt-0 max-w-[80%] md:max-w-[60%] md:ml-auto animate-move-in-right backface"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <img src={WebsiteMain} alt="Website main" className="mt-6 lg:mt-28" />
                    </div>
                </div>

                <div className="w-[80%] lg:w-[60%] xl:w-[50%] mx-auto relative top-[6rem] lg:top-16">
                    <CTABox />
                </div>
            </section>
            <section className="bg-section-blue flex flex-col justify-center items-center space-y-32 py-20 pb-[15rem] px-10">
                <h1 className="font-semibold lg:font-bold text-4xl text-center lg:text-5xl text-[#333] mt-[12rem] lg:mt-40">
                    How we Build Awesome Websites!
                </h1>
                <div className="flex gap-20 lg:gap-10 flex-wrap justify-center items-center">
                    {cardData?.map((card, index) => (
                        <Card key={index} title={card.title} text={card.text} list={card.list} Icon={card.icon} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default WebDesign;
