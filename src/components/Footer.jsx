import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import urologikLogo from '../assets/urologik-logo.png'

const Footer = () => {
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
              Democratizando el acceso a diagnósticos de vanguardia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
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
                  Renta de Equipos
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
                <Link to="/pacientes" className="text-muted-foreground hover:text-primary transition-colors">
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
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Colonia del Valle</p>
                  <p className="text-muted-foreground">Ciudad de México</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">55-XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contacto@urologik.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
                  <p className="text-muted-foreground">Sáb: 9:00 - 14:00</p>
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
              <Link to="/privacidad" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Términos de Uso
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
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

