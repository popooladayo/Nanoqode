import React from "react";
import NanoqodeLogo from "../assets/images/nanoqode-Logo.png";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { TfiFacebook, TfiVimeoAlt } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-[#5AA6B1] text-white text-xl leading-[1.5] pt-10">
            <div className="footer text-white text-xl leading-[1.5] px-10 md:px-6 lg:px-10">
                <div>
                    <span className="footer-title">
                        <img src={NanoqodeLogo} alt="Nanoqode Logo" />
                    </span>
                    <span className="max-w-[20rem] lg:max-w-[30rem]">
                        <p>
                            Nanoqode services are designed to meet modern digital business needs. From getting your
                            company up-to-specs on security, deploying custom solutions, managing you marketing strategy
                            and many more.
                        </p>
                    </span>

                    <div className="grid grid-flow-col gap-6 text-2xl">
                        <a href="#">
                            <BsTwitter />
                        </a>
                        <a href="#">
                            <TfiFacebook />
                        </a>
                        <a href="#">
                            <BsInstagram />
                        </a>
                        <a href="#">
                            <TfiVimeoAlt />
                        </a>
                        <a href="#">
                            <BsYoutube />
                        </a>
                    </div>
                </div>

                <div>
                    <span className="footer-title">Get In Touch</span>
                    <a className="link link-hover">
                        888 Sargent Ave <br /> Winnipeg, Manitoba, R3E 0C7 <br /> Canada
                    </a>
                    <a className="link link-hover">info@nanoqode.com</a>
                    <a className="link link-hover">+1 (800) 361-2961</a>
                </div>

                <div>
                    <span className="footer-title">Learn More</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Story</a>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Contact Us</a>
                </div>
                <div>
                    <span className="footer-title">Our Newsletter</span>
                    <span>
                        Subscribe to our newsletter to get <br /> our news delivered to your inbox!
                    </span>
                    <div className="form-control w-80">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input bg-white py-8 input-bordered w-full pr-16"
                            />
                            <button className="btn btn-lg capitalize bg-deep-orange mt-8 text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-end items-center p-8 px-20">
                <span>© 2022 Nanoqode. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
