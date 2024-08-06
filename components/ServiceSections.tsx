"use client";
import React, { useState, useEffect } from 'react';
import useIsClient from './useIsClient';

type Props = {}

const placesData = [
  { name: "Hotel Name", className: "services1" },
  { name: "Hotel Name UP", className: "services2" },
  { name: "Hotel Name IN", className: "services3" },
  { name: "Hotel Name", className: "services1" },
  { name: "Hotel Name IN", className: "services1" },
  { name: "Hotel Name UP", className: "services2" },
  { name: "Hotel Name IN", className: "services3" },
  { name: "Hotel Name", className: "services1" },
  { name: "Hotel Name UP", className: "services3" },
  // Add more places if needed
];

const ServiceSections = (props: Props) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isClient = useIsClient();

 
  // Handle window resize events
  useEffect(() => {
    if(isClient){
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // Initialize width on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  const placesPerPage = windowWidth < 768 ? 1 : 3; // Show 1 place per page on small screens, 3 on larger screens
  const totalPages = Math.ceil(placesData.length / placesPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  // Auto-pagination effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
    }, 3000); // Change page every 3 seconds

    return () => clearInterval(intervalId);
  }, [totalPages]);

  const startIndex = (currentPage - 1) * placesPerPage;
  const displayedPlaces = placesData.slice(startIndex, startIndex + placesPerPage);

  return (
    <div className='mt-10 relative'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">Tour Packages</h1>
      </div>
      <div className="mt-5 md:mt-10 flex justify-center items-center relative">
        <img 
          src="/arrow-left.svg" 
          className='left-5 md:mr-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 md:w-10 md:h-10' 
          alt="Left Arrow" 
          onClick={handlePrevPage}
        />
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          {displayedPlaces.map((place, index) => (
            <div key={index} className={`flex justify-center items-center ${place.className} w-[300px] md:w-[372px] h-[272px] rounded-xl`}>
              <h1 className='line z-1'>{place.name}</h1>
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
}

export default ServiceSections;
