import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  Calendar,
  DollarSign,
  FileCheck,
  Handshake,
  ArrowRight,
  Lock,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PdfDownloadModal from '@/components/PdfDownloadModal';

const ParaMedicos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
        document.head.removeChild(link);
        document.head.removeChild(script);
    }
  }, []);

  const pasosUnirse = [
    {
      paso: '1',
      title: 'Agenda una Demo',
      description: 'Conoce nuestras instalaciones, equipo y modelo de colaboración en detalle.',
      icon: <Calendar className="h-8 w-8 text-primary" />
    },
    {
      paso: '2',
      title: 'Evaluación y Capacitación',
      description: 'Evaluamos tu perfil y te capacitamos en el uso del equipo y protocolos.',
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      paso: '3',
      title: 'Firma de Contrato',
      description: 'Formalizamos la colaboración con un contrato claro y transparente.',
      icon: <FileCheck className="h-8 w-8 text-primary" />
    },
    {
      paso: '4',
      title: 'Comienza a Referir',
      description: 'Empieza a referir pacientes y generar ingresos desde el primer estudio.',
      icon: <Stethoscope className="h-8 w-8 text-primary" />
    }
  ];

  const beneficiosColaboracion = [
    {
      title: 'Sin Inversión en Equipo',
      description: 'Acceso a tecnología de punta sin necesidad de comprar equipos costosos ni mantenerlos.',
      icon: <DollarSign className="h-8 w-8 text-primary" />
    },
    {
      title: 'Operación Completa',
      description: 'Nosotros gestionamos la logística, el personal técnico y la infraestructura.',
      icon: <Handshake className="h-8 w-8 text-primary" />
    },
    {
      title: 'Crecimiento Progresivo',
      description: 'Avanza en el modelo de participación conforme adquieres experiencia y compromiso.',
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      title: 'Soporte Profesional',
      description: 'Capacitación técnica, respaldo administrativo y asesoría continua.',
      icon: <Award className="h-8 w-8 text-primary" />
    }
  ];

  // Vista previa del modelo — solo niveles 1 y 2, sin montos exactos
  const modeloPreview = [
    {
      nivel: 'Nivel 1',
      rol: 'Referencia',
      descripcion: 'Solo refiere pacientes a Urologik.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      nivel: 'Nivel 2',
      rol: 'Ref. + Asistencia',
      descripcion: 'Refiere y asiste durante el procedimiento.',
      color: 'bg-green-50 border-green-200'
    },
    {
      nivel: 'Nivel 3',
      rol: 'Interpretación',
      descripcion: 'Interpreta y firma los reportes de resultados.',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      nivel: 'Nivel 4',
      rol: 'Urodinamista Titular',
      descripcion: 'Realiza el procedimiento de forma autónoma.',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen page-transition">
      <Helmet>
        <title>Modelo de Colaboración para Médicos Urólogos | Urologik</title>
        <meta 
          name="description" 
          content="Únete al modelo de participación progresiva de Urologik. Ofrece estudios urodinámicos de vanguardia sin inversión ni operación. Descarga la guía completa del programa de colaboración." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Stethoscope className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Modelo B2B para Urólogos Aliados
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Ofrece Estudios Urodinámicos de Vanguardia. Sin Inversión. Sin Operación.
              </h1>
              
              <p className="text-lg text-primary font-semibold">
                Convierte tu consultorio en un centro de diagnóstico urológico sin inversión, sin operación y sin riesgo. Gana más, trabaja menos.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Nosotros nos encargamos de la tecnología, la logística y el personal. Tú te enfocas en tus pacientes y aumentas tus ingresos a través de nuestro modelo de participación progresiva.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="cta-button text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform"
                  onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/urologik/medicos-interesados?hide_gdpr_banner=1'})}
                >
                  Agendar una Demostración
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FileCheck className="mr-2 h-5 w-5" />
                  Descargar Guía PDF
                </Button>
              </div>
            </div>
            
            {/* Card de potencial de ingresos — conceptual, sin montos exactos */}
            <div className="relative">
              <div className="medical-card p-8 bg-gradient-to-br from-white to-secondary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Potencial de Ingresos Mensuales
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Inicio (5 estudios/mes)</span>
                    <span className="text-base font-semibold text-primary">Ingresos desde el Nivel 1</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Crecimiento (10 estudios/mes)</span>
                    <span className="text-base font-semibold text-primary">Ingresos crecientes por nivel</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg border-2 border-accent">
                    <span className="text-sm font-medium text-foreground">Máximo (15+ estudios/mes)</span>
                    <span className="text-base font-bold text-accent">Hasta 5 cifras mensuales</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Los montos exactos por nivel y tipo de estudio están disponibles en la{' '}
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="text-primary font-medium hover:underline"
                    >
                      Guía Completa del Programa
                    </button>
                    . Descárgala gratis.
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  *Ejemplos ilustrativos basados en estudios presión-flujo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Participación Progresiva — Vista previa con content gate */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Modelo de Participación Progresiva
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avanza en tu colaboración conforme adquieres experiencia. Cada nivel tiene requisitos y plazos claros (6 meses por nivel).
            </p>
          </div>

          {/* Vista previa de los 4 niveles — sin montos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {modeloPreview.map((nivel, index) => (
              <div key={index} className={`rounded-xl border p-5 ${nivel.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{nivel.nivel}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{nivel.rol}</h3>
                <p className="text-sm text-muted-foreground">{nivel.descripcion}</p>
              </div>
            ))}
          </div>

          {/* Content Gate — CTA para descargar la guía con email */}
          <div className="medical-card p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 text-center max-w-2xl mx-auto">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Accede a los Detalles Completos del Programa
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Los honorarios por nivel, los requisitos de avance y los ejemplos de ingresos mensuales están disponibles en nuestra Guía Completa del Programa de Colaboración. Déjanos tu correo y la recibirás de inmediato.
            </p>
            <Button
              size="lg"
              className="cta-button text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <Mail className="mr-2 h-5 w-5" />
              Recibir Guía Completa
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Sin spam. Solo información relevante sobre el programa de colaboración.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios de la Colaboración */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Por qué colaborar con Urologik?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más que un modelo de referencia, es una alianza estratégica para el crecimiento de tu práctica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficiosColaboracion.map((beneficio, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {beneficio.icon}
                    <CardTitle className="text-xl">{beneficio.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {beneficio.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos para Unirse */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Cómo unirme al programa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple y transparente para comenzar a colaborar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasosUnirse.map((paso, index) => (
              <Card key={index} className="medical-card text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {paso.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{paso.paso}</div>
                  <CardTitle className="text-lg mb-2">{paso.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {paso.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso a Equipo de Alquiler */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="medical-card p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Handshake className="h-12 w-12 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">
                Acceso Preferente a Alquiler de Equipo
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Como médico colaborador de Urologik, tienes acceso preferente a nuestro catálogo de alquiler de equipo médico de alta especialidad: láser de holmio, torre de urología, cistoscopios, instrumental y consumibles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground">Tarifas preferenciales para colaboradores</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground">Prioridad en disponibilidad de equipo</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground">Soporte técnico y logístico incluido</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-base text-muted-foreground">Opción de upselling a tus pacientes</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/renta/laser-holmio-lumenis">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Catálogo de Equipos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            ¿Listo para Transformar tu Práctica Urológica?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una demostración sin compromiso y descubre cómo el modelo de colaboración de Urologik puede impulsar tu práctica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cta-button text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform"
              onClick={() => window.Calendly.initPopupWidget({url: 'https://calendly.com/urologik/medicos-interesados?hide_gdpr_banner=1'})}
            >
              Agendar Demostración Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Descargar Guía PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Modal de descarga PDF — requiere email */}
      <PdfDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ParaMedicos;
