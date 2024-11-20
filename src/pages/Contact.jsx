import React from 'react'
import PageHeader from '../components/PageHeader'
import ContactSection from '../components/home/ContactSection'

const Contact = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Get in touch with us. We'd love to hear from you and help with your digital needs."
      />
      <ContactSection />
    </div>
  )
}

export default Contact 