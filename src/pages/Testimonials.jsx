import PageHeader from '../components/PageHeader'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Client Testimonials"
        description="See what our clients have to say about their experience with DigiSphere."
      />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Testimonials 