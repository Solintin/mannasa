import React from "react";
import facebook from "../Assets/Svg/facebook.svg";
import twitter from "../Assets/Svg/twitter.svg";
import microsoft from "../Assets/Svg/microsoft.svg";
import apple from "../Assets/Svg/apple.svg";
import amazon from "../Assets/Svg/amazon.svg";
import google from "../Assets/Svg/google.svg";

const Partner = () => {
  return (
    <div className="">
      <div className="bg-white text-center py-[90px]  ">
        <div className="max-w-3xl mx-auto space-y-4 px-4">
          <h1 className="md:text-5xl text-2xl font-bold text-[#0D0D0D]">
            Access Secured Dollar Investment,No risks involved
          </h1>
          <p className="md:text-2xl text-lg text-[#0D0D0D]">
            At Mansa, our team of experts run a pool of well diversified stock
            portfolio on the best Fortune 500 companies of the world today.
          </p>
        </div>
      </div>
      <div className="bg-[#0A2229] overflow-x-auto py-[65px] flex md:justify-center items-center space-x-[100px] px-4">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={google} alt="" />
        <img src={microsoft} alt="" />
        <img src={amazon} alt="" />
        <img src={apple} alt="" />
      </div>
    </div>
  );
};

export default Partner;
