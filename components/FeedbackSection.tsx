"use client";
import React, { useState, useEffect } from 'react';

type Props = {}

const feedbackData = [
  {
    name: "Mukesh Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Sourav Mark Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "TATA Motors",
    profileImg: "./profile2.png",
    starImg: "./blue_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Mukesh Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  // Add more feedback items as needed
  {
    name: "Mukesh1 Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Mukesh1 Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Mukesh1 Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Mukesh1 Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Mukesh1 Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
  {
    name: "Mukesh1 Kumar Roy",
    title: "Owner of Siliguri Car Showroom",
    company: "Wagon R Motors",
    profileImg: "./profile1.png",
    starImg: "./red_star.svg",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
  },
];

const FeedbackSection = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    handleResize(); // Initialize width on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const feedbacksPerPage = windowWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(feedbackData.length / feedbacksPerPage);

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

  const startIndex = (currentPage - 1) * feedbacksPerPage;
  const selectedFeedbacks = feedbackData.slice(startIndex, startIndex + feedbacksPerPage);

  useEffect(() => {
    if (!isMouseOver) {
      const interval = setInterval(() => {
        setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMouseOver, totalPages]);

  return (
    <div className='mt-10'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">Customer Feedback</h1>
      </div>
      <div 
        className="mt-5 md:mt-10 flex justify-center md:justify-between items-center relative"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <img 
          src="/arrow-left.svg" 
          className='left-5 md:ml-[300px] top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 md:w-10 md:h-10' 
          alt="Left Arrow" 
          onClick={handlePrevPage}
        />
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          {selectedFeedbacks.map((feedback, index) => (
            <div key={index} className="relative profile_box w-[300px] md:w-[372px] h-[380px]">
              <div className="flex gap-5">
                <img src={feedback.profileImg} className="rounded-full border-4 border-header-red h-[65px] w-[64px]" alt={`Profile ${index + 1}`} />
                <div className="textbox">
                  <h1 className='font-semibold'>{feedback.name}</h1>
                  <p className='text-para-gray font-sm'>{feedback.title}</p>
                  <img src={feedback.starImg} className='w-[100px] h-[16px]' alt={`Star ${index + 1}`} />
                </div>
              </div>
              <div className="flex flex-col p[20px] mt-5">
                <h1 className='font-semibold text-xl'>{feedback.company}</h1>
                <p className='text-para-gray'>
                  {feedback.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img 
          src="/arrow-right.svg" 
          className='right-5 md:mr-[300px] top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 md:w-10 md:h-10' 
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
            style={{
              display: 'inline-block'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSection;