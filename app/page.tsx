import Hero from '@/components/Hero'
import React from 'react'
import "@/app/globals.css"
import BoxContent from '@/components/BoxContent'
import AboutSection from '@/components/AboutSection'
import Offerings from '@/components/Offerings'
import Places from '@/components/Places'
import CarSections from '@/components/CarSections'
import ServiceSections from '@/components/ServiceSections'
import FeedbackSection from '@/components/FeedbackSection'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Hero/>
      <BoxContent/>
      <img src="./pagination.svg" className='mx-auto mt-5' alt="" />
     <AboutSection/>
    <Offerings/>
    <img src="./pagination.svg" className='mx-auto mt-5' alt="" />
    <Places/>
    <img src="./pagination.svg" className='mx-auto mt-5' alt="" />
    <CarSections/>
    <img src="./pagination.svg" className='mx-auto mt-5' alt="" />
    <ServiceSections/>
    <img src="./pagination.svg" className='mx-auto mt-5' alt="" />
    <FeedbackSection/>
    <img src="./pagination.svg" className='mx-auto mt-5' alt="" />
    
    </div>

    
  )
}

export default page