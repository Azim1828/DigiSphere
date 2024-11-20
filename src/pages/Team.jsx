import React from 'react'
import PageHeader from '../components/PageHeader'
import TeamSection from '../components/home/TeamSection'
import StatsSection from '../components/home/StatsSection'

const Team = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Team"
        description="Meet the experts behind DigiSphere's success stories."
      />
      <TeamSection />
      <StatsSection />
    </div>
  )
}

export default Team 