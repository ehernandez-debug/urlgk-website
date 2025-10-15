import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Zap, Briefcase, PlusCircle, Award, TrendingUp, CheckCircle, Star, Loader2, AlertCircle, Users, FileText, Share2, Lightbulb, UserCheck, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { medicoSchema } from '@/validators/medico';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toE164 } from '@/services/phones';
import { createMedicoUniqueByPhone } from '@/services/medicos';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from 'framer-motion';

const MedicosPage = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [utmParams, setUtmParams] = useState({});
  const [t0, setT0] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(medicoSchema) });

  useEffect(() => {
    // Load Calendly widget scripts
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    
    // Set initial timestamp and UTM params
    setT0(Date.now());
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {};
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith('utm_')) utms[key] = value;
    }
    setUtmParams(utms);

    // Cleanup function
    return () => {
      if (link.parentNode) document.head.removeChild(link);
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  const onSubmit = async (data) => {
    setStatus('loading');
    if (data.website || (Date.now() - t0 < 1500)) {
      setStatus(data.website ? 'success' : 'error');
      if (!data.website) setErrorMessage("Por favor verifica los datos.");
      return;
    }
    
    try {
      const phoneE164 = toE164(data.phoneRaw);
      if (!phoneE164) throw new Error('Teléfono inválido.');
      await createMedicoUniqueByPhone({ ...data, ...utmParams }, phoneE164);
      setStatus('success');
    } catch (error) {
      setErrorMessage(error.message === 'duplicate_phone' ? 'Este teléfono ya está registrado.' : 'Hubo un problema al procesar tu solicitud.');
      setStatus('error');
    }
  };
  
  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/urologik/medicos-interesados?hide_gdpr_banner=1'});
    }
  }

  if (status === 'success') {
    return <FormStatus title="¡Registro Exitoso!" message="Hemos recibido tu solicitud. Nuestro equipo te contactará en 24 horas." Icon={CheckCircle} iconClass="text-green-500" />;
  }

  if (status === 'error') {
    return <FormStatus title="Error en el Registro" message={errorMessage} Icon={AlertCircle} iconClass="text-red-500" buttonText="Volver al Formulario" onButtonClick={() => setStatus('idle')} />;
  }

  return (
    <>
      <Helmet>
        <title>Para Médicos - Modelos de Colaboración | UROLOGIK</title>
        <meta name="description" content="Descubre nuestros modelos de colaboración para médicos: por referencia o por uso de equipo. Aumenta tus ingresos y expande tus servicios."/>
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeroB2B />
        <ValueProposition />
        <OperationalModels />
        <BillingFlow />
        <AdvisoryCommittee onCalendlyClick={handleCalendlyClick} />
        <EquipmentRental onCalendlyClick={handleCalendlyClick} />
        <Testimonials />
        <SimplifiedProcess />
        <ProfessionalForm {...{ register, handleSubmit, errors, setValue, status, onSubmit }} />
      </div>
    </>
  );
};

const FormStatus = ({ title, message, Icon, iconClass, buttonText, onButtonClick }) => (
  <div className="min-h-screen hero-section flex items-center justify-center">
    <Card className="text-center w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <Icon className={`h-16 w-16 mx-auto mb-4 ${iconClass}`} />
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground mb-4">{message}</p>
        {buttonText && <Button className="w-full mt-6" onClick={onButtonClick}>{buttonText}</Button>}
      </CardContent>
    </Card>
  </div>
);

const HeroB2B = () => (
  <section className="hero-section bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold py-1 px-3 rounded-full mb-4">Para Médicos Especialistas</div>
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Expande tus Servicios, Aumenta tus Ingresos</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Colabora con Urologik y ofrece estudios de diagnóstico urológico de vanguardia sin invertir en equipo.</p>
    </div>
  </section>
);

const ValueProposition = () => (
  <section className="section-padding text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12">¿Por Qué Colaborar con Urologik?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard Icon={Zap} title="Tecnología de Punta" />
        <InfoCard Icon={Briefcase} title="Soporte Integral" description="Ingeniero biomédico y técnicos a tu disposición." />
        <InfoCard Icon={DollarSign} title="Modelos Flexibles de Ingresos" />
      </div>
    </div>
  </section>
);

const OperationalModels = () => (
  <section id="modelos" className="section-padding bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold">Modelos Operativos Flexibles</h2></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ModelCard title="Modelo A: Referencia" Icon={Share2} description="Tú refieres al paciente, nosotros nos encargamos del resto.">
          <CommissionTable title="Comisión por Referencia" data={[[ '1-5 estudios/mes', '10%'], ['6-10 estudios/mes', '15%'], ['>10 estudios/mes', '20%']]} />
        </ModelCard>
        <ModelCard title="Modelo B: Uso de Equipo" Icon={Users} description="Tú realizas el estudio utilizando nuestro equipo en tu consultorio.">
          <CommissionTable title="Revenue Share para Ti" data={[[ '1-3 estudios/mes', '50%'], ['4-6 estudios/mes', '55%'], ['7-10 estudios/mes', '60%'], ['>10 estudios/mes', '65%']]} />
        </ModelCard>
      </div>
    </div>
  </section>
);

const BillingFlow = () => (
    <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold">Flujo de Facturación Transparente</h2></div>
            <div className="relative">
                <div className="absolute w-full h-1 bg-muted top-1/2 -translate-y-1/2"></div>
                <div className="relative flex justify-between">
                    <FlowStep num="1" text="Se realiza el estudio (Urologik o Médico)." />
                    <FlowStep num="2" text="Urologik factura al paciente y genera CFDI." />
                    <FlowStep num="3" text="Conciliación mensual y cálculo automático de comisión." />
                    <FlowStep num="4" text="Urologik emite pago al médico." />
                </div>
            </div>
        </div>
    </section>
);

const AdvisoryCommittee = ({ onCalendlyClick }) => (
    <section className="section-padding bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Info className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestro Comité Asesor Clínico</h2>
            <p className="text-muted-foreground mb-6">Buscamos expertos como tú para co-desarrollar nuestro uroflujómetro con IA. Participa, aporta tu visión clínica y obtén beneficios exclusivos como descuentos y un revenue share preferencial.</p>
            <Button onClick={onCalendlyClick}>Quiero ser parte</Button>
        </div>
    </section>
);

const EquipmentRental = ({ onCalendlyClick }) => (
  <section id="renta" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold">Renta de Equipos de Urodinamia</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EquipmentCard title="Torres de Urodinamia Multicanal" features={['Análisis completo de la función vesical', 'Software avanzado con reportes automáticos', 'Ideal para casos complejos']} />
        <EquipmentCard title="Sensores EMG y UPP" features={['Evaluación de piso pélvico y esfínter', 'Integración con torre de urodinamia', 'Precisión para diagnóstico de incontinencia']} />
        <EquipmentCard title="Uroflujómetros Inalámbricos" features={['Estudios no invasivos y rápidos', 'Conexión Bluetooth a tablet', 'Perfecto para consulta diaria']} />
      </div>
      <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-2">Contamos con 1 año de operación exitosa con equipo propio.</p>
          <p className="font-semibold mb-6">Soporte técnico garantizado por nuestro equipo de ingeniería biomédica.</p>
          <Button variant="outline" onClick={onCalendlyClick}>Agendar Demostración</Button>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonios = [
    { nombre: 'Dr. Carlos Mendoza', especialidad: 'Urólogo', testimonio: 'La asociación con Urologik me ha permitido ofrecer estudios especializados sin la inversión en equipos. Excelente soporte técnico.' },
    { nombre: 'Dra. Ana Rodríguez', especialidad: 'Ginecouróloga', testimonio: 'Los equipos son de primera calidad y el proceso es muy eficiente. Mis pacientes están muy satisfechos.' },
    { nombre: 'Dr. Miguel Torres', especialidad: 'Uropediatra', testimonio: 'Especialmente valioso para casos pediátricos. El equipo especializado hace la diferencia en el diagnóstico.' },
  ];
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h2 className="text-3xl lg:text-4xl font-bold">Lo que Dicen Nuestros Colegas</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
};

const SimplifiedProcess = () => (
  <section className="section-padding text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-12">Activo en 72 Horas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard Icon={PlusCircle} title="1. Regístrate" />
        <InfoCard Icon={Award} title="2. Capacitación" />
        <InfoCard Icon={TrendingUp} title="3. Comienza a Generar" />
      </div>
    </div>
  </section>
);

const ProfessionalForm = ({ register, handleSubmit, errors, setValue, status, onSubmit }) => (
  <section id="registro" className="section-padding scroll-mt-20">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader><CardTitle>Formulario de Colaboración</CardTitle><CardDescription>Respuesta en menos de 24 horas.</CardDescription></CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="hidden"><Label htmlFor="website">Website</Label><Input id="website" {...register('website')} tabIndex="-1" autoComplete="off" /></div>
            <FormInput id="nombre" label="Nombre Completo" placeholder="Dr. Nombre Apellido" error={errors.nombre} {...register('nombre')} />
            <FormInput id="email" type="email" label="Email" placeholder="nombre@email.com" error={errors.email} {...register('email')} />
            <div className="space-y-2"><Label htmlFor="phoneRaw">Teléfono</Label><PhoneInput id="phoneRaw" placeholder="55 1234 5678" {...register('phoneRaw')} onChange={(value) => setValue('phoneRaw', value)} defaultCountry="MX" />{errors.phoneRaw && <p className="text-red-500 text-sm">{errors.phoneRaw.message}</p>}</div>
            <Button type="submit" className="w-full text-lg py-3" disabled={status === 'loading'}>{status === 'loading' ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : 'Solicitar Información'}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Helper Components
const InfoCard = ({ Icon, title, description }) => (<div className="flex flex-col items-center"><div className="bg-primary/10 p-4 rounded-full mb-4"><Icon className="h-8 w-8 text-primary" /></div><h3 className="text-xl font-semibold mb-2">{title}</h3>{description && <p className="text-muted-foreground">{description}</p>}</div>);
const ModelCard = ({ title, Icon, description, children }) => (<Card className="flex flex-col"><CardHeader><div className="flex items-center gap-4"><Icon className="h-10 w-10 text-primary" /><h3 className="text-2xl font-bold">{title}</h3></div><CardDescription className="mt-2">{description}</CardDescription></CardHeader><CardContent className="flex-grow flex flex-col">{children}</CardContent></Card>);
const CommissionTable = ({ title, data }) => (<div className="mt-4 flex-grow"><h4 className="font-semibold mb-3 text-center">{title}</h4><Table><TableHeader><TableRow><TableHead>Volumen de Estudios</TableHead><TableHead className="text-right">Comisión / Share</TableHead></TableRow></TableHeader><TableBody>{data.map(([vol, com], i) => <TableRow key={i}><TableCell>{vol}</TableCell><TableCell className="text-right font-bold text-primary">{com}</TableCell></TableRow>)}</TableBody></Table></div>);
const FlowStep = ({ num, text }) => (<div className="flex flex-col items-center text-center w-1/5"><div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-2 z-10">{num}</div><p className="text-sm text-muted-foreground">{text}</p></div>);
const EquipmentCard = ({ title, features }) => (<Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent><ul className="space-y-2">{features.map((f, i) => <li key={i} className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span>{f}</span></li>)}</ul></CardContent></Card>);
const TestimonialCard = ({ nombre, especialidad, testimonio }) => (<Card className="hover:shadow-lg transition-shadow"><CardContent className="pt-6"><div className="flex mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div><p className="text-muted-foreground italic mb-4">\"{testimonio}\"</p><div className="border-t pt-4"><p className="font-semibold">{nombre}</p><p className="text-sm text-muted-foreground">{especialidad}</p></div></CardContent></Card>);
const FormInput = ({ id, label, error, ...props }) => (<div className="space-y-2"><Label htmlFor={id}>{label}</Label><Input id={id} {...props} />{error && <p className="text-red-500 text-sm">{error.message}</p>}</div>);

export default MedicosPage;