import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-primary">
          DigiSphere
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Features', 'Team', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? 'text-primary' : 'text-dark hover:text-primary transition-colors'
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40">
            <ul className="flex flex-col items-center pt-8 space-y-6">
              {['Home', 'About', 'Services', 'Features', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? 'text-primary text-lg' : 'text-dark hover:text-primary transition-colors text-lg'
                    }
                    onClick={closeMenu}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 