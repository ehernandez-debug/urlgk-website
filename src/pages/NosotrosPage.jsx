import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle,
  Calendar,
  MapPin,
  Stethoscope
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const NosotrosPage = () => {
  const valores = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      titulo: 'Compromiso con el Paciente',
      descripcion: 'Ponemos al paciente en el centro de todo lo que hacemos, brindando atención personalizada y empática.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      titulo: 'Excelencia Médica',
      descripcion: 'Mantenemos los más altos estándares de calidad en diagnóstico y atención médica especializada.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      titulo: 'Innovación Tecnológica',
      descripcion: 'Adoptamos las últimas tecnologías médicas para ofrecer diagnósticos más precisos y eficientes.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      titulo: 'Integridad y Transparencia',
      descripcion: 'Actuamos con honestidad y transparencia en todas nuestras relaciones profesionales y comerciales.'
    }
  ]

  const equipo = [
    {
      nombre: 'Especialista en Urología',
      puesto: 'Director Médico',
      especialidad: 'Urólogo Certificado',
      experiencia: '15 años de experiencia',
      descripcion: 'Especialista en urodinamia y cirugía urológica mínimamente invasiva. Certificado por el Consejo Mexicano de Urología.',
      logros: ['Más de 5,000 estudios realizados', 'Investigación en incontinencia urinaria', 'Docente universitario']
    },
    {
      nombre: 'Especialista en Ginecourología',
      puesto: 'Ginecouróloga',
      especialidad: 'Ginecouróloga',
      experiencia: '12 años de experiencia',
      descripcion: 'Experta en problemas urológicos femeninos y cirugía reconstructiva del piso pélvico.',
      logros: ['Certificación internacional', 'Pionera en técnicas mínimamente invasivas', 'Autora de publicaciones científicas']
    },
    {
      nombre: 'Especialista en Uropediatría',
      puesto: 'Uropediatra',
      especialidad: 'Uropediatra',
      experiencia: '10 años de experiencia',
      descripcion: 'Dedicado exclusivamente a la urología pediátrica con enfoque en malformaciones congénitas.',
      logros: ['Especialización en Hospital Infantil', 'Cirugías complejas pediátricas', 'Investigación en malformaciones']
    }
  ]

  const hitos = [
    {
      año: '2016',
      evento: 'Fundación de Urologik',
      descripcion: 'Inicio de operaciones con el primer uroflujómetro en Colonia del Valle'
    },
    {
      año: '2018',
      evento: 'Especialización Pediátrica',
      descripcion: 'Apertura del centro especializado en Hospital Infantil Privado'
    },
    {
      año: '2020',
      evento: 'Expansión de Servicios',
      descripcion: 'Incorporación de estudios de urodinamia y ampliación del equipo médico'
    },
    {
      año: '2023',
      evento: 'Programa de Renta',
      descripcion: 'Lanzamiento del programa de renta de equipos para médicos'
    },
    {
      año: '2024',
      evento: 'Tecnología Inteligente',
      descripcion: 'Implementación de IA para análisis avanzado de estudios'
    },
    {
      año: '2025',
      evento: 'Ecosistema Digital',
      descripcion: 'Desarrollo del ecosistema de IA médica inteligente'
    }
  ]

  const estadisticas = [
    {
      numero: '1,000+',
      descripcion: 'Estudios Realizados',
      icon: <Stethoscope className="h-6 w-6 text-primary" />
    },
    {
      numero: '50+',
      descripcion: 'Médicos Asociados',
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      numero: '95%',
      descripcion: 'Satisfacción del Paciente',
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      numero: '2',
      descripcion: 'Ubicaciones Especializadas',
      icon: <MapPin className="h-6 w-6 text-primary" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre Urologik
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acercando estudios urológicos especializados a través de 
              I.A. biomédica y atención de excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="medical-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Facilitar el acceso a estudios urológicos especializados mediante I.A. 
                  biomédica, brindando diagnósticos precisos y oportunos que mejoren la 
                  calidad de vida de nuestros pacientes y apoyen a los profesionales de la salud 
                  en su práctica clínica.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ser la plataforma líder en América Latina para estudios urológicos, 
                  reconocida por nuestra innovación tecnológica, excelencia médica y 
                  compromiso con la transformación digital de la urología, creando un 
                  ecosistema integral que beneficie a pacientes, médicos y el sistema de salud.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-lg text-muted-foreground">
              Números que reflejan nuestro compromiso con la excelencia
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <Card key={index} className="medical-card text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.numero}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {stat.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Los principios que guían cada una de nuestras acciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="medical-card text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {valor.icon}
                  </div>
                  <CardTitle className="text-lg">{valor.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {valor.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Médico */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestro Equipo Médico
            </h2>
            <p className="text-lg text-muted-foreground">
              Especialistas certificados comprometidos con la excelencia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipo.map((miembro, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <CardTitle className="text-xl">{miembro.nombre}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {miembro.puesto}
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>{miembro.especialidad}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{miembro.experiencia}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {miembro.descripcion}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Logros Destacados:</h4>
                    <ul className="space-y-1">
                      {miembro.logros.map((logro, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{logro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historia y Hitos */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-muted-foreground">
              El camino hacia la transformación de la urología en México
            </p>
          </div>
          
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            
            <div className="space-y-12">
              {hitos.map((hito, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="medical-card">
                      <CardHeader>
                        <CardTitle className="text-lg">{hito.evento}</CardTitle>
                        <CardDescription className="text-primary font-semibold">
                          {hito.año}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {hito.descripcion}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología y Futuro */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tecnología e Innovación
            </h2>
            <p className="text-lg text-muted-foreground">
              Construyendo el futuro de la urología con I.A. biomédica
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Ecosistema de I.A. Biomédica
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Diagnóstico Asistido por IA</p>
                    <p className="text-muted-foreground text-sm">Algoritmos avanzados para interpretación automática de estudios</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Interoperabilidad Universal</p>
                    <p className="text-muted-foreground text-sm">Integración con cualquier sistema médico existente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Aprendizaje Continuo</p>
                    <p className="text-muted-foreground text-sm">Mejora constante basada en datos clínicos reales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Escalabilidad Global</p>
                    <p className="text-muted-foreground text-sm">Arquitectura preparada para expansión internacional</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span>Proyección 2025-2030</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estudios anuales</span>
                  <span className="font-bold text-primary">100,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Médicos en red</span>
                  <span className="font-bold text-primary">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Países de operación</span>
                  <span className="font-bold text-primary">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Precisión diagnóstica</span>
                  <span className="font-bold text-primary">98%+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Únete a la Revolución Urológica
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Forma parte del futuro de la medicina urológica con I.A. biomédica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 transform hover:scale-105 transition-transform">
              <a href="/servicios">Conoce Nuestros Servicios</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-transform">
              <a href="/medicos">Únete como Médico</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NosotrosPage
