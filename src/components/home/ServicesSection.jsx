import { services } from '../../data/services';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-light-gray to-gray-100 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            What We Offer
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600">
            Comprehensive digital solutions to help your business grow and succeed in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => {
            const Icon = service.icon;
            console.log(service.link)
            return (
              <div
                key={service.id}
                className="relative bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3"
              >
<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-2xl pointer-events-none"></div>

                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary text-white rounded-full mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="text-center">
                  <Link
                    to={service.link}
                    className="relative z-10 cursor-pointer py-2 px-8 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
