import React from 'react'

const BoxContent = () => {
  return (
    <div className="flex justify-center md:justify-between items-center mt-5 px-5 md:px-10 md:mt-10">
      <img src="/arrow-left.svg" className='hidden md:block' alt="Left Arrow" />
      <div className="boxes flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-8 mx-auto md:mx-0">
        <div className="box1-back w-[300px] md:w-[372px] h-[208px] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-5">
            <img src="./tri.svg" className='w-[33px]' alt="Triangle 1" />
            <h1 className='text-3xl font-semibold'>Why</h1>
            <img src="./tri2.svg" alt="Triangle 2" className='w-[33px]'/>
          </div>
          <div>
            <h1 className='text-3xl font-semibold'>Choose Us!</h1>
          </div>
          <h1 className='badge w-[131.111px] h-[21px] text-center text-white font-medium mt-20'>BOOK NOW</h1>
        </div>
        <div className="box2-back w-[300px] md:w-[372px] h-[208px] flex flex-col justify-center items-center">
          <div>
            <h1 className='text-3xl font-semibold'>About</h1>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src="./tri3.svg" className='w-[33px]' alt="Triangle 3" />
            <h1 className='text-3xl font-semibold'>Us!</h1>
            <img src="./tri4.svg" alt="Triangle 4" className='w-[33px]'/>
          </div>
          <h1 className='badge2 w-[131.111px] h-[21px] text-center text-white font-medium mt-20'>BOOK NOW</h1>
        </div>
        <div className="box1-back w-[300px] md:w-[372px] h-[208px] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-5">
            <img src="./tri.svg" className='w-[33px]' alt="Triangle 1" />
            <h1 className='text-3xl font-semibold'>Tour</h1>
            <img src="./tri2.svg" alt="Triangle 2" className='w-[33px]'/>
          </div>
          <div>
            <h1 className='text-3xl font-semibold'>Packages</h1>
          </div>
          <h1 className='badge w-[131.111px] h-[21px] text-center text-white font-medium mt-20'>BOOK NOW</h1>
        </div>
      </div>
      <img src="/arrow-right.svg" className='hidden md:block' alt="Right Arrow" />
    </div>
  )
}

export default BoxContent
