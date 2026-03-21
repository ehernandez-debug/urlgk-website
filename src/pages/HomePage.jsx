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
  ChevronRight
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
      title: 'Torre de Urología Stryker 1588/1688',
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
      priority: 'Prioridad #1',
      priorityColor: 'bg-primary text-white',
      desc: 'Accede a equipo de alta especialidad sin inversión CAPEX. Reduce costos operativos y elimina la obsolescencia tecnológica.',
      cta: 'Solicitar Cotización Institucional',
      ctaHref: '/contacto?service=cotizacion-equipo',
      ctaStyle: 'cta-button',
      items: ['Láser de Holmio', 'Torre de Urología', 'Cistoscopios y lentes', 'Torre de Laparoscopia']
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      title: 'Médicos Urólogos',
      priority: 'Prioridad #2',
      priorityColor: 'bg-secondary text-secondary-foreground',
      desc: 'Amplía tu oferta de servicios con equipo de vanguardia. Modelo de colaboración progresiva con ingresos garantizados.',
      cta: 'Conocer Programa de Colaboración',
      ctaHref: '/para-medicos',
      ctaStyle: 'variant-outline',
      items: ['Estudios de urodinamia', 'Acceso a equipo de renta', 'Modelo de participación progresiva', 'Ingresos por colaboración']
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Pacientes',
      priority: 'Prioridad #3',
      priorityColor: 'bg-muted text-muted-foreground',
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
        <title>Urologik | Infraestructura Tecnológica Urológica para Hospitales y Médicos</title>
        <meta name="description" content="Renta de equipo médico urológico de alta especialidad en CDMX: Láser de Holmio Lumenis, Torre Stryker, cistoscopios. Sin inversión CAPEX, soporte técnico incluido. Proveedor certificado para hospitales." />
        <meta name="keywords" content="renta equipo urológico, láser holmio CDMX, torre urología Stryker, cistoscopio renta, equipo médico urología México" />
      </Helmet>

      <div className="min-h-screen">

        {/* HERO B2B PRINCIPAL */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Infraestructura Tecnológica para Hospitales y Médicos
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Tecnología Urológica de Punta.{' '}
                  <span className="text-primary">Sin Inversión CAPEX.</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Proveemos infraestructura tecnológica integral a hospitales y médicos: renta de equipo médico de alta especialidad con soporte técnico completo en CDMX.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Láser de Holmio Lumenis',
                    'Torre Stryker 1588/1688',
                    'Cistoscopios y lentes',
                    'Técnico biomédico in-situ'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    to="/contacto?service=cotizacion-equipo"
                    onClick={() => trackEvent('cta_click', { cta_type: 'solicitar_cotizacion', source: 'hero' })}
                  >
                    <Button size="lg" className="cta-button text-base px-8 py-4 w-full sm:w-auto">
                      <Building2 className="h-5 w-5 mr-2" />
                      Solicitar Cotización Institucional
                    </Button>
                  </Link>
                  <Link
                    to="/renta/laser-holmio-lumenis"
                    onClick={() => trackEvent('cta_click', { cta_type: 'ver_equipos', source: 'hero' })}
                  >
                    <Button size="lg" variant="outline" className="text-base px-8 py-4 w-full sm:w-auto">
                      Ver Equipos Disponibles
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                  <button
                    onClick={() => {
                      trackLead('hospital', 'whatsapp', { source: 'hero' })
                      window.open('https://wa.me/5215535055983?text=Hola%2C%20me%20interesa%20renta%20de%20equipo%20urologico', '_blank', 'noopener,noreferrer')
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

              <div className="relative">
                <div className="medical-card p-8 bg-gradient-to-br from-white to-primary/5 space-y-6">
                  <h3 className="text-xl font-bold text-foreground">
                    ¿Por qué elegir Urologik?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '80-85%', label: 'Margen en renta de equipo', color: 'text-primary' },
                      { value: '2-3', label: 'Procedimientos mínimos para rentabilidad', color: 'text-accent' },
                      { value: '100%', label: 'Soporte técnico incluido', color: 'text-primary' },
                      { value: '24h', label: 'Entrega en CDMX y área metro', color: 'text-accent' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Proveedor certificado · Cumplimiento COFEPRIS · CDMX y área metropolitana
                    </p>
                  </div>
                </div>
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

        {/* PROPUESTA DE VALOR */}
        <section className="py-16 bg-muted/30">
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
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${aud.priorityColor}`}>
                        {aud.priority}
                      </span>
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

        {/* CTA FINAL B2B */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Listo para acceder a tecnología de punta sin inversión?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos hoy y recibe una cotización personalizada para tu hospital o consulta. Respuesta en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto?service=cotizacion-equipo"
                onClick={() => trackEvent('cta_click', { cta_type: 'solicitar_cotizacion', source: 'cta_final' })}
              >
                <Button size="lg" variant="secondary" className="text-base px-8 py-4">
                  <Building2 className="h-5 w-5 mr-2" />
                  Solicitar Cotización
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  trackLead('hospital', 'whatsapp', { source: 'cta_final' })
                  window.open('https://wa.me/5215535055983?text=Hola%2C%20me%20interesa%20renta%20de%20equipo%20urologico', '_blank', 'noopener,noreferrer')
                }}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default HomePage
