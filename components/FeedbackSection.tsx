import React from 'react'

type Props = {}

const FeedbackSection = (props: Props) => {
  return (
    <div className='mt-10'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">Customer Feedback</h1>
      </div>
      <div className="pl-5 pr-5 mt-5 md:pl-10 md:pr-10 md:mt-10 flex justify-center md:justify-between items-center">
        <img src="/arrow-left.svg" className='hidden md:block' alt="Left Arrow" />
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          <div className="relative profile_box w-[300px] md:w-[372px] h-[376px]">
            <div className="flex gap-5">
              <img src="./profile1.png" className="rounded-full border-4 border-header-red h-[65px] w-[64px]" alt="Profile 1" />
              <div className="textbox">
                <h1 className='font-semibold'>Mukesh Kumar Roy</h1>
                <p className='text-para-gray font-sm'>Owner of Siliguri Car Showroom</p>
                <img src="./red_star.svg" className='w-[100px] h-[16px]' alt="Red Star" />
              </div>
            </div>
            <div className="flex flex-col p[20px] mt-5">
              <h1 className='font-semibold text-xl'>Wagon R Motors</h1>
              <p className='text-para-gray'>
                Lorem Ipsum&apos;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
              </p>
            </div>
          </div>
          
          <div className="relative profile_box w-[300px] md:w-[372px] h-[376px]">
            <div className="flex gap-5">
              <img src="./profile2.png" className="rounded-full border-4 border-header-red h-[65px] w-[64px]" alt="Profile 2" />
              <div className="textbox">
                <h1 className='font-semibold'>Sourav Mark Roy</h1>
                <p className='text-para-gray font-sm'>Owner of Siliguri Car Showroom</p>
                <img src="./blue_star.svg" className='w-[100px] h-[16px]' alt="Blue Star" />
              </div>
            </div>
            <div className="flex flex-col p[20px] mt-5">
              <h1 className='font-semibold text-xl'>TATA Motors</h1>
              <p className='text-para-gray'>
                Lorem Ipsum&apos;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
              </p>
            </div>
          </div>
          
          <div className="relative profile_box w-[300px] md:w-[372px] h-[376px]">
            <div className="flex gap-5">
              <img src="./profile1.png" className="rounded-full border-4 border-header-red h-[65px] w-[64px]" alt="Profile 1" />
              <div className="textbox">
                <h1 className='font-semibold'>Mukesh Kumar Roy</h1>
                <p className='text-para-gray font-sm'>Owner of Siliguri Car Showroom</p>
                <img src="./red_star.svg" className='w-[100px] h-[16px]' alt="Red Star" />
              </div>
            </div>
            <div className="flex flex-col p[20px] mt-5">
              <h1 className='font-semibold text-xl'>Wagon R Motors</h1>
              <p className='text-para-gray'>
                Lorem Ipsum&apos;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
              </p>
            </div>
          </div>
        </div>
        <img src="/arrow-right.svg" className='hidden md:block' alt="Right Arrow" />
      </div>
    </div>
  )
}

export default FeedbackSection
