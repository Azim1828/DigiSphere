import React from 'react'
import PageHeader from '../components/PageHeader'
import ServicesSection from '../components/home/ServicesSection'
import CTASection from '../components/home/CTASection'

const Services = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        description="Comprehensive digital marketing solutions tailored to your business needs."
      />
      <ServicesSection />
      <CTASection />
    </div>
  )
}

export default Services 