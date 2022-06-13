import React from "react";
import shapes from "../Assets/Svg/shapes.svg";

const Hero = () => {
  return (
    <div className="mt-20 container mx-auto w-11/12">
      <div className="max-w-3xl">
        <h1 className="text-[#F5F5EB] md:text-7xl text-3xl font-bold">
          Make Smart Invesment With Maansa.
        </h1>
      </div>
      <div className="mt-10 pb-32 grid md:grid-cols-2 items-center">
        <div className="">
          <h1 className="text-[#E9EBE0] text-2xl ">
           Maasa is your automated assets management platform, designed to ensure to your financial security through high-value dollar asset investment.
          </h1>
          <button className="bg-[#0BB95D] mt-10 rounded-md text-white font-medium px-6 py-2">
          Explore Mannsa Today
          </button>
        </div>
        <div className="md:block hidden self-end transform -translate-y-10">
          <img src={shapes} alt="" className="animation animate-bounce-slow ml-auto h-[360px] w-[360px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
