import { useState } from 'react'
import { 
  Stethoscope, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  FileText,
  Award,
  Heart,
  Baby,
  Activity,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ServiciosPage = () => {
  const [activeService, setActiveService] = useState('uroflujometria')

  const servicios = {
    uroflujometria: {
      title: 'Uroflujometría',
      subtitle: 'Evaluación precisa del flujo urinario',
      icon: <Activity className="h-12 w-12 text-primary" />,
      description: 'Estudio no invasivo que mide la velocidad y volumen del flujo urinario para detectar obstrucciones y evaluar la función vesical.',
      duracion: '10-15 minutos',
      preparacion: 'Vejiga llena',
      precio: 'Desde $800 MXN',
      indicaciones: [
        'Dificultad para orinar',
        'Chorro urinario débil',
        'Sensación de vaciado incompleto',
        'Goteo post-miccional',
        'Evaluación prostática',
        'Seguimiento post-cirugía'
      ],
      proceso: [
        'Llegada con vejiga llena',
        'Registro de datos del paciente',
        'Micción en uroflujómetro',
        'Análisis automático de resultados',
        'Interpretación médica',
        'Entrega de reporte'
      ],
      ventajas: [
        'Completamente no invasivo',
        'Resultados inmediatos',
        'Alta precisión diagnóstica',
        'Sin efectos secundarios',
        'Procedimiento rápido',
        'Costo accesible'
      ]
    },
    urodinamia: {
      title: 'Urodinamia',
      subtitle: 'Estudio integral de la función vesical',
      icon: <Shield className="h-12 w-12 text-primary" />,
      description: 'Evaluación completa de la función de almacenamiento y vaciado de la vejiga mediante medición de presiones y flujos.',
      duracion: '45-60 minutos',
      preparacion: 'Suspender medicamentos específicos',
      precio: 'Desde $2,500 MXN',
      indicaciones: [
        'Incontinencia urinaria',
        'Vejiga hiperactiva',
        'Retención urinaria',
        'Dolor pélvico crónico',
        'Evaluación pre-quirúrgica',
        'Disfunción neurógena'
      ],
      proceso: [
        'Evaluación médica inicial',
        'Colocación de catéteres',
        'Llenado vesical controlado',
        'Medición de presiones',
        'Estudio de vaciado',
        'Análisis e interpretación'
      ],
      ventajas: [
        'Diagnóstico definitivo',
        'Evaluación integral',
        'Guía terapéutica precisa',
        'Tecnología avanzada',
        'Especialistas certificados',
        'Reporte detallado'
      ]
    },
    renta: {
      title: 'Renta de Equipos',
      subtitle: 'Equipos especializados para profesionales',
      icon: <Users className="h-12 w-12 text-primary" />,
      description: 'Servicio de renta de equipos urológicos de última generación para médicos y clínicas que buscan expandir sus servicios.',
      duracion: 'Flexible',
      preparacion: 'Capacitación incluida',
      precio: 'Desde $5,000 MXN/mes',
      indicaciones: [
        'Expansión de servicios',
        'Evaluación de inversión',
        'Demanda temporal alta',
        'Especialización urológica',
        'Modernización de equipo',
        'Práctica privada'
      ],
      proceso: [
        'Evaluación de necesidades',
        'Propuesta personalizada',
        'Instalación y calibración',
        'Capacitación del personal',
        'Soporte técnico continuo',
        'Mantenimiento incluido'
      ],
      ventajas: [
        'Sin inversión inicial',
        'Mantenimiento incluido',
        'Soporte técnico 24/7',
        'Capacitación completa',
        'Flexibilidad de contrato',
        'Tecnología actualizada'
      ]
    },
    consulta: {
      title: 'Consulta Especializada',
      subtitle: 'Evaluación médica integral',
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      description: 'Consulta urológica completa con especialistas certificados, incluyendo evaluación clínica y recomendaciones terapéuticas.',
      duracion: '30-45 minutos',
      preparacion: 'Historia clínica completa',
      precio: 'Desde $1,200 MXN',
      indicaciones: [
        'Primera consulta urológica',
        'Síntomas urinarios',
        'Evaluación prostática',
        'Problemas de fertilidad',
        'Dolor pélvico',
        'Seguimiento post-tratamiento'
      ],
      proceso: [
        'Historia clínica detallada',
        'Exploración física',
        'Evaluación de síntomas',
        'Solicitud de estudios',
        'Diagnóstico preliminar',
        'Plan de tratamiento'
      ],
      ventajas: [
        'Especialistas certificados',
        'Evaluación integral',
        'Diagnóstico preciso',
        'Plan personalizado',
        'Seguimiento continuo',
        'Segunda opinión'
      ]
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
      equipo: 'Uroflujómetro MMS',
      descripcion: 'Tecnología de precisión para medición de flujo urinario',
      caracteristicas: ['Medición automática', 'Gráficos en tiempo real', 'Base de datos normativa']
    },
    {
      equipo: 'Sistema Urodinámico Laborie',
      descripcion: 'Equipo de última generación para estudios completos',
      caracteristicas: ['Multicanal', 'Software avanzado', 'Reportes automáticos']
    },
    {
      equipo: 'Equipos Pediátricos',
      descripcion: 'Tecnología adaptada específicamente para niños',
      caracteristicas: ['Tamaño apropiado', 'Interfaz amigable', 'Protocolos pediátricos']
    }
  ]

  const currentService = servicios[activeService]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estudios urológicos especializados con I.A. biomédica y 
              atención médica de la más alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="uroflujometria">Uroflujometría</TabsTrigger>
              <TabsTrigger value="urodinamia">Urodinamia</TabsTrigger>
              <TabsTrigger value="renta">Renta Equipos</TabsTrigger>
              <TabsTrigger value="consulta">Consulta</TabsTrigger>
            </TabsList>

            {Object.entries(servicios).map(([key, servicio]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Información Principal */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card className="medical-card">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          {servicio.icon}
                          <div>
                            <CardTitle className="text-2xl">{servicio.title}</CardTitle>
                            <CardDescription className="text-lg">{servicio.subtitle}</CardDescription>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {servicio.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium text-sm">Duración</p>
                              <p className="text-sm text-muted-foreground">{servicio.duracion}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium text-sm">Preparación</p>
                              <p className="text-sm text-muted-foreground">{servicio.preparacion}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Zap className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium text-sm">Precio</p>
                              <p className="text-sm text-muted-foreground">{servicio.precio}</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="cta-button">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Agendar {servicio.title}
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Proceso del Estudio */}
                    <Card className="medical-card">
                      <CardHeader>
                        <CardTitle>Proceso del Estudio</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {servicio.proceso.map((paso, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div>
                                <p className="text-foreground font-medium">{paso}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Indicaciones */}
                    <Card className="medical-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Indicaciones Principales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {servicio.indicaciones.map((indicacion, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{indicacion}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Ventajas */}
                    <Card className="medical-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Ventajas del Estudio</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {servicio.ventajas.map((ventaja, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{ventaja}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="medical-card bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardContent className="pt-6 text-center">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          ¿Necesitas este estudio?
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Agenda tu cita y recibe atención especializada
                        </p>
                        <Button className="w-full cta-button">
                          Agendar Ahora
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Agendar Cita
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Consultar Precios
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiciosPage

