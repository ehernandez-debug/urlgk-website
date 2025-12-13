import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Navigation,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactoPage = () => {
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
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    }
  }, []);

  const metodosContacto = [
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      titulo: 'Teléfono',
      descripcion: 'Llámanos directamente',
      contacto: '55-35-05-59-83',
      disponibilidad: '<strong>Lunes - Viernes:</strong> 9:00 am a 6:00 pm<br/><strong>Sábado:</strong> 9:00 am a 2:00 pm',
      link: 'tel:5535055983'
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-primary" />,
      titulo: 'WhatsApp',
      descripcion: 'Respuesta inmediata',
      contacto: '55-35-05-59-83',
      disponibilidad: '<strong>Disponible 24/7</strong><br/>Respuesta en horario de atención',
      link: 'https://wa.me/5215535055983?text=Hola!%2C%20me%20interesa%20conocer%20mas%20sobre%20Urologik'
    },
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      titulo: 'Correo Electrónico',
      descripcion: 'Escríbenos tu consulta',
      contacto: 'contactourologik@gmail.com',
      disponibilidad: '<strong>Respuesta en 24-48 horas</strong>',
      link: 'mailto:contactourologik@gmail.com'
    }
  ];

  const ubicaciones = [
    {
      nombre: 'Colonia del Valle',
      especialidad: 'Urología General y Ginecourología',
      direccion: 'Amores 942, Col del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX',
      ciudad: 'Ciudad de México, CDMX 03100',
      telefono: '55-35-05-59-83',
      email: 'contactourologik@gmail.com',
      horario: {
        semana: 'Lunes - Viernes: 9:00 am a 5:00 pm',
        sabado: 'Sábado: 9:00 am a 1:00 pm'
      },
      mapsUrl: 'https://maps.app.goo.gl/2tKvqMRWDQwDUNGJ6',
      consultorio: 'Consultorio 15'
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
      consultorio: 'Consultorio 406'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto | UROLOGIK</title>
        <meta name="description" content="Contacta con Urologik. Dos ubicaciones en CDMX: Colonia del Valle y Hospital Infantil Privado. Teléfono, WhatsApp y correo electrónico disponibles." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Contacto
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos aquí para ayudarte. Contáctanos por cualquier medio y 
                te responderemos lo más pronto posible.
              </p>
            </div>
          </div>
        </section>

        {/* Métodos de Contacto */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
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
                    <a href={metodo.link} target="_blank" rel="noopener noreferrer" className="w-full mt-4">
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

        {/* Ubicaciones */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
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
                      <p className="text-muted-foreground text-sm">
                        {ubicacion.direccion}
                      </p>
                      {ubicacion.consultorio && (
                        <p className="text-muted-foreground text-sm mt-1">
                          <strong>{ubicacion.consultorio}</strong>
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm">
                        {ubicacion.ciudad}
                      </p>
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

                    <a href={ubicacion.mapsUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105">
                        <Navigation className="mr-2 h-4 w-4" />
                        Ver en Google Maps
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Agendar Cita con Calendly */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Agenda tu Cita
              </h2>
              <p className="text-lg text-muted-foreground">
                Selecciona el día y hora que mejor te convenga
              </p>
            </div>

            <Card className="medical-card">
              <CardContent className="p-0">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/contactourologik/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mapa (Opcional - puede agregarse después) */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Encuéntranos Fácilmente
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos ubicados en zonas estratégicas de la Ciudad de México
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8686892!2d-99.1724!3d19.3733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8b0e0e0e0e%3A0x0e0e0e0e0e0e0e0e!2sAmores%20942%2C%20Col%20del%20Valle%20Centro!5e0!3m2!1ses!2smx!4v1234567890"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Colonia del Valle"
                  ></iframe>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5!2d-99.1650!3d19.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8b0e0e0e0e%3A0x0e0e0e0e0e0e0e0e!2sC%20Nueva%20York%207%2C%20N%C3%A1poles!5e0!3m2!1ses!2smx!4v1234567890"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Hospital Infantil Privado"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactoPage;
