import React from "react";
import logo from "../../assets/common/logo_dark.png";
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between bg-[#12252f] py-2 px-2 sm:px-7 text-sm sm:text-base">
      <div className=" flex items-center gap-2">
        <img className=" h-6 sm:h-7" src={logo} alt="" />
        <h2 className=" pl-2 border-l border-stone-400 text-stone-200 font-medium">
          Account
        </h2>
      </div>
      <div className=" flex items-center gap-2">
        <FaRegQuestionCircle className=" text-stone-300" />
        <div className=" py-0.5 px-1.5 sm:px-3 text-[#12252f] bg-white font-medium">
          email (account)
        </div>
      </div>
    </div>
  );
};

export default Navbar;
