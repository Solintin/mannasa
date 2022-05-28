import React from "react";
import note from "../Assets/Svg/note.svg";

const Funds = () => {
  return (
    <div className="py-[100px] bg-[#F1FFFF] mx">
      <div className="max-w-4xl mx-auto items-center grid grid-cols-2 gap-12">
        <div>
          <img src={note} alt="" />
        </div>
        <div className="space-y-8 max-w-[445px]">
          <h1 className="text-5xl text-[#0F2420]">
            Your funds are <strong>safe</strong>
          </h1>
          <p className="text-[#0F2420CC]">
            We safeguard your funds and help you build sustainable income by
            investing in proven companies like META, APPLE and the NEXT BIG
            UNICORNS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Funds;
