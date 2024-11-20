const PageHeader = ({ title, description, image }) => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-white/90 text-lg font-medium mb-4 block">
            Welcome to DigiSphere
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageHeader 