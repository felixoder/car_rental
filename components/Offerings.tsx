"use client";
import React, { useState, useEffect } from 'react';

const offeringsData = [
  { src: "/small_car1.png", alt: "Car 1", bgClass: "bg-header-red" },
  { src: "/small_car2.png", alt: "Car 2", bgClass: "bg-para-blue" },
  { src: "/small_car1.png", alt: "Car 3", bgClass: "bg-header-red" },
  { src: "/small_car2.png", alt: "Car 4", bgClass: "bg-para-blue" },
  { src: "/small_car1.png", alt: "Car 5", bgClass: "bg-header-red" },
  { src: "/small_car1.png", alt: "Car 6", bgClass: "bg-header-red" },
  { src: "/small_car2.png", alt: "Car 7", bgClass: "bg-para-blue" },
  { src: "/small_car1.png", alt: "Car 8", bgClass: "bg-header-red" },
  { src: "/small_car2.png", alt: "Car 9", bgClass: "bg-para-blue" },
];

const Offerings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handle window resize events
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // Initialize width on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = windowWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(offeringsData.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedOfferings = offeringsData.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (hoveredIndex === null) {
      const interval = setInterval(() => {
        handleNextPage();
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [hoveredIndex, currentPage, totalPages]);

  return (
    <div className='flex flex-col items-center mt-5 md:mt-10'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">What We Can Offer</h1>
      </div>
      <div className="relative pl-5 pr-5 mt-5 md:pl-10 md:pr-10 md:mt-10 flex justify-center items-center">
        <img 
          src="/arrow-left.svg" 
          className='left-5 md:mr-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 md:w-10 md:h-10' 
          alt="Left Arrow" 
          onClick={handlePrevPage} 
        />
        <div className={`flex ${windowWidth < 768 ? '' : 'overflow-hidden'} justify-center items-center md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0 rounded-lg`}>
          {displayedOfferings.map((offering, index) => (
            <div 
              key={index} 
              className="relative w-full md:w-[372px] h-[272px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={offering.src} alt={offering.alt} className="w-full h-full object-cover bg-no-repeat rounded-lg"/>
              <div className={`absolute bottom-0 w-full ${offering.bgClass} rounded-b-lg transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-white font-bold text-xl text-center py-2">Book Now</h1>
              </div>
            </div>
          ))}
        </div>
        <img 
          src="/arrow-right.svg" 
          className='right-5 md:ml-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 md:w-10 md:h-10' 
          alt="Right Arrow" 
          onClick={handleNextPage}
        />
      </div>
      <div className="flex justify-center mt-5 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-4 h-4 cursor-pointer ${currentPage === index + 1 ? 'bg-red-500 transform rotate-45' : 'border-2 border-red-500'}`}
            style={{ display: 'inline-block' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
