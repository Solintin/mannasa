import React from "react";
import invest_bg from "../Assets/Svg/invest_bg.svg";
import pin_bottom from "../Assets/Svg/pin-bottom.svg";

const Getstarted = () => {
  return (
    <div className="py-[120px] bg-white grid place-content-center relative">
      <div className="absolute left-0 right-10 top-20">
        <img src={invest_bg} alt="" />
      </div>
      <div className="relative max-w-xl md:px-20 px-10 bg-[#E9F5D0] py-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">Pro Investment Plan</h2>
        <h2 className="text-xl text-[#0F242080] mt-3">Pro Investment Plan</h2>
        <h2 className="text-4xl text-[#0F2420] mt-[70px] font-black">
          $1,000<span className="text-xl">/yr</span>{" "}
        </h2>
        <h2 className="text-xl text-[#0F242080] mt-3">Minimum investment</h2>
        <h2 className="text-xl font-semibold mt-2">
          Get invested in dollar assets
        </h2>
        <h2 className="text-xl font-semibold mt-6">
          Make up to 25% gain per year
        </h2>

        <div>
          <button className="rounded-[10px] mt-[90px] md:px-10 px-5 font-bold text-sm text-[#D3FFE8] p-3 border bg-[#0F2420]">
            Get started
          </button>
        </div>
        <div className="absolute bottom-0 left-0">
          <img src={pin_bottom} alt="" className="w-[70px] h-[70px]" />
        </div>
        <div className="absolute top-0 right-0 transform -rotate-180">
          <img src={pin_bottom} alt="" className="w-[70px] h-[70px]" />
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
