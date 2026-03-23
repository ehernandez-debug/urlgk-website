import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Baby,
  Heart,
  CheckCircle,
  Activity,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  Shield,
  MapPin,
  ArrowRight,
  Stethoscope,
  Sparkles,
  ClipboardList,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import useAnalytics from '@/hooks/useAnalytics';

const indicaciones = [
  { label: 'Enuresis nocturna', description: 'Cuando el niño moja la cama de forma recurrente después de los 5 años.' },
  { label: 'Infecciones urinarias recurrentes (ITU)', description: 'Más de 2 episodios en 6 meses o 3 en un año.' },
  { label: 'Patrón miccional anormal', description: 'Chorro débil, intermitente o esfuerzo al orinar.' },
  { label: 'Disfunción miccional', description: 'Urgencia, frecuencia o incontinencia diurna.' },
  { label: 'Vejiga neurogénica pediátrica', description: 'Alteración del control vesical por causas neurológicas.' },
];

const pasos = [
  {
    numero: 1,
    titulo: 'Agendar la Cita',
    descripcion: 'Contáctanos por WhatsApp o formulario. Te asignamos fecha en el Hospital Infantil Privado.',
    icon: Phone,
  },
  {
    numero: 2,
    titulo: 'Preparar al Niño',
    descripcion: 'Explícale que es como orinar en un baño especial. No duele, no se usan agujas ni sondas. Te enviamos una guía sencilla.',
    icon: Heart,
  },
  {
    numero: 3,
    titulo: 'Realizar el Estudio',
    descripcion: 'El niño orina en un equipo adaptado a su talla. Dura 5 a 10 minutos. El EMG se registra con parches adhesivos externos.',
    icon: Activity,
  },
  {
    numero: 4,
    titulo: 'Recibir Resultados',
    descripcion: 'Reporte con interpretación pediátrica especializada en 24 a 48 horas, enviado directamente a su médico tratante.',
    icon: FileText,
  },
];

const diferenciadores = [
  { icon: Baby, titulo: 'Equipo Adaptado para Niños', descripcion: 'Flujómetro pediátrico calibrado para volúmenes pequeños con EMG integrado.' },
  { icon: Shield, titulo: 'Completamente No Invasivo', descripcion: 'Sin sondas, sin agujas, sin dolor. Solo parches adhesivos externos y orinar naturalmente.' },
  { icon: Stethoscope, titulo: 'Personal Capacitado en Pediatría', descripcion: 'Técnicos biomédicos con experiencia en manejo de pacientes pediátricos.' },
  { icon: Sparkles, titulo: 'Único en CDMX', descripcion: 'Único servicio especializado en urodinamia pediátrica en la Ciudad de México.' },
];

const LpUroflujometriaPediatrica = () => {
  const { trackEvent, trackLead } = useAnalytics();

  const handleAgendarClick = (source) => {
    trackEvent('cta_click', {
      cta_name: `agendar_uroflujometria_ped_${source}`,
      destination: '/contacto?service=agendar-uroflujometria-ped',
    });
  };

  const handleWhatsAppClick = (source) => {
    trackLead('paciente', 'whatsapp', {
      source: `lp_uroflujometria_ped_${source}`,
      service: 'uroflujometria-pediatrica',
    });
    window.open(
      'https://wa.me/5215535055983?text=' + encodeURIComponent('Hola, me gustaría agendar una Uroflujometría Pediátrica con EMG para mi hijo/a.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <Helmet>
        <title>Uroflujometría Pediátrica + EMG | Urologik — Diagnóstico Especializado para Niños</title>
        <meta
          name="description"
          content="Uroflujometría pediátrica con EMG integrado en CDMX. Estudio no invasivo, sin dolor, adaptado para niños. Hospital Infantil Privado Star Médica. $3,500 MXN."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              <Baby className="inline h-4 w-4 mr-1 -mt-0.5" />
              Pediátrico
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Diagnóstico Especializado para Niños{' '}
              <span className="text-primary">— No Invasivo</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              La uroflujometría pediátrica con EMG es un estudio <strong>sin dolor, sin sondas y sin agujas</strong>.
              Tu hijo solo necesita orinar de forma natural en un equipo especial. Es rápido, seguro y diseñado pensando en la comodidad del niño.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto?service=agendar-uroflujometria-ped" onClick={() => handleAgendarClick('hero')}>
                <Button size="lg" className="w-full sm:w-auto">
                  Agendar en Hospital Infantil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => handleWhatsAppClick('hero')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Qué Incluye */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">¿Qué Incluye el Estudio?</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Dos estudios en uno: uroflujometría + electromiografía perineal, ambos completamente no invasivos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="medical-card border-2 border-primary/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Activity className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-3">Uroflujometría Pediátrica</CardTitle>
                  <CardDescription>Medición del flujo urinario</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      El niño orina de forma natural en un equipo adaptado a su talla
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      Mide flujo máximo (Qmax), volumen y patrón de vaciado
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      Duración: 5 a 10 minutos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card border-2 border-primary/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-3">EMG Perineal No Invasivo</CardTitle>
                  <CardDescription>Electromiografía del piso pélvico</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      Se colocan parches adhesivos externos (como calcomanías) en la zona perineal
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      Registra la actividad muscular durante la micción
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      Detecta disinergia vesicoesfinteriana
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Indicaciones Clínicas */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">¿Cuándo Está Indicado Este Estudio?</h2>
              <p className="mt-3 text-muted-foreground">
                Tu uropediatra puede solicitar este estudio si tu hijo presenta:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {indicaciones.map((item) => (
                <Card key={item.label} className="medical-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{item.description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Precio y Sede */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="medical-card text-center border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-muted-foreground">Precio del Estudio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl md:text-5xl font-extrabold text-primary">$3,500</p>
                  <p className="text-muted-foreground mt-1">MXN — Todo incluido</p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-1 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      Uroflujometría + EMG integrado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      Reporte con interpretación pediátrica
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      Factura disponible (CFDI 4.0)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg mt-3">Sede del Estudio</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p className="font-semibold text-foreground text-base">Star Médica Hospital Infantil Privado</p>
                  <p className="mt-2">Consultorio 406</p>
                  <p>C. Nueva York 7, Nápoles</p>
                  <p>Benito Juárez, 03810 CDMX</p>
                  <div className="mt-4">
                    <a
                      href="https://maps.app.goo.gl/Vd8Jtx1gCUFWKJzj8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-sm hover:text-primary/80"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diferenciadores */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">¿Por Qué Elegir Urologik para Tu Hijo?</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Somos el único servicio especializado en urodinamia pediátrica en la Ciudad de México,
                con equipo y personal dedicado exclusivamente al diagnóstico urológico infantil.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciadores.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.titulo} className="medical-card text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-base mt-3">{item.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">{item.descripcion}</CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">¿Cómo Es el Proceso?</h2>
              <p className="mt-3 text-muted-foreground">Cuatro pasos sencillos, pensados para la tranquilidad de los papás y la comodidad del niño.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pasos.map((paso) => {
                const Icon = paso.icon;
                return (
                  <Card key={paso.numero} className="medical-card">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Paso {paso.numero}</p>
                        <CardTitle className="text-lg">{paso.titulo}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">{paso.descripcion}</CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sección para Padres */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="h-7 w-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Un Mensaje para los Papás</h2>
            </div>
            <Card className="medical-card border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 space-y-4 text-muted-foreground">
                <p>
                  Sabemos que llevar a tu hijo a un estudio médico puede generar preocupación. Por eso queremos que sepas
                  que la uroflujometría pediátrica <strong className="text-foreground">no causa ningún dolor ni molestia</strong>.
                </p>
                <p>
                  El niño simplemente orina de forma natural en un equipo especial, como si fuera un baño normal.
                  Los parches del EMG son adhesivos externos — similares a una calcomanía — que se colocan y retiran sin dolor.
                </p>
                <p>
                  Nuestro equipo técnico tiene experiencia en el trato con pacientes pediátricos y se toma el tiempo necesario
                  para que el niño se sienta cómodo y seguro durante todo el estudio.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Sin sondas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Sin agujas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Sin dolor</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span>5 a 10 minutos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Agenda el Estudio de Tu Hijo</h2>
            <p className="mt-4 text-muted-foreground">
              Disponible en Star Médica Hospital Infantil Privado, CDMX. Resultados en 24 a 48 horas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto?service=agendar-uroflujometria-ped" onClick={() => handleAgendarClick('footer_cta')}>
                <Button size="lg" className="w-full sm:w-auto">
                  Agendar en Hospital Infantil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => handleWhatsAppClick('footer')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LpUroflujometriaPediatrica;
