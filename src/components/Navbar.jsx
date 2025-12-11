import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Para Pacientes', href: '/pacientes' },
    { name: 'Para Médicos', href: '/medicos' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:scale-110 ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/5215535055983?text=Hola!%2C%20me%20interesa%20conocer%20mas%20sobre%20Urologik" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 hover:scale-110">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>55-35-05-59-83</span>
              </Button>
            </a>
            <Link to="/pacientes#agenda" className="transition-all duration-200 hover:scale-110">
              <Button className="cta-button flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Agendar Cita</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-110 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <a href="https://wa.me/5215535055983?text=Hola!%2C%20me%20interesa%20conocer%20mas%20sobre%20Urologik" target="_blank" rel="noopener noreferrer" className="block w-full transition-all duration-200 hover:scale-105">
                  <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>55-35-05-59-83</span>
                  </Button>
                </a>
                <Link to="/pacientes#agenda" onClick={() => setIsOpen(false)} className="block w-full transition-all duration-200 hover:scale-105">
                  <Button className="w-full cta-button flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Agendar Cita</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
