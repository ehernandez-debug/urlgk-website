import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Heart,
  Shield,
  Star,
  CheckCircle,
  Loader2,
  User,
  Baby
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from '@/components/ui/badge'
import FormSkeleton from '@/components/FormSkeleton';
import { Progress } from '@/components/ui/progress';

const RequiredAst = () => <span className="text-red-500">*</span>;

const PacientesPage = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    tipoEstudio: '',
    location: 'colonia-del-valle',
  })

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState('23:59:59')
  const [button1Color, setButton1Color] = useState('bg-primary');
  const [button2Color, setButton2Color] = useState('bg-primary');


  const calendlyLinks = {
    'colonia-del-valle': 'https://calendly.com/urologik/cita-colonia-del-valle?hide_gdpr_banner=1',
    'hospital-infantil': 'https://calendly.com/urologik/30min?hide_gdpr_banner=1',
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

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
    
    return () => {
        clearInterval(timer);
        document.head.removeChild(link);
        document.head.removeChild(script);
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const params = new URLSearchParams(window.location.search);
    const location = params.get('location');
    if (location) {
      handleInputChange('location', location);
    }

    if (window.location.hash === '#agenda') {
      const agendaSection = document.getElementById('agenda');
      if (agendaSection) {
        agendaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => clearTimeout(timer);
  }, []);


  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const openCalendly = (e, location) => {
    e.preventDefault();
    const url = calendlyLinks[location];
    if (window.Calendly && url) {
      window.Calendly.initPopupWidget({ url });
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
                  nombres: '',
                  apellidoPaterno: '',
                  apellidoMaterno: '',
                  telefono: '',
                  tipoEstudio: '',
                  location: 'colonia-del-valle',
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
        <div className="bg-yellow-400 text-black text-center p-2 font-bold">
          <p>¡Solo 3 espacios disponibles esta semana! | Promoción especial termina en: {countdown}</p>
        </div>

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
            
            <div className="lg:col-span-2 space-y-8">
              
              <Card className="medical-card" id="agenda">
                <CardHeader>
                  <CardTitle>Agenda tu Cita Ahora</CardTitle>
                  <CardDescription>Selecciona a quién va dirigido el estudio.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <FormSkeleton />
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-center block mb-4 font-semibold">Elige una opción <RequiredAst /></Label>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                          <Card
                            className="cursor-pointer transition-all duration-300 w-full sm:w-1/2 hover:shadow-md hover:scale-105"
                          >
                            <CardContent className="p-6 text-center flex flex-col items-center justify-start h-full">
                              <User className="h-12 w-12 text-primary mb-3" />
                              <p className="text-lg font-semibold text-primary mb-1">(Adultos)</p>
                              <p className="font-semibold text-lg mb-3">Colonia del Valle</p>
                              <p className="text-sm text-muted-foreground text-center">
                                Servicios de diagnóstico para adultos, enfocados en la detección y manejo de trastornos urinarios.
                              </p>
                              <Button
                                className={`mt-4 ${button1Color}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setButton1Color('bg-green-500');
                                  openCalendly(e, 'colonia-del-valle');
                                }}
                              >
                                Haz clic aquí
                              </Button>
                            </CardContent>
                          </Card>
                          
                          <Card
                            className="cursor-pointer transition-all duration-300 w-full sm:w-1/2 hover:shadow-md hover:scale-105"
                          >
                            <CardContent className="p-6 text-center flex flex-col items-center justify-start h-full">
                              <Baby className="h-12 w-12 text-primary mb-3" />
                              <p className="text-lg font-semibold text-primary mb-1">(Niños)</p>
                              <p className="font-semibold text-lg mb-3">Hospital Infantil Privado</p>
                              <p className="text-sm text-muted-foreground text-center">
                                Estudios especializados para el diagnóstico y tratamiento de patologías urológicas en niños y adolescentes.
                              </p>
                              <Button
                                className={`mt-4 ${button2Color}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setButton2Color('bg-green-500');
                                  openCalendly(e, 'hospital-infantil');
                                }}
                              >
                                Haz clic aquí
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      <p className="text-center text-sm text-muted-foreground">Confirmación inmediata por WhatsApp</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
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
