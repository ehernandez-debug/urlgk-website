import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Building2,
  Stethoscope,
  Users,
  CheckCircle,
  ArrowRight,
  Wrench,
  TrendingUp,
  Shield,
  Zap,
  Phone,
  MessageCircle,
  ChevronRight,
  Activity,
  Baby,
  MonitorPlay,
  Cpu,
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import useAnalytics from '@/hooks/useAnalytics'

const HomePage = () => {
  const { trackEvent, trackLead } = useAnalytics()

  const equiposRenta = [
    {
      title: 'Láser de Holmio Lumenis Pulse 100H',
      subtitle: 'Litotripsia, ablación y enucleación prostática',
      href: '/renta/laser-holmio-lumenis',
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: ['Potencia hasta 100W', 'Fibras incluidas', 'Técnico biomédico in-situ'],
      badge: 'Alta Demanda',
      badgeColor: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'Torre de Urología',
      subtitle: 'Video-endoscopia HD para diagnóstico y cirugía',
      href: '/renta/torre-urologia-stryker',
      icon: <Building2 className="h-8 w-8 text-primary" />,
      features: ['Sistema completo HD', 'Cistoscopios incluidos', 'Soporte técnico integral'],
      badge: 'Más Solicitado',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Instrumental y Consumibles',
      subtitle: 'Catéteres Albyn/Mediplus y accesorios urológicos',
      href: '/renta/instrumental-y-consumibles',
      icon: <Wrench className="h-8 w-8 text-primary" />,
      features: ['Catéteres de alta calidad', 'Entrega en hospital', 'Stock garantizado'],
      badge: 'Disponible 24h',
      badgeColor: 'bg-green-100 text-green-700'
    },
  ]

  const estudios = [
    {
      title: 'Uroflujometría',
      subtitle: 'Diagnóstico no invasivo del flujo urinario',
      href: '/estudios/uroflujometria',
      icon: <Activity className="h-8 w-8 text-primary" />,
      precio: 'Desde $2,260 MXN',
      badge: 'No Invasivo',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Urodinamia Multicanal',
      subtitle: 'Evaluación completa del tracto urinario inferior',
      href: '/estudios/urodinamia-multicanal',
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      precio: '$12,927 MXN',
      badge: 'Estudio Completo',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Videourodinamia',
      subtitle: 'Visualización en tiempo real de la función vesical',
      href: '/estudios/videourodinamia',
      icon: <MonitorPlay className="h-8 w-8 text-primary" />,
      precio: 'Desde $24,943 MXN',
      badge: 'Gold Standard',
      badgeColor: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Uroflujometría Pediátrica + EMG',
      subtitle: 'Diagnóstico especializado para niños — no invasivo',
      href: '/estudios/uroflujometria-pediatrica',
      icon: <Baby className="h-8 w-8 text-primary" />,
      precio: '$3,500 MXN',
      badge: 'Pediátrico',
      badgeColor: 'bg-pink-100 text-pink-700'
    },
  ]

  const propuestaValor = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: 'Sin Inversión CAPEX',
      desc: 'Accede a tecnología de última generación sin comprar ni depreciar equipo. Paga solo por procedimiento.'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Soporte Técnico Incluido',
      desc: 'Ingeniero biomédico presente en cada procedimiento. Mantenimiento preventivo y correctivo sin costo adicional.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Logística Completa CDMX',
      desc: 'Entrega, instalación y recolección en tu hospital. Cobertura en toda la CDMX y área metropolitana.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Proveedor Certificado',
      desc: 'Alta como proveedor en hospitales públicos y privados. Cumplimiento COFEPRIS y normativas vigentes.'
    },
  ]

  const audiencias = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: 'Hospitales e Instituciones',
      desc: 'Accede a equipo de alta especialidad sin inversión CAPEX. Reduce costos operativos y elimina la obsolescencia tecnológica.',
      cta: 'Solicitar Cotización Institucional',
      ctaHref: '/contacto?service=cotizacion-equipo',
      ctaStyle: 'cta-button',
      items: ['Láser de Holmio', 'Torre de Urología', 'Cistoscopios y lentes', 'Torre de Laparoscopia']
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      title: 'Médicos Urólogos',
      desc: 'Amplía tu oferta con equipo de vanguardia y estudios de urodinamia. Modelo de colaboración progresiva con ingresos garantizados.',
      cta: 'Conocer Programa de Colaboración',
      ctaHref: '/para-medicos',
      ctaStyle: 'variant-outline',
      items: ['Acceso a equipo de renta', 'Estudios de urodinamia', 'Modelo de participación progresiva', 'Referir pacientes a estudios']
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Pacientes',
      desc: 'Estudios de urodinamia especializados en CDMX. Atención personalizada, reportes en 24-48h y tecnología de punta.',
      cta: 'Agendar Estudio',
      ctaHref: '/para-pacientes',
      ctaStyle: 'variant-outline',
      items: ['Uroflujometría', 'Urodinamia multicanal', 'Videourodinamia', 'Atención pediátrica']
    },
  ]

  return (
    <>
      <Helmet>
        <title>Urologik | Infraestructura Tecnológica Urológica Integral</title>
        <meta name="description" content="Equipo médico urológico de alta especialidad + Diagnóstico urodinámico de vanguardia en CDMX. Renta de Láser de Holmio, Torre de Urología. Uroflujometría, urodinamia, videourodinamia. Sin inversión CAPEX." />
        <meta name="keywords" content="renta equipo urológico, láser holmio CDMX, torre urología, uroflujometría, urodinamia, videourodinamia, uroflujometría pediátrica, diagnóstico urológico México" />
      </Helmet>

      <div className="min-h-screen">

        {/* HERO DUAL */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Infraestructura Tecnológica Urológica Integral
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Equipo Médico de Alta Especialidad +{' '}
                <span className="text-primary">Diagnóstico Urodinámico de Vanguardia</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Dos líneas de negocio integradas para hospitales, médicos y pacientes en CDMX. Tecnología de punta sin inversión CAPEX y estudios diagnósticos especializados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/renta/laser-holmio-lumenis"
                  onClick={() => trackEvent('cta_click', { cta_type: 'equipo_medico', source: 'hero_dual' })}
                >
                  <Button size="lg" className="cta-button text-base px-8 py-4 w-full sm:w-auto">
                    <Building2 className="h-5 w-5 mr-2" />
                    Equipo Médico
                  </Button>
                </Link>
                <Link
                  to="/estudios/uroflujometria"
                  onClick={() => trackEvent('cta_click', { cta_type: 'estudios_diagnosticos', source: 'hero_dual' })}
                >
                  <Button size="lg" variant="outline" className="text-base px-8 py-4 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white">
                    <Stethoscope className="h-5 w-5 mr-2" />
                    Estudios Diagnósticos
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 justify-center pt-2 text-sm text-muted-foreground">
                <button
                  onClick={() => {
                    trackLead('general', 'whatsapp', { source: 'hero' })
                    window.open('https://wa.me/5215535055983?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Urologik', '_blank', 'noopener,noreferrer')
                  }}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp directo
                </button>
                <span>·</span>
                <a href="tel:5535055983" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  55-35-05-59-83
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPOS DISPONIBLES */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Renta de Equipo Médico</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Equipos Disponibles para Renta
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tecnología de alta especialidad urológica con soporte técnico completo. Disponible en hospitales de CDMX y área metropolitana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {equiposRenta.map((equipo) => (
                <Card key={equipo.href} className="medical-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {equipo.icon}
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${equipo.badgeColor}`}>
                        {equipo.badge}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight">{equipo.title}</CardTitle>
                    <CardDescription className="text-sm">{equipo.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {equipo.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={equipo.href}
                      onClick={() => trackEvent('cta_click', { cta_type: 'ver_equipo', source: 'home_equipos' })}
                      className="block"
                    >
                      <Button className="w-full" variant="outline">
                        Ver detalles y cotizar
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/contacto?service=cotizacion-equipo">
                <Button size="lg" className="cta-button text-base px-10">
                  <Building2 className="h-5 w-5 mr-2" />
                  Solicitar Cotización Institucional
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ESTUDIOS DIAGNÓSTICOS */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Stethoscope className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Diagnóstico Urológico</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Estudios Diagnósticos Especializados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Urodinamia y uroflujometría con tecnología de vanguardia. Atención para adultos y niños en CDMX.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {estudios.map((estudio) => (
                <Card key={estudio.href} className="medical-card hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {estudio.icon}
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${estudio.badgeColor}`}>
                        {estudio.badge}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{estudio.title}</CardTitle>
                    <CardDescription className="text-sm">{estudio.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-bold text-primary">{estudio.precio}</p>
                    <Link
                      to={estudio.href}
                      onClick={() => trackEvent('cta_click', { cta_type: 'ver_estudio', source: 'home_estudios' })}
                      className="block"
                    >
                      <Button className="w-full" variant="outline">
                        Ver detalles
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/para-pacientes">
                <Button size="lg" variant="outline" className="text-base px-10 border-primary text-primary hover:bg-primary hover:text-white">
                  <Stethoscope className="h-5 w-5 mr-2" />
                  Agendar Estudio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                El Modelo que Elimina el CAPEX
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accede a tecnología de punta sin las cargas de propiedad. Nosotros gestionamos el equipo; tú te enfocas en los procedimientos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propuestaValor.map((item) => (
                <div key={item.title} className="medical-card p-6 text-center space-y-3">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER INNOVACIÓN */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Innovación</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Desarrollando el Futuro del Diagnóstico Urológico
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estamos desarrollando un uroflujómetro portátil con inteligencia artificial: dispositivo ESP32 con celda de carga, transmisión WiFi a la nube y análisis automatizado. La renta de equipo financia la innovación; la innovación diferencia la renta.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Uroflujómetro portátil con IA',
                    'Transmisión WiFi a cloud',
                    'Validaciones clínicas en curso',
                    'Uropediatría y uroginecología'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/tecnologia"
                  onClick={() => trackEvent('cta_click', { cta_type: 'ver_tecnologia', source: 'home_innovacion' })}
                >
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Cpu className="h-5 w-5 mr-2" />
                    Conocer Nuestra Tecnología
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="medical-card p-8 bg-gradient-to-br from-white to-primary/5 space-y-6">
                <h3 className="text-xl font-bold text-foreground">El Modelo Simbiótico</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', label: 'Renta de equipo', desc: 'Genera caja operativa' },
                    { step: '2', label: 'Caja operativa', desc: 'Financia I+D del dispositivo' },
                    { step: '3', label: 'Dispositivo con IA', desc: 'Diferencia la oferta + abre mercado nuevo' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{item.step}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 text-center">
                  <p className="text-sm text-muted-foreground font-medium">
                    Ciclo virtuoso: cada procedimiento financia la innovación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCIAS / PORTALES */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Soluciones para Cada Audiencia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desde hospitales que necesitan equipo hasta pacientes que requieren estudios diagnósticos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {audiencias.map((aud) => (
                <Card key={aud.title} className="medical-card flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {aud.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{aud.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{aud.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <ul className="space-y-1">
                      {aud.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to={aud.ctaHref} onClick={() => trackEvent('cta_click', { cta_type: aud.cta, source: 'home_audiencias' })}>
                      <Button
                        className={`w-full ${aud.ctaStyle === 'cta-button' ? 'cta-button' : ''}`}
                        variant={aud.ctaStyle === 'cta-button' ? 'default' : 'outline'}
                      >
                        {aud.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Infraestructura Urológica Integral
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Equipo médico para hospitales + estudios diagnósticos para pacientes. Contáctanos hoy y recibe respuesta en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto?service=cotizacion-equipo"
                onClick={() => trackEvent('cta_click', { cta_type: 'solicitar_cotizacion', source: 'cta_final' })}
              >
                <Button size="lg" variant="secondary" className="text-base px-8 py-4">
                  <Building2 className="h-5 w-5 mr-2" />
                  Cotizar Equipo
                </Button>
              </Link>
              <Link
                to="/para-pacientes"
                onClick={() => trackEvent('cta_click', { cta_type: 'agendar_estudio', source: 'cta_final' })}
              >
                <Button size="lg" variant="outline" className="text-base px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Stethoscope className="h-5 w-5 mr-2" />
                  Agendar Estudio
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  trackLead('general', 'whatsapp', { source: 'cta_final' })
                  window.open('https://wa.me/5215535055983?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Urologik', '_blank', 'noopener,noreferrer')
                }}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default HomePage
