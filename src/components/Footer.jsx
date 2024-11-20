import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">DigiSphere</h3>
          <p className="text-gray-400">Transforming businesses through digital excellence.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <Link to="/services/digital-advertising" className='block'>Digital Advertising</Link>
            <Link to="/services/seo"  className='block'>SEO Optimization</Link>
            <Link to="/services/aso"  className='block'>ASO Services</Link>
           
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>GiaSamara21275980@gmail.com</li>
            <li>+84 563388342</li>
            <li>2544 Rhoads Ave</li>
            <li>Columbus, OH 43207</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} DigiSphere. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 