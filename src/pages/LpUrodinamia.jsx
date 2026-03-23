import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Stethoscope, CheckCircle, Activity, Clock, FileText,
  MessageCircle, Phone, Users, ArrowRight, Shield,
  Calendar, ClipboardList, BarChart3, XCircle
} from 'lucide-react';
import useAnalytics from '@/hooks/useAnalytics';

const channels = [
  {
    title: 'Presión Abdominal',
    description: 'Mide la presión intraabdominal mediante un catéter rectal. Permite aislar la actividad del detrusor eliminando artefactos por tos, esfuerzo o movimiento.',
    icon: Activity,
  },
  {
    title: 'Presión Vesical (Detrusor)',
    description: 'Registra la presión dentro de la vejiga a través de un catéter uretral. Evalúa la contractilidad del músculo detrusor durante el llenado y la micción.',
    icon: BarChart3,
  },
  {
    title: 'Presión Uretral',
    description: 'Mide el perfil de presión a lo largo de la uretra. Identifica obstrucciones, incompetencia esfinteriana y zonas de resistencia anormal.',
    icon: Stethoscope,
  },
];

const indicaciones = [
  'Vejiga neurogénica (lesión medular, esclerosis múltiple, Parkinson)',
  'Disfunción miccional compleja sin diagnóstico claro',
  'Incontinencia urinaria mixta (esfuerzo + urgencia)',
  'Evaluación pre-quirúrgica de mesh, sling o esfínter artificial',
  'Fracaso de tratamientos previos (farmacológicos o quirúrgicos)',
];

const pasos = [
  { titulo: 'Agendar', desc: 'Contacta por WhatsApp o formulario para elegir fecha y sede.', icon: Calendar },
  { titulo: 'Preparación', desc: 'Te enviamos instrucciones claras previas al estudio.', icon: ClipboardList },
  { titulo: 'Estudio (45-60 min)', desc: 'Realizado por técnico biomédico certificado con equipo de última generación.', icon: Activity },
  { titulo: 'Análisis', desc: 'Nuestro equipo interpreta las curvas y parámetros urodinámicos.', icon: BarChart3 },
  { titulo: 'Reporte (24-48h)', desc: 'Tu médico recibe un reporte detallado con gráficas y conclusiones clínicas.', icon: FileText },
];

const comparativa = [
  { aspecto: 'Costo', urologik: '$12,927 MXN todo incluido', hospital: '$20,000+ MXN' },
  { aspecto: 'Tiempo de espera', urologik: 'Agenda inmediata', hospital: 'Semanas o meses' },
  { aspecto: 'Atención', urologik: 'Personalizada, 1 a 1', hospital: 'Masiva, turnos' },
  { aspecto: 'Reporte de resultados', urologik: '24-48 horas', hospital: 'Semanas' },
];

const WHATSAPP_URL = 'https://wa.me/5215512345678?text=Hola%2C%20quiero%20agendar%20una%20urodinamia%20multicanal';

const LpUrodinamia = () => {
  const { trackEvent, trackLead } = useAnalytics();

  const handleCTAClick = (ctaName) => {
    trackEvent('cta_click', { cta_name: ctaName, destination: '/contacto?service=agendar-urodinamia' });
  };

  const handleWhatsAppClick = () => {
    trackLead('paciente', 'whatsapp', { service: 'urodinamia_multicanal' });
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Urodinamia Multicanal | Urologik — Evaluación Completa del Tracto Urinario Inferior</title>
        <meta name="description" content="Estudio de urodinamia multicanal en CDMX. Evaluación completa del tracto urinario inferior con 3 canales: abdominal, vesical y uretral. Desde $12,927 MXN." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Activity className="h-4 w-4" />
            Estudio Diagnóstico Especializado
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Evaluación Completa del Tracto Urinario Inferior
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            La urodinamia multicanal registra simultáneamente la presión en <strong>3 canales — abdominal, vesical y uretral</strong> — para un diagnóstico funcional preciso de la vía urinaria baja.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?service=agendar-urodinamia" onClick={() => handleCTAClick('hero_agendar')}>
              <Button size="lg" className="w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" /> Agendar Urodinamia
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Qué Mide */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">¿Qué Mide la Urodinamia Multicanal?</h2>
            <p className="mt-2 text-lg text-muted-foreground">Tres canales de presión simultáneos para un diagnóstico integral.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((ch, i) => (
              <Card key={i} className="medical-card text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
                    <ch.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{ch.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{ch.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Indicaciones Clínicas */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Indicaciones Clínicas</h2>
            <p className="mt-2 text-lg text-muted-foreground">¿Cuándo se solicita una urodinamia multicanal?</p>
          </div>
          <div className="space-y-4">
            {indicaciones.map((ind, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 shrink-0" />
                <p className="text-foreground">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-muted">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">Precio Todo Incluido</h2>
          <p className="text-5xl md:text-6xl font-bold text-primary mt-6">$12,927 <span className="text-2xl">MXN</span></p>
          <div className="mt-6 space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Estudio completo multicanal</p>
            <p className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Reporte detallado con gráficas</p>
            <p className="flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Consulta de resultados con especialista</p>
          </div>
          <Link to="/contacto?service=agendar-urodinamia" onClick={() => handleCTAClick('precio_agendar')}>
            <Button size="lg" className="mt-8">
              Agendar Ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Proceso Paso a Paso</h2>
            <p className="mt-2 text-lg text-muted-foreground">De la agenda al reporte en 5 pasos simples.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pasos.map((paso, i) => (
              <Card key={i} className="medical-card text-center relative">
                <CardHeader>
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">{i + 1}</div>
                  <div className="mx-auto bg-primary/10 rounded-full h-14 w-14 flex items-center justify-center">
                    <paso.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="mt-3 text-base">{paso.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{paso.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Urologik vs. Hospital Tradicional</h2>
          <Card className="overflow-hidden max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="p-4 font-semibold text-sm">Aspecto</th>
                    <th className="p-4 font-semibold text-center text-sm text-primary">UROLOGIK</th>
                    <th className="p-4 font-semibold text-center text-sm">HOSPITAL</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map((row, i) => (
                    <tr key={i} className="border-t dark:bg-gray-800/50">
                      <td className="p-4 font-medium">{row.aspecto}</td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">{row.urologik}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-muted-foreground text-sm">{row.hospital}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Para Médicos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Users className="h-4 w-4" /> Para Médicos
              </div>
              <h2 className="text-3xl font-bold mb-4">Refiera a Sus Pacientes</h2>
              <p className="text-muted-foreground mb-6">
                Ofrezca a sus pacientes acceso a urodinamia multicanal con equipo de última generación, reportes detallados y tiempos de entrega competitivos.
              </p>
              <ul className="space-y-3">
                {[
                  'Reporte digital en 24-48 horas',
                  'Coordinación directa con su consultorio',
                  'Agenda prioritaria para sus pacientes',
                  'Sin costo ni compromiso para el médico',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/para-medicos">
                <Button variant="outline" className="mt-6">
                  Conocer el Programa para Médicos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card className="medical-card p-8 bg-gradient-to-br from-primary/5 to-muted">
              <div className="text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Línea Directa para Médicos</h3>
                <p className="text-muted-foreground mb-4">Atención prioritaria para referencias y coordinación de estudios.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                  <Button className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" /> Contactar por WhatsApp
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Agenda Tu Urodinamia Multicanal</h2>
          <p className="mt-4 text-lg opacity-90">
            Obtén un diagnóstico funcional completo de tu vía urinaria baja. Equipo de última generación, atención personalizada y resultados en 24-48 horas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?service=agendar-urodinamia" onClick={() => handleCTAClick('footer_agendar')}>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" /> Agendar Cita
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Directo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LpUrodinamia;
