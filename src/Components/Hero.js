import React from "react";
import shapes from "../Assets/Svg/shapes.svg";

const Hero = () => {
  return (
    <div className="mt-20 container mx-auto w-11/12">
      <div className="max-w-3xl">
        <h1 className="text-[#F5F5EB] text-7xl font-bold">
          Invest Your Funds With Dollar Asset Classes
        </h1>
      </div>
      <div className="mt-10 pb-32 grid grid-cols-2 items-center">
        <div className="">
          <h1 className="text-[#E9EBE0] text-2xl ">
            Maansa Capital is a capital firm with more than $1.8 billion in
            assets under management that invests early in founders building
            fast-growing technology companies
          </h1>
          <button className="bg-[#0BB95D] mt-10 rounded-md text-white font-medium px-6 py-2">
            Invest Now
          </button>
        </div>
        <div className="self-end transform -translate-y-10">
          <img src={shapes} alt="" className="ml-auto h-[360px] w-[360px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
