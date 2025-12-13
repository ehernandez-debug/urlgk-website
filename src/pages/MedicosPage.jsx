import { useState, useEffect } from 'react';
import useAnalytics from '@/hooks/useAnalytics';
import CalendlyButton from '@/components/tracking/CalendlyButton';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Calculator,
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
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/tracking/WhatsAppButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { catalogoServicios, calcularHonorariosColaboracion } from '@/lib/catalogo-servicios';

const MedicosPage = () => {
  const { trackCalculation } = useAnalytics();
  const [servicioSeleccionado, setServicioSeleccionado] = useState('uroflujometria-premium');
  const [numeroEstudios, setNumeroEstudios] = useState(10);

  // Obtener todos los servicios para el selector
  const todosLosServicios = [...catalogoServicios.adultos, ...catalogoServicios.pediatricos];
  const servicio = todosLosServicios.find(s => s.id === servicioSeleccionado);
  const honorarios = servicio ? calcularHonorariosColaboracion(servicio.precio, numeroEstudios) : null;

  // Tracking de interacciones con la calculadora
  useEffect(() => {
    if (honorarios && servicio) {
      // Registrar el cálculo después de un pequeño delay para evitar múltiples eventos
      const timeoutId = setTimeout(() => {
        trackCalculation(
          servicioSeleccionado,
          numeroEstudios,
          honorarios.honorariosTotales
        );
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [servicioSeleccionado, numeroEstudios, honorarios, servicio, trackCalculation]);

  const formasColaboracion = [
    {
      icon: <QrCode className="h-8 w-8 text-primary" />,
      titulo: 'Código QR Personalizado',
      descripcion: 'Recibe un código QR único para que tus pacientes agenden directamente desde tu consultorio.',
      ventajas: ['Proceso instantáneo', 'Sin intermediarios', 'Seguimiento automático']
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      titulo: 'Referencia Web Directa',
      descripcion: 'Tus pacientes pueden agendar en nuestro sitio web usando tu código de referencia.',
      ventajas: ['Disponible 24/7', 'Confirmación inmediata', 'Recordatorios automáticos']
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-primary" />,
      titulo: 'Gestión Completa',
      descripcion: 'Solo envíanos el número del paciente y nosotros gestionamos todo el proceso: contacto, agenda, estudio y seguimiento.',
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

  const paquetesDisponibles = [
    {
      nombre: 'Uroflujometría Básica',
      precio: '$1,900 MXN',
      incluye: ['Estudio de uroflujometría', 'Prueba de antígeno prostático', 'Reporte de resultados'],
      interpretacion: false,
      ultrasonido: false
    },
    {
      nombre: 'Uroflujometría Premium',
      precio: '$3,500 MXN',
      incluye: ['Uroflujometría + Ultrasonido', 'Interpretación médica', 'Prueba de antígeno prostático', 'Reporte completo'],
      interpretacion: true,
      ultrasonido: true,
      destacado: true
    },
    {
      nombre: 'Uroflujometría Pediátrica',
      precio: '$3,000 MXN',
      incluye: ['Uroflujometría con EMG', 'Interpretación médica incluida', 'Reporte especializado'],
      interpretacion: true,
      ultrasonido: false
    },
    {
      nombre: 'Urodinamia Multicanal',
      precio: '$10,000 MXN',
      incluye: ['Estudio 3 canales', 'Interpretación médica incluida', 'Reporte detallado'],
      interpretacion: true,
      ultrasonido: false
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
                Ofrece Estudios Urológicos de <span className="text-primary">Vanguardia</span> a tus Pacientes
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Únete a nuestro programa de colaboración diagnóstica. Facilita el acceso de tus pacientes a 
                estudios especializados con tecnología de I.A. biomédica y recibe honorarios por tu participación activa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <CalendlyButton
                  url="https://calendly.com/contactourologik/30min"
                  size="lg"
                  className="text-lg px-8"
                  leadType="medico"
                  source="medicos_hero"
                >
                  Agendar Demostración
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

        {/* Formas de Colaboración */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tres Formas Flexibles de Colaborar
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Elige la modalidad que mejor se adapte a tu práctica médica. Todas incluyen los mismos beneficios y honorarios.
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

        {/* Calculadora de Honorarios */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Calcula tus Honorarios de Colaboración
              </h2>
              <p className="text-lg text-muted-foreground">
                Estima tus honorarios mensuales según el tipo de estudio y volumen de pacientes
              </p>
            </div>

            <Card className="medical-card">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="servicio">Tipo de Estudio</Label>
                    <Select value={servicioSeleccionado} onValueChange={setServicioSeleccionado}>
                      <SelectTrigger id="servicio">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uroflujometria-basica">Uroflujometría Básica - $1,900</SelectItem>
                        <SelectItem value="uroflujometria-premium">Uroflujometría Premium - $3,500</SelectItem>
                        <SelectItem value="uroflujometria-pediatrica">Uroflujometría Pediátrica - $3,000</SelectItem>
                        <SelectItem value="urodinamia-pediatrica">Urodinamia Multicanal - $10,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="estudios">Número de Estudios Mensuales</Label>
                    <Input
                      id="estudios"
                      type="number"
                      min="1"
                      max="100"
                      value={numeroEstudios}
                      onChange={(e) => setNumeroEstudios(parseInt(e.target.value) || 1)}
                    />
                  </div>
                </div>

                {honorarios && (
                  <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Precio del Estudio</div>
                        <div className="text-2xl font-bold text-foreground">
                          ${servicio.precio.toLocaleString()} MXN
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Honorarios por Estudio ({honorarios.porcentaje}%)</div>
                        <div className="text-2xl font-bold text-primary">
                          ${honorarios.honorariosPorEstudio.toLocaleString()} MXN
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Honorarios Mensuales</div>
                        <div className="text-3xl font-bold text-primary">
                          ${honorarios.honorariosTotales.toLocaleString()} MXN
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Los honorarios se calculan sobre el precio del estudio y corresponden a tu participación activa 
                      en el proceso diagnóstico: evaluación clínica, indicación del estudio, revisión de resultados 
                      y seguimiento del paciente.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Paquetes Disponibles */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Catálogo de Estudios Disponibles
              </h2>
              <p className="text-lg text-muted-foreground">
                Todos los paquetes incluyen equipos de última generación y análisis con I.A. biomédica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paquetesDisponibles.map((paquete, index) => (
                <Card key={index} className={`medical-card ${paquete.destacado ? 'border-2 border-primary' : ''}`}>
                  {paquete.destacado && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                      Más Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{paquete.nombre}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{paquete.precio}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {paquete.incluye.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Interpretación:</span>
                        <span className={paquete.interpretacion ? 'text-green-600 font-semibold' : 'text-muted-foreground'}>
                          {paquete.interpretacion ? 'Incluida' : 'No incluida'}
                        </span>
                      </div>
                      {paquete.ultrasonido !== undefined && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Ultrasonido:</span>
                          <span className={paquete.ultrasonido ? 'text-green-600 font-semibold' : 'text-muted-foreground'}>
                            {paquete.ultrasonido ? 'Incluido' : 'No incluido'}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Nota:</strong> Los estudios pediátricos siempre incluyen interpretación médica especializada. 
                Los estudios de adultos incluyen interpretación solo en el paquete Premium.
              </p>
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
              ¿Listo para Comenzar a Colaborar?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Agenda una demostración gratuita y descubre cómo Urologik puede ayudarte a ofrecer 
              mejores opciones diagnósticas a tus pacientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                url="https://calendly.com/contactourologik/30min"
                size="lg"
                className="text-lg px-8"
                leadType="medico"
                source="medicos_cta_final"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Demostración
              </CalendlyButton>
              <WhatsAppButton 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                leadType="medico"
                source="medicos_cta_final"
                message="Hola, soy médico y me interesa colaborar con Urologik"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </WhatsAppButton>
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
