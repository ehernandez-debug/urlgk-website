import CalendlyButton from '@/components/tracking/CalendlyButton';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  QrCode,
  Globe,
  PhoneCall,
  FileText,
  Stethoscope,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  DollarSign,
  Calendar,
  Cpu,
  Package,
  Award,
  UserCheck,
  Wrench
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppButton from '@/components/tracking/WhatsAppButton';

const MedicosPage = () => {
  const formasColaboracion = [
    {
      icon: <QrCode className="h-8 w-8 text-primary" />,
      titulo: 'Escanea y Agenda en Consulta',
      descripcion: 'Entrega tu QR al paciente y en segundos confirma su cita sin pasos extra.',
      ventajas: ['Agenda inmediata', 'Sin intermediarios', 'Seguimiento automático']
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      titulo: 'Link Directo para Compartir',
      descripcion: 'Envía tu enlace personalizado por WhatsApp o email y el paciente agenda solo.',
      ventajas: ['Disponible 24/7', 'Confirmación inmediata', 'Recordatorios automáticos']
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-primary" />,
      titulo: 'Nosotros lo Hacemos por Ti',
      descripcion: 'Envíanos el contacto y coordinamos todo: cita, estudio y seguimiento.',
      ventajas: ['Cero trabajo administrativo', 'Atención personalizada', 'Reportes directos']
    }
  ];

  const beneficios = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      titulo: 'Reportes Profesionales',
      descripcion: 'Recibe reportes detallados con o sin interpretación médica, según el paquete contratado por tu paciente.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      titulo: 'Entrega Rápida',
      descripcion: 'Reportes entregados en 24-48 horas. Interpretaciones médicas disponibles en paquetes Premium.'
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      titulo: 'Tecnología de Vanguardia',
      descripcion: 'Equipos de última generación con análisis asistido por I.A. biomédica para mayor precisión.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      titulo: 'Compromiso Ético',
      descripcion: 'Honorarios por tu participación activa en el proceso diagnóstico, no por el acto de referir.'
    }
  ];

  const pasosProceso = [
    {
      numero: '1',
      titulo: 'Evalúas al Paciente',
      descripcion: 'Determinas la indicación clínica del estudio durante la consulta con tu paciente.'
    },
    {
      numero: '2',
      titulo: 'Paciente Agenda',
      descripcion: 'El paciente agenda vía QR, web o nosotros lo contactamos según tu preferencia.'
    },
    {
      numero: '3',
      titulo: 'Realizamos el Estudio',
      descripcion: 'Ejecutamos el estudio con equipos de vanguardia y atención personalizada.'
    },
    {
      numero: '4',
      titulo: 'Recibes el Reporte',
      descripcion: 'Te enviamos el reporte completo con o sin interpretación según el paquete contratado.'
    },
    {
      numero: '5',
      titulo: 'Recibe tus Honorarios',
      descripcion: 'Urologik emite el pago de honorarios por tu colaboración diagnóstica activa.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Colabora con Urologik | Programa para Médicos</title>
        <meta name="description" content="Únete al programa de colaboración diagnóstica de Urologik. Ofrece estudios urológicos de vanguardia a tus pacientes y recibe honorarios por tu participación activa." />
        <meta name="keywords" content="urologik médicos, colaboración médica, estudios urológicos, uroflujometría, urodinamia, honorarios médicos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section - Optimizado para Landing Page */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Zap className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-semibold text-primary">Programa de Colaboración Médica</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Tu Consultorio, <span className="text-primary">Potenciado.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Integra un servicio de diagnóstico urológico de calidad sin invertir un solo peso en equipo o personal. 
                Descubre cómo Urologik se convierte en tu socio operativo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <CalendlyButton
                  url="https://calendly.com/urologik/medicos-interesados"
                  size="lg"
                  className="text-lg px-8"
                  leadType="medico"
                  source="medicos_hero"
                >
                  Agendar una Demostración de 15 min
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CalendlyButton>
                <WhatsAppButton 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  leadType="medico"
                  source="medicos_hero"
                  message="Hola, soy médico y me interesa colaborar con Urologik"
                >
                  Contactar por WhatsApp
                </WhatsAppButton>
              </div>

              <div className="flex justify-center mb-12">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10">
                  <Cpu className="h-12 w-12 text-primary/60" />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-background shadow-lg flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1,000+</div>
                  <div className="text-sm text-muted-foreground">Estudios Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24-48h</div>
                  <div className="text-sm text-muted-foreground">Entrega de Reportes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Ubicaciones CDMX</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carga Operativa */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                La Carga Operativa que Eliminamos
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nos encargamos del trabajo pesado para que te concentres en el diagnóstico y el seguimiento clínico.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="medical-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">Inversión de Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Olvida los +$100,000 MXN en la compra de un equipo.
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">Gestión de Insumos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Nosotros nos encargamos del stock y la caducidad de catéteres y consumibles.
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <UserCheck className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">Personal Técnico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    No necesitas contratar ni capacitar personal. Nuestro equipo está certificado.
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">Mantenimiento y Calibración</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Aseguramos que el equipo siempre esté operativo y calibrado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proyección de Ingresos por Colaboración */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Proyecta tus Ingresos Adicionales por Colaboración
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Incrementa tus ingresos mensuales sin inversión ni carga operativa, basado en tu participación activa en el proceso diagnóstico.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto medical-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Con 5-10 estudios al mes:
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '40%' }}></div>
                      </div>
                      <p className="text-xl font-bold text-primary whitespace-nowrap">
                        $15,000 - $30,000 MXN
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Con 15-20 estudios al mes:
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
                      </div>
                      <p className="text-xl font-bold text-primary whitespace-nowrap">
                        $45,000 - $60,000 MXN
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Con más de 25 estudios al mes:
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xl font-bold text-primary whitespace-nowrap">
                        $75,000+ MXN
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Nota:</strong> Cifras estimadas. El cálculo exacto se personaliza según el tipo de estudio y el nivel de participación diagnóstica. Los honorarios corresponden a tu colaboración activa en el proceso clínico, no por el acto de referir.
                  </p>
                </div>

                <div className="text-center mt-6">
                  <CalendlyButton
                    url="https://calendly.com/urologik/medicos-interesados"
                    size="lg"
                    className="text-lg px-8"
                    leadType="medico"
                    source="medicos_proyeccion_ingresos"
                  >
                    Agendar Demo para Ver Cálculo Personalizado
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </CalendlyButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portafolio de Capacidades Diagnósticas */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Package className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Un Portafolio Diagnóstico a tu Servicio
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ofrece a tus pacientes estudios de vanguardia sin la complejidad técnica ni la inversión en capital.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="medical-card">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Uroflujometría con EMG</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Diagnóstico no invasivo de la calidad del flujo urinario, ideal para la evaluación inicial de la función del tracto urinario inferior.
                  </CardDescription>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Adultos y Pediátricos</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card border-2 border-primary">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Cpu className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Urodinamia Multicanal</CardTitle>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                    Más Solicitado
                  </span>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Evaluación completa de las fases de llenado y vaciado vesical para un diagnóstico preciso de disfunciones complejas.
                  </CardDescription>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Casos Avanzados</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Videourodinamia</CardTitle>
                  </div>
                  <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full">
                    Gold Standard
                  </span>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    El estándar de oro: sincronización de datos urodinámicos con imágenes de Rayos X para la máxima precisión diagnóstica.
                  </CardDescription>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Casos Complejos</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-4xl mx-auto mt-8 medical-card bg-muted/50">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Todos nuestros estudios incluyen:
                </h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Tecnología de última generación con análisis asistido por I.A. biomédica</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Soporte de un Ingeniero Biomédico certificado durante el estudio</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Entrega de reportes profesionales en formato digital (24-48h)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Interpretación médica por especialistas disponible según paquete</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <WhatsAppButton
                size="lg"
                variant="outline"
                className="text-lg px-8"
                leadType="medico"
                source="medicos_solicitar_catalogo"
                message="Hola, soy médico y me gustaría recibir el catálogo completo de estudios con precios para médicos colaboradores."
              >
                <FileText className="mr-2 h-5 w-5" />
                Solicitar Catálogo Completo por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* Formas de Colaboración */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tres Formas de Referir a tus Pacientes (en menos de 30 segundos)
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Selecciona el flujo más rápido para ti. Nosotros nos encargamos del resto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formasColaboracion.map((forma, index) => (
                <Card key={index} className="medical-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        {forma.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center">{forma.titulo}</CardTitle>
                    <CardDescription className="text-center">{forma.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {forma.ventajas.map((ventaja, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{ventaja}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Colaboración */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Proceso de Colaboración
              </h2>
              <p className="text-lg text-muted-foreground">
                Un flujo simple y transparente de principio a fin
              </p>
            </div>

            <div className="relative">
              {/* Línea conectora en desktop */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" style={{ top: '3rem' }}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {pasosProceso.map((paso, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-lg">
                        {paso.numero}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{paso.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{paso.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Beneficios de Colaborar con Urologik
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((beneficio, index) => (
                <Card key={index} className="medical-card text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {beneficio.icon}
                    </div>
                    <CardTitle className="text-lg">{beneficio.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {beneficio.descripcion}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Ético */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Compromiso Ético</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta colaboración se basa exclusivamente en el <strong>beneficio clínico del paciente</strong>. 
                  Los honorarios corresponden a tu participación activa en el proceso diagnóstico, que incluye:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Evaluación clínica del paciente y determinación de la indicación del estudio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Explicación del procedimiento y sus beneficios al paciente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Revisión e interpretación de los resultados en el contexto clínico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seguimiento y ajuste del tratamiento según los hallazgos</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Los honorarios <strong>no corresponden al acto de indicar el estudio</strong>, sino a tu rol activo 
                  como profesional de la salud en el proceso diagnóstico integral. Mantienes tu responsabilidad 
                  profesional y autonomía clínica en todo momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Futuro: Plataforma Digital */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">Próximamente</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Plataforma Digital de Gestión Médica
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Estamos desarrollando una plataforma integral que te permitirá gestionar tus pacientes referidos, 
              consultar históricos de estudios, acceder a reportes e interpretaciones, visualizar imágenes de 
              ultrasonido y mucho más. <strong>Acceso gratuito para médicos colaboradores.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card className="medical-card">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Gestión de Pacientes</h3>
                  <p className="text-sm text-muted-foreground">
                    Panel completo para seguimiento de pacientes referidos y en colaboración activa
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Histórico de Estudios</h3>
                  <p className="text-sm text-muted-foreground">
                    Acceso a todos los reportes, interpretaciones e imágenes de tus pacientes
                  </p>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Análisis y Estadísticas</h3>
                  <p className="text-sm text-muted-foreground">
                    Visualiza tendencias, volúmenes y métricas de tus colaboraciones
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Listo para potenciar tu práctica?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Agenda una demostración de 15 minutos sin compromiso. Te mostraremos la plataforma, resolveremos tus dudas y te explicaremos cómo puedes empezar a colaborar esta misma semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                url="https://calendly.com/urologik/medicos-interesados"
                size="lg"
                className="text-lg px-8"
                leadType="medico"
                source="medicos_cta_final"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar mi Demostración Gratuita
              </CalendlyButton>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              ¿Tienes preguntas? Escríbenos a <a href="mailto:contactourologik@gmail.com" className="text-primary hover:underline">contactourologik@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicosPage;
