import React from "react";

import ASP from "../assets/images/ASP-NET.png";
import Codeigniter from "../assets/images/Codeigniter.png";
import JS from "../assets/images/JS.png";
import Laravel from "../assets/images/Laravel.png";
import Mysql from "../assets/images/Mysql.png";
import PHP from "../assets/images/PHP.png";
import Rails from "../assets/images/Rails.png";

const Carousel = () => {
    return (
        <div>
            <div className="scroll-parent relative">
                <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#" className="text-deep-orange text-4xl">
                        ❮
                    </a>
                    <a href="#" className="text-deep-orange text-4xl">
                        ❯
                    </a>
                </div>
                <div className="scroll-element primary animate-slide">
                    <img src={ASP} alt="companies" />
                    <img src={Codeigniter} alt="companies" />
                    <img src={JS} alt="companies" />
                    <img src={Laravel} alt="companies" />
                    <img src={Mysql} alt="companies" />
                    <img src={PHP} alt="companies" />
                    <img src={Rails} alt="companies" />
                </div>
                <div className="scroll-element secondary animate-slide-back">
                    <img src={ASP} alt="companies" />
                    <img src={Codeigniter} alt="companies" />
                    <img src={JS} alt="companies" />
                    <img src={Laravel} alt="companies" />
                    <img src={Mysql} alt="companies" />
                    <img src={PHP} alt="companies" />
                    <img src={Rails} alt="companies" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
