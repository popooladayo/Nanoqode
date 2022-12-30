import React from "react";

import Pill from "../Components/Pill";
import Button from "../Components/Button";
import CTABox from "../Components/CtaBox";
import Card from "../Components/Card";
import PortfolioCard from "../Components/PortfolioCard";
import Carousel from "../Components/Carousel";
import ClientCard from "../Components/ClientCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/NavbarD";

import { CurvedArrow } from "../Components/SVGs";

import { pillLists, cardData, featureData, PortfolioData, clientData } from "../data/staticData";

import WebsiteMain from "../assets/images/Webiste-Image.jpg";
import featureImage from "../assets/images/Feature-Image.jpg";
import Feature from "../Components/Feature";
import ReplaceGif from "../assets/images/replace-gif.jpg";

const WebDesign = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className="overflow-hidden">
                <section className="space-y-10 relative pt-20">
                    <div className="flex flex-col md:flex-row md:gap-6 items-center lg:justify-center">
                        <div className="space-y-12 text-center lg:ml-auto lg:max-w-[30%]">
                            <h1 className="font-bold text-4xl xl:text-6xl">
                                <span className="text-deep-orange border-t-[4px] border-deep-orange pt-3">
                                    Creative|{" "}
                                </span>
                                Websites
                            </h1>
                            <p className="font-sm lg:font-normal text-xl xl:text-3xl">
                                Stand out and generate more leads. <br /> Custom Websites Starting at $999*
                            </p>
                            <div className="space-y-6 px-4 sm:px-0">
                                {pillLists.map((pill, index) => (
                                    <Pill text={pill} key={index} />
                                ))}
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <Button colour="deep-orange">Book a free Consult</Button>
                            </div>
                        </div>

                        <div
                            className="bg-light-blue p-10 rounded-tl-[4rem] rounded-br-[4rem] rounded-lg mt-10 lg:mt-0 max-w-[80%] md:max-w-[60%] md:ml-auto animate-move-in-right backface"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            <img src={WebsiteMain} alt="Website main" className="mt-6 lg:mt-28" />
                        </div>
                    </div>

                    <div className="w-[80%] lg:w-[60%] xl:w-[50%] mx-auto relative top-[6rem] lg:top-16 z-20">
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
                    <div className="flex gap-[8rem] lg:gap-12 flex-wrap justify-center items-center">
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
                        <div>
                            <p className="capitalize text-2xl lg:text-5xl font-bold leading-tight">
                                We are a creative company that <br /> focuses on establishing long-term <br />{" "}
                                relationships with customers.
                            </p>
                            <hr className="lg:w-1/3 w-1/4 mx-auto h-[6px] my-2 bg-deep-orange lg:mx-0" />
                        </div>
                    </div>

                    <div className="flex flex-row-reverse lg:justify-around items-center pb-10">
                        <div className="hidden lg:block p-3 bg-light-grey rounded-full -mt-20">
                            <img
                                src={featureImage}
                                alt="feature-image"
                                className="w-[450px] h-[600px] rounded-full object-cover"
                            />
                        </div>
                        <div className="flex gap-16 lg:gap-10 flex-col lg:max-w-[40%] sm:max-w-[80%] mx-auto lg:m-0 py-10 lg:px-4">
                            {featureData?.map((feature, index) => (
                                <Feature key={index} Icon={feature.icon} title={feature.title} text={feature.text} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center gap-20 bg-very-light-blue py-[8rem] relative">
                    <span className="hidden md:block font-bold text-[90px] text-white uppercase drop-shadow-2xl absolute bottom-[15rem] left-[-17.5rem] rotate-90">
                        portfolio
                    </span>
                    <div className="text-center">
                        <h1 className="text-xl font-semibold capitalize text=[#333] leading-[3]">Portfolio</h1>
                        <p className="font-bold text-3xl lg:text-5xl py-3 md:border-b-4 border-deep-orange ">
                            Our Award-Winning Website Portfolio
                        </p>
                    </div>
                    <div className="md:px-[6rem] max-w-[90%]">
                        <div className="flex flex-wrap justify-center gap-10 px-10 sm:px-0">
                            {PortfolioData?.map((port, index) => (
                                <PortfolioCard key={index} PortImage={port.image} title={port.title} text={port.text} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button colour="light-blue">See All Portfolio</Button>
                    </div>
                </section>
                <section className="py-20">
                    <div className="lg:max-w-[80%] m-auto">
                        <div className="text-center">
                            <h1 className="font-semibold text-base lg:text-xl uppercase mt-10">our design language</h1>
                            <p className="font-bold text-3xl lg:text-5xl mt-5 mb-10 lg:mb-28">
                                A Focus on Design + Fuction
                            </p>
                        </div>
                        <div className="flex justify-center items-center p-4 lg:p-20">
                            <div className="hidden xl:block p-2 rounded bg-[#9AB8BB]">
                                <img src={ReplaceGif} alt="gif" className="w-[30rem] h-[25rem] object-cover" />
                            </div>
                            <div className="bg-[#e9e9e9] p-4 lg:p-10 font-[400] text-sm lg:text-lg h-fit space-y-6 rounded-md max-w-md xl:-ml-16 xl:-mt-40">
                                <p>
                                    Create and maintain inclusive and high-quality content, protecting your brand
                                    reputation and reducing the risk of compliance lawsuits and fines.
                                </p>
                                <p>
                                    Identify, prioritize, and implement the most impactful content optimizations so you
                                    can craft truly impactful, and engaging, customer experiences.
                                </p>
                                <Button colour="light-blue">Book a free consult</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center items-center flex-col bg-[#FBE9E5] pt-20 pb-40">
                    <div>
                        <p className="font-bold text-3xl lg:text-5xl mb-20 text-black">Development Languages</p>
                    </div>
                    <div>
                        <Carousel />
                    </div>
                </section>
                <section className="pb-36 pt-20 bg-section-blue">
                    <div className="text-center">
                        <p className="font-bold text-3xl lg:text-5xl mb-28 text-black capitalize">
                            Why Our Clients ❤️ us
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-around items-center max-w-[85%] mx-auto gap-20 md:gap-10">
                        {clientData?.map(({ name, title }, index) => (
                            <ClientCard name={name} title={title} key={index} />
                        ))}
                    </div>
                    <div className="w-fit mx-auto mt-28">
                        <Button colour="light-blue">More Details</Button>
                    </div>
                </section>
                <section className="py-28">
                    <div className="max-w-[90%] lg:max-w-[75%] mx-auto md:text-left flex flex-wrap justify-center md:justify-between items-center gap-10 bg-image p-20 rounded-md">
                        <div>
                            <h1 className="font-bold md:text-[24px] xl:text-[32px] text-white leading-snug">
                                <span className="border-t-[4px] border-deep-orange pt-3"> Convinced </span> yet? Let's
                                make something <br /> great together.
                            </h1>
                        </div>
                        <div>
                            <Button colour="light-blue">SCHEDULE A CALL</Button>
                        </div>
                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default WebDesign;
