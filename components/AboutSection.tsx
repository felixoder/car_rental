import React from 'react'

const AboutSection = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-10"> 
      <div className="text md:mt-10 md:mx-5 md:ml-[372px] ml-5 mr-5 mt-5">
        <p className='text-header-red font-semibold text-2xl'>About Us</p>
        <h1 className='text-3xl font-semibold'>Welcome to Siliguri Car Rental</h1>
        <p className='text-para-gray font-sm mt-10 mb-10'>Lorem Ipsum&apos;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src="./tick.svg" alt="Tick" />
              <h2 className='font-bold'>5 Year of Trust Company</h2>
            </div>
            <div className="flex gap-2">
              <img src="./tick.svg" alt="Tick" />
              <h2 className='font-bold'>Quick Set-up Facility</h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src="./tick.svg" alt="Tick" />
              <h2 className='font-bold'>Experienced Team</h2>
            </div>
            <div className="flex gap-2">
              <img src="./tick.svg" alt="Tick" />
              <h2 className='font-bold'>Value of Money</h2>
            </div>
          </div>
        </div>
      </div>
      <img src="./car-image.png" className='w-full' alt="Car" />
    </div>
  )
}

export default AboutSection
