import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Shield, 
  Users, 
  Award, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Heart,
  Baby
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HomePage = () => {
  const [currentHero, setCurrentHero] = useState(0)

  // Hero sections para diferentes buyer personas
  const heroSections = [
    {
      id: 'hombres',
      title: 'Estudios Urológicos Especializados',
      subtitle: 'Tecnología de vanguardia para diagnósticos precisos',
      description: 'Uroflujometría y urodinamia con equipos de última generación. Resultados confiables para tomar las mejores decisiones sobre tu salud.',
      cta: 'Agendar Consulta Confidencial',
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      gradient: 'from-primary/10 via-background to-secondary/5'
    },
    {
      id: 'mujeres',
      title: 'Recupera tu Bienestar',
      subtitle: 'Soluciones especializadas para la salud femenina',
      description: 'Estudios urológicos diseñados específicamente para mujeres. Atención empática y profesional en un ambiente cómodo y discreto.',
      cta: 'Recupera tu Bienestar',
      icon: <Heart className="h-12 w-12 text-accent" />,
      gradient: 'from-accent/10 via-background to-primary/5'
    },
    {
      id: 'padres',
      title: 'Cuidamos a tu Pequeño',
      subtitle: 'Especialistas en urología pediátrica',
      description: 'Estudios urológicos especializados para niños con la experiencia y delicadeza que merecen. Equipo pediátrico certificado.',
      cta: 'Cuidamos a tu Pequeño',
      icon: <Baby className="h-12 w-12 text-secondary" />,
      gradient: 'from-secondary/10 via-background to-accent/5'
    }
  ]

  // Rotar hero sections cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSections.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentHeroData = heroSections[currentHero]

  const servicios = [
    {
      title: 'Uroflujometría',
      description: 'Evaluación del flujo urinario con tecnología de precisión',
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      features: ['Resultados inmediatos', 'No invasivo', 'Alta precisión']
    },
    {
      title: 'Urodinamia',
      description: 'Estudio completo de la función vesical y uretral',
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: ['Diagnóstico integral', 'Tecnología avanzada', 'Especialistas certificados']
    },
    {
      title: 'Renta de Equipos',
      description: 'Equipos médicos especializados para profesionales',
      icon: <Users className="h-8 w-8 text-primary" />,
      features: ['Equipos certificados', 'Soporte técnico', 'Flexibilidad de horarios']
    }
  ]

  const ubicaciones = [
    {
      id: "colonia-del-valle",
      nombre: 'Colonia del Valle',
      direccion: 'Para adultos hombres y mujeres',
      horario: 'Lun - Vie: 8:00 - 18:00',
      especialidad: 'Urología general'
    },
    {
      id: "hospital-infantil",
      nombre: 'Hospital Infantil Privado',
      direccion: 'Especializado en pediatría',
      horario: 'Lun - Vie: 9:00 - 17:00',
      especialidad: 'Urología pediátrica'
    }
  ]

  const testimonios = [
    {
      nombre: 'Carlos M.',
      edad: '52 años',
      testimonio: 'El estudio fue rápido y los resultados muy claros. El equipo médico me explicó todo con paciencia.',
      rating: 5
    },
    {
      nombre: 'Ana L.',
      edad: '38 años',
      testimonio: 'Excelente atención, muy profesional y empática. Me sentí cómoda durante todo el proceso.',
      rating: 5
    },
    {
      nombre: 'María G.',
      edad: 'Madre de paciente',
      testimonio: 'El trato con mi hijo fue excepcional. Los especialistas en pediatría son muy experimentados.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section Dinámico */}
      <section className={`hero-section bg-gradient-to-br ${currentHeroData.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {currentHeroData.icon}
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Salud con I.A. Biomédica
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                {currentHeroData.title}
              </h1>
              
              <p className="text-lg text-primary font-semibold">
                {currentHeroData.subtitle}
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {currentHeroData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pacientes">
                  <Button size="lg" className="cta-button text-lg px-8 py-4 w-full sm:w-auto">
                    {currentHeroData.cta}
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                    Conocer Más
                  </Button>
                </Link>
              </div>
              
              {/* Indicadores de hero sections */}
              <div className="flex space-x-2 pt-4">
                {heroSections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHero(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentHero ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="medical-card p-8 bg-gradient-to-br from-white to-secondary/10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Por qué elegir Urologik?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Tecnología de última generación</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Especialistas certificados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Resultados inmediatos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Atención personalizada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estudios urológicos especializados con la más alta tecnología médica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {servicio.icon}
                    <CardTitle className="text-xl">{servicio.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {servicio.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/servicios">
                    <Button variant="outline" className="w-full mt-4">
                      Más Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicaciones */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestras Ubicaciones
            </h2>
            <p className="text-lg text-muted-foreground">
              Dos ubicaciones estratégicas para atenderte mejor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ubicaciones.map((ubicacion, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{ubicacion.nombre}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {ubicacion.direccion}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{ubicacion.horario}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{ubicacion.especialidad}</span>
                    </div>
                  </div>
                  <Link to={`/pacientes?location=${ubicacion.id}#agenda`}>
                    <Button className="w-full mt-4 cta-button">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar en esta ubicación
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimonios reales de quienes han confiado en nosotros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-accent rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonio.testimonio}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonio.nombre}</p>
                    <p className="text-sm text-muted-foreground">{testimonio.edad}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para cuidar tu salud?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agenda tu cita hoy mismo y da el primer paso hacia tu bienestar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pacientes#agenda">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Cita Ahora
              </Button>
            </Link>
            <a href="tel:5547675205">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
