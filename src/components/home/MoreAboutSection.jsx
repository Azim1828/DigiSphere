import { CheckCircle } from 'lucide-react'

const achievements = [
  {
    title: "Industry Experience",
    description: "Over a decade of experience in digital marketing and technology solutions."
  },
  {
    title: "Client Success",
    description: "Helped 500+ businesses achieve their digital marketing goals."
  },
  {
    title: "Innovation",
    description: "Constantly evolving with the latest digital marketing trends and technologies."
  },
  {
    title: "Custom Solutions",
    description: "Tailored strategies designed specifically for your business needs."
  }
]

const MoreAboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DigiSphere
              </span>
              ?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're not just another digital marketing agency. We're your partner in growth, committed to delivering exceptional results through innovative strategies and data-driven decisions.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-2xl"></div>
            <img
              src="a2.jpg"
              alt="About DigiSphere"
              className="rounded-2xl shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreAboutSection 