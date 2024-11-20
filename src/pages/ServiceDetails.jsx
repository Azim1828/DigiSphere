import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/home/CTASection'

const ServiceDetails = () => {
  const { id } = useParams()
  const service = services.find(s => s.id === id)

  if (!service) {
    return <div>Service not found</div>
  }

  const Icon = service.icon

  const renderFeature = (feature, index) => {
    // If feature is a string (old format)
    if (typeof feature === 'string') {
      return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature}</h3>
        </div>
      )
    }

    // If feature is an object (new format)
    const FeatureIcon = feature.icon || Icon
    return (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <FeatureIcon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        {feature.description && (
          <p className="text-gray-600">{feature.description}</p>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title={service.title}
        description={service.longDescription}
      />

      {/* Services Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {services.map((s) => {
              const isActive = s.id === id
              const ServiceIcon = s.icon
              return (
                <Link
                  key={s.id}
                  to={s.link}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ServiceIcon className="w-5 h-5" />
                  <span className="font-medium">{s.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {service.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => renderFeature(feature, index))}
          </div>
        </div>
      </section>

      {/* Platforms Section (Only for Digital Advertising) */}
      {service.platforms && Array.isArray(service.platforms) && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Advertising Platforms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.platforms.map((platform, index) => {
                const PlatformIcon = platform.icon
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <PlatformIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <ul className="space-y-2">
                      {platform.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tools Section (Only for SEO) */}
      {service.tools && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tools We Use
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {service.tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold">{tool}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}

export default ServiceDetails 