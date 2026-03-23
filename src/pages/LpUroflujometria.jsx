import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Activity, CheckCircle, Clock, FileText, Stethoscope,
  MessageCircle, ArrowRight, XCircle, CalendarCheck,
  Droplets, Shield, Cpu, Users, Zap
} from 'lucide-react';
import useAnalytics from '@/hooks/useAnalytics';

const indicaciones = [
  { title: 'Hiperplasia Prostática Benigna (HPB)', description: 'Evaluación objetiva del grado de obstrucción urinaria.', icon: Stethoscope },
  { title: 'Dificultad Miccional', description: 'Chorro débil, intermitente o con esfuerzo al orinar.', icon: Droplets },
  { title: 'Control Post-Operatorio', description: 'Seguimiento tras cirugía prostática o uretral.', icon: Activity },
  { title: 'Evaluación Pre-Quirúrgica', description: 'Documentación basal antes de una intervención urológica.', icon: FileText },
  { title: 'Incontinencia Urinaria', description: 'Estudio complementario para identificar el tipo de incontinencia.', icon: Shield },
];

const pasos = [
  { step: 1, title: 'Agendar Cita', description: 'Contáctanos por WhatsApp o formulario web para programar tu estudio.', icon: CalendarCheck },
  { step: 2, title: 'Preparación', description: 'Llega con la vejiga cómodamente llena. Bebe 500 ml de agua 1 hora antes.', icon: Clock },
  { step: 3, title: 'Estudio', description: 'Orinarás en un equipo especial que mide tu flujo. Dura 5-10 minutos, sin dolor.', icon: Activity },
  { step: 4, title: 'Resultados', description: 'Recibes tu reporte con gráficas e interpretación en 24-48 horas.', icon: FileText },
];

const comparativa = [
  { feature: 'Costo Uroflujometría', urologik: 'Desde $2,260 MXN', otro: '$3,500 - $6,000 MXN' },
  { feature: 'Tiempo de Espera', urologik: '24-72 horas', otro: '2-6 semanas' },
  { feature: 'Atención Personalizada', urologik: true, otro: false },
  { feature: 'Reporte en 24-48h', urologik: true, otro: false },
  { feature: 'Equipo Calibrado por Ingenieros Biomédicos', urologik: true, otro: false },
  { feature: 'Servicio a Domicilio / Consultorio', urologik: true, otro: false },
];

const LpUroflujometria = () => {
  const { trackEvent, trackLead } = useAnalytics();

  const handleWhatsApp = () => {
    trackLead('paciente', 'whatsapp', { service: 'uroflujometria' });
    window.open('https://wa.me/5215535055983?text=Hola%2C%20me%20interesa%20agendar%20una%20uroflujometr%C3%ADa', '_blank');
  };

  const handleCTAClick = () => {
    trackEvent('cta_click', { cta_name: 'agendar_uroflujometria', destination: '/contacto' });
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Uroflujometría | Urologik — Diagnóstico No Invasivo del Flujo Urinario</title>
        <meta name="description" content="Estudio de uroflujometría no invasivo en CDMX. Mide tu flujo urinario con tecnología de punta. Resultados en 24-48h. Desde $2,260 MXN. Agenda hoy con Urologik." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Estudio No Invasivo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Diagnóstico No Invasivo del Flujo Urinario
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            La uroflujometría mide la velocidad, volumen y patrón de tu flujo urinario para detectar obstrucciones
            o debilidad del músculo vesical. Es un estudio rápido, indoloro y sin preparación compleja.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?service=agendar-uroflujometria" onClick={handleCTAClick}>
              <Button size="lg">Agendar Uroflujometría <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Button size="lg" variant="outline" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">¿Qué Incluye el Estudio?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Dos opciones según tus necesidades clínicas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-2xl">Uroflujometría Básica</CardTitle>
                <CardDescription>Evaluación estándar del flujo urinario</CardDescription>
                <p className="text-3xl font-bold text-primary mt-2">$2,260 <span className="text-base font-normal text-muted-foreground">MXN</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Medición de flujo urinario (mL/s)', 'Volumen vaciado total', 'Tiempo de micción', 'Gráfica con Qmax y Qavg', 'Reporte interpretado por especialista'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="medical-card border-primary border-2">
              <CardHeader>
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">Recomendado</span>
                <CardTitle className="text-2xl">Uroflujometría Premium</CardTitle>
                <CardDescription>Evaluación completa con estudios complementarios</CardDescription>
                <p className="text-3xl font-bold text-primary mt-2">$3,390 <span className="text-base font-normal text-muted-foreground">MXN</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Todo lo incluido en Básica',
                    'EMG perineal (actividad muscular)',
                    'Medición de residuo post-miccional',
                    'Análisis detallado de curvas',
                    'Comparativa con valores normativos por edad',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indicaciones Clínicas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Indicaciones Clínicas</h2>
            <p className="mt-2 text-lg text-muted-foreground">¿Cuándo se recomienda una uroflujometría?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indicaciones.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="medical-card">
                <CardHeader>
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Proceso Paso a Paso</h2>
            <p className="mt-2 text-lg text-muted-foreground">Así de sencillo es realizarte el estudio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map(({ step, title, description, icon: Icon }) => (
              <Card key={step} className="medical-card text-center">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center mx-auto text-lg font-bold">
                    {step}
                  </div>
                  <Icon className="h-8 w-8 text-primary mx-auto mt-3" />
                  <CardTitle className="mt-2">{title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciador - Tecnología Propia */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Innovación Urologik</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Tecnología Propia en Desarrollo</h2>
            <p className="text-muted-foreground mb-4">
              Estamos desarrollando un uroflujómetro portátil con inteligencia artificial que permitirá
              realizar estudios de alta precisión directamente en el consultorio del médico.
            </p>
            <ul className="space-y-3">
              {[
                'Sensor de celda de carga de alta precisión',
                'Transmisión WiFi en tiempo real',
                'Análisis automático con IA integrada',
                'Reporte digital inmediato para el médico',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-muted rounded-2xl p-10 text-center">
              <Activity className="h-20 w-20 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold">Uroflujómetro Portátil Urologik</p>
              <p className="text-sm text-muted-foreground mt-1">Próximamente disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Urologik vs Hospital Público</h2>
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="p-4 font-semibold text-sm">Característica</th>
                    <th className="p-4 font-semibold text-center text-sm text-primary">UROLOGIK</th>
                    <th className="p-4 font-semibold text-center text-sm">HOSPITAL PÚBLICO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map(({ feature, urologik, otro }) => (
                    <tr key={feature} className="border-t dark:bg-gray-800/50">
                      <td className="p-4 font-medium">{feature}</td>
                      <td className="p-4 text-center">
                        {typeof urologik === 'boolean' ?
                          (urologik ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-gray-400 mx-auto" />) :
                          <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">{urologik}</span>
                        }
                      </td>
                      <td className="p-4 text-center">
                        {typeof otro === 'boolean' ?
                          (otro ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />) :
                          <span className="font-semibold text-muted-foreground text-sm">{otro}</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Agendar tu Estudio?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agenda tu uroflujometría hoy y obtén resultados claros sobre tu salud urinaria.
            Nuestro equipo te acompaña en todo el proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?service=agendar-uroflujometria" onClick={handleCTAClick}>
              <Button size="lg">Agendar Uroflujometría <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Button size="lg" variant="outline" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 h-4 w-4" /> Enviar WhatsApp
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            <Users className="inline h-4 w-4 mr-1" />
            +57 procedimientos realizados con Urologik en CDMX
          </p>
        </div>
      </section>
    </div>
  );
};

export default LpUroflujometria;
