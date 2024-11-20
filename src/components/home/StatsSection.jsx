const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-light-gray via-white to-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium mb-4 block">
            Our Impact
          </span>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-gray-600">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-6xl font-bold text-primary">500+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-primary">300+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-primary">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection 