"use client";
import React, { useState, useEffect } from 'react';
import useIsClient from './useIsClient';

const boxData = [
  {
    title1: "Why",
    title2: "Choose Us!",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "About",
    title2: "Us!",
    img1: "./tri3.svg",
    img2: "./tri4.svg",
    className: "box2-back",
  },
  {
    title1: "Tour",
    title2: "Packages",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Tour",
    title2: "Packages",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Tour",
    title2: "Packages",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Tour",
    title2: "Packages",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Tour",
    title2: "Packages",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Why",
    title2: "Choose Us!",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Why",
    title2: "Choose Us!",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "Why",
    title2: "Choose Us!",
    img1: "./tri.svg",
    img2: "./tri2.svg",
    className: "box1-back",
  },
  {
    title1: "About",
    title2: "Us!",
    img1: "./tri3.svg",
    img2: "./tri4.svg",
    className: "box2-back",
  },
  {
    title1: "About",
    title2: "Us!",
    img1: "./tri3.svg",
    img2: "./tri4.svg",
    className: "box2-back",
  },

  // Add more boxes as needed
];

const BoxContent = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const isClient = useIsClient();

 
  useEffect(() => {
    if(isClient){
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize(); // Initialize width on mount
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  
  }, [isClient]);

  const boxesPerPage = windowWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(boxData.length / boxesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * boxesPerPage;
  const selectedBoxes = boxData.slice(startIndex, startIndex + boxesPerPage);

  useEffect(() => {
    if (!isMouseOver) {
      const interval = setInterval(() => {
        setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMouseOver, totalPages]);

  return (
    <div className="flex flex-col items-center mt-5 px-5 md:px-10 md:mt-10">
      <div 
        className="flex justify-center md:justify-between items-center"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img src="/arrow-left.svg" className='hidden md:block cursor-pointer' alt="Left Arrow" onClick={handlePrevPage} />
        <div className="boxes flex flex-row md:flex-col justify-center items-center overflow-x-auto md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          {selectedBoxes.map((box, index) => (
            <div key={index} className={`${box.className} w-[300px] md:w-[372px] h-[210px] flex flex-col justify-center items-center flex-shrink-0`}>
              <div className="flex justify-center items-center gap-5">
                <img src={box.img1} className='w-[33px]' alt={`Image 1 - ${index + 1}`} />
                <h1 className='text-3xl font-semibold'>{box.title1}</h1>
                <img src={box.img2} alt={`Image 2 - ${index + 1}`} className='w-[33px]'/>
              </div>
              <div>
                <h1 className='text-3xl font-semibold'>{box.title2}</h1>
              </div>
              <h1 className='badge w-[131.111px] h-[21px] text-center text-white font-medium mt-20'>BOOK NOW</h1>
            </div>
          ))}
        </div>
        <img src="/arrow-right.svg" className='hidden md:block cursor-pointer' alt="Right Arrow" onClick={handleNextPage} />
      </div>
      <div className="flex justify-center mt-5 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`w-4 h-4 cursor-pointer ${currentPage === index + 1 ? 'bg-red-500 transform rotate-45' : 'border-2 border-red-500'}`}
            style={{
              display: 'inline-block'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BoxContent;