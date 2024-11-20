import React from 'react'
import PageHeader from '../components/PageHeader'
import FeaturesSection from '../components/home/FeaturesSection'
import Features2Section from '../components/home/Features2Section'

const Features = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Features"
        description="Discover the powerful features that make DigiSphere stand out from the competition."
      />
      <FeaturesSection />
      <Features2Section />
    </div>
  )
}

export default Features 