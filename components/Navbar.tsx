"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useIsClient from "./useIsClient";

type Props = {};

const Navbar = (props: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const isClient = useIsClient();

 


  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isClient]);

  return (
    <div>
      {/* Red and White Header Part */}
      <div className="relative">
        <div className="relative h-[50px] flex bg-header-red justify-around rounded-br-[2rem] md:rounded-br-[4rem]">
          <div className="flex justify-center items-center w-full md:flex md:justify-around md:items-center flex-1 gap-2">
            <div className="flex gap-1">
              <img src="/phone.svg" alt="phone" className="hidden md:block" />
              <p className="text-xs font-serif font-bold text-white md:text-sm md:font-bold">
                +91 12345 67890
              </p>
            </div>
            <div className="flex gap-1">
              <img src="/email.svg" alt="email" />
              <p className="text-xs font-serif text-white font-bold md:text-sm">
                contact@siliguricarrental.com
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center gap-2 flex-1 pr-[100px] bg-white">
            <img src="/twitter.svg" alt="twitter" className="w-[19.152px] h-[19.152px]" />
            <img src="/instagram.svg" alt="instagram" className="w-[19.152px] h-[19.152px]" />
            <img src="/facebook.svg" alt="facebook" className="w-[19.152px] h-[19.152px]" />
          </div>
        </div>
      </div>

      {/* Sticky Navbar Menu */}
      <div className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 ${isSticky ? 'block' : 'hidden'}`}>
        <div className="flex justify-center items-center h-[100px] gap-[10px] md:gap-[50px] border-t-4 border-header-red">
          {/* logo */}
          <img src="/logo.svg" className="w-[73px] h-[40px]" alt="logo" />
          <Link href="/" className="text-xs md:text-xl font-semibold hover:text-header-red">
            HOME
          </Link>
          <Link href="/" className="text-xs md:text-xl font-semibold hover:text-header-red">
            ABOUT US
          </Link>
          <Link href="/" className="text-xs md:text-xl font-semibold hover:text-header-red">
            WHY US
          </Link>
          <Link href="/" className="text-xs md:text-xl font-semibold hover:text-header-red">
            CAR RENTAL
          </Link>
          <Link href="/" className="hidden md:block text-xs md:text-xl font-semibold hover:text-header-red">
            TOUR PACKAGES
          </Link>
          <Link href="/" className="hidden md:block text-xs md:text-xl font-semibold hover:text-header-red">
            CORPORATE BOOKING
          </Link>
          <Link href="/" className="hidden md:block text-xs md:text-xl font-semibold hover:text-header-red">
            CONTACT
          </Link>
          <button className="hidden md:block bg-header-red text-white text-sm font-bold w-[130px] h-[35px] rounded-xl">
            GET A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
