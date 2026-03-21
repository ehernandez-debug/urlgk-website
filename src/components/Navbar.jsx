import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, Building2, Stethoscope, Users, Wrench, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import useAnalytics from '@/hooks/useAnalytics'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [rentaOpen, setRentaOpen] = useState(false)
  const location = useLocation()
  const { trackLead, trackEvent } = useAnalytics()
  const rentaRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rentaRef.current && !rentaRef.current.contains(event.target)) {
        setRentaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const rentaItems = [
    {
      name: 'Láser de Holmio Lumenis',
      href: '/renta/laser-holmio-lumenis',
      icon: <Stethoscope className="h-4 w-4 text-primary" />,
      desc: 'Pulse 100H — Litotripsia y ablación'
    },
    {
      name: 'Torre de Urología Stryker',
      href: '/renta/torre-urologia-stryker',
      icon: <Building2 className="h-4 w-4 text-primary" />,
      desc: 'Sistema 1588/1688 — Video-endoscopia HD'
    },
    {
      name: 'Instrumental y Consumibles',
      href: '/renta/instrumental-y-consumibles',
      icon: <Wrench className="h-4 w-4 text-primary" />,
      desc: 'Cistoscopios, catéteres y accesorios'
    },
  ]

  const isActive = (path) => location.pathname === path
  const isRentaActive = () => location.pathname.startsWith('/renta')

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-200 hover:scale-110 ${
                isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Inicio
            </Link>

            {/* Dropdown: Renta de Equipo */}
            <div className="relative" ref={rentaRef}>
              <button
                onClick={() => setRentaOpen(!rentaOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:scale-110 ${
                  isRentaActive() ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Building2 className="h-4 w-4" />
                Renta de Equipo
                <ChevronDown className={`h-3 w-3 transition-transform ${rentaOpen ? 'rotate-180' : ''}`} />
              </button>
              {rentaOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                  <div className="px-3 py-2 border-b border-border mb-1">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">Equipos Disponibles</p>
                  </div>
                  {rentaItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => {
                        setRentaOpen(false)
                        trackEvent('nav_click', { item: item.name, source: 'navbar_dropdown' })
                      }}
                      className="flex items-start gap-3 px-3 py-2 hover:bg-muted/50 transition-colors"
                    >
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-border mt-1 pt-1 px-3 py-2">
                    <Link
                      to="/contacto?service=cotizacion-equipo"
                      onClick={() => {
                        setRentaOpen(false)
                        trackEvent('cta_click', { cta_type: 'cotizacion_equipo', source: 'navbar_dropdown' })
                      }}
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Solicitar cotización institucional →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/para-medicos"
              className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:scale-110 ${
                isActive('/para-medicos') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Users className="h-4 w-4" />
              Para Médicos
            </Link>

            <Link
              to="/para-pacientes"
              className={`text-sm font-medium transition-all duration-200 hover:scale-110 ${
                isActive('/para-pacientes') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Pacientes
            </Link>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-all duration-200 hover:scale-110 ${
                location.pathname.startsWith('/blog') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 transition-all duration-200 hover:scale-110 text-muted-foreground"
              onClick={() => {
                trackLead('general', 'whatsapp', { source: 'navbar_desktop' })
                window.open('https://wa.me/5215535055983?text=Hola!%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Urologik', '_blank', 'noopener,noreferrer')
              }}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">55-35-05-59-83</span>
            </Button>
            <Link
              to="/contacto?service=cotizacion-equipo"
              onClick={() => trackEvent('cta_click', { cta_type: 'solicitar_cotizacion', source: 'navbar_desktop' })}
              className="transition-all duration-200 hover:scale-105"
            >
              <Button className="cta-button flex items-center space-x-2 text-sm">
                <Building2 className="h-4 w-4" />
                <span>Solicitar Cotización</span>
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
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>

              {/* Renta de Equipo — sección expandida en mobile */}
              <div className="px-3 py-2 bg-muted/30 rounded-md">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 flex items-center gap-1">
                  <Building2 className="h-3 w-3" /> Renta de Equipo
                </p>
                {rentaItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-2 py-2 pl-2 text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/para-medicos"
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/para-medicos') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Para Médicos
              </Link>

              <Link
                to="/para-pacientes"
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/para-pacientes') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pacientes
              </Link>

              <Link
                to="/blog"
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  location.pathname.startsWith('/blog') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/contacto"
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/contacto') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-border mt-2">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => {
                    trackLead('general', 'whatsapp', { source: 'navbar_mobile' })
                    setIsOpen(false)
                    window.open('https://wa.me/5215535055983?text=Hola!%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Urologik', '_blank', 'noopener,noreferrer')
                  }}
                >
                  <Phone className="h-4 w-4" />
                  <span>55-35-05-59-83</span>
                </Button>
                <Link
                  to="/contacto?service=cotizacion-equipo"
                  onClick={() => {
                    trackEvent('cta_click', { cta_type: 'solicitar_cotizacion', source: 'navbar_mobile' })
                    setIsOpen(false)
                  }}
                  className="block w-full"
                >
                  <Button className="w-full cta-button flex items-center justify-center space-x-2">
                    <Building2 className="h-4 w-4" />
                    <span>Solicitar Cotización</span>
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
