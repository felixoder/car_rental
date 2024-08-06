import Hero from '@/components/Hero'
import React, { useEffect, useState } from 'react'
import "@/app/globals.css"
import BoxContent from '@/components/BoxContent'
import AboutSection from '@/components/AboutSection'
import Offerings from '@/components/Offerings'
import Places from '@/components/Places'
import CarSections from '@/components/CarSections'
import ServiceSections from '@/components/ServiceSections'
import FeedbackSection from '@/components/FeedbackSection'
import useIsClient from '@/components/useIsClient'

type Props = {}

const page = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient) {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); // Initialize width on mount

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    else{
      <p>loading...</p>
    }
  }, [isClient]);
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