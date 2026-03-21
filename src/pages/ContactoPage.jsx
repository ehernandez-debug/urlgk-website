import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Navigation,
  Calendar,
  Building2,
  Stethoscope,
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useAnalytics from '@/hooks/useAnalytics';

const serviceLabels = {
  'cotizacion-equipo': 'Cotización de Equipo Médico (General)',
  'cotizacion-laser-holmio': 'Cotización — Láser de Holmio Lumenis Pulse 100H',
  'demo-laser-holmio': 'Demo — Láser de Holmio Lumenis Pulse 100H',
  'cotizacion-torre-urologia': 'Cotización — Torre de Urología Stryker 1588/1688',
  'demo-torre-urologia': 'Demo — Torre de Urología Stryker 1588/1688',
  'catalogo-instrumental': 'Catálogo — Instrumental y Consumibles',
  'especialista-instrumental': 'Consulta con Especialista — Instrumental',
  'champions': 'Programa de Aliados Estratégicos',
};

const serviceWhatsAppMessages = {
  'cotizacion-equipo': 'Hola, me interesa recibir una cotización de equipo médico urológico para mi hospital/consultorio.',
  'cotizacion-laser-holmio': 'Hola, me interesa una cotización para la renta del Láser de Holmio Lumenis Pulse 100H.',
  'demo-laser-holmio': 'Hola, me gustaría agendar una demo del Láser de Holmio Lumenis Pulse 100H.',
  'cotizacion-torre-urologia': 'Hola, me interesa una cotización institucional para la Torre de Urología Stryker 1588/1688.',
  'demo-torre-urologia': 'Hola, me gustaría agendar una demo de la Torre de Urología Stryker.',
  'catalogo-instrumental': 'Hola, me interesa recibir el catálogo completo de instrumental y consumibles urológicos.',
  'especialista-instrumental': 'Hola, me gustaría hablar con un especialista sobre instrumental y consumibles urológicos.',
  'champions': 'Hola, me interesa conocer más sobre el Programa de Aliados Estratégicos de Urologik.',
};

const ContactoPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    nombre: '',
    hospital: '',
    cargo: '',
    telefono: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { trackEvent, trackLead } = useAnalytics();

  const serviceParam = searchParams.get('service') || '';
  const serviceLabel = serviceLabels[serviceParam] || 'Consulta General';
  const isB2B = serviceParam.includes('cotizacion') || serviceParam.includes('demo') || serviceParam.includes('catalogo') || serviceParam.includes('champions');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (script.parentNode) document.body.removeChild(script);
      if (link.parentNode) document.head.removeChild(link);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const baseMsg = serviceWhatsAppMessages[serviceParam] || 'Hola, me interesa conocer más sobre los servicios de Urologik.';
    const fullMsg = `${baseMsg}\n\nNombre: ${formData.nombre}\nHospital/Institución: ${formData.hospital}\nCargo: ${formData.cargo}\nTeléfono: ${formData.telefono}\n${formData.mensaje ? `Mensaje adicional: ${formData.mensaje}` : ''}`;
    
    trackLead(isB2B ? 'hospital' : 'general', 'whatsapp', { source: 'contacto_form', service: serviceParam });
    trackEvent('form_submit', { form_type: 'cotizacion_b2b', service: serviceParam });
    
    window.open(`https://wa.me/5215535055983?text=${encodeURIComponent(fullMsg)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const metodosContacto = [
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      titulo: 'Teléfono',
      descripcion: 'Llámanos directamente',
      contacto: '55-35-05-59-83',
      disponibilidad: '<strong>Lunes - Viernes:</strong> 9:00 am a 6:00 pm<br/><strong>Sábado:</strong> 9:00 am a 2:00 pm',
      link: 'tel:5535055983',
      action: null
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      titulo: 'WhatsApp',
      descripcion: 'Respuesta inmediata',
      contacto: '55-35-05-59-83',
      disponibilidad: '<strong>Disponible 24/7</strong><br/>Respuesta en horario de atención',
      link: `https://wa.me/5215535055983?text=${encodeURIComponent(serviceWhatsAppMessages[serviceParam] || 'Hola, me interesa conocer más sobre Urologik.')}`,
      action: () => trackLead(isB2B ? 'hospital' : 'general', 'whatsapp', { source: 'contacto_metodos' })
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      titulo: 'Correo Electrónico',
      descripcion: 'Escríbenos tu consulta',
      contacto: 'contactourologik@gmail.com',
      disponibilidad: '<strong>Respuesta en 24-48 horas</strong>',
      link: 'mailto:contactourologik@gmail.com',
      action: null
    }
  ];

  const ubicaciones = [
    {
      nombre: 'Hospital Ángeles Lindavista',
      especialidad: 'Urología General y Uroginecología',
      direccion: 'Riobamba 639, Col. Magdalena de las Salinas, Gustavo A. Madero, 07760 Ciudad de México, CDMX',
      ciudad: 'Ciudad de México, CDMX 07760',
      telefono: '55-35-05-59-83',
      email: 'contactourologik@gmail.com',
      horario: {
        semana: 'Lunes - Viernes: 9:00 am a 5:00 pm',
        sabado: 'Sábado: 9:00 am a 1:00 pm'
      },
      mapsUrl: 'https://maps.app.goo.gl/ejdNPC9mYRo2qY2P6',
      consultorio: 'Hospital Ángeles Lindavista',
      calendlyUrl: 'https://calendly.com/urologik/cita-angeles-lindavista?hide_gdpr_banner=1'
    },
    {
      nombre: 'Hospital Infantil Privado',
      especialidad: 'Uropediatría',
      direccion: 'C Nueva York 7, Nápoles, Benito Juárez, 03810 Ciudad de México, CDMX',
      ciudad: 'Ciudad de México, CDMX 06700',
      telefono: '55-35-05-59-83',
      email: 'contactourologik@gmail.com',
      horario: {
        semana: 'Lunes - Viernes: 9:00 am a 5:00 pm',
        sabado: 'Sábado: 9:00 am a 1:00 pm'
      },
      mapsUrl: 'https://maps.app.goo.gl/Vd8Jtx1gCUFWKJzj8',
      consultorio: 'Consultorio 406',
      calendlyUrl: 'https://calendly.com/urologik/cita-hospital-infantil-privado?hide_gdpr_banner=1'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isB2B ? `${serviceLabel} | Urologik` : 'Contacto | Urologik'}</title>
        <meta name="description" content="Contacta con Urologik para cotizaciones de renta de equipo médico urológico, demos de equipos o información sobre estudios de urodinamia en CDMX." />
      </Helmet>
      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              {isB2B && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{serviceLabel}</span>
                </div>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {isB2B ? 'Solicitar Cotización' : 'Contacto'}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {isB2B
                  ? 'Completa el formulario y te enviaremos una cotización personalizada en menos de 24 horas.'
                  : 'Estamos aquí para ayudarte. Contáctanos por cualquier medio y te responderemos lo más pronto posible.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Formulario B2B (solo si viene de una LP de renta) */}
        {isB2B && (
          <section className="py-12 bg-background">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="medical-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Formulario de Cotización</CardTitle>
                  </div>
                  <CardDescription>
                    Servicio solicitado: <strong className="text-primary">{serviceLabel}</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8 space-y-4">
                      <CheckCircle className="h-16 w-16 text-accent mx-auto" />
                      <h3 className="text-xl font-bold text-foreground">¡Solicitud enviada!</h3>
                      <p className="text-muted-foreground">
                        Tu solicitud fue enviada por WhatsApp. Te contactaremos en menos de 24 horas con tu cotización personalizada.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                      >
                        Enviar otra solicitud
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground" htmlFor="nombre">
                            Nombre completo *
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Dr. Juan Pérez"
                            className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground" htmlFor="cargo">
                            Cargo / Especialidad *
                          </label>
                          <input
                            id="cargo"
                            name="cargo"
                            type="text"
                            required
                            value={formData.cargo}
                            onChange={handleInputChange}
                            placeholder="Jefe de Urología / Médico Urólogo"
                            className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground" htmlFor="hospital">
                          Hospital / Institución *
                        </label>
                        <input
                          id="hospital"
                          name="hospital"
                          type="text"
                          required
                          value={formData.hospital}
                          onChange={handleInputChange}
                          placeholder="Hospital General / Clínica Privada"
                          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground" htmlFor="telefono">
                          Teléfono de contacto *
                        </label>
                        <input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="55 1234 5678"
                          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground" htmlFor="mensaje">
                          Información adicional (opcional)
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          rows={3}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          placeholder="Número de procedimientos mensuales estimados, fechas tentativas, requerimientos especiales..."
                          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full cta-button">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Solicitud por WhatsApp
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Al enviar, serás redirigido a WhatsApp con tu solicitud pre-cargada. Respuesta garantizada en menos de 24 horas.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Métodos de Contacto */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Formas de Contactarnos
              </h2>
              <p className="text-lg text-muted-foreground">
                Elige el método que más te convenga
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metodosContacto.map((metodo, index) => (
                <Card key={index} className="medical-card text-center flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {metodo.icon}
                    </div>
                    <CardTitle className="text-xl">{metodo.titulo}</CardTitle>
                    <CardDescription>{metodo.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                      <p className="font-semibold text-primary text-lg mb-2 break-all">
                        {metodo.contacto}
                      </p>
                      <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: metodo.disponibilidad }}></p>
                    </div>
                    <a
                      href={metodo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-4"
                      onClick={metodo.action || undefined}
                    >
                      <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105">
                        Contactar Ahora
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicaciones — solo para pacientes y médicos */}
        {!isB2B && (
          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Nuestras Ubicaciones
                </h2>
                <p className="text-lg text-muted-foreground">
                  Dos ubicaciones estratégicas para atenderte mejor
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ubicaciones.map((ubicacion, index) => (
                  <Card key={index} className="medical-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2 flex items-center">
                            <MapPin className="h-6 w-6 text-primary mr-2" />
                            {ubicacion.nombre}
                          </CardTitle>
                          <CardDescription className="text-primary font-semibold">
                            {ubicacion.especialidad}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Navigation className="h-4 w-4 text-primary mr-2" />
                          Dirección:
                        </h4>
                        <p className="text-muted-foreground text-sm">{ubicacion.direccion}</p>
                        {ubicacion.consultorio && (
                          <p className="text-muted-foreground text-sm mt-1">
                            <strong>{ubicacion.consultorio}</strong>
                          </p>
                        )}
                        <p className="text-muted-foreground text-sm">{ubicacion.ciudad}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Phone className="h-4 w-4 text-primary mr-2" />
                            Contacto:
                          </h4>
                          <p className="text-muted-foreground text-sm">{ubicacion.telefono}</p>
                          <p className="text-muted-foreground text-sm break-all">{ubicacion.email}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Clock className="h-4 w-4 text-primary mr-2" />
                            Horarios:
                          </h4>
                          <p className="text-muted-foreground text-sm">{ubicacion.horario.semana}</p>
                          <p className="text-muted-foreground text-sm">{ubicacion.horario.sabado}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <a href={ubicacion.mapsUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105">
                            <Navigation className="mr-2 h-4 w-4" />
                            Ver en Mapa
                          </Button>
                        </a>
                        <Button 
                          className="w-full cta-button transition-transform duration-300 hover:scale-105"
                          onClick={() => window.Calendly && window.Calendly.initPopupWidget({url: ubicacion.calendlyUrl})}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Agendar Aquí
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA B2B Final */}
        {isB2B && (
          <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="medical-card p-8 border-2 border-primary/20">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  ¿Prefieres una llamada directa?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nuestro equipo de ventas institucionales está disponible de lunes a viernes de 9:00 a 18:00 hrs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:5535055983">
                    <Button size="lg" className="cta-button">
                      <Phone className="h-4 w-4 mr-2" />
                      55-35-05-59-83
                    </Button>
                  </a>
                  <a href="mailto:contactourologik@gmail.com">
                    <Button size="lg" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
};

export default ContactoPage;
