import React from "react";
import RightAngleTriangle from "./RightAngleTriangle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="">
        {/* Part 1 */}
        <div className="relative h-[50px] flex ">
          <div className="flex justify-center items-center w-full bg-header-red md:bg-header-red md:flex md:justify-center md:items-center gap-[50px] flex-1">
            <div className="md:mobile flex gap-1">
              <img src="/phone.svg" alt="phone" className="hidden md:block"/>
              <p className="text-xs font-serif font-bold text-white md:text-white md:text-sm md:font-bold ">+91 12345 67890</p>
            </div>
            <div className="email flex gap-1">
              <img src="/email.svg" alt="email" />
              <p className="text-xs font-serif text-white font-bold md:text-white md:text-sm ">
                contact@siliguricarrental.com
              </p>
            </div>
          </div>
          <div className="md:block hidden">
          <RightAngleTriangle />
          </div>
       
          <div className="hidden md:bg-header-white md:flex justify-end items-center gap-1 flex-1 pr-[100px] bg-white">
            <img
              src="/twitter.svg"
              alt="twitter"
              className="w-[19.152px] h-[19.152px]"
            />
            <img
              src="/twitter.svg"
              alt="twitter"
              className="w-[19.152px] h-[19.152px]"
            />
            <img
              src="/twitter.svg"
              alt="twitter"
              className="w-[19.152px] h-[19.152px]"
            />
            <img
              src="/instagram.svg"
              alt="instagram"
              className="w-[19.152px] h-[19.152px]"
            />
            <img
              src="/facebook.svg"
              alt="facebook"
              className="w-[19.152px] h-[19.152px]"
            />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Navbar;
