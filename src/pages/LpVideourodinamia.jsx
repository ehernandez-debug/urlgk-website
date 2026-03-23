import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MonitorPlay,
  Stethoscope,
  CheckCircle,
  Activity,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  Users,
  ArrowRight,
  Shield,
  Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import useAnalytics from '@/hooks/useAnalytics';

const indicaciones = [
  { title: 'Reflujo Vesicoureteral', description: 'Visualización directa del reflujo durante el llenado y vaciado vesical.' },
  { title: 'Vejiga Neurogénica Compleja', description: 'Evaluación simultánea de presiones y anatomía en pacientes neurológicos.' },
  { title: 'Disfunción Detrusor-Esfínter', description: 'Identificación precisa de disinergia con correlación fluoroscópica.' },
  { title: 'Evaluación Post-Quirúrgica Compleja', description: 'Valoración anatómica y funcional tras cirugías reconstructivas.' },
  { title: 'Diagnóstico Pre-Aumento Vesical', description: 'Documentación completa previa a procedimientos de ampliación vesical.' },
];

const pasos = [
  { step: '01', title: 'Solicitud Médica', description: 'Tu urólogo solicita el estudio con la indicación clínica específica.', icon: FileText },
  { step: '02', title: 'Coordinación', description: 'Agendamos en sede hospitalaria con equipo de fluoroscopia disponible.', icon: Phone },
  { step: '03', title: 'Preparación del Paciente', description: 'Instrucciones detalladas previas al estudio (ayuno, medicamentos, etc.).', icon: Users },
  { step: '04', title: 'Estudio (60-90 min)', description: 'Urodinamia multicanal con fluoroscopia simultánea en tiempo real.', icon: MonitorPlay },
  { step: '05', title: 'Reporte Especializado', description: 'Informe detallado con imágenes fluoroscópicas y curvas urodinámicas en 48-72 hrs.', icon: Activity },
];

const LpVideourodinamia = () => {
  const { trackEvent, trackLead } = useAnalytics();

  const handleCtaClick = (ctaName) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      destination: '/contacto?service=agendar-videourodinamia',
      page: 'videourodinamia',
    });
    trackLead('medico', 'landing_videourodinamia', { service: 'videourodinamia' });
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Videourodinamia | Urologik — Visualización en Tiempo Real de la Función Vesical</title>
        <meta
          name="description"
          content="Videourodinamia: el gold standard en diagnóstico urológico. Combina urodinamia multicanal con fluoroscopia simultánea para visualizar la función vesical en tiempo real. Desde $24,943 MXN."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Shield className="h-4 w-4" />
            Gold Standard en Diagnóstico Urológico
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary max-w-4xl mx-auto">
            Visualización en Tiempo Real de la Función Vesical
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            La videourodinamia combina la urodinamia multicanal con imágenes fluoroscópicas simultáneas,
            permitiendo correlacionar presiones vesicales con la anatomía en movimiento para un diagnóstico
            definitivo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?service=agendar-videourodinamia" onClick={() => handleCtaClick('hero_demo_medicos')}>
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Stethoscope className="h-5 w-5" />
                Agendar Demo para Médicos
              </Button>
            </Link>
            <Link to="/contacto?service=agendar-videourodinamia" onClick={() => handleCtaClick('hero_agendar_pacientes')}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <Users className="h-5 w-5" />
                Agendar Estudio para Pacientes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Qué Es */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué es la Videourodinamia?</h2>
            <p className="text-muted-foreground mb-4">
              La videourodinamia es considerada el <strong className="text-primary">gold standard</strong> en
              el diagnóstico urodinámico. Integra la urodinamia multicanal convencional con visualización
              fluoroscópica simultánea, generando una imagen completa de la función del tracto urinario
              inferior.
            </p>
            <p className="text-muted-foreground">
              Esto permite al especialista observar en tiempo real cómo se llena y vacía la vejiga,
              identificar reflujo, obstrucciones y alteraciones anatómicas mientras se registran las
              presiones intravesicales y abdominales de forma sincronizada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="medical-card text-center">
              <CardHeader>
                <MonitorPlay className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-sm mt-2">Fluoroscopia en Tiempo Real</CardTitle>
              </CardHeader>
            </Card>
            <Card className="medical-card text-center">
              <CardHeader>
                <Activity className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-sm mt-2">Urodinamia Multicanal</CardTitle>
              </CardHeader>
            </Card>
            <Card className="medical-card text-center">
              <CardHeader>
                <Eye className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-sm mt-2">Correlación Anatómica</CardTitle>
              </CardHeader>
            </Card>
            <Card className="medical-card text-center">
              <CardHeader>
                <FileText className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-sm mt-2">Reporte con Imágenes</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Quién */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Para Quién es la Videourodinamia?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="medical-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Para Médicos</CardTitle>
                </div>
                <CardDescription>Diagnóstico definitivo en casos complejos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Casos complejos donde la urodinamia convencional no es concluyente',
                    'Sospecha de vejiga neurogénica que requiere documentación fluoroscópica',
                    'Evaluación de reflujo vesicoureteral con correlación presión-imagen',
                    'Planificación pre-quirúrgica de procedimientos reconstructivos',
                    'Segunda opinión diagnóstica con el estándar más alto disponible',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="medical-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Para Pacientes</CardTitle>
                </div>
                <CardDescription>Cuando otros estudios no han sido suficientes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Estudios previos no han dado un diagnóstico claro',
                    'Síntomas urinarios persistentes sin causa identificada',
                    'Tu urólogo necesita la mayor información posible antes de una cirugía',
                    'Historial de cirugías urológicas con resultados subóptimos',
                    'Condiciones neurológicas que afectan la función de la vejiga',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inversión en tu Diagnóstico</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            El estudio más completo disponible en urodinamia. Incluye todo lo necesario para un
            diagnóstico definitivo.
          </p>
          <Card className="medical-card max-w-lg mx-auto border-primary border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Videourodinamia Completa</CardTitle>
              <CardDescription>Estudio completo + fluoroscopia + reporte especializado</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                Desde $24,943 <span className="text-lg font-normal text-muted-foreground">MXN</span>
              </p>
              <ul className="text-left space-y-2 mt-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Urodinamia multicanal completa</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Fluoroscopia simultánea en tiempo real</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Técnico biomédico e ingeniero presentes</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Reporte especializado con imágenes (48-72 hrs)</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Coordinación completa con el hospital</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Facturación CFDI 4.0</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">¿Cómo Funciona?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un proceso coordinado de principio a fin. Nosotros nos encargamos de toda la logística.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pasos.map((paso) => {
              const Icon = paso.icon;
              return (
                <Card key={paso.step} className="medical-card text-center relative">
                  <CardHeader>
                    <span className="text-xs font-bold text-primary/60 uppercase tracking-wider">Paso {paso.step}</span>
                    <Icon className="h-8 w-8 mx-auto text-primary mt-2" />
                    <CardTitle className="text-sm mt-2">{paso.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{paso.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
              <Clock className="h-4 w-4" />
              Duración del estudio: 60 — 90 minutos
            </div>
          </div>
        </div>
      </section>

      {/* Indicaciones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Indicaciones Clínicas</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            La videourodinamia está indicada en situaciones donde se requiere la máxima precisión diagnóstica.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {indicaciones.map((ind, i) => (
              <Card key={i} className="medical-card">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-base">{ind.title}</CardTitle>
                      <CardDescription className="mt-1">{ind.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs Finales */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para el Diagnóstico Definitivo?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ya sea que seas médico buscando el estudio más completo para tu paciente, o paciente
            buscando respuestas, estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?service=agendar-videourodinamia" onClick={() => handleCtaClick('footer_demo_medicos')}>
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Stethoscope className="h-5 w-5" />
                Agendar Demo para Médicos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contacto?service=agendar-videourodinamia" onClick={() => handleCtaClick('footer_agendar_pacientes')}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar Estudio para Pacientes
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LpVideourodinamia;
