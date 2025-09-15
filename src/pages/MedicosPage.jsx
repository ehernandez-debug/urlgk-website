import { useState } from 'react'
import { 
  UserCheck, 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  Star,
  FileText,
  Phone,
  Mail,
  Building,
  Stethoscope
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const MedicosPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    cedulaProfesional: '',
    especialidad: '',
    subespecialidad: '',
    hospital: '',
    telefono: '',
    email: '',
    experiencia: '',
    volumenMensual: '',
    intereses: [],
    comentarios: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      intereses: checked 
        ? [...prev.intereses, interest]
        : prev.intereses.filter(i => i !== interest)
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

  const beneficios = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Incrementa tus Ingresos',
      description: 'Acceso a equipos especializados sin inversión inicial. Aumenta tu cartera de servicios.',
      features: ['Sin inversión inicial', 'Comisiones competitivas', 'Facturación simplificada']
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Tecnología de Vanguardia',
      description: 'Equipos de última generación con mantenimiento y calibración incluidos.',
      features: ['Equipos certificados', 'Mantenimiento incluido', 'Soporte técnico 24/7']
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Red de Especialistas',
      description: 'Únete a nuestra red de urólogos y comparte conocimiento y casos clínicos.',
      features: ['Interconsultas', 'Casos complejos', 'Educación continua']
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Flexibilidad Total',
      description: 'Horarios flexibles y ubicaciones múltiples para maximizar tu tiempo.',
      features: ['Horarios flexibles', 'Múltiples ubicaciones', 'Agenda optimizada']
    }
  ]

  const testimoniosMedicos = [
    {
      nombre: 'Dr. Carlos Mendoza',
      especialidad: 'Urólogo',
      hospital: 'Hospital ABC',
      testimonio: 'La asociación con Urologik me ha permitido ofrecer estudios especializados sin la inversión en equipos. Excelente soporte técnico.',
      rating: 5
    },
    {
      nombre: 'Dra. Ana Rodríguez',
      especialidad: 'Ginecouróloga',
      hospital: 'Centro Médico Sur',
      testimonio: 'Los equipos son de primera calidad y el proceso es muy eficiente. Mis pacientes están muy satisfechos con los resultados.',
      rating: 5
    },
    {
      nombre: 'Dr. Miguel Torres',
      especialidad: 'Uropediatra',
      hospital: 'Hospital Infantil',
      testimonio: 'Especialmente valioso para casos pediátricos. El equipo especializado hace la diferencia en el diagnóstico.',
      rating: 5
    }
  ]

  const serviciosParaMedicos = [
    'Uroflujometría con interpretación',
    'Urodinamia completa',
    'Estudios pediátricos especializados',
    'Reportes médicos detallados',
    'Segunda opinión en casos complejos',
    'Capacitación en nuevas tecnologías'
  ]

  if (submitted) {
    return (
      <div className="min-h-screen hero-section flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <Card className="medical-card text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                ¡Registro Exitoso!
              </h2>
              <p className="text-muted-foreground mb-4">
                Hemos recibido tu solicitud de asociación. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 Te llamaremos para agendar una reunión</p>
                <p>📧 Recibirás información detallada por email</p>
                <p>🤝 Discutiremos los términos de colaboración</p>
              </div>
              <Button 
                className="w-full mt-6 cta-button"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    nombre: '',
                    cedulaProfesional: '',
                    especialidad: '',
                    subespecialidad: '',
                    hospital: '',
                    telefono: '',
                    email: '',
                    experiencia: '',
                    volumenMensual: '',
                    intereses: [],
                    comentarios: ''
                  })
                }}
              >
                Registrar Otro Médico
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
              Únete a Nuestra Red de Especialistas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expande tus servicios urológicos con tecnología de vanguardia. 
              Sin inversión inicial, con soporte completo y comisiones competitivas.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="flex items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Médicos Asociados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Estudios Mensuales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Beneficios de la Asociación
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas para expandir tu práctica urológica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="medical-card text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {beneficio.icon}
                  </div>
                  <CardTitle className="text-lg">{beneficio.title}</CardTitle>
                  <CardDescription>{beneficio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {beneficio.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Registro */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario Principal */}
            <div className="lg:col-span-2">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserCheck className="h-6 w-6 text-primary" />
                    <span>Registro Profesional</span>
                  </CardTitle>
                  <CardDescription>
                    Completa tu información para iniciar el proceso de asociación
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
                          placeholder="Dr./Dra. Nombre Apellido"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cedula">Cédula Profesional *</Label>
                        <Input
                          id="cedula"
                          value={formData.cedulaProfesional}
                          onChange={(e) => handleInputChange('cedulaProfesional', e.target.value)}
                          placeholder="Número de cédula"
                          required
                        />
                      </div>
                    </div>

                    {/* Especialidad */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Especialidad *</Label>
                        <Select value={formData.especialidad} onValueChange={(value) => handleInputChange('especialidad', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona especialidad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urologia">Urología</SelectItem>
                            <SelectItem value="ginecourologia">Ginecourología</SelectItem>
                            <SelectItem value="uropediatria">Uropediatría</SelectItem>
                            <SelectItem value="nefrologia">Nefrología</SelectItem>
                            <SelectItem value="medicina_general">Medicina General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subespecialidad">Subespecialidad</Label>
                        <Input
                          id="subespecialidad"
                          value={formData.subespecialidad}
                          onChange={(e) => handleInputChange('subespecialidad', e.target.value)}
                          placeholder="Ej: Oncología urológica"
                        />
                      </div>
                    </div>

                    {/* Hospital y Contacto */}
                    <div>
                      <Label htmlFor="hospital">Hospital/Clínica Principal *</Label>
                      <Input
                        id="hospital"
                        value={formData.hospital}
                        onChange={(e) => handleInputChange('hospital', e.target.value)}
                        placeholder="Nombre del hospital o clínica"
                        required
                      />
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
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="doctor@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Experiencia */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Años de Experiencia *</Label>
                        <Select value={formData.experiencia} onValueChange={(value) => handleInputChange('experiencia', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona experiencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 años</SelectItem>
                            <SelectItem value="6-10">6-10 años</SelectItem>
                            <SelectItem value="11-20">11-20 años</SelectItem>
                            <SelectItem value="20+">Más de 20 años</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Volumen Mensual Estimado</Label>
                        <Select value={formData.volumenMensual} onValueChange={(value) => handleInputChange('volumenMensual', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Estudios por mes" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 estudios</SelectItem>
                            <SelectItem value="11-25">11-25 estudios</SelectItem>
                            <SelectItem value="26-50">26-50 estudios</SelectItem>
                            <SelectItem value="50+">Más de 50 estudios</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Intereses */}
                    <div>
                      <Label className="text-base font-medium">Servicios de Interés</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {serviciosParaMedicos.map((servicio, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox
                              id={`servicio-${index}`}
                              checked={formData.intereses.includes(servicio)}
                              onCheckedChange={(checked) => handleInterestChange(servicio, checked)}
                            />
                            <Label htmlFor={`servicio-${index}`} className="text-sm">
                              {servicio}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Comentarios */}
                    <div>
                      <Label htmlFor="comentarios">Comentarios Adicionales</Label>
                      <Textarea
                        id="comentarios"
                        value={formData.comentarios}
                        onChange={(e) => handleInputChange('comentarios', e.target.value)}
                        placeholder="Cuéntanos sobre tus expectativas, necesidades específicas o preguntas"
                        rows={3}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full cta-button text-lg py-3"
                      disabled={isSubmitting || !formData.nombre || !formData.cedulaProfesional || !formData.especialidad || !formData.hospital || !formData.telefono || !formData.email}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <UserCheck className="h-5 w-5 mr-2" />
                          Solicitar Asociación
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
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
                    <span className="text-sm">medicos@urologik.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      <p>Lun - Vie: 9:00 - 18:00</p>
                      <p>Respuesta en 24 horas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proceso de Asociación */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Proceso de Asociación</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <div>
                      <p className="font-medium text-sm">Registro</p>
                      <p className="text-xs text-muted-foreground">Completa el formulario</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <div>
                      <p className="font-medium text-sm">Evaluación</p>
                      <p className="text-xs text-muted-foreground">Revisión de credenciales</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <div>
                      <p className="font-medium text-sm">Reunión</p>
                      <p className="text-xs text-muted-foreground">Discusión de términos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    <div>
                      <p className="font-medium text-sm">Inicio</p>
                      <p className="text-xs text-muted-foreground">Capacitación y arranque</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Requisitos */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Requisitos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Cédula profesional vigente</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Especialidad en urología</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Práctica activa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Referencias profesionales</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios de Médicos */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros colegas
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimonios de médicos que ya forman parte de nuestra red
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimoniosMedicos.map((testimonio, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonio.testimonio}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonio.nombre}</p>
                    <p className="text-sm text-muted-foreground">{testimonio.especialidad}</p>
                    <p className="text-xs text-muted-foreground">{testimonio.hospital}</p>
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

export default MedicosPage

