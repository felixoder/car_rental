import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[564px]">
      <div className="absolute top-0 left-0 w-full  h-[100px] md:h-full">
        <img src="/hero.png" alt="hero" className="h-[300px] w-full md:h-[564px] object-cover" />
        <div className="hidden md:absolute top-0 left-0 w-full md:h-[300px] bg-gradient-to-b from-white/100 to-transparent"></div>
      </div>
      <div className="absolute bg-gradient-to-b from-white/100 to-transparent top-0 left-0 w-full h-[100px] md:h-[300px] md:bg-gradient-to-b md:from-white/100 md:to-transparent"></div>
      <div className="gap-[10px] relative z-10 flex justify-center items-center md:gap-[50px] h-[50px] mt-3  bg-transparent">
     
        {/* logo */}
        <img src="/logo.svg" className="w-[73px] h-[40px]" alt="logo" />
        <Link href="/" className="text-xs md:text-black md:text-xl font-semibold hover:text-header-red ">
          HOME
        </Link>
        <Link href="/" className="text-xs md:text-black md:text-xl font-semibold hover:text-header-red">
          ABOUT US
        </Link>
        <Link href="/" className="text-xs md:text-black md:text-xl font-semibold hover:text-header-red">
          WHY US
        </Link>
        <Link href="/" className="text-xs md:text-black md:text-xl font-semibold hover:text-header-red">
          CAR RENTAL
        </Link>
        <Link href="/" className="hidden md:block text-xs md:text-black md:text-xl font-semibold hover:text-header-red">
          TOUR PACKAGES
        </Link>
        <Link href="/" className="hidden md:block text-xs md:text-black md:text-xl font-semibold hover:text-header-red">
          CORPORATE BOOKING
        </Link>
        <Link href="/" className="hidden md:block text-xs md:text-black md:text-xl font-semibold hover:text-header-red">
          CONTACT
        </Link>
        <button className="hidden md:block bg-header-red text-white text-sm font-bold w-[130px] h-[35px] rounded-xl">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Hero;
