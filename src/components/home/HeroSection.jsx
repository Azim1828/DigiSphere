import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '/hero.jpg'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-r from-primary to-secondary overflow-hidden px-8">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
          <g fill="none" stroke="currentColor" strokeWidth="100" strokeOpacity=".1">
            <circle cx="400" cy="300" r="200" />
            <circle cx="400" cy="300" r="300" />
            <circle cx="400" cy="300" r="400" />
          </g>
        </svg>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Elevate Your Digital{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Presence
            </span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Transform your brand with cutting-edge digital marketing solutions tailored for your success.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 w-fit"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Digital Marketing"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection 