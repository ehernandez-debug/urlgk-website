import { useState } from 'react'
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
    ubicacion: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const ubicaciones = [
    {
      nombre: 'Colonia del Valle',
      direccion: 'Av. Universidad 123, Col. del Valle Centro',
      ciudad: 'Ciudad de México, CDMX 03100',
      telefono: '55-1234-5678',
      email: 'delvalle@urologik.com',
      horarios: [
        'Lunes a Viernes: 8:00 - 18:00',
        'Sábados: 9:00 - 14:00',
        'Domingos: Cerrado'
      ],
      servicios: ['Uroflujometría', 'Urodinamia', 'Consulta adultos'],
      especialidad: 'Urología General y Ginecourología',
      mapa: 'https://maps.app.goo.gl/9XQKWkLySr5J5BZLA'
    },
    {
      nombre: 'Hospital Infantil Privado',
      direccion: 'Av. Insurgentes Sur 456, Col. Roma Norte',
      ciudad: 'Ciudad de México, CDMX 06700',
      telefono: '55-8765-4321',
      email: 'infantil@urologik.com',
      horarios: [
        'Lunes a Viernes: 9:00 - 17:00',
        'Sábados: 10:00 - 14:00',
        'Domingos: Cerrado'
      ],
      servicios: ['Uroflujometría pediátrica', 'Urodinamia pediátrica', 'Consulta especializada'],
      especialidad: 'Uropediatría',
      mapa: 'https://maps.app.goo.gl/ncn5HwTKDBR1CMsa7'
    }
  ]

  const metodosContacto = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      titulo: 'Teléfono',
      descripcion: 'Llámanos directamente',
      contacto: '55-47-67-52-05',
      disponibilidad: 'Lun - Vie: 8:00 - 18:00',
      link: 'tel:5547675205'
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      titulo: 'Email',
      descripcion: 'Envíanos un correo',
      contacto: 'contacto@urologik.com',
      disponibilidad: 'Respuesta en 24 horas',
      link: 'mailto:contacto@urologik.com'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      titulo: 'WhatsApp',
      descripcion: 'Chatea con nosotros',
      contacto: '55-47-67-52-05',
      disponibilidad: 'Lun - Sáb: 9:00 - 19:00',
      link: 'https://wa.me/5215547675205'
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
                className="w-full mt-6 cta-button"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    asunto: '',
                    mensaje: '',
                    ubicacion: ''
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
                    <p className="text-sm text-muted-foreground">
                      {metodo.disponibilidad}
                    </p>
                  </div>
                  <a href={metodo.link} target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                    <Button variant="outline" className="w-full">
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
                    <span>Envíanos un Mensaje</span>
                  </CardTitle>
                  <CardDescription>
                    Completa el formulario y te responderemos pronto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          placeholder="55-XX-XX-XX-XX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Asunto *</Label>
                        <Select value={formData.asunto} onValueChange={(value) => handleInputChange('asunto', value)}>
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
                      <div>
                        <Label>Ubicación de Interés</Label>
                        <Select value={formData.ubicacion} onValueChange={(value) => handleInputChange('ubicacion', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona ubicación" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="del_valle">Colonia del Valle</SelectItem>
                            <SelectItem value="infantil">Hospital Infantil</SelectItem>
                            <SelectItem value="cualquiera">Cualquiera</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full cta-button text-lg py-3"
                      disabled={isSubmitting || !formData.nombre || !formData.email || !formData.asunto || !formData.mensaje}
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
                      <p className="text-muted-foreground">55-47-67-52-05</p>
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
                      <p className="text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
                      <p className="text-muted-foreground">Sáb: 9:00 - 14:00</p>
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
                    <a href="tel:5547675205" className="w-full block">
                      <Button className="w-full cta-button">
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar Ahora
                      </Button>
                    </a>
                    <a href="https://wa.me/5215547675205" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button variant="outline" className="w-full">
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
                      <Button variant="outline" className="w-full">
                        <Navigation className="h-4 w-4 mr-2" />
                        Ver en Mapa
                      </Button>
                    </a>
                    <Button className="flex-1 cta-button">
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
