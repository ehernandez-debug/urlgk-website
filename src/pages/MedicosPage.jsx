
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Award, 
  TrendingUp, 
  DollarSign,
  Zap,
  Briefcase,
  PlusCircle,
  BarChart,
  Activity,
  CheckCircle,
  Star,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormSkeleton from '@/components/FormSkeleton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { medicoSchema } from '@/validators/medico';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toE164 } from '@/services/phones';
import { createMedicoUniqueByPhone } from '@/services/medicos';

const MedicosPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [utmParams, setUtmParams] = useState({});
  const [t0, setT0] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(medicoSchema),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setT0(Date.now());
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {};
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith('utm_')) {
        utms[key] = value;
      }
    }
    setUtmParams(utms);
  }, []);

  const onSubmit = async (data) => {
    setStatus('loading');

    // Honeypot check
    if (data.website) {
        console.warn("Honeypot triggered");
        setStatus('success');
        return;
    }

    // Time-trap check
    const elapsed = Date.now() - t0;
    if (elapsed < 1500) {
      setStatus("error");
      setErrorMessage("Por favor verifica los datos e inténtalo de nuevo.");
      return;
    }
    
    try {
      const phoneE164 = toE164(data.phoneRaw);
      if (!phoneE164) {
        setStatus('error');
        setErrorMessage('Teléfono inválido.');
        return;
      }

      await createMedicoUniqueByPhone({ ...data, ...utmParams }, phoneE164);
      setStatus('success');
    } catch (error) {
      console.error('Error adding document: ', error);
      if (error.message === 'duplicate_phone') {
        setErrorMessage('Este teléfono ya está registrado.');
      } else {
        setErrorMessage('Hubo un problema al procesar tu solicitud. Por favor, verifica tus datos e inténtalo de nuevo.');
      }
      setStatus('error');
    }
  };

  const testimoniosMedicos = [
    {
      nombre: 'Dr. Carlos Mendoza',
      cedula: 'Cédula Profesional: 1234567',
      especialidad: 'Urólogo',
      testimonio: 'La asociación con Urologik me ha permitido ofrecer estudios especializados sin la inversión en equipos. Excelente soporte técnico.',
      rating: 5
    },
    {
      nombre: 'Dra. Ana Rodríguez',
      cedula: 'Cédula Profesional: 7654321',
      especialidad: 'Ginecouróloga',
      testimonio: 'Los equipos son de primera calidad y el proceso es muy eficiente. Mis pacientes están muy satisfechos con los resultados.',
      rating: 5
    },
    {
      nombre: 'Dr. Miguel Torres',
      cedula: 'Cédula Profesional: 8901234',
      especialidad: 'Uropediatra',
      testimonio: 'Especialmente valioso para casos pediátricos. El equipo especializado hace la diferencia en el diagnóstico.',
      rating: 5
    }
  ];

  if (status === 'success') {
    return (
      <div className="min-h-screen hero-section flex items-center justify-center">
        <Card className="medical-card text-center w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <motion.div
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              ¡Registro Exitoso!
            </h2>
            <p className="text-muted-foreground mb-4">
              Hemos recibido tu solicitud. Nuestro equipo te contactará en 24 horas.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen hero-section flex items-center justify-center">
        <Card className="medical-card text-center w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <motion.div
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Error en el Registro
            </h2>
            <p className="text-muted-foreground mb-4">
             {errorMessage}
            </p>
            <Button 
              className="w-full mt-6 cta-button"
              onClick={() => setStatus('idle')}
            >
              Volver al Formulario
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Urologik | Para Médicos</title>
        <meta name="description" content="Únete a nuestra red de especialistas y expande tus servicios urológicos. Ofrece estudios de vanguardia sin inversión inicial." />
        <meta property="og:title" content="Urologik para Médicos - Aumenta tus Ingresos" />
        <meta property="og:description" content="Genera ingresos adicionales ofreciendo estudios urológicos de alta tecnología a tus pacientes." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section B2B */}
        <section className="hero-section bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold py-1 px-3 rounded-full mb-4">
              Para médicos especialistas certificados
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Aumenta tus Ingresos con Estudios Urológicos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Genera $15,000-25,000 MXN adicionales mensuales
            </p>
          </div>
        </section>

        {/* Propuesta de Valor Clara */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                ¿Por qué elegir Urologik?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipos de última generación</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte técnico online</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comisiones competitivas</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Credibilidad Profesional */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Más de 45 médicos especialistas confían en nosotros
            </p>
            <div className="flex justify-center items-center space-x-8">
              {/* Logos de colegios médicos y certificaciones */}
              <p className="font-semibold">Colegio Mexicano de Urología</p>
              <p className="font-semibold">Consejo Mexicano de Urología</p>
              <p className="font-semibold">Certificación ISO 9001</p>
            </div>
          </div>
        </section>
        
        {/* Testimonios */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Lo que dicen nuestros colegas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimoniosMedicos.map((testimonio, index) => (
                <Card key={index} className="medical-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonio.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonio.testimonio}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">{testimonio.nombre}</p>
                      <p className="text-sm text-muted-foreground">{testimonio.especialidad}</p>
                      <p className="text-xs text-muted-foreground">{testimonio.cedula}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Información Financiera */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Ingresos Potenciales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">$8,500 MXN/mes</p>
                    <p className="text-muted-foreground">Ingresos promedio por médico</p>
                  </div>
                  <div>
                    <table className="w-full text-left">
                      <thead>
                        <tr>
                          <th className="py-2">Estudio</th>
                          <th className="py-2 text-right">Comisión</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="py-2">Uroflujometría</td><td className="py-2 text-right">30%</td></tr>
                        <tr><td className="py-2">Urodinamia</td><td className="py-2 text-right">25%</td></tr>
                        <tr><td className="py-2">Estudios Pediátricos</td><td className="py-2 text-right">35%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Proceso Simplificado */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Activo en 72 horas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <PlusCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">1. Regístrate</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">2. Capacitación</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">3. Comienza a generar</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Formulario Profesional */}
        <section id="registro" className="section-padding bg-background scroll-mt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Formulario Profesional</CardTitle>
                <CardDescription>Respuesta en el mismo día</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <FormSkeleton />
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo</Label>
                      <Input id="nombre" name="given-name" autoComplete="given-name" placeholder="Dr. Nombre Apellido" {...register('nombre')} />
                      {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" inputMode="email" name="email" autoComplete="email" placeholder="nombre@email.com" {...register('email')} />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneRaw">Teléfono</Label>
                      <PhoneInput
                        id="phoneRaw"
                        name="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="55 1234 5678"
                        {...register('phoneRaw')}
                        onChange={(value) => setValue('phoneRaw', value)}
                        defaultCountry="MX"
                      />
                      {errors.phoneRaw && <p className="text-red-500 text-sm">{errors.phoneRaw.message}</p>}
                    </div>
                    {/* Honeypot field */}
                    <div className="hidden">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" {...register('website')} tabIndex="-1" autoComplete="off" />
                    </div>
                    <Button type="submit" className="w-full cta-button text-lg py-3 transform hover:scale-105 transition-transform duration-300" disabled={status === 'loading'}>
                      {status === 'loading' ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando... </> 
                      ) : 'Solicitar Información Confidencial'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Diferenciadores Técnicos */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Primeros en México en integrar I.A. biomédica
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">I.A. Biomédica</h3>
                  <p>Reportes con interpretación asistida para un diagnóstico más preciso y rápido.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Análisis Predictivo</h3>
                  <p>Nuestra tecnología ayuda a identificar patrones y predecir posibles complicaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicosPage;
