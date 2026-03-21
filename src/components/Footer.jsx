import { Link } from 'react-router-dom'
import { Phone, Mail, Facebook, Instagram, Building2, Stethoscope, Users, Wrench } from 'lucide-react'
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
              Infraestructura tecnológica urológica para hospitales y médicos. Renta de equipo de alta especialidad con soporte técnico integral en CDMX.
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

          {/* Renta de Equipo — Prioridad #1 */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Renta de Equipo
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/renta/laser-holmio-lumenis" className="text-muted-foreground hover:text-primary transition-colors">
                  Láser de Holmio Lumenis
                </Link>
              </li>
              <li>
                <Link to="/renta/torre-urologia-stryker" className="text-muted-foreground hover:text-primary transition-colors">
                  Torre de Urología Stryker
                </Link>
              </li>
              <li>
                <Link to="/renta/instrumental-y-consumibles" className="text-muted-foreground hover:text-primary transition-colors">
                  Instrumental y Consumibles
                </Link>
              </li>
              <li>
                <Link to="/contacto?service=cotizacion-equipo" className="text-primary font-medium hover:underline transition-colors">
                  Solicitar Cotización →
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios y Portales */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-primary" />
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/para-medicos" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Para Médicos
                </Link>
              </li>
              <li>
                <Link to="/para-pacientes" className="text-muted-foreground hover:text-primary transition-colors">
                  Para Pacientes
                </Link>
              </li>
              <li>
                <Link to="/representantes/comisiones" className="text-muted-foreground hover:text-primary transition-colors">
                  Representantes Médicos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
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
                  onClick={() => trackLead('general', 'whatsapp', { source: 'footer' })}
                >
                  55-35-05-59-83
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contactourologik@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contactourologik@gmail.com
                </a>
              </div>
              <div className="text-muted-foreground text-xs mt-3 space-y-1">
                <p className="font-medium text-foreground">Cobertura</p>
                <p>CDMX y Área Metropolitana</p>
                <p>Hospitales Benito Juárez, Cuauhtémoc y más</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Urologik. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/aviso-de-privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                Aviso de Privacidad
              </Link>
              <Link to="/terminos-de-uso" className="text-muted-foreground hover:text-primary transition-colors">
                Términos de Uso
              </Link>
              <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Urologik es una empresa de servicios de renta de equipo médico. No somos una institución de salud ni prestamos servicios médicos directos. Todos los procedimientos son realizados por médicos certificados. Cumplimiento COFEPRIS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
