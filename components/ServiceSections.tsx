import React from 'react'

type Props = {}

const ServiceSections = (props: Props) => {
  return (
    <div className='mt-10'>
      <div className="textbox flex flex-col justify-center items-center text-center">
        <p className="text-sm font-bold text-header-red">See Our Siliguri Car Rental</p>
        <h1 className="text-3xl font-semibold">Hotel Services</h1>
      </div>
      <div className="pl-5 pr-5 mt-5 md:pl-10 md:pr-10 md:mt-10 flex justify-center md:justify-between items-center">
        <img src="/arrow-left.svg" className='hidden md:block' alt="Left Arrow" />
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
          <div className="flex justify-center items-center services1 w-[300px] md:w-[372px] h-[272px] rounded-xl">
            <h1 className='line z-1'>Hotel Name</h1>
          </div>
          <div className="flex justify-center items-center services2 w-[300px] md:w-[372px] h-[272px] rounded-xl">
            <h1 className='line z-1'>Hotel Name UP</h1>
          </div>
          <div className="flex justify-center items-center services3 w-[300px] md:w-[372px] h-[272px] rounded-xl">
            <h1 className='line z-1'>Hotel Name IN</h1>
          </div>
        </div>
        <img src="/arrow-right.svg" className='hidden md:block' alt="Right Arrow" />
      </div>
    </div>
  )
}

export default ServiceSections
