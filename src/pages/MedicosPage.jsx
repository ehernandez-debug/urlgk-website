import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Zap, Briefcase, PlusCircle, Award, TrendingUp, CheckCircle, Star, Users, Share2, Info, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

const MedicosPage = () => {
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

const InteractiveCalculator = () => {
  const [model, setModel] = useState('a');
  const [modelAServices, setModelAServices] = useState({});
  
  // State for Model B
  const [modelBServices, setModelBServices] = useState([]);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServicePrice, setNewServicePrice] = useState("");

  const predefinedServices = [
    { id: 'urodinamia-multicanal', name: 'Urodinamia Multicanal y EMG (Pediátrica)', price: 5300 },
    { id: 'uroflujometria-pediatrica-emg', name: 'Uroflujometría Pediátrica con EMG', price: 2000 },
    { id: 'uroflujometria-basica', name: 'Uroflujometría Básica (Adultos)', price: 1500 },
    { id: 'uroflujometria-ultrasonido', name: 'Uroflujometría con Ultrasonido (Adultos)', price: 2000 },
    { id: 'uroflujometria-interpretacion', name: 'Uroflujometría con Interpretación (Adultos)', price: 2500 },
  ];

  // Model A handlers
  const handleModelACheck = (serviceId, isChecked) => {
    setModelAServices(prev => {
        const newSelection = {...prev};
        if (isChecked) newSelection[serviceId] = 1;
        else delete newSelection[serviceId];
        return newSelection;
    });
  };

  const handleModelAQuantityChange = (serviceId, change) => {
    setModelAServices(prev => {
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

  // Model B handlers
  const handleAddServiceB = () => {
    const price = parseFloat(newServicePrice);
    if (newServiceName && price > 0) {
      setModelBServices([...modelBServices, { id: Date.now(), name: newServiceName, price, quantity: 1 }]);
      setNewServiceName("");
      setNewServicePrice("");
    }
  };

  const handleModelBQuantityChange = (serviceId, change) => {
    setModelBServices(services => services.map(s => s.id === serviceId ? { ...s, quantity: Math.max(1, s.quantity + change) } : s));
  };

  const handleRemoveServiceB = (serviceId) => {
    setModelBServices(services => services.filter(s => s.id !== serviceId));
  };

  // Calculations
  const totalStudiesModelA = Object.values(modelAServices).reduce((sum, count) => sum + count, 0);
  const totalStudiesModelB = modelBServices.reduce((sum, s) => sum + s.quantity, 0);

  const calculateCommission = () => {
    if (model === 'a') {
      const totalRevenue = predefinedServices.reduce((sum, service) => {
          const count = modelAServices[service.id] || 0;
          return sum + (count * service.price);
      }, 0);
      let commissionRate = 0;
      if (totalStudiesModelA >= 1 && totalStudiesModelA <= 5) commissionRate = 0.10;
      else if (totalStudiesModelA >= 6 && totalStudiesModelA <= 10) commissionRate = 0.15;
      else if (totalStudiesModelA > 10) commissionRate = 0.20;
      return totalRevenue * commissionRate;
    } else {
      const totalRevenue = modelBServices.reduce((sum, s) => sum + (s.quantity * s.price), 0);
      let revenueShare = 0;
      if (totalStudiesModelB >= 1 && totalStudiesModelB <= 3) revenueShare = 0.50;
      else if (totalStudiesModelB >= 4 && totalStudiesModelB <= 6) revenueShare = 0.55;
      else if (totalStudiesModelB >= 7 && totalStudiesModelB <= 10) revenueShare = 0.60;
      else if (totalStudiesModelB > 10) revenueShare = 0.65;
      return totalRevenue * revenueShare;
    }
  };
  
  let resultTextSize = 'text-2xl';
  if (model === 'a') {
    if (totalStudiesModelA > 10) {
      resultTextSize = 'text-4xl';
    } else if (totalStudiesModelA >= 6) {
      resultTextSize = 'text-3xl';
    }
  } else { // model === 'b'
    if (totalStudiesModelB > 10) {
      resultTextSize = 'text-5xl';
    } else if (totalStudiesModelB >= 7) {
      resultTextSize = 'text-4xl';
    } else if (totalStudiesModelB >= 4) {
      resultTextSize = 'text-3xl';
    }
  }

  return (
    <section id="calculadora" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Calculadora Interactiva de Ingresos</CardTitle>
            <CardDescription>
              Selecciona un modelo y ajusta los valores para calcular tus ingresos potenciales.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={model} onValueChange={setModel} className="flex space-x-4">
              <div className="flex items-center space-x-2"><RadioGroupItem value="a" id="r1" /><Label htmlFor="r1">Modelo A: Referencia</Label></div>
              <div className="flex items-center space-x-2"><RadioGroupItem value="b" id="r2" /><Label htmlFor="r2">Modelo B: Uso de Equipo</Label></div>
            </RadioGroup>
            
            {model === 'a' ? (
              <div className="space-y-4">
                <h3 className="font-semibold">Selecciona los Estudios Referidos al Mes:</h3>
                <p className="text-sm text-muted-foreground italic">*Precios únicamente ilustrativos.</p>
                {predefinedServices.map(service => (
                  <div key={service.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Checkbox id={service.id} checked={!!modelAServices[service.id]} onCheckedChange={(isChecked) => handleModelACheck(service.id, isChecked)} />
                      <Label htmlFor={service.id} className="font-normal">{service.name} (${service.price.toLocaleString('es-MX')})</Label>
                    </div>
                    {modelAServices[service.id] && (
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleModelAQuantityChange(service.id, -1)}><Minus className="h-4 w-4" /></Button>
                            <span className="font-bold text-lg w-10 text-center">{modelAServices[service.id]}</span>
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleModelAQuantityChange(service.id, 1)}><Plus className="h-4 w-4" /></Button>
                        </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold">Agrega los Estudios que Realizas al Mes:</h3>
                <div className="flex space-x-2">
                  <Input placeholder="Nombre del Servicio" value={newServiceName} onChange={e => setNewServiceName(e.target.value)} />
                  <Input type="number" placeholder="Precio" value={newServicePrice} onChange={e => setNewServicePrice(e.target.value)} className="w-32"/>
                  <Button onClick={handleAddServiceB}>Agregar</Button>
                </div>
                <div className="space-y-2 pt-4">
                  {modelBServices.map(service => (
                    <div key={service.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                       <div>
                          <p className="font-semibold">{service.name}</p>
                          <p className="text-sm text-muted-foreground">${service.price.toLocaleString('es-MX')}</p>
                       </div>
                       <div className="flex items-center space-x-2">
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleModelBQuantityChange(service.id, -1)}><Minus className="h-4 w-4" /></Button>
                          <span className="font-bold text-lg w-10 text-center">{service.quantity}</span>
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleModelBQuantityChange(service.id, 1)}><Plus className="h-4 w-4" /></Button>
                          <Button variant="destructive" size="icon" className="h-8 w-8 rounded-full" onClick={() => handleRemoveServiceB(service.id)}><Trash2 className="h-4 w-4" /></Button>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`text-center font-bold text-primary pt-4 border-t transition-all duration-300 ${resultTextSize}`}>
              Ingreso Mensual Estimado: ${calculateCommission().toLocaleString('es-MX', { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

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

const AdvisoryCommittee = () => (
    <section className="section-padding bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Info className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Únete a Nuestro Comité Asesor Clínico</h2>
            <p className="text-muted-foreground mb-6">Buscamos expertos como tú para co-desarrollar nuestro uroflujómetro con IA. Participa, aporta tu visión clínica y obtén beneficios exclusivos como descuentos y un revenue share preferencial.</p>
            <Button asChild><a href="#contacto">Quiero ser parte</a></Button>
        </div>
    </section>
);

const EquipmentRental = () => (
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
          <Button asChild variant="outline"><a href="#contacto">Agendar Demostración</a></Button>
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
                          Elige el horario que mejor te convenga para una demostración y resolver todas tus dudas.
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
const InfoCard = ({ Icon, title, description }) => (<div className="flex flex-col items-center"><div className="bg-primary/10 p-4 rounded-full mb-4"><Icon className="h-8 w-8 text-primary" /></div><h3 className="text-xl font-semibold mb-2">{title}</h3>{description && <p className="text-muted-foreground">{description}</p>}</div>);
const ModelCard = ({ title, Icon, description, children }) => (<Card className="flex flex-col"><CardHeader><div className="flex items-center gap-4"><Icon className="h-10 w-10 text-primary" /><h3 className="text-2xl font-bold">{title}</h3></div><CardDescription className="mt-2">{description}</CardDescription></CardHeader><CardContent className="flex-grow flex flex-col">{children}</CardContent></Card>);
const CommissionTable = ({ title, data }) => (<div className="mt-4 flex-grow"><h4 className="font-semibold mb-3 text-center">{title}</h4><Table><TableHeader><TableRow><TableHead>Volumen de Estudios</TableHead><TableHead className="text-right">Comisión / Share</TableHead></TableRow></TableHeader><TableBody>{data.map(([vol, com], i) => <TableRow key={i}><TableCell>{vol}</TableCell><TableCell className="text-right font-bold text-primary">{com}</TableCell></TableRow>)}</TableBody></Table></div>);
const FlowStep = ({ num, text }) => (<div className="flex flex-col items-center text-center w-1/5"><div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-2 z-10">{num}</div><p className="text-sm text-muted-foreground">{text}</p></div>);
const EquipmentCard = ({ title, features }) => (<Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent><ul className="space-y-2">{features.map((f, i) => <li key={i} className="flex items-start space-x-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span>{f}</span></li>)}</ul></CardContent></Card>);
const TestimonialCard = ({ nombre, especialidad, testimonio }) => (<Card className="hover:shadow-lg transition-shadow"><CardContent className="pt-6"><div className="flex mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div><p className="text-muted-foreground italic mb-4">\"{testimonio}\"</p><div className="border-t pt-4"><p className="font-semibold">{nombre}</p><p className="text-sm text-muted-foreground">{especialidad}</p></div></CardContent></Card>);

export default MedicosPage;