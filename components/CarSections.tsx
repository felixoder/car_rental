import React from 'react'

type Props = {}

const CarSections = (props: Props) => {
  return (
    <div className='mt-5 md:mt-10 flex flex-col justify-center items-center'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">What We Offer</h1>
      </div>
      <div className="pl-5 pr-5 mt-5 md:pl-10 md:pr-10 md:mt-10 flex justify-center md:justify-between items-center">
        <img src="/arrow-left.svg" className='hidden md:block' alt="Left Arrow" />
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          <div className="relative test_car1 w-[300px] md:w-[372px] h-[272px]">
            <div className="w-[175px] h-1 bg-lines absolute top-[200px] left-[100px]"></div>
            <p className='text-sm absolute top-[220px] md:ml-20 text-para-gray '>Dzire Swift Red | Price <span className='text-header-red'>₹15,000</span> Day</p>
            <div className="flex test_car2 w-[300px] md:w-[372px] h-[272px] justify-center">
              <img src="./test_car1.png" className='h-[200px] w-[250px]' alt="Car 1" />
              <div className="flex items-center justify-between absolute bottom-0 w-full bg-para-blue rounded-b-lg">
                <div className='rent1 w-[150px] bg-header-red rounded-b-lg flex justify-center items-center'>
                  <h1 className='text-white font-semibold text-center'>Rent Car</h1>
                </div>
                <h1 className='mr-5 text-white pr-4 font-bold text-md'>View More...</h1>
              </div>
            </div>
          </div>
          <div className="relative test_car2 w-[300px] md:w-[372px] h-[272px]">
            <div className="w-[175px] h-1 bg-lines absolute top-[200px] left-[100px]"></div>
            <p className='text-sm absolute top-[220px] md:ml-20 text-para-gray'>Dzire Swift Red | Price <span className='text-header-red'>₹15,000</span> Day</p>
            <img src="./test_car2.png" className='h-[200px] w-[250px] ml-9' alt="Car 2" />
            <div className="flex items-center justify-between absolute bottom-0 w-full bg-header-red rounded-b-lg">
              <div className='rent2 w-[150px] bg-para-blue rounded-b-lg flex justify-center items-center'>
                <h1 className='text-white font-semibold text-center'>Rent Car</h1>
              </div>
              <h1 className='mr-5 text-white pr-4 font-bold text-md'>View More...</h1>
            </div>
          </div>
          <div className="relative test_car2 w-[300px] md:w-[372px] h-[272px]">
            <div className="w-[175px] h-1 bg-lines absolute top-[200px] left-[100px]"></div>
            <p className='text-sm absolute top-[220px] md:ml-20 text-para-gray'>Dzire Swift Red | Price <span className='text-header-red'>₹15,000</span> Day</p>
            <img src="./test_car1.png" className='h-[200px] w-[250px] ml-9' alt="Car 3" />
            <div className="flex items-center justify-between absolute bottom-0 w-full bg-para-blue rounded-b-lg">
              <div className='rent1 w-[150px] bg-header-red rounded-b-lg flex justify-center items-center'>
                <h1 className='text-white font-semibold text-center'>Rent Car</h1>
              </div>
              <h1 className='mr-5 text-white pr-4 font-bold text-md'>View More...</h1>
            </div>
          </div>
        </div>
        <img src="/arrow-right.svg" className='hidden md:block' alt="Right Arrow" />
      </div>
    </div>
  )
}

export default CarSections
