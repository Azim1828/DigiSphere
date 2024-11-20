const About2Section = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            Our Purpose
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-gray-600">
            Empowering businesses to thrive in the digital age through innovative solutions and strategic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DigiSphere, our mission is to empower businesses with innovative digital solutions that drive growth and success. We are committed to delivering exceptional results through our expertise in digital marketing, ensuring our clients achieve their goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Our team of experts is dedicated to providing personalized strategies that cater to the unique needs of each client, leveraging the latest technologies and trends to stay ahead in the digital landscape.
            </p>
          </div>
          <div>
            <img
              src="a3.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About2Section 