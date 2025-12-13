import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Zap, Briefcase, PlusCircle, Award, TrendingUp, CheckCircle, Star, Users, Stethoscope, Info, Plus, Minus, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

const MedicosPage = () => {
  return (
    <>
      <Helmet>
        <title>Para Médicos - Colaboración Diagnóstica | UROLOGIK</title>
        <meta name="description" content="Colabora con Urologik en el proceso diagnóstico urológico. Expande tus servicios sin invertir en equipo, manteniendo tu responsabilidad clínica."/>
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeroB2B />
        <ValueProposition />
        <CollaborationModel />
        <InteractiveCalculator />
        <BillingFlow />
        <AdvisoryCommittee />
        <EquipmentRental />
        <Testimonials />
        <SimplifiedProcess />
        <CalendlyEmbed />
      </div>
    </>
  );
};

const HeroB2B = () => (
  <section className="hero-section bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold py-1 px-3 rounded-full mb-4">Para Médicos Especialistas</div>
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Expande tus Servicios, Aumenta tus Ingresos</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Colabora con Urologik en el proceso diagnóstico urológico de tus pacientes, sin invertir en equipo.</p>
    </div>
  </section>
);

const ValueProposition = () => (
  <section className="section-padding text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12">¿Por Qué Colaborar con Urologik?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard Icon={Zap} title="Tecnología de Punta" description="Equipos de última generación para diagnósticos precisos." />
        <InfoCard Icon={Briefcase} title="Soporte Integral" description="Ingeniero biomédico y técnicos a tu disposición." />
        <InfoCard Icon={DollarSign} title="Modelo Flexible de Colaboración" description="Honorarios escalonados según volumen de estudios." />
      </div>
    </div>
  </section>
);

const CollaborationModel = () => (
  <section id="modelo" className="section-padding bg-muted/30">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Modelo de Colaboración Diagnóstica Integral</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Un modelo de colaboración profesional donde mantienes tu responsabilidad clínica y participas activamente en el proceso diagnóstico de tus pacientes.
        </p>
      </div>
      
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Stethoscope className="h-10 w-10 text-primary" />
            <div>
              <CardTitle className="text-2xl">Colaboración Diagnóstica Activa</CardTitle>
              <CardDescription className="mt-2">
                Tú evalúas, indicas y das seguimiento. Nosotros realizamos el estudio con nuestro equipo especializado.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Proceso de Colaboración */}
          <div>
            <h4 className="font-semibold mb-3">Tu Rol en el Proceso Diagnóstico:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Evalúas al paciente y determinas la indicación clínica del estudio</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Explicas el procedimiento y sus beneficios al paciente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Revisas los resultados con el equipo de Urologik</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Interpretas los hallazgos en el contexto clínico del paciente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Das seguimiento y ajustas el tratamiento según resultados</span>
              </li>
            </ul>
          </div>

          {/* Tabla de Honorarios */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-center">Honorarios por Colaboración Diagnóstica</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Volumen de Estudios Mensuales</TableHead>
                  <TableHead className="text-right">Honorarios</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1-5 estudios/mes</TableCell>
                  <TableCell className="text-right font-bold text-primary">10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6-10 estudios/mes</TableCell>
                  <TableCell className="text-right font-bold text-primary">15%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>&gt;10 estudios/mes</TableCell>
                  <TableCell className="text-right font-bold text-primary">20%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Disclaimer Ético */}
          <Alert className="border-primary/50 bg-primary/5">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Compromiso Ético:</strong> Esta colaboración se basa exclusivamente en el beneficio clínico del paciente. 
              Los honorarios corresponden a tu participación activa en el proceso diagnóstico, no al acto de indicar el estudio. 
              Mantienes tu responsabilidad profesional y autonomía clínica en todo momento.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  </section>
);

const InteractiveCalculator = () => {
  const [selectedServices, setSelectedServices] = useState({});

  const predefinedServices = [
    { id: 'urodinamia-multicanal', name: 'Urodinamia Multicanal y EMG (Pediátrica)', price: 5300 },
    { id: 'uroflujometria-pediatrica-emg', name: 'Uroflujometría Pediátrica con EMG', price: 2000 },
    { id: 'uroflujometria-basica', name: 'Uroflujometría Básica (Adultos)', price: 1500 },
    { id: 'uroflujometria-ultrasonido', name: 'Uroflujometría con Ultrasonido (Adultos)', price: 2000 },
    { id: 'uroflujometria-interpretacion', name: 'Uroflujometría con Interpretación (Adultos)', price: 2500 },
  ];

  const handleServiceCheck = (serviceId, isChecked) => {
    setSelectedServices(prev => {
        const newSelection = {...prev};
        if (isChecked) newSelection[serviceId] = 1;
        else delete newSelection[serviceId];
        return newSelection;
    });
  };

  const handleQuantityChange = (serviceId, change) => {
    setSelectedServices(prev => {
        const currentQuantity = prev[serviceId] || 0;
        const newQuantity = currentQuantity + change;
        if (newQuantity <= 0) {
            const newSelection = {...prev};
            delete newSelection[serviceId];
            return newSelection;
        } else {
            return { ...prev, [serviceId]: newQuantity };
        }
    });
  };

  const totalStudies = Object.values(selectedServices).reduce((sum, count) => sum + count, 0);

  const calculateIncome = () => {
    const totalRevenue = predefinedServices.reduce((sum, service) => {
        const count = selectedServices[service.id] || 0;
        return sum + (count * service.price);
    }, 0);
    
    let honorariosRate = 0;
    if (totalStudies >= 1 && totalStudies <= 5) honorariosRate = 0.10;
    else if (totalStudies >= 6 && totalStudies <= 10) honorariosRate = 0.15;
    else if (totalStudies > 10) honorariosRate = 0.20;
    
    return totalRevenue * honorariosRate;
  };
  
  let resultTextSize = 'text-2xl';
  if (totalStudies > 10) {
    resultTextSize = 'text-4xl';
  } else if (totalStudies >= 6) {
    resultTextSize = 'text-3xl';
  }

  return (
    <section id="calculadora" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Calculadora de Honorarios por Colaboración</CardTitle>
            <CardDescription>
              Selecciona los estudios que indicarías mensualmente para calcular tus honorarios potenciales por colaboración diagnóstica.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Estudios Indicados al Mes:</h3>
              <p className="text-sm text-muted-foreground italic">*Precios únicamente ilustrativos para fines de cálculo.</p>
              {predefinedServices.map(service => (
                <div key={service.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 border">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id={service.id} 
                      checked={!!selectedServices[service.id]} 
                      onCheckedChange={(isChecked) => handleServiceCheck(service.id, isChecked)} 
                    />
                    <Label htmlFor={service.id} className="font-normal cursor-pointer">
                      {service.name} <span className="text-muted-foreground">(${service.price.toLocaleString('es-MX')})</span>
                    </Label>
                  </div>
                  {selectedServices[service.id] && (
                      <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full" 
                            onClick={() => handleQuantityChange(service.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-bold text-lg w-10 text-center">{selectedServices[service.id]}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full" 
                            onClick={() => handleQuantityChange(service.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                      </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Total de Estudios:</span>
                <span className="font-semibold">{totalStudies}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Porcentaje de Honorarios:</span>
                <span className="font-semibold">
                  {totalStudies === 0 ? '0%' : totalStudies <= 5 ? '10%' : totalStudies <= 10 ? '15%' : '20%'}
                </span>
              </div>
            </div>

            <div className={`text-center font-bold text-primary pt-4 border-t transition-all duration-300 ${resultTextSize}`}>
              Honorarios Mensuales Estimados: ${calculateIncome().toLocaleString('es-MX', { minimumFractionDigits: 2 })}
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Los honorarios se calculan sobre el precio del estudio y corresponden a tu participación activa en el proceso diagnóstico.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

const BillingFlow = () => (
    <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Flujo de Facturación Transparente</h2>
              <p className="text-muted-foreground mt-2">Proceso claro y profesional de principio a fin</p>
            </div>
            <div className="relative">
                <div className="absolute w-full h-1 bg-primary/20 top-1/2 -translate-y-1/2"></div>
                <div className="relative flex justify-between">
                    <FlowStep num="1" text="Evalúas al paciente e indicas el estudio." />
                    <FlowStep num="2" text="Urologik realiza el estudio y factura al paciente (CFDI)." />
                    <FlowStep num="3" text="Conciliación mensual y cálculo de honorarios." />
                    <FlowStep num="4" text="Urologik emite pago de honorarios al médico." />
                </div>
            </div>
        </div>
    </section>
);

const AdvisoryCommittee = () => (
    <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Info className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestro Comité Asesor Clínico</h2>
            <p className="text-muted-foreground mb-6">
              Buscamos expertos como tú para co-desarrollar nuestro uroflujómetro con IA. 
              Participa, aporta tu visión clínica y obtén beneficios exclusivos como descuentos y honorarios preferenciales.
            </p>
            <Button asChild className="transition-transform duration-300 hover:scale-105">
              <a href="#contacto">Quiero ser parte</a>
            </Button>
        </div>
    </section>
);

const EquipmentRental = () => (
  <section id="renta" className="section-padding bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">Nuestro Equipamiento Especializado</h2>
        <p className="text-muted-foreground mt-2">Tecnología de vanguardia para diagnósticos precisos</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EquipmentCard 
          title="Torres de Urodinamia Multicanal" 
          features={[
            'Análisis completo de la función vesical', 
            'Software avanzado con reportes automáticos', 
            'Ideal para casos complejos'
          ]} 
        />
        <EquipmentCard 
          title="Sensores EMG y UPP" 
          features={[
            'Evaluación de piso pélvico y esfínter', 
            'Integración con torre de urodinamia', 
            'Precisión para diagnóstico de incontinencia'
          ]} 
        />
        <EquipmentCard 
          title="Uroflujómetros Inalámbricos" 
          features={[
            'Estudios no invasivos y rápidos', 
            'Conexión Bluetooth a tablet', 
            'Perfecto para consulta diaria'
          ]} 
        />
      </div>
      <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-2">Contamos con 1 año de operación exitosa con equipo propio.</p>
          <p className="font-semibold mb-6">Soporte técnico garantizado por nuestro equipo de ingeniería biomédica.</p>
          <Button asChild variant="outline">
            <a href="#contacto">Agendar Demostración</a>
          </Button>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonios = [
    { 
      nombre: 'Dr. Carlos Mendoza', 
      especialidad: 'Urólogo', 
      testimonio: 'La colaboración con Urologik me ha permitido ofrecer estudios especializados sin la inversión en equipos. Excelente soporte técnico y proceso transparente.' 
    },
    { 
      nombre: 'Dra. Ana Rodríguez', 
      especialidad: 'Ginecouróloga', 
      testimonio: 'Los equipos son de primera calidad y el proceso es muy eficiente. Mis pacientes están muy satisfechos con la atención y los resultados.' 
    },
    { 
      nombre: 'Dr. Miguel Torres', 
      especialidad: 'Uropediatra', 
      testimonio: 'Especialmente valioso para casos pediátricos. El equipo especializado hace la diferencia en el diagnóstico y el trato con los niños es excepcional.' 
    },
  ];
  
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Lo que Dicen Nuestros Colegas</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Testimonios de médicos colaboradores. Los resultados pueden variar según cada caso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
};

const SimplifiedProcess = () => (
  <section className="section-padding bg-muted/30 text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comienza a Colaborar en 72 Horas</h2>
      <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
        Proceso simple y rápido para que puedas empezar a ofrecer estudios especializados a tus pacientes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard Icon={PlusCircle} title="1. Regístrate" description="Completa el formulario de registro" />
        <InfoCard Icon={Award} title="2. Capacitación" description="Conoce el proceso y los equipos" />
        <InfoCard Icon={TrendingUp} title="3. Comienza a Colaborar" description="Indica estudios y genera honorarios" />
      </div>
    </div>
  </section>
);

const CalendlyEmbed = () => {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
          if (script.parentNode) {
              document.body.removeChild(script);
          }
      }
  }, []);

  return (
      <section id="contacto" className="section-padding scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card>
                  <CardHeader>
                      <CardTitle>Agenda una Demostración</CardTitle>
                      <CardDescription>
                          Elige el horario que mejor te convenga para una demostración personalizada y resolver todas tus dudas sobre el modelo de colaboración.
                      </CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div 
                          className="calendly-inline-widget" 
                          data-url="https://calendly.com/urologik/medicos-interesados?hide_gdpr_banner=1" 
                          style={{ minWidth: '320px', height: '700px' }}
                      >
                      </div>
                  </CardContent>
              </Card>
          </div>
      </section>
  );
};

// Helper Components
const InfoCard = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="bg-primary/10 p-4 rounded-full mb-4">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {description && <p className="text-muted-foreground text-sm">{description}</p>}
  </div>
);

const FlowStep = ({ num, text }) => (
  <div className="flex flex-col items-center text-center w-1/5">
    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-2 z-10 shadow-lg">
      {num}
    </div>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

const EquipmentCard = ({ title, features }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{f}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ nombre, especialidad, testimonio }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-muted-foreground italic mb-4">\"{testimonio}\"</p>
      <div className="border-t pt-4">
        <p className="font-semibold">{nombre}</p>
        <p className="text-sm text-muted-foreground">{especialidad}</p>
      </div>
    </CardContent>
  </Card>
);

export default MedicosPage;
