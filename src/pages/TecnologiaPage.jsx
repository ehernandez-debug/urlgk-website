import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Clock,
  Lightbulb,
  Baby,
  Heart,
  Shield,
  ArrowRight,
  MessageCircle,
  Microscope,
  CircuitBoard,
  BrainCircuit,
  Stethoscope,
  BarChart2,
  FileText,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useAnalytics from '@/hooks/useAnalytics';

const TecnologiaPage = () => {
  const { trackEvent, trackLead } = useAnalytics();

  const deviceFeatures = [
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      title: 'Medición Precisa y No Invasiva',
      description: 'El dispositivo registra el flujo urinario del paciente de forma cómoda, sin cables ni procedimientos molestos. El estudio tarda menos de 5 minutos.'
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: 'Análisis con Inteligencia Artificial',
      description: 'Las señales captadas durante el estudio son procesadas por algoritmos de IA que identifican patrones clínicos relevantes, apoyando al médico en la interpretación.'
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: 'Resultados Instantáneos en la Nube',
      description: 'Al finalizar el estudio, los resultados quedan disponibles de forma inmediata en la plataforma digital de Urologik, accesibles desde cualquier dispositivo.'
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: 'Validación Clínica en Hospitales',
      description: 'El dispositivo está siendo validado con médicos aliados en hospitales de la CDMX para garantizar su precisión diagnóstica antes de su lanzamiento.'
    }
  ];

  const roadmap = [
    {
      phase: 'Fase Actual',
      title: 'Uroflujómetro Portátil',
      description: 'Validación clínica del dispositivo portátil con médicos aliados en hospitales sede. Pruebas de precisión y usabilidad en entorno real.',
      status: 'current',
      icon: <CircuitBoard className="h-6 w-6" />
    },
    {
      phase: 'Medio Plazo',
      title: 'Urodinamia Completa con IA',
      description: 'Integración de inteligencia artificial para análisis predictivo y automatización del reporte urodinámico completo.',
      status: 'upcoming',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      phase: 'Visión',
      title: 'Dispositivo Certificado COFEPRIS',
      description: 'Registro como dispositivo médico ante COFEPRIS para distribución nacional e internacional.',
      status: 'future',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const subespecialidades = [
    {
      icon: <Baby className="h-10 w-10 text-primary" />,
      title: 'Uropediatría',
      description: 'Diagnóstico no invasivo para niños. El dispositivo permite evaluaciones cómodas y precisas adaptadas a pacientes pediátricos, sin necesidad de procedimientos complejos.',
      highlight: 'Alto valor clínico, baja competencia en el mercado.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Uroginecología',
      description: 'Evaluación de incontinencia urinaria femenina con tecnología portátil. Diagnóstico accesible fuera del hospital, en el consultorio del médico.',
      highlight: 'Alta necesidad insatisfecha en atención primaria.'
    }
  ];

  const asistenteMedico = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: 'Reporte Automatizado',
      description: 'El asistente genera un borrador del reporte clínico con los hallazgos del estudio, listo para que el médico lo revise y firme en minutos.'
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: 'Sugerencias Diagnósticas',
      description: 'Basándose en los patrones del estudio y la historia del paciente, el asistente propone posibles diagnósticos para que el médico los evalúe.'
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: 'Historial del Paciente',
      description: 'Acceso inmediato al historial de estudios previos del paciente, facilitando el seguimiento y la comparación de resultados a lo largo del tiempo.'
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
        <title>Tecnología e Innovación | Urologik — Diagnóstico Urológico con Inteligencia Artificial</title>
        <meta name="description" content="Urologik desarrolla tecnología médica con inteligencia artificial para el diagnóstico urológico. Uroflujómetro portátil con IA, asistente inteligente para médicos y validación clínica en curso." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BrainCircuit className="h-4 w-4" />
            Innovación Médica Mexicana
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
            Diagnóstico Urológico
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Asistente Inteligente para Médicos */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Asistente Inteligente para el Médico
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Dentro de la plataforma de Urologik para Médicos, el asistente con IA apoya al especialista en cada paso del proceso diagnóstico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {asistenteMedico.map((item, index) => (
              <Card key={index} className="medical-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Tecnológico */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Hoja de Ruta</h2>
            <p className="text-muted-foreground mt-3">Nuestra ruta hacia el dispositivo médico del futuro.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {roadmap.map((phase, index) => (
                <div key={index} className="relative">
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
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subespecialidades */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Subespecialidades de Alto Impacto</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Áreas con alta necesidad clínica y poca oferta tecnológica especializada en México.
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

      {/* CTA Final */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Quieres saber más sobre nuestra tecnología?
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
              <Link to="/para-medicos">
                Para Médicos <Stethoscope className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TecnologiaPage;
