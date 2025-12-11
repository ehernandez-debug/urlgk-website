import { useState, useEffect } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Navigation,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })
  const [formErrors, setFormErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleInputChange = (field, value) => {
    let processedValue = value;
    if (field === 'email') {
        processedValue = value.trim().toLowerCase();
    } else if (field === 'telefono') {
        processedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({
        ...prev,
        [field]: processedValue
    }));

    if (formErrors[field]) {
        setFormErrors(prev => ({
            ...prev,
            [field]: null
        }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errors.email = 'Por favor, introduce un email válido.';
    }
    if (formData.telefono.length !== 10) {
        errors.telefono = 'El teléfono debe tener 10 dígitos.';
    }

    if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
    }

    setFormErrors({});

    const subject = "Dudas (From Urologik Web Site)";
    const body = `Un usuario ha mandado este mensaje desde la página de Urologik:%0D%0A%0D%0A
      Nombre: ${formData.nombre}%0D%0A
      Teléfono: ${formData.telefono}%0D%0A
      Email: ${formData.email}%0D%0A
      Asunto: ${formData.asunto}%0D%0A
      Mensaje: ${formData.mensaje}%0D%0A`;
    window.location.href = `mailto:contactourologik@gmail.com?subject=${subject}&body=${body}`;
  };

  const ubicaciones = [
    {
      nombre: 'Colonia del Valle',
      direccion: 'Amores 942, Col del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX',
      ciudad: 'Ciudad de México, CDMX 03100',
      telefono: '55-35-05-59-83',
      email: 'contactourologik@gmail.com',
      horarios: [
        'Lunes - Viernes: 9:00 am a 5:00 pm',
        'Sábado: 9:00 am a 1:00 pm',
        'Domingo: Cerrado'
      ],
      servicios: ['Uroflujometría', 'Urodinamia', 'Consulta adultos'],
      especialidad: 'Urología General y Ginecourología',
      mapa: 'https://maps.app.goo.gl/2SoBT9AnhvQdxyvS7',
      calendlyUrl: 'https://calendly.com/urologik/cita-colonia-del-valle?hide_gdpr_banner=1'
    },
    {
      nombre: 'Hospital Infantil Privado',
      direccion: 'C Nueva York 7, Nápoles, Benito Juárez, 03810 Ciudad de México, CDMX',
      ciudad: 'Ciudad de México, CDMX 06700',
      telefono: '55-35-05-59-83',
      email: 'contactourologik@gmail.com',
      horarios: [
        'Lunes - Viernes: 9:00 am a 5:00 pm',
        'Sábado: 9:00 am a 1:00 pm',
        'Domingo: Cerrado'
      ],
      servicios: ['Uroflujometría pediátrica', 'Urodinamia pediátrica', 'Consulta especializada'],
      especialidad: 'Uropediatría',
      mapa: 'https://maps.app.goo.gl/pq12zJgHWkSdrsNi6',
      calendlyUrl: 'https://calendly.com/urologik/30min?hide_gdpr_banner=1'
    }
  ]

  const metodosContacto = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      titulo: 'Teléfono',
      descripcion: 'Llámanos directamente',
      contacto: '55-35-05-59-83',
      disponibilidad: 'Lunes - Viernes: 9:00 am a 6:00 pm<br/>Sábado: 9:00 am a 2:00 pm',
      link: 'tel:5535055983'
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      titulo: 'Email',
      descripcion: 'Envíanos un correo',
      contacto: 'contactourologik@gmail.com',
      disponibilidad: 'Respuesta en 24 horas',
      link: 'mailto:contactourologik@gmail.com'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      titulo: 'WhatsApp',
      descripcion: 'Chatea con nosotros',
      contacto: '55-35-05-59-83',
      disponibilidad: 'Lunes - Viernes: 9:00 am a 6:00 pm<br/>Sábado: 9:00 am a 2:00 pm',
      link: 'https://wa.me/5215535055983?text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Urologik.'
    }
  ]

  if (submitted) {
    return (
      <div className="min-h-screen hero-section flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <Card className="medical-card text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                ¡Mensaje Enviado!
              </h2>
              <p className="text-muted-foreground mb-4">
                Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 Confirmaremos la recepción por email</p>
                <p>📱 Te contactaremos por WhatsApp si es urgente</p>
                <p>⏰ Tiempo de respuesta: 2-24 horas</p>
              </div>
              <Button 
                className="w-full mt-6 cta-button transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    asunto: '',
                    mensaje: '',
                  })
                }}
              >
                Enviar Otro Mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
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

      {/* Formulario y Ubicaciones */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-6 w-6 text-primary" />
                    <span>Envíanos un mensaje a nuestro correo</span>
                  </CardTitle>
                  <CardDescription>
                    Completa el formulario y te responderemos pronto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo <span className="text-primary">*</span></Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono (10 dígitos y sin espacios) <span className="text-primary">*</span></Label>
                        <Input
                          id="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          placeholder="55XXXXXXXX"
                          required
                          maxLength={10}
                        />
                        {formErrors.telefono && <p className="text-sm text-red-500 mt-1">{formErrors.telefono}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email <span className="text-primary">*</span></Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                      {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1">
                      <div>
                        <Label>Asunto <span className="text-primary">*</span></Label>
                        <Select value={formData.asunto} onValueChange={(value) => handleInputChange('asunto', value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un asunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cita">Agendar Cita</SelectItem>
                            <SelectItem value="informacion">Información de Servicios</SelectItem>
                            <SelectItem value="medicos">Información para Médicos</SelectItem>
                            <SelectItem value="precios">Consulta de Precios</SelectItem>
                            <SelectItem value="resultados">Consulta de Resultados</SelectItem>
                            <SelectItem value="queja">Queja o Sugerencia</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje <span className="text-primary">*</span></Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={4}
                        required
                      />
                    </div>

                    <p className="text-sm text-muted-foreground"><span className="text-primary">*</span> Campos obligatorios</p>

                    <Button 
                      type="submit" 
                      className="w-full cta-button text-lg py-3 transition-transform duration-300 hover:scale-105"
                      disabled={isSubmitting || !formData.nombre || !formData.email || !formData.telefono || !formData.asunto || !formData.mensaje}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto Rápido */}
            <div className="space-y-6">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Contacto Rápido</CardTitle>
                  <CardDescription>
                    Para consultas urgentes o citas del mismo día
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Línea Directa</p>
                      <p className="text-muted-foreground">55-35-05-59-83</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground">Respuesta inmediata</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Horario de Atención</p>
                      <p className="text-muted-foreground">Lunes - Viernes: 9:00 am a 6:00 pm</p>
                      <p className="text-muted-foreground">Sábado: 9:00 am a 2:00 pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle>¿Necesitas Atención Urgente?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Para consultas médicas urgentes o citas del mismo día, 
                    contáctanos directamente por teléfono o WhatsApp.
                  </p>
                  <div className="space-y-2">
                    <a href="tel:5535055983" className="w-full block">
                      <Button className="w-full cta-button transition-transform duration-300 hover:scale-105">
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar Ahora
                      </Button>
                    </a>
                    <a href="https://wa.me/5215535055983?text=Cita%20urgente." target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicaciones */}
      <section className="section-padding bg-muted/30">
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
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>{ubicacion.nombre}</span>
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {ubicacion.especialidad}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Dirección:</p>
                    <p className="text-muted-foreground">{ubicacion.direccion}</p>
                    <p className="text-muted-foreground">{ubicacion.ciudad}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Contacto:</p>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{ubicacion.telefono}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{ubicacion.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground mb-2">Horarios:</p>
                      <div className="space-y-1">
                        {ubicacion.horarios.map((horario, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{horario}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Servicios:</p>
                    <div className="flex flex-wrap gap-2">
                      {ubicacion.servicios.map((servicio, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {servicio}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a href={ubicacion.mapa} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105">
                        <Navigation className="h-4 w-4 mr-2" />
                        Ver en Mapa
                      </Button>
                    </a>
                    <Button 
                      className="flex-1 cta-button transition-transform duration-300 hover:scale-105"
                      onClick={() => window.Calendly.initPopupWidget({url: ubicacion.calendlyUrl})}>
                      Agendar Aquí
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactoPage
