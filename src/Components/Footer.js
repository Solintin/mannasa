import React from "react";
import logo from "../Assets/Svg/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#0A2229] md:px-[100px] px-4 py-[50px]  space-y-8 ">
      <div className="md:flex md:justify-between md:items-center border-b  border-[#FFFFFFCC] pb-6 ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="md:space-x-8 mt-10 md:mt-0 md:flex md:flex-row flex-col items-center">
          <h1 className="text-white font-semibold text-xl">
            Ready to get started?
          </h1>
          <button className="rounded-[10px] max-w-max px-6 font-bold text-sm text-[#fff] p-3  bg-[#009948]">
            Get started
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-row-reverse justify-between md:items-center">
        <div className="md:space-x-8   flex md:flex-row flex-col items-center">
          <FaFacebookF className="text-white" size={15} />
          <BsTwitter className="text-white" size={15} />
          <AiOutlineInstagram className="text-white" size={15} />
        </div>
        <div className="md:space-x-8      flex md:flex-row flex-col  md:items-center">
          <a href="/" className="text-white text-xl">
            Terms & Conditions
          </a>
          <a href="/" className="text-white text-xl">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
