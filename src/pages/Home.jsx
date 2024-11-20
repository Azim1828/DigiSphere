import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import FeaturesSection from '../components/home/FeaturesSection'
// import Features2Section from '../components/home/Features2Section'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import StatsSection from '../components/home/StatsSection'
import About2Section from '../components/home/About2Section'
import TeamSection from '../components/home/TeamSection'
import CTASection from '../components/home/CTASection'
import MoreAboutSection from '../components/home/MoreAboutSection'
import ContactSection from '../components/home/ContactSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      {/* <Features2Section /> */}
      <ServicesSection />
      <MoreAboutSection />
      <TestimonialsSection />
      <StatsSection />
      <About2Section />
      <TeamSection />
      <CTASection />
      <ContactSection />
    </div>
  )
}

export default Home 