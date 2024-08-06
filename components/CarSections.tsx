"use client";
import React, { useState, useEffect } from 'react';

const carData = [
  { id: 1, imgSrc: "./test_car1.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 2, imgSrc: "./test_car2.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 3, imgSrc: "./test_car1.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 4, imgSrc: "./test_car2.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 5, imgSrc: "./test_car1.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 6, imgSrc: "./test_car2.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 7, imgSrc: "./test_car1.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 8, imgSrc: "./test_car2.png", title: "Dzire Swift Red", price: "₹15,000" },
  { id: 9, imgSrc: "./test_car1.png", title: "Dzire Swift Red", price: "₹15,000" },
];

const CarSections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [autoPaginationEnabled, setAutoPaginationEnabled] = useState(true);

  // Handle window resize events
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // Initialize width on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carsPerPage = windowWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(carData.length / carsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : totalPages));
    setAutoPaginationEnabled(false);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
    setAutoPaginationEnabled(false);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setAutoPaginationEnabled(false);
  };

  const startIndex = (currentPage - 1) * carsPerPage;
  const selectedCars = carData.slice(startIndex, startIndex + carsPerPage);

  useEffect(() => {
    if (autoPaginationEnabled) {
      const interval = setInterval(() => {
        handleNextPage();
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [autoPaginationEnabled, currentPage, totalPages]);

  return (
    <div className='mt-5 md:mt-10 flex flex-col justify-center items-center'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">What We Offer</h1>
      </div>
      <div className="pl-5 pr-5 mt-5 md:pl-10 md:pr-10 md:mt-10 flex justify-center md:justify-between items-center">
        <img 
          src="/arrow-left.svg" 
          className='hidden md:block cursor-pointer' 
          alt="Left Arrow" 
          onClick={handlePrevPage} 
        />
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          {selectedCars.map((car) => (
            <div key={car.id} className="relative w-[300px] md:w-[372px] h-[272px]">
              <div className="w-[175px] h-1 bg-lines absolute top-[180px] left-[80px] md:left-[100px]"></div>
              <p className='text-sm absolute top-[200px] ml-10 md:ml-20 text-para-gray'>
                {car.title} | Price <span className='text-header-red'>{car.price}</span> Day
              </p>
              <div className="flex w-[300px] md:w-[372px] h-[272px] justify-center">
                <img src={car.imgSrc} className='h-[150px] w-[220px]' alt={car.title} />
                <div className="flex items-center justify-between absolute bottom-0 w-full bg-para-blue rounded-b-lg h-[44px]">
                  <div className='w-[150px] md:w-[186px] h-[44px] bg-header-red rounded-b-lg flex justify-center items-center'>
                    <h1 className='text-white font-semibold text-center'>Rent Car</h1>
                  </div>
                  <h1 className='mr-5 text-white pr-4 font-bold text-md text-center text-md'>View More...</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img 
          src="/arrow-right.svg" 
          className='hidden md:block cursor-pointer' 
          alt="Right Arrow" 
          onClick={handleNextPage} 
        />
      </div>
      <div className="flex justify-center mt-5 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`w-4 h-4 cursor-pointer ${currentPage === index + 1 ? 'bg-red-500 transform rotate-45' : 'border-2 border-red-500'}`}
            style={{ display: 'inline-block' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarSections;
