import React from 'react'
import PageHeader from '../components/PageHeader'
import AboutSection from '../components/home/AboutSection'
import About2Section from '../components/home/About2Section'
import TeamSection from '../components/home/TeamSection'

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About DigiSphere"
        description="Learn about our journey, our mission, and the team behind DigiSphere's success."
      />
      <AboutSection />
      <About2Section />
      <TeamSection />
    </div>
  )
}

export default About 