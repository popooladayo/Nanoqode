import React from "react";

import nanoqode from "../assets/images/nanoqode.svg";
import message from "../assets/images/message.png";
import homei from "../assets/images/homei.png";

import { FaYoutube } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsVimeo } from "react-icons/bs";

import Button from "./Button";

const Navbar = () => {
    return (
        <div>
            <div className="hidden bg-[#DA452C] items-center lg:flex p-8 text-white px-10 text-xl">
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
            <div className="navbar bg-[#E9E9E9] text-xl lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="red"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-[#e9e9e9] dropdown-content py-6 shadow rounded-box w-52">
                            <li>
                                <a>Home</a>
                            </li>
                            <li tabIndex={1}>
                                <a>
                                    Website
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2 bg-[#e9e9e9]">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li tabIndex={2}>
                                <a>
                                    Marketing
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2 bg-[#e9e9e9]">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Telephone</a>
                            </li>
                            <li>
                                <a>Hosting</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                    <a>
                        <img src={nanoqode} alt="nanoqode" />
                    </a>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu-horizontal menu">
                        <li>
                            <a>Home</a>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Website
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2 bg-[#e9e9e9]">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Marketing
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2 bg-[#e9e9e9]">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Telephone</a>
                        </li>
                        <li>
                            <a>Hosting</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <Button colour="light-blue" classes="lg:w-[150px]">
                        +1 (800) 361-2961
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
