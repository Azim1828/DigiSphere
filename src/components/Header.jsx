
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-primary">
          DigiSphere
        </Link>
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
        <button className="md:hidden text-dark">
          <Menu />
        </button>
      </nav>
    </header>
  )
}

export default Header 