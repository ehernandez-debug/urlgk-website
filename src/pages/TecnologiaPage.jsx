import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Cpu,
  Wifi,
  Activity,
  CheckCircle,
  Clock,
  Lightbulb,
  Baby,
  Heart,
  Shield,
  ArrowRight,
  MessageCircle,
  Zap,
  Database,
  Code,
  Server,
  RefreshCw,
  Target,
  TrendingUp,
  Microscope,
  CircuitBoard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useAnalytics from '@/hooks/useAnalytics';

const TecnologiaPage = () => {
  const { trackEvent, trackLead } = useAnalytics();

  const deviceFeatures = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: 'ESP32-S3 + HX711',
      description: 'Microcontrolador de alto rendimiento con celda de carga de precisión para mediciones confiables.'
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: 'Transmisión WiFi a Cloud',
      description: 'Datos en tiempo real enviados a la nube para almacenamiento seguro y acceso inmediato.'
    },
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: 'Uroflujometría + EMG No Invasivo',
      description: 'Enfoque actual en uroflujometría con electromiografía no invasiva integrada.'
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: 'Validaciones Clínicas en Curso',
      description: 'Protocolo de validación activo con médicos aliados en hospitales de la CDMX.'
    }
  ];

  const dataPoints = [
    { label: 'flow_rate', desc: 'Tasa de flujo en tiempo real (mL/s)' },
    { label: 'Qmax', desc: 'Flujo máximo alcanzado' },
    { label: 'Qavg', desc: 'Flujo promedio del estudio' },
    { label: 'Vvoid', desc: 'Volumen total vaciado (mL)' },
    { label: 'duration_sec', desc: 'Duración total de la micción' }
  ];

  const roadmap = [
    {
      phase: 'Fase Actual',
      title: 'Uroflujómetro Portátil',
      description: 'Validación clínica del dispositivo con ESP32-S3 y celda de carga HX711. Pruebas con médicos aliados en hospitales sede.',
      status: 'current',
      icon: <CircuitBoard className="h-6 w-6" />
    },
    {
      phase: 'Medio Plazo',
      title: 'Urodinamia Completa con IA',
      description: 'Integración de algoritmos de inteligencia artificial para análisis predictivo y urodinamia completa automatizada.',
      status: 'upcoming',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      phase: 'Visión',
      title: 'Dispositivo Clase II COFEPRIS',
      description: 'Registro como dispositivo médico clase II ante COFEPRIS para distribución nacional e internacional.',
      status: 'future',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const subespecialidades = [
    {
      icon: <Baby className="h-10 w-10 text-primary" />,
      title: 'Uropediatría',
      description: 'Diagnóstico no invasivo para niños. Nuestro dispositivo permite evaluaciones cómodas y precisas adaptadas a pacientes pediátricos.',
      highlight: 'Alto valor clínico, baja competencia en el mercado.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Uroginecología',
      description: 'Evaluación de incontinencia urinaria femenina con tecnología portátil. Diagnóstico accesible fuera del hospital.',
      highlight: 'Alta necesidad insatisfecha en atención primaria.'
    }
  ];

  const stackTech = [
    { icon: <Server className="h-6 w-6 text-primary" />, category: 'Cloud', items: 'GCP (BigQuery, Cloud Run, Cloud Functions)' },
    { icon: <Code className="h-6 w-6 text-primary" />, category: 'App', items: 'React + TypeScript + Firebase Auth' },
    { icon: <Cpu className="h-6 w-6 text-primary" />, category: 'IoT', items: 'PlatformIO + Arduino (migración a ESP-IDF)' },
    { icon: <Database className="h-6 w-6 text-primary" />, category: 'Datos', items: 'HL7/FHIR compatible' },
    { icon: <Shield className="h-6 w-6 text-primary" />, category: 'Compliance', items: 'NOM-024, LFPDPPP' }
  ];

  const simbioticoCycle = [
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: 'Renta de Equipo',
      description: 'Genera caja operativa mensual recurrente'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Caja Operativa',
      description: 'Financia investigación y desarrollo del dispositivo'
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Dispositivo Propio',
      description: 'Diferencia la oferta de renta y abre mercado nuevo'
    }
  ];

  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_name: 'tecnologia_conocer_mas',
      destination: '/contacto?service=info-tecnologia'
    });
    trackLead('info', 'tecnologia_page');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tecnología e Innovación | Urologik — Desarrollamos Tecnología Médica con IA</title>
        <meta name="description" content="Urologik desarrolla tecnología médica con inteligencia artificial. Conoce nuestro uroflujómetro portátil con ESP32, transmisión WiFi a cloud y validación clínica en curso." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="h-4 w-4" />
            Innovación Médica Mexicana
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
            Desarrollamos Tecnología Médica
            <span className="text-primary block mt-2">con Inteligencia Artificial</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            La renta de equipo financia la innovación. La innovación diferencia la renta.
          </p>
        </div>
      </section>

      {/* El Uroflujómetro Portátil */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CircuitBoard className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              El Uroflujómetro Portátil Urologik
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Diseñado en México para democratizar el acceso al diagnóstico urológico de precisión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {deviceFeatures.map((feature, index) => (
              <Card key={index} className="medical-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Datos que captura */}
          <Card className="medical-card bg-muted/30 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Datos que Captura el Dispositivo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {dataPoints.map((point, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg border">
                    <code className="text-primary font-mono font-bold text-sm">{point.label}</code>
                    <p className="text-xs text-muted-foreground mt-2">{point.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Tecnológico */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Roadmap Tecnológico</h2>
            <p className="text-muted-foreground mt-3">Nuestra ruta hacia el dispositivo médico del futuro.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {roadmap.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Mobile connector */}
                  {index < roadmap.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-4 w-0.5 h-8 bg-primary/20" />
                  )}
                  <Card className={`medical-card text-center h-full transition-all duration-300 ${
                    phase.status === 'current'
                      ? 'border-primary shadow-lg ring-2 ring-primary/20'
                      : 'hover:shadow-md'
                  }`}>
                    <CardHeader>
                      <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                        phase.status === 'current'
                          ? 'bg-primary text-white'
                          : phase.status === 'upcoming'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                      }`}>
                        {phase.icon}
                      </div>
                      {phase.status === 'current' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mx-auto">
                          <CheckCircle className="h-3 w-3" /> En Curso
                        </span>
                      )}
                      <CardDescription className="font-semibold text-primary">{phase.phase}</CardDescription>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subespecialidades */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Subespecialidades de Alto Impacto</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Nichos con baja competencia, alto valor clínico y alta necesidad insatisfecha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {subespecialidades.map((sub, index) => (
              <Card key={index} className="medical-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2">{sub.icon}</div>
                  <CardTitle className="text-xl">{sub.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{sub.description}</p>
                  <div className="flex items-start gap-2 bg-primary/5 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm font-medium text-foreground">{sub.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="medical-card bg-muted/20 border-dashed">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Por qué estos nichos</p>
                  <p className="text-sm text-muted-foreground">
                    La uropediatría y la uroginecología presentan una combinación ideal: baja competencia tecnológica,
                    alto valor por estudio y una necesidad clínica significativa que no está siendo atendida con
                    herramientas modernas en México.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* El Modelo Simbiótico */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RefreshCw className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl lg:text-4xl font-bold">El Modelo Simbiótico</h2>
            <p className="text-white/80 mt-3 max-w-2xl mx-auto">
              Un ciclo virtuoso donde cada componente alimenta al siguiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {simbioticoCycle.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center h-full border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
                {/* Arrow connector */}
                {index < simbioticoCycle.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-white/60" />
                  </div>
                )}
                {/* Loop arrow on last item */}
                {index === simbioticoCycle.length - 1 && (
                  <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <RefreshCw className="h-6 w-6 text-white/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-white/60 text-sm mt-12">
            El ciclo se repite: la renta financia la innovación, y la innovación diferencia la renta.
          </p>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Stack Tecnológico</h2>
            <p className="text-muted-foreground mt-3">Infraestructura de grado empresarial para datos médicos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stackTech.map((tech, index) => (
              <Card key={index} className="medical-card text-center hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    {tech.icon}
                  </div>
                  <p className="font-bold text-sm text-foreground mb-1">{tech.category}</p>
                  <p className="text-xs text-muted-foreground">{tech.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Quieres saber más sobre nuestra tecnología
          </h2>
          <p className="text-muted-foreground mb-8">
            Platiquemos sobre cómo la innovación médica mexicana puede transformar tu práctica urológica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" onClick={handleCTAClick}>
              <Link to="/contacto?service=info-tecnologia">
                Conocer más <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/servicios">
                Ver Servicios <Activity className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TecnologiaPage;
