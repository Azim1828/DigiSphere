import { features } from '../../data/features'

const Features2Section = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-light-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            What Sets Us Apart
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Key{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-600">
            Innovative solutions and cutting-edge features that drive your digital success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 border border-gray-200"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-secondary to-primary text-white rounded-full mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features2Section 