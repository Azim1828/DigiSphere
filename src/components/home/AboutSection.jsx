const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            Who We Are
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DigiSphere
            </span>
          </h2>
          <p className="text-gray-600">
            Your trusted partner in digital transformation and marketing excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              DigiSphere is a leading digital marketing agency dedicated to transforming businesses through innovative digital solutions. Our expert team specializes in SEO, ASO, and digital advertising, ensuring your brand reaches its full potential online.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              With a results-driven approach, we focus on delivering measurable outcomes and maximizing ROI for our clients. Our data-driven strategies are backed by comprehensive analytics and insights, allowing us to make informed decisions that drive success.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-gray-700 font-medium">
                  Expert team with 10+ years of experience
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-gray-700 font-medium">
                  Proven results across diverse industries
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-gray-700 font-medium">
                  Comprehensive analytics and insights
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-gray-700 font-medium">
                  Custom-tailored strategies for maximum ROI
                </span>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="a1.jpg"
              alt="About DigiSphere"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
