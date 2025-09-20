import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Stethoscope,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Award,
  Heart,
  Baby,
  Activity,
  Zap,
  Phone,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const servicesData = {
  uroflujometria: {
    title: 'Uroflujometría',
    subtitle: 'Evaluación precisa del flujo urinario',
    icon: <Activity className="h-12 w-12 text-primary" />,
    description: 'Estudio no invasivo que mide la velocidad y volumen del flujo urinario para detectar obstrucciones y evaluar la función vesical.',
    duracion: '10-15 minutos',
    preparacion: 'Vejiga llena',
    precio: 'Desde $1,500 MXN',
    indicaciones: [
      'Dificultad para orinar',
      'Chorro urinario débil',
      'Sensación de vaciado incompleto',
      'Goteo post-miccional',
      'Evaluación prostática',
      'Seguimiento post-cirugía'
    ],
    proceso: [
      'Llegada con vejiga llena',
      'Registro de datos del paciente',
      'Micción en uroflujómetro',
      'Análisis automático de resultados',
      'Interpretación médica',
      'Entrega de reporte'
    ],
    ventajas: [
      'Completamente no invasivo',
      'Resultados inmediatos',
      'Alta precisión diagnóstica',
      'Sin efectos secundarios',
      'Procedimiento rápido',
      'Costo accesible'
    ],
    faq: [
      {
        question: '¿El estudio es doloroso?',
        answer: 'No, la uroflujometría es un estudio completamente no invasivo e indoloro. Solo necesita orinar en un equipo especial.'
      },
      {
        question: '¿Necesito ayuno?',
        answer: 'No se requiere ayuno, pero sí es fundamental llegar con la vejiga llena para asegurar la precisión del estudio.'
      },
      {
        question: '¿Cuánto tardan los resultados?',
        answer: 'Los resultados gráficos se obtienen de inmediato. El reporte con la interpretación médica suele estar listo el mismo día.'
      }
    ]
  },
  urodinamia: {
    title: 'Urodinamia',
    subtitle: 'Estudio integral de la función vesical',
    icon: <Shield className="h-12 w-12 text-primary" />,
    description: 'Evaluación completa de la función de almacenamiento y vaciado de la vejiga mediante medición de presiones y flujos.',
    duracion: '45-60 minutos',
    preparacion: 'Suspender medicamentos específicos',
    precio: 'Desde $2,500 MXN',
    indicaciones: [
      'Incontinencia urinaria',
      'Vejiga hiperactiva',
      'Retención urinaria',
      'Dolor pélvico crónico',
      'Evaluación pre-quirúrgica',
      'Disfunción neurógena'
    ],
    proceso: [
      'Evaluación médica inicial',
      'Colocación de catéteres delgados',
      'Llenado vesical controlado con solución salina',
      'Medición de presiones vesicales y abdominales',
      'Estudio de flujo y presión durante el vaciado',
      'Análisis computarizado e interpretación'
    ],
    ventajas: [
      'Diagnóstico definitivo y preciso',
      'Evaluación objetiva de la función vesical',
      'Guía el tratamiento más adecuado',
      'Realizado por especialistas certificados',
      'Tecnología de última generación',
      'Permite diferenciar tipos de incontinencia'
    ],
    faq: [
      {
        question: '¿La urodinamia es dolorosa?',
        answer: 'Puede generar una ligera molestia por la colocación de los catéteres, pero se utiliza lubricante anestésico y se realiza con el máximo cuidado para minimizar cualquier incomodidad.'
      },
      {
        question: '¿Qué medicamentos debo suspender?',
        answer: 'Su médico le indicará qué medicamentos específicos suspender, usualmente aquellos que afectan la función de la vejiga, varios días antes del estudio.'
      },
      {
        question: '¿Existen riesgos?',
        answer: 'Es un procedimiento muy seguro. El riesgo principal es una infección urinaria, que es muy poco frecuente y se previene con medidas de asepsia.'
      }
    ]
  },
  'renta-de-equipos': {
    title: 'Renta de Equipos',
    subtitle: 'Equipos especializados para profesionales de la salud',
    icon: <Users className="h-12 w-12 text-primary" />,
    description: 'Servicio de renta de equipos urológicos de última generación para médicos y clínicas que buscan expandir sus servicios sin una gran inversión inicial.',
    duracion: 'Contratos flexibles (días, meses)',
    preparacion: 'Capacitación de uso incluida',
    precio: 'Desde $5,000 MXN/mes',
    indicaciones: [
      'Iniciar servicios de urodinamia/uroflujometría',
      'Evaluar la viabilidad de un nuevo servicio',
      'Cubrir picos de demanda de pacientes',
      'Modernizar tecnología sin descapitalizarse',
      'Proyectos de investigación clínica',
      'Práctica privada y hospitales'
    ],
    proceso: [
      'Consulta inicial para entender sus necesidades',
      'Elaboración de una propuesta personalizada',
      'Instalación, calibración y puesta en marcha del equipo',
      'Capacitación completa para su personal',
      'Soporte técnico y mantenimiento continuo',
      'Flexibilidad para actualizar o cambiar de equipo'
    ],
    ventajas: [
      'Sin inversión inicial elevada',
      'Mantenimiento y consumibles incluidos',
      'Soporte técnico especializado 24/7',
      'Capacitación y certificación para su personal',
      'Contratos flexibles y adaptables',
      'Acceso a la tecnología más moderna del mercado'
    ],
    faq: [
      {
        question: '¿Qué incluye el servicio de renta?',
        answer: 'Incluye el equipo, instalación, calibración, mantenimiento preventivo y correctivo, consumibles básicos y la capacitación inicial para su personal.'
      },
      {
        question: '¿Hay un plazo mínimo de contrato?',
        answer: 'Ofrecemos contratos flexibles que van desde rentas por día para jornadas específicas hasta contratos mensuales o anuales, según sus necesidades.'
      },
      {
        question: '¿Dan soporte técnico si el equipo falla?',
        answer: 'Sí, nuestro servicio incluye soporte técnico 24/7. Si un equipo presenta fallas, lo reparamos o reemplazamos a la brevedad para no afectar su consulta.'
      }
    ]
  },
  consulta: {
    title: 'Consulta Especializada',
    subtitle: 'Evaluación urológica integral y personalizada',
    icon: <Stethoscope className="h-12 w-12 text-primary" />,
    description: 'Consulta médica con urólogos certificados para el diagnóstico y tratamiento de padecimientos del sistema urinario en hombres, mujeres y niños.',
    duracion: '30-45 minutos',
    preparacion: 'Llevar estudios previos si los tiene',
    precio: 'Desde $1,200 MXN',
    indicaciones: [
      'Check-up urológico anual',
      'Síntomas como ardor o dificultad para orinar',
      'Evaluación de crecimiento prostático (HPB)',
      'Problemas de incontinencia o vejiga hiperactiva',
      'Disfunción eréctil o eyaculación precoz',
      'Segunda opinión diagnóstica o de tratamiento'
    ],
    proceso: [
      'Entrevista médica y revisión de historia clínica',
      'Exploración física urológica completa',
      'Análisis de síntomas y factores de riesgo',
      'Solicitud e interpretación de estudios (si son necesarios)',
      'Elaboración de un diagnóstico preciso',
      'Creación de un plan de tratamiento personalizado'
    ],
    ventajas: [
      'Atención por médicos urólogos certificados',
      'Enfoque integral y humano',
      'Diagnóstico basado en evidencia científica',
      'Planes de tratamiento modernos y efectivos',
      'Seguimiento continuo y personalizado',
      'Instalaciones cómodas y seguras'
    ],
    faq: [
      {
        question: '¿Qué diferencia hay con un médico general?',
        answer: 'El urólogo es un especialista con entrenamiento quirúrgico y clínico enfocado exclusivamente en el sistema urinario y reproductivo masculino, lo que permite un diagnóstico y tratamiento mucho más preciso.'
      },
      {
        question: '¿Debo hacerme un chequeo prostático cada año?',
        answer: 'Se recomienda que los hombres a partir de los 45-50 años realicen una evaluación prostática anual, o antes si existen factores de riesgo como antecedentes familiares de cáncer de próstata.'
      },
      {
        question: '¿También atienden a mujeres y niños?',
        answer: 'Sí, la urología abarca padecimientos en mujeres (incontinencia, infecciones) y niños (uropediatría). Contamos con especialistas en todas las áreas.'
      }
    ]
  }
};

const ServicioPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceSlug];

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  const handleAgendarClick = (location) => {
    // Evento de medición
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cta_click',
        service: serviceSlug,
        location: location,
        // utms: recuperados de localStorage o URL
      });
    }
    navigate(`/agendar?service=${serviceSlug}`);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': serviceSlug === 'urodinamia' ? 'MedicalProcedure' : 'MedicalTest',
    name: service.title,
    description: service.description,
    areaServed: {
      '@type': 'Country',
      name: 'MX'
    },
    provider: {
      '@type': 'MedicalBusiness',
      name: 'UROLOGIK',
      // "image": "URL_DEL_LOGO",
      // "url": "https://urologik.com"
    },
    ...(serviceSlug === 'uroflujometria' && {
      offers: {
        '@type': 'Offer',
        price: '1500',
        priceCurrency: 'MXN'
      }
    })
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${service.title} en CDMX - UROLOGIK`}</title>
        <meta name="description" content={`Realizamos el estudio de ${service.title.toLowerCase()} en CDMX. Agenda tu cita para una evaluación urológica precisa con tecnología de punta.`} />
        <link rel="canonical" href={`https://urologik.com/servicios/${serviceSlug}`} />
        <meta property="og:title" content={`${service.title} en CDMX - UROLOGIK`} />
        <meta property="og:description" content={`Realizamos el estudio de ${service.title.toLowerCase()} en CDMX. Agenda tu cita para una evaluación urológica precisa con tecnología de punta.`} />
        {/* <meta property="og:image" content="URL_IMAGEN_REPRESENTATIVA" /> */}
        <meta property="og:url" content={`https://urologik.com/servicios/${serviceSlug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/servicios">Servicios</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-foreground font-medium">{service.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
                {service.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="cta-button text-lg px-8 py-4" onClick={() => handleAgendarClick('hero')}>
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Agendar {service.title}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar ahora
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
                <div className="p-6 bg-primary/10 rounded-full">
                    {service.icon}
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sticky CTA for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex gap-4 z-50">
        <Button size="lg" className="flex-1" onClick={() => handleAgendarClick('sticky_mobile')}>Agendar Cita</Button>
        <Button size="lg" variant="outline" className="flex-1">Llamar</Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

             {/* Proceso del Estudio */}
             <Card className="medical-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Proceso del Estudio: Paso a Paso</CardTitle>
                <CardDescription>Así es como realizamos el estudio para garantizar tu comodidad y la precisión de los resultados.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.proceso.map((paso, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-base">{paso}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Indicaciones */}
            <Card className="medical-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                    <CardTitle className="text-2xl">¿Cuándo se recomienda este estudio?</CardTitle>
                    <CardDescription>Este estudio es clave si presentas alguno de los siguientes síntomas o condiciones:</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {service.indicaciones.map((indicacion, index) => (
                        <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{indicacion}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="medical-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                    <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {service.faq.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-base font-semibold text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 self-start">
            {/* Precio y Preparación */}
            <Card className="medical-card shadow-lg border-primary/20">
              <CardHeader className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Precio del estudio</p>
                <p className="text-4xl font-bold text-primary">{service.precio}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-primary/80 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">Duración</p>
                            <p className="text-muted-foreground">{service.duracion}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-primary/80 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">Preparación</p>
                            <p className="text-muted-foreground">{service.preparacion}</p>
                        </div>
                    </div>
                </div>
                <Button size="lg" className="w-full text-base" onClick={() => handleAgendarClick('sidebar')}>
                  Agendar {service.title}
                </Button>
                <Button size="lg" variant="outline" className="w-full text-base">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>

             {/* Ventajas */}
             <Card className="medical-card shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Beneficios Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.ventajas.map((ventaja, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">{ventaja}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicioPage;
