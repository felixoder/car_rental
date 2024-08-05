import React from 'react'

const Offerings = () => {
  return (
    <div>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">What We Can Offer</h1>
      </div>
      <div className="pl-5 pr-5 mt-5 md:pl-10 md:pr-10 md:mt-10 flex justify-center md:justify-between items-center">
        <img src="/arrow-left.svg" className='hidden md:block' alt="Left Arrow" />
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          <div className="relative w-[300px] md:w-[372px] h-[272px]">
            <img src="/small_car1.png" alt="Car 1" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute bottom-0 w-full bg-header-red rounded-b-lg">
              <h1 className="text-white font-bold text-xl text-center py-2">Book Now</h1>
            </div>
          </div>
          <div className="relative w-[300px] md:w-[372px] h-[272px]">
            <img src="/small_car2.png" alt="Car 2" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute bottom-0 w-full bg-para-blue rounded-b-lg">
              <h1 className="text-white font-bold text-xl text-center py-2">Book Now</h1>
            </div>
          </div>
          <div className="relative w-[300px] md:w-[372px] h-[272px]">
            <img src="/small_car1.png" alt="Car 3" className="w-full h-full object-cover rounded-lg"/>
            <div className="absolute bottom-0 w-full bg-header-red rounded-b-lg">
              <h1 className="text-white font-bold text-xl text-center py-2">Book Now</h1>
            </div>
          </div>
        </div>
        <img src="/arrow-right.svg" className='hidden md:block' alt="Right Arrow" />
      </div>
    </div>
  )
}

export default Offerings
