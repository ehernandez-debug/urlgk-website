import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'
import urologikLogo from '../assets/urologik-logo.png'
import useAnalytics from '@/hooks/useAnalytics'

const Footer = () => {
  const { trackLead } = useAnalytics();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={urologikLogo} 
                alt="Urologik" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Salud con I.A. Biomédica para estudios urológicos especializados. 
              Acercando diagnósticos de vanguardia con I.A. biomédica.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Cxxwe14nj/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/urologik_oficial/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Uroflujometría
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Urodinamia
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Consulta Especializada
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces Útiles */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Agendar Cita
                </Link>
              </li>
              <li>
                <Link to="/medicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Médicos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5215535055983?text=Hola!%2C%20me%20interesa%20conocer%20mas%20sobre%20Urologik" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => trackLead('paciente', 'whatsapp', { source: 'footer' })}
                >
                  55-35-05-59-83
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="/contacto#formulario-contacto" className="text-muted-foreground hover:text-primary transition-colors">contactourologik@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Lunes - Viernes: 9:00 am a 6:00 pm</p>
                  <p className="text-muted-foreground">Sábado: 9:00 am a 2:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Urologik. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/aviso-de-privacidad" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Aviso de Privacidad
              </Link>
              <Link to="/terminos-de-uso" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Términos de Uso
              </Link>
              <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
