import { useState } from 'react'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  FileText,
  CheckCircle,
  AlertCircle,
  Heart,
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const PacientesPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    telefono: '',
    email: '',
    tipoEstudio: '',
    sintomas: '',
    ubicacion: '',
    fechaPreferida: '',
    horaPreferida: '',
    comoNosConocio: '',
    nombreMedico: ''
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
    
    // Simular envío a Notion/Sheets
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const preparacionEstudios = [
    {
      estudio: 'Uroflujometría',
      preparacion: [
        'Llegar con vejiga llena (no orinar 2-3 horas antes)',
        'Beber abundante agua 1 hora antes',
        'Usar ropa cómoda',
        'Llegar 15 minutos antes de la cita'
      ]
    },
    {
      estudio: 'Urodinamia',
      preparacion: [
        'Suspender medicamentos para la vejiga 48h antes (consultar con médico)',
        'Llegar con vejiga llena',
        'Traer lista de medicamentos actuales',
        'Duración aproximada: 45-60 minutos'
      ]
    }
  ]

  const faqItems = [
    {
      pregunta: '¿Los estudios son dolorosos?',
      respuesta: 'Los estudios son mínimamente invasivos. La uroflujometría es completamente indolora, y la urodinamia puede causar molestias leves similares a una infección urinaria temporal.'
    },
    {
      pregunta: '¿Cuánto tiempo toman los estudios?',
      respuesta: 'La uroflujometría toma 5-10 minutos. La urodinamia completa puede tomar 45-60 minutos incluyendo preparación.'
    },
    {
      pregunta: '¿Cuándo tendré los resultados?',
      respuesta: 'Los resultados preliminares están disponibles inmediatamente. El reporte completo se entrega en 24-48 horas.'
    },
    {
      pregunta: '¿Necesito alguna preparación especial?',
      respuesta: 'Sí, cada estudio tiene preparación específica. Te enviaremos instrucciones detalladas al confirmar tu cita.'
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
                ¡Cita Agendada!
              </h2>
              <p className="text-muted-foreground mb-4">
                Hemos recibido tu solicitud. Te contactaremos en las próximas 2 horas para confirmar tu cita.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📱 Te enviaremos un WhatsApp de confirmación</p>
                <p>📧 Recibirás las instrucciones por email</p>
                <p>📋 Prepararemos todo para tu visita</p>
              </div>
              <Button 
                className="w-full mt-6 cta-button"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    nombre: '',
                    edad: '',
                    telefono: '',
                    email: '',
                    tipoEstudio: '',
                    sintomas: '',
                    ubicacion: '',
                    fechaPreferida: '',
                    horaPreferida: '',
                    comoNosConocio: ''
                  })
                }}
              >
                Agendar Otra Cita
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
              Agenda tu Cita
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proceso simple y rápido para agendar tu estudio urológico. 
              Te contactaremos para confirmar todos los detalles.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario Principal */}
          <div className="lg:col-span-2">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span>Información de la Cita</span>
                </CardTitle>
                <CardDescription>
                  Completa la información para agendar tu estudio urológico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
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
                      <Label htmlFor="edad">Edad *</Label>
                      <Input
                        id="edad"
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                        placeholder="Tu edad"
                        min="1"
                        max="120"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="55-XXXX-XXXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Tipo de Estudio */}
                  <div>
                    <Label>Tipo de Estudio Requerido *</Label>
                    <RadioGroup 
                      value={formData.tipoEstudio} 
                      onValueChange={(value) => handleInputChange('tipoEstudio', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uroflujometria" id="uroflujometria" />
                        <Label htmlFor="uroflujometria">Uroflujometría</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="urodinamia" id="urodinamia" />
                        <Label htmlFor="urodinamia">Urodinamia Completa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consulta" id="consulta" />
                        <Label htmlFor="consulta">Consulta + Estudio</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no_seguro" id="no_seguro" />
                        <Label htmlFor="no_seguro">No estoy seguro</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Síntomas */}
                  <div>
                    <Label htmlFor="sintomas">Síntomas Principales (Opcional)</Label>
                    <Textarea
                      id="sintomas"
                      value={formData.sintomas}
                      onChange={(e) => handleInputChange('sintomas', e.target.value)}
                      placeholder="Describe brevemente tus síntomas o motivo de consulta"
                      rows={3}
                    />
                  </div>

                  {/* Ubicación Preferida */}
                  <div>
                    <Label>Ubicación Preferida *</Label>
                    <Select value={formData.ubicacion} onValueChange={(value) => handleInputChange('ubicacion', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una ubicación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="del_valle">Colonia del Valle (Adultos)</SelectItem>
                        <SelectItem value="infantil">Hospital Infantil (Pediatría)</SelectItem>
                        <SelectItem value="cualquiera">Cualquiera disponible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Fecha y Hora Preferida */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fechaPreferida">Fecha Preferida</Label>
                      <Input
                        id="fechaPreferida"
                        type="date"
                        value={formData.fechaPreferida}
                        onChange={(e) => handleInputChange('fechaPreferida', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label>Horario Preferido</Label>
                      <Select value={formData.horaPreferida} onValueChange={(value) => handleInputChange('horaPreferida', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona horario" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manana">Mañana (8:00 - 12:00)</SelectItem>
                          <SelectItem value="tarde">Tarde (12:00 - 18:00)</SelectItem>
                          <SelectItem value="flexible">Horario flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Cómo nos conoció */}
                  <div>
                    <Label>¿Cómo nos conociste?</Label>
                    <Select value={formData.comoNosConocio} onValueChange={(value) => handleInputChange('comoNosConocio', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Búsqueda en Google</SelectItem>
                        <SelectItem value="medico">Recomendación médica</SelectItem>
                        <SelectItem value="familiar">Familiar o amigo</SelectItem>
                        <SelectItem value="redes">Redes sociales</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Campo condicional para nombre del médico */}
                  {formData.comoNosConocio === 'medico' && (
                    <div>
                      <Label htmlFor="nombreMedico">Nombre completo del médico que te recomendó *</Label>
                      <Input
                        id="nombreMedico"
                        value={formData.nombreMedico}
                        onChange={(e) => handleInputChange('nombreMedico', e.target.value)}
                        placeholder="Dr./Dra. Nombre Apellido"
                        required
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full cta-button text-lg py-3"
                    disabled={isSubmitting || !formData.nombre || !formData.telefono || !formData.tipoEstudio || !formData.ubicacion}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 mr-2" />
                        Agendar Cita
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar con información adicional */}
          <div className="space-y-6">
            {/* Información de Contacto */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Contacto Directo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">55-XXXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">citas@urologik.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div className="text-sm">
                    <p>Lun - Vie: 8:00 - 18:00</p>
                    <p>Sáb: 9:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preparación para Estudios */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Preparación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {preparacionEstudios.map((item, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-semibold text-foreground mb-2">{item.estudio}</h4>
                    <ul className="space-y-1">
                      {item.preparacion.map((prep, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{prep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Garantías */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Nuestras Garantías</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-accent" />
                  <span className="text-sm">Atención personalizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-sm">Privacidad garantizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm">Resultados inmediatos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm">Puntualidad en citas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item.pregunta}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.respuesta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PacientesPage

