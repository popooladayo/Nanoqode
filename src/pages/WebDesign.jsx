import React from "react";

import Pill from "../Components/Pill";
import Button from "../Components/Button";
import CTABox from "../Components/CtaBox";
import Card from "../Components/Card";
import { CurvedArrow } from "../Components/SVGs";

import { pillLists, cardData, featureData } from "../data/staticData";
import WebsiteMain from "../assets/images/Webiste-Image.jpg";
import featureImage from "../assets/images/Feature-Image.jpg";
import Feature from "../Components/Feature";

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

                <div className="w-[80%] lg:w-[60%] xl:w-[50%] mx-auto relative top-[6rem] lg:top-16 z-10">
                    <CTABox />
                </div>
            </section>

            <section className="bg-section-blue flex flex-col justify-center items-center space-y-32 py-20 pb-[15rem] px-10 relative z-10">
                <span className="hidden lg:block font-bold text-[90px] text-white uppercase drop-shadow-xl absolute top-[4rem] right-[-7.8rem] rotate-[-90deg]">
                    built
                </span>
                <h1 className="font-semibold lg:font-bold text-4xl text-center lg:text-5xl text-[#333] mt-[12rem] lg:mt-40">
                    How we Build Awesome Websites!
                </h1>
                <div className="flex gap-[8rem] lg:gap-10 flex-wrap justify-center items-center">
                    {cardData?.map((card, index) => (
                        <div key={index} className="relative group">
                            <Card title={card.title} text={card.text} list={card.list} Icon={card.icon} />
                            <div className="hidden curved-arrow:block ml-20 mt-6 absolute left-[10rem]">
                                <span className="group-last:hidden">
                                    <CurvedArrow />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="">
                <div className="relative bg-light-orange px-6 lg:p-[8rem] py-16 space-y-10 text-center lg:text-start">
                    <span className="hidden lg:block font-bold text-[90px] text-white uppercase drop-shadow-2xl absolute top-[-3.2rem] right-8">
                        creative
                    </span>
                    <h1 className="uppercase text-xl font-semibold">What makes us different</h1>
                    <p className="capitalize text-2xl lg:text-5xl font-bold leading-tight">
                        We are a creative company that <br /> focuses on establishing long-term <br /> relationships
                        with customers.
                        <hr className="lg:w-1/3 w-2/4 mx-auto h-[6px] bg-deep-orange my-4 lg:mx-0" />
                    </p>
                </div>

                <div className="flex flex-row-reverse lg:justify-around items-center pb-10">
                    <div className="hidden lg:block p-3 bg-light-grey rounded-full -mt-40">
                        <img src={featureImage} alt="feature-image" className="w-[500px] h-[650px] rounded-full object-cover" />
                    </div>
                    <div className="flex gap-16 lg:gap-10 flex-col lg:max-w-[40%] sm:max-w-[80%] mx-auto lg:m-0 py-10 lg:px-4">
                        {featureData?.map((feature, index) => (
                            <Feature key={index} Icon={feature.icon} title={feature.title} text={feature.text} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WebDesign;
