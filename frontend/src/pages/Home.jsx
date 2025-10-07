import React from 'react'
import Hero from '../components/Hero'
import WindshieldSection from '../components/WindshieldSection'
import OfferSection from '../components/OfferSection'
import ServicesSection from '../components/ServicesSection'
import CaseStudyCarousel from '../components/CaseStudyCarousel'
import ProcessSection from '../components/ProcessSection'
import InsuranceSection from '../components/InsuranceSection'
import TrustSection from '../components/TrustSection'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WindshieldSection />
      <OfferSection />
      <InsuranceSection />
      <ServicesSection />
      <CaseStudyCarousel />
      <ProcessSection />
      <TrustSection />
    </div>
  )
}

export default Home
