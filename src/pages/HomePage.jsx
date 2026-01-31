import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Users, 
  Award, 
  MapPin, 
  Clock,
  CheckCircle,
  Stethoscope,
  Handshake,
  FileCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HomePage = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
        document.head.removeChild(link);
        document.head.removeChild(script);
    }
  }, [])

  const pasosColaboracion = [
    {
      title: 'Paso 1: Refiere a tu Paciente',
      description: 'Tú realizas el diagnóstico clínico y nos refieres a tu paciente con un clic.',
      icon: <Stethoscope className="h-8 w-8 text-primary" />
    },
    {
      title: 'Paso 2: Nosotros Gestionamos Todo',
      description: 'Coordinamos la cita, realizamos el estudio con equipo de punta y personal certificado.',
      icon: <Handshake className="h-8 w-8 text-primary" />
    },
    {
      title: 'Paso 3: Recibes el Reporte y tus Honorarios',
      description: 'Te entregamos un reporte profesional en 24-48h y depositamos tus honorarios por colaboración diagnóstica.',
      icon: <FileCheck className="h-8 w-8 text-primary" />
    }
  ]

  const respaldoProfesional = [
    {
      title: 'Calidad Certificada',
      description: 'Operamos con ingenieros biomédicos certificados y equipos de última generación.'
    },
    {
      title: 'Cumplimiento Normativo',
      description: 'Seguimos estrictos protocolos de seguridad y manejo de datos (HIPAA).'
    },
    {
      title: 'Alianza Ética',
      description: 'Nuestro modelo se basa en la colaboración diagnóstica activa, no en comisiones por referencia.'
    }
  ]

  const ubicaciones = [
    {
      id: "colonia-del-valle",
      nombre: 'Colonia del Valle',
      direccion: 'Para adultos hombres y mujeres',
      horario: 'Lunes - Viernes: 9:00 am a 17:00 pm<br/>Sábado: 9:00 am a 1:00 pm',
      especialidad: 'Urología general'
    },
    {
      id: "hospital-infantil",
      nombre: 'Hospital Infantil Privado',
      direccion: 'Especializado en pediatría',
      horario: 'Lunes - Viernes: 9:00 am a 17:00 pm<br/>Sábado: 9:00 am a 1:00 pm',
      especialidad: 'Urología pediátrica'
    }
  ]

  // Testimonios removidos - pendiente de documentación real

  return (
    <div className="min-h-screen">
      {/* Hero Section Principal */}
      <section className="hero-section bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Stethoscope className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Modelo B2B para urólogos aliados
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Ofrece Estudios Urológicos de Vanguardia. Sin Inversión. Sin Operación.
              </h1>
              
              <p className="text-lg text-primary font-semibold">
                Convierte tu consultorio en un centro de diagnóstico urológico sin inversión, sin operación y sin riesgo. Gana más, trabaja menos.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Nosotros nos encargamos de la tecnología, la logística y el personal. Tú te enfocas en tus pacientes y aumentas tus ingresos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/para-medicos">
                  <Button size="lg" className="cta-button text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform">
                    Descubre el Modelo de Colaboración
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform">
                    Ver Servicios Disponibles
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="medical-card p-8 bg-gradient-to-br from-white to-secondary/10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Beneficios para tu práctica
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Sin inversión en equipo ni infraestructura</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Operación completa con personal certificado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Reportes profesionales en 24-48h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Honorarios por colaboración diagnóstica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona la colaboración */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Cómo funciona la colaboración?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un modelo simple para crecer tu práctica sin añadir carga operativa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pasosColaboracion.map((paso, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {paso.icon}
                    <CardTitle className="text-xl">{paso.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {paso.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Confianza y Respaldo Profesional */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Confianza y Respaldo Profesional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preparamos el espacio para testimonios reales mientras destacamos los pilares que respaldan la colaboración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {respaldoProfesional.map((item, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
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
              Nuestros centros de diagnóstico están convenientemente ubicados para tus pacientes en Colonia del Valle y Hospital Infantil Privado.
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
                      <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: ubicacion.horario }}></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{ubicacion.especialidad}</span>
                    </div>
                  </div>
                  {ubicacion.id === 'hospital-infantil' ? (
                    <Button 
                      className="w-full mt-4 cta-button transform hover:scale-105 transition-transform"
                      onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/urologik/30min?hide_gdpr_banner=1'})}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar en esta ubicación
                    </Button>
                  ) : (
                    <Button 
                      className="w-full mt-4 cta-button transform hover:scale-105 transition-transform"
                      onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/urologik/cita-colonia-del-valle?hide_gdpr_banner=1'})}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar en esta ubicación
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Temporalmente deshabilitado hasta obtener testimonios documentados */}
      {/* <section className="section-padding bg-background">
        ...
      </section> */}

      {/* CTA para Médicos */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="medical-card p-8 text-center border-2 border-primary/20">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">¿Eres urólogo?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Descubre Nuestros Modelos de Colaboración
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Únete a nuestra red de especialistas y ofrece a tus pacientes acceso a tecnología de vanguardia en estudios urodinámicos.
            </p>
            <Link to="/medicos">
              <Button size="lg" className="cta-button text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                <Users className="h-5 w-5 mr-2" />
                Conocer Programa de Colaboración
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para impulsar tu práctica?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Conoce el modelo de colaboración y habilita estudios urológicos avanzados sin inversión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/medicos">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                Descubre el Modelo
              </Button>
            </Link>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-transform">
                Hablar con un especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
