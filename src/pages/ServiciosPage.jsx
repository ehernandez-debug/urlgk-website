import { Link, useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Shield, 
  Users, 
  Activity,
  Zap,
  ArrowRight,
  Heart,
  Baby
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ServiciosPage = () => {
  const navigate = useNavigate();

  const handleAgendarClick = (service) => {
    navigate(`/agendar?service=${service}`);
  };

  const servicios = {
    uroflujometria: {
      title: 'Uroflujometría',
      slug: 'uroflujometria',
      description: 'Mide la fuerza y velocidad del flujo de orina. Ideal para diagnosticar problemas de próstata y vejiga.',
      icon: <Activity className="h-10 w-10 text-primary" />,
      precio: 'Desde $1,500 MXN',
    },
    urodinamia: {
      title: 'Urodinamia',
      slug: 'urodinamia',
      description: 'Estudio completo de la función de la vejiga para casos complejos de incontinencia y retención.',
      icon: <Shield className="h-10 w-10 text-primary" />,
      precio: 'Desde $2,500 MXN',
    },
    consulta: {
      title: 'Consulta Especializada',
      slug: 'consulta',
      description: 'Evaluación integral por un urólogo certificado para diagnóstico y plan de tratamiento personalizado.',
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      precio: 'Desde $1,200 MXN',
    },
    renta: {
      title: 'Renta de Equipos',
      slug: 'renta-de-equipos',
      description: 'Equipos de urodinamia y uroflujometría para médicos que buscan ampliar sus servicios.',
      icon: <Users className="h-10 w-10 text-primary" />,
      precio: 'Desde $5,000 MXN/mes',
    }
  }

  const especialidades = [
    {
      title: 'Urología General',
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      description: 'Atención integral para adultos hombres y mujeres',
      ubicacion: 'Colonia del Valle',
      servicios: ['Uroflujometría', 'Urodinamia', 'Consulta especializada']
    },
    {
      title: 'Ginecourología',
      icon: <Heart className="h-8 w-8 text-primary" />,
      description: 'Especializada en problemas urológicos femeninos',
      ubicacion: 'Colonia del Valle',
      servicios: ['Incontinencia urinaria', 'Vejiga hiperactiva', 'Prolapsos']
    },
    {
      title: 'Uropediatría',
      icon: <Baby className="h-8 w-8 text-primary" />,
      description: 'Atención especializada para niños y adolescentes',
      ubicacion: 'Hospital Infantil Privado',
      servicios: ['Estudios pediátricos', 'Malformaciones', 'Infecciones']
    }
  ]

  const tecnologia = [
    {
      equipo: 'Uroflujómetro Inalámbrico con EMG',
      descripcion: 'Tecnología de precisión para medición de flujo urinario',
      caracteristicas: ['Medición automática', 'Gráficos en tiempo real', 'Base de datos normativa']
    },
    {
      equipo: 'Sistema Urodinámico Con catéteres de H2O',
      descripcion: 'Equipo de última generación para estudios completos',
      caracteristicas: ['Multicanal', 'Software avanzado', 'Reportes automáticos']
    },
    {
      equipo: 'Plataforma tecnológica de salud',
      descripcion: 'Tecnología adaptada a cada sub-especializad',
      caracteristicas: ['Tamaño apropiado', 'Interfaz amigable', 'Protocolos pediátricos, adultos']
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Servicios Urológicos de Vanguardia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Utilizamos tecnología de punta y la experiencia de nuestros especialistas para ofrecer diagnósticos urológicos precisos y confiables en la Ciudad de México.
          </p>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Nuestros Estudios y Consultas</h2>
                <p className="text-md text-muted-foreground mt-2">Da clic en un servicio para conocer los detalles, preparación y precios.</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(servicios).map((service) => (
                <Card key={service.slug} className="flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                        <div className="mb-4">{service.icon}</div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="pt-2">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-semibold text-primary mb-4">{service.precio}</p>
                        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                        <Link to={`/servicios/${service.slug}`}>
                            Ver Detalles <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                        </Button>
                    </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-lg text-muted-foreground">
              Atención especializada para cada grupo de pacientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {especialidades.map((especialidad, index) => (
              <Card key={index} className="medical-card text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {especialidad.icon}
                  </div>
                  <CardTitle className="text-xl">{especialidad.title}</CardTitle>
                  <CardDescription>{especialidad.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{especialidad.ubicacion}</span>
                    </div>
                    <div className="space-y-1">
                      {especialidad.servicios.map((servicio, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">• {servicio}</p>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-lg text-muted-foreground">
              Equipos de última generación para diagnósticos precisos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tecnologia.map((tech, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <CardTitle className="text-lg">{tech.equipo}</CardTitle>
                  <CardDescription>{tech.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
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
            ¿Listo para tu estudio urológico?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestros especialistas están listos para atenderte con la mejor tecnología
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={() => handleAgendarClick('general')}>
              Agendar Cita
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiciosPage
