import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Clock, CheckCircle, ArrowRight, FileText, Award, MessageCircle, Info, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { getAgendarUrl, getWhatsAppUrl } from '@/lib/cta';
import { servicesData } from '@/lib/servicios-data.jsx';
import IndicacionesPorPatologia from '@/components/IndicacionesPorPatologia';

const ServicioPage = () => {
  const { especialidad, serviceSlug } = useParams();
  const location = useLocation();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (link.parentNode) document.head.removeChild(link);
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const service = servicesData[especialidad]?.[serviceSlug];

  const handleCtaClick = (cta, locationName) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cta_click',
        cta: cta,
        service: serviceSlug,
        location: locationName,
      });
    }
  };

  const testimonials = [
    {
        name: "Juan P.",
        text: "El estudio fue rápido y el personal muy profesional. Me sentí cómodo en todo momento.",
        study: "Uroflujometría"
    },
    {
        name: "Ana G.",
        text: "Tenía miedo pero fue indoloro. La tecnología es de primera. ¡Gracias Urologik!",
        study: "Urodinamia Completa"
    },
    {
        name: "Luis R.",
        text: "La atención es excelente, resolvieron todas mis dudas y el diagnóstico fue certero.",
        study: "Consulta + Estudio"
    }
  ];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-destructive mb-4">Servicio no encontrado</h1>
          <p className="text-muted-foreground mb-8">El servicio que buscas no existe o ha sido movido.</p>
          <Button asChild>
            <Link to="/servicios">Volver a Servicios</Link>
          </Button>
        </div>
      </div>
    );
  }

  const pediatriaCalendlySlugs = ['urodinamia-multicanal', 'urodinamia-emg-upp', 'uroflujometria-pediatrica-emg'];
  const adultosCalendlySlugs = ['uroflujometria-basica', 'uroflujometria-ultrasonido', 'uroflujometria-interpretacion'];

  const isCalendlyService = 
    (especialidad === 'pediatria' && pediatriaCalendlySlugs.includes(serviceSlug)) ||
    (especialidad === 'adultos' && adultosCalendlySlugs.includes(serviceSlug));

  const getCalendlyUrl = () => {
    if (especialidad === 'pediatria') {
      return 'https://calendly.com/urologik/30min?hide_gdpr_banner=1';
    }
    if (especialidad === 'adultos') {
      return 'https://calendly.com/urologik/cita-colonia-del-valle?hide_gdpr_banner=1';
    }
    return getAgendarUrl(serviceSlug, location.search); // Fallback
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.description,
    performer: {
      '@type': 'MedicalBusiness',
      name: 'UROLOGIK',
    },
    procedureType: especialidad === 'pediatria' ? 'Pediatric' : 'Adult',
  };

  if (service.precio) {
    jsonLd.offers = {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      price: service.precio.replace(/[^0-9.]/g, ''),
    };
  }

  const especialidadTitle = especialidad.charAt(0).toUpperCase() + especialidad.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${service.title} - ${especialidadTitle} | UROLOGIK`}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://urologik.com/servicios/${especialidad}/${serviceSlug}`} />
        <meta property="og:title" content={`${service.title} - ${especialidadTitle} | UROLOGIK`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={`https://urologik.com/servicios/${especialidad}/${serviceSlug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Inicio</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/servicios">Servicios</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to={`/servicios/${especialidad}`}>{especialidadTitle}</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><span className="text-foreground font-medium">{service.title}</span></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-primary font-semibold mb-2">{especialidadTitle}</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">{service.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">{service.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {isCalendlyService ? (
                  <Button size="lg" onClick={() => {
                    handleCtaClick('agendar', 'hero');
                    window.Calendly.initPopupWidget({ url: getCalendlyUrl() });
                  }}>
                    <ArrowRight className="h-5 w-5 mr-2" /> Agendar Estudio
                  </Button>
                ) : (
                  <Button size="lg" asChild>
                    <Link to={getAgendarUrl(serviceSlug, location.search)} onClick={() => handleCtaClick('agendar', 'hero')}>
                      <ArrowRight className="h-5 w-5 mr-2" /> Agendar Estudio
                    </Link>
                  </Button>
                )}
                <Button size="lg" variant="outline" asChild>
                  <a href={getWhatsAppUrl(serviceSlug)} target="_blank" rel="noopener noreferrer" onClick={() => handleCtaClick('whatsapp', 'hero')}>
                    <MessageCircle className="h-5 w-5 mr-2" /> Contactar
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="p-6 bg-primary/10 rounded-full">{service.icon}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {especialidad === 'pediatria' && (
              <Alert className="border-blue-500 bg-blue-50 text-blue-800">
                <Info className="h-5 w-5 text-blue-500" />
                <AlertTitle className="font-bold">Enfoque Pediátrico Especializado</AlertTitle>
                <AlertDescription>
                  Todos nuestros estudios pediátricos se realizan con equipos de tamaño adecuado para niños, tubos de menor calibre y protocolos diseñados para su seguridad y comodidad. Nuestro personal está altamente entrenado para atender a los más pequeños.
                </AlertDescription>
              </Alert>
            )}

            <Card><CardHeader><CardTitle className="text-2xl">Descripción del Estudio</CardTitle></CardHeader><CardContent><p className="text-muted-foreground leading-relaxed">{service.description}</p></CardContent></Card>

            <Card><CardHeader><CardTitle className="text-2xl">Proceso del Estudio: Paso a Paso</CardTitle></CardHeader><CardContent><div className="space-y-4">{service.proceso.map((paso, index) => (<div key={index} className="flex items-start space-x-4"><div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div><p className="text-foreground font-semibold text-base pt-2">{paso}</p></div>))}</div></CardContent></Card>

            <Card><CardHeader><CardTitle className="text-2xl">¿Cuándo se recomienda?</CardTitle><CardDescription>Este estudio es clave en las siguientes situaciones:</CardDescription></CardHeader><CardContent><ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">{service.indicaciones.map((indicacion, index) => (<li key={index} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-base text-muted-foreground">{indicacion}</span></li>))}</ul></CardContent></Card>

            <IndicacionesPorPatologia especialidad={especialidad} />

            <Card><CardHeader><CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle></CardHeader><CardContent><Accordion type="single" collapsible className="w-full">{service.faq.map((item, index) => (<AccordionItem value={`item-${index}`} key={index}><AccordionTrigger className="text-base font-semibold text-left">{item.question}</AccordionTrigger><AccordionContent className="text-base text-muted-foreground leading-relaxed">{item.answer}</AccordionContent></AccordionItem>))}</Accordion></CardContent></Card>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 self-start">
            <Card className="shadow-lg border-primary/20">
              {service.precio && (
                <CardHeader className="text-center"><p className="text-sm font-medium text-muted-foreground">Precio</p><p className="text-4xl font-bold text-primary">{service.precio}</p></CardHeader>
              )}
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3"><Clock className="h-6 w-6 text-primary/80" /><p><span className="font-semibold">Duración:</span> <span className="text-muted-foreground">{service.duracion}</span></p></div>
                  <div className="flex items-center space-x-3"><FileText className="h-6 w-6 text-primary/80" /><p><span className="font-semibold">Preparación:</span> <span className="text-muted-foreground">{service.preparacion}</span></p></div>
                </div>
                {isCalendlyService ? (
                  <Button size="lg" className="w-full text-base" onClick={() => {
                    handleCtaClick('agendar', 'sidebar');
                    window.Calendly.initPopupWidget({ url: getCalendlyUrl() });
                  }}>
                    Agendar Estudio
                  </Button>
                ) : (
                  <Button size="lg" className="w-full text-base" asChild>
                    <Link to={getAgendarUrl(serviceSlug, location.search)} onClick={() => handleCtaClick('agendar', 'sidebar')}>
                      Agendar Estudio
                    </Link>
                  </Button>
                )}
                <Button size="lg" variant="outline" className="w-full text-base" asChild><a href={getWhatsAppUrl(serviceSlug)} target="_blank" rel="noopener noreferrer" onClick={() => handleCtaClick('whatsapp', 'sidebar')}><MessageCircle className="h-5 w-5 mr-2" /> Contactar por WhatsApp</a></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>Nuestros Pacientes Opinan</CardTitle>
                    <div className="flex items-center">
                        <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => <Star key={i} fill="currentColor" />)}
                            <Star />
                        </div>
                        <p className="ml-2 text-sm text-muted-foreground">4.8/5 de 127 reseñas verificadas</p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {testimonials.map(t => (
                        <div key={t.name} className="p-3 bg-gray-100 rounded-lg">
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-sm italic">"{t.text}"</p>
                            <Badge variant="secondary" className="mt-1">{t.study}</Badge>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card><CardHeader><CardTitle className="text-xl">Beneficios Clave</CardTitle></CardHeader><CardContent><ul className="space-y-3">{service.ventajas.map((ventaja, index) => (<li key={index} className="flex items-start space-x-3"><Award className="h-5 w-5 text-primary mt-0.5" /><span className="text-base text-muted-foreground">{ventaja}</span></li>))}</ul></CardContent></Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicioPage;
