import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
  Shield,
  Star,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import FormSkeleton from '@/components/FormSkeleton';
import { Progress } from '@/components/ui/progress';

const PacientesPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    tipoEstudio: '',
    fechaPreferida: '',
  })

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState('23:59:59')
  const [formStep, setFormStep] = useState(0);

  const totalFields = Object.keys(formData).length;
  const completedFields = Object.values(formData).filter(Boolean).length;
  const progress = (completedFields / totalFields) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)
      const diff = endOfDay - now
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0')
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0')
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
      setCountdown(`${hours}:${minutes}:${seconds}`)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);


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

  if (submitted) {
    return (
      <div className="min-h-screen hero-section flex items-center justify-center p-4">
        <Card className="medical-card text-center w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <motion.div
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              ¡Cita Agendada con Éxito!
            </h2>
            <p className="text-muted-foreground mb-4">
              Tu solicitud ha sido recibida. En breve, nuestro equipo te contactará por WhatsApp para confirmar los detalles de tu cita.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📱 Confirmación inmediata por WhatsApp</p>
              <p>📧 Instrucciones de preparación por email</p>
              <p>📋 Todo listo para tu visita</p>
            </div>
            <Button 
              className="w-full mt-6 cta-button"
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  nombre: '',
                  telefono: '',
                  tipoEstudio: '',
                  fechaPreferida: '',
                })
              }}
            >
              Agendar Otra Cita
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Urologik | Para Pacientes</title>
        <meta name="description" content="Agenda tu estudio urológico hoy mismo. Ofrecemos diagnósticos precisos, rápidos y sin dolor con tecnología de vanguardia." />
        <meta property="og:title" content="Urologik para Pacientes - Agenda tu Cita" />
        <meta property="og:description" content="Estudios urológicos sin dolor, con resultados rápidos y precisos. Agenda tu cita en línea." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        {/* Banner de Urgencia */}
        <div className="bg-yellow-400 text-black text-center p-2 font-bold">
          <p>¡Solo 3 espacios disponibles esta semana! | Promoción especial termina en: {countdown}</p>
        </div>

        {/* Hero Section */}
        <section className="hero-section text-center py-12 md:py-20 px-4">
          <Badge color="success" className="mb-4 bg-green-500 text-white">Disponible Hoy</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            Diagnóstico Urológico Fácil, Rápido e Indoloro
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Tecnología de vanguardia sin dolor para un diagnóstico preciso.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Más de 1,500 estudios realizados
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Columna principal con formulario y precios */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Precios Transparentes */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Precios Transparentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                        <p className="font-semibold">Uroflujometría</p>
                        <p className="font-bold text-lg">DESDE $1,500 MXN</p>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                        <p className="font-semibold">Urodinamia completa</p>
                        <p className="font-bold text-lg">$4,500 MXN</p>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">* Precios no incluyen impuestos.</p>
                </CardContent>
              </Card>

              {/* Formulario */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Agenda tu Cita Ahora</CardTitle>
                  <CardDescription>Completa estos 4 campos y confirma por WhatsApp.</CardDescription>
                  <Progress value={progress} className="mt-2" />
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <FormSkeleton />
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" placeholder="Tu nombre completo" required 
                              value={formData.nombre} onChange={e => handleInputChange('nombre', e.target.value)} aria-label="Nombre Completo del Paciente"/>
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono (WhatsApp)</Label>
                        <Input id="telefono" type="tel" placeholder="10 dígitos" required
                              value={formData.telefono} onChange={e => handleInputChange('telefono', e.target.value)} aria-label="Teléfono del Paciente"/>
                      </div>
                      <div>
                        <Label>Tipo de estudio</Label>
                        <Select onValueChange={value => handleInputChange('tipoEstudio', value)} required>
                          <SelectTrigger aria-label="Tipo de Estudio">
                            <SelectValue placeholder="Selecciona el estudio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uroflujometria">Uroflujometría</SelectItem>
                            <SelectItem value="urodinamia">Urodinamia Completa</SelectItem>
                            <SelectItem value="no_seguro">No estoy seguro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="fechaPreferida">Fecha preferida</Label>
                        <Input id="fechaPreferida" type="date" required
                              min={new Date().toISOString().split('T')[0]}
                              value={formData.fechaPreferida} onChange={e => handleInputChange('fechaPreferida', e.target.value)} aria-label="Fecha Preferida para la Cita"/>
                      </div>
                      <Button type="submit" className="w-full text-lg py-3 cta-button transform hover:scale-105 transition-transform duration-300" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Agendando...
                          </>
                        ) : 'Agendar Cita Ahora'}
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">Confirmación inmediata por WhatsApp</p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Testimonios */}
              <Card className="medical-card hover:shadow-lg transition-shadow duration-300">
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

              {/* Seguros */}
              <Card className="medical-card">
                  <CardHeader>
                      <CardTitle>Aceptamos Seguros de Gastos Médicos</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4 justify-center items-center">
                      <p className="font-semibold text-lg">GNP</p>
                      <p className="font-semibold text-lg">AXA</p>
                      <p className="font-semibold text-lg">MetLife</p>
                  </CardContent>
              </Card>

              {/* Garantías */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Tu Tranquilidad es Nuestra Prioridad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2"><Heart className="h-4 w-4 text-green-500" /><span>Atención empática y profesional</span></div>
                  <div className="flex items-center space-x-2"><Shield className="h-4 w-4 text-green-500" /><span>Privacidad y confidencialidad</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Equipos de última generación</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4 text-green-500" /><span>Puntualidad garantizada</span></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PacientesPage
