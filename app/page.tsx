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
     <AboutSection/>
    <Offerings/>
    <Places/>
    <CarSections/>
    <ServiceSections/>
    <FeedbackSection/>
    <br />
    <br />
    
    </div>

    
  )
}

export default page