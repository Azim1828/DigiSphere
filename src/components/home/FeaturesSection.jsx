import { features } from '../../data/features';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-light-gray via-white to-gray-100 relative overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            Our Strengths
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-600">
            Discover the unique advantages that set us apart and make us your ideal digital marketing partner
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) =>{ 
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 border border-gray-200"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary text-white rounded-full mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
