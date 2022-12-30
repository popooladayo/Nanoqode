import React from "react";

import nanoqode from "../assets/images/nanoqode.svg";
import message from "../assets/images/message.png";
import homei from "../assets/images/homei.png";

import { BsChevronCompactDown } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsVimeo } from "react-icons/bs";

function Navbar() {
    return (
        <>
            <div className="hidden bg-[#DA452C] items-center lg:flex p-8 text-white px-10">
                <div className="flex w-full justify-between">
                    <div className="flex items-center">
                        <img className="w-[21px] h-[15px]" src={message} alt="message" />
                        <span className="ml-3"> info@nanoqode.com</span>
                    </div>

                    <div className="items-center flex">
                        <img src={homei} alt="homei" />

                        <span className="items-center flex ml-3">
                            888 sargent ave Winnipeg, Manitoba, R3E 0C7, Canada
                        </span>
                    </div>

                    <div className="flex items-center gap-5">
                        <CiTwitter />
                        <CiFacebook />
                        <AiOutlineInstagram />
                        <FaYoutube />
                        <BsVimeo />
                    </div>
                </div>
            </div>

            <div className="h-[100px] bg-[#E9E9E9]  w-screen justify-between items-center flex">
                <div>
                    <img className="p-4" src={nanoqode} alt="nanoqode" />
                </div>
                <ul className="hidden lg:flex">
                    <li className="text-[#DA452C]"> Home</li>
                    <li className=" flex">
                        Website
                        <span className="p-2">
                            <BsChevronCompactDown />
                        </span>
                    </li>
                    <li className="flex">
                        Marketing
                        <span className="p-2">
                            <BsChevronCompactDown />
                        </span>
                    </li>
                    <li> Telephony</li>
                    <li>Hosting</li>
                    <li> Blog</li>
                    <li> About</li>
                </ul>

                <div className="mr-9">
                    <span className="hidden lg:flex bg-[#5AA6B1] lg:px-[24px] py-[12px] lg:text-white ">
                        +1 (800) 361-2961
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
