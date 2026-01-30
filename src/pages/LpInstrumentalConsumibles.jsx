import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Award, Zap, Users, Package, CheckCircle, List, ThumbsUp, ShieldCheck, Truck } from 'lucide-react';

const championsBenefits = [
  { title: 'Comisiones por Referido', description: 'Gana una comisión por cada nuevo médico que rente gracias a tu recomendación.', icon: <Award className="h-8 w-8 text-primary" /> },
  { title: 'Acceso Prioritario', description: 'Disfruta de prioridad en la agenda y disponibilidad de material.', icon: <Zap className="h-8 w-8 text-primary" /> },
  { title: 'Tarifas Preferenciales', description: 'Accede a descuentos exclusivos en todo nuestro catálogo.', icon: <Star className="h-8 w-8 text-primary" /> },
];

const testimonials = [
    { name: 'Dr. Alejandro Pérez', specialty: 'Urólogo Pediatra', text: 'Urologik es mi proveedor de confianza para instrumental de hipospadias. Siempre tienen lo que necesito, cuando lo necesito.' },
    { name: 'Dra. Sofia Castillo', specialty: 'Uróloga', text: 'La calidad del instrumental de Cook Medical que me proveen es excepcional. Y el servicio de entrega es impecable.' },
];

const LpInstrumentalConsumibles = () => {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Instrumental y Consumibles para Todo Procedimiento Urológico</h1>
                  <p className="mt-4 text-lg md:text-xl text-muted-foreground">Catálogo completo de marcas premium (Karl Storz, Cook Medical, Laborie). Incluyendo todo lo necesario para estudios de urodinamia de alta complejidad. Disponible en 24 horas.</p>
                  <div className="mt-8 flex gap-4 justify-center md:justify-start">
                      <Button size="lg" asChild><a href="/contacto?service=catalogo-instrumental">Solicitar Catálogo Completo</a></Button>
                      <Button size="lg" variant="outline" asChild><a href="/contacto?service=especialista-instrumental">Hablar con un Especialista</a></Button>
                  </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                  <img src="/images/instrumental_karlstorz_urologia.webp" alt="Instrumental Karl Storz Urología" className="rounded-lg shadow-lg object-cover w-full h-full row-span-2" />
                  <img src="/images/instrumental_cook_lithotripsy_basket.jpg" alt="Canastilla Cook Medical" className="rounded-lg shadow-lg object-cover w-full h-full" />
                  <img src="/images/cateteres_laborie_urodinamia.webp" alt="Catéteres de Urodinamia Laborie" className="rounded-lg shadow-lg object-cover w-full h-full" />
              </div>
          </div>
      </section>

      {/* 2. Catalog Section */}
      <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">Un Catálogo para Cada Necesidad Clínica</h2>
              </div>
              <Tabs defaultValue="urodinamia" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                      <TabsTrigger value="urodinamia" className="font-semibold">Urodinamia</TabsTrigger>
                      <TabsTrigger value="hipospadias">Hipospadias</TabsTrigger>
                      <TabsTrigger value="litiasis">Litiasis</TabsTrigger>
                      <TabsTrigger value="orquidopexias">Orquidopexias</TabsTrigger>
                      <TabsTrigger value="incontinencia">Incontinencia</TabsTrigger>
                  </TabsList>
                  <Card className="mt-4 p-6">
                      <TabsContent value="urodinamia">
                          <h3 className="font-bold text-xl mb-4 text-primary">Urodinamia (Adultos y Pediátrica)</h3>
                          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-disc list-inside"><li>Catéteres de urodinamia de agua (Laborie)</li><li>Catéteres de cistometría de doble lumen</li><li>Electrodos de EMG de superficie y aguja</li><li>Transductores de presión</li><li>Domos para transductores</li><li>Software de análisis y reportes</li></ul>
                      </TabsContent>
                      <TabsContent value="hipospadias">
                          <h3 className="font-bold text-xl mb-4">Hipospadias y Reconstrucción Uretral</h3>
                          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-disc list-inside"><li>Pinzas de microcirugía (Karl Storz)</li><li>Tijeras de microcirugía</li><li>Porta-agujas de microcirugía</li><li>Catéteres uretrales pediátricos</li><li>Sondas de calibración uretral</li><li>Suturas especializadas (Ethicon, Vicryl)</li></ul>
                      </TabsContent>
                      <TabsContent value="litiasis">
                         <h3 className="font-bold text-xl mb-4">Litiasis Renal y Ureteral</h3>
                         <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-disc list-inside"><li>Canastillas de extracción (Cook, NGage)</li><li>Litotriptores (Soehendra, LithoClast)</li><li>Catéteres doble J (Cook Medical)</li><li>Guías de seguridad hidrofílicas (Terumo)</li><li>Dilatadores ureterales</li><li>Stents ureterales</li></ul>
                      </TabsContent>
                      <TabsContent value="orquidopexias">
                          <h3 className="font-bold text-xl mb-4">Orquidopexias y Cirugía Testicular</h3>
                          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-disc list-inside"><li>Pinzas de disección fina (Karl Storz)</li><li>Tijeras de microcirugía</li><li>Suturas especializadas (Prolene, PDS)</li><li>Instrumental de fijación testicular</li><li>Separadores pediátricos</li></ul>
                      </TabsContent>
                      <TabsContent value="incontinencia">
                          <h3 className="font-bold text-xl mb-4">Incontinencia Urinaria (Mallas y Slings)</h3>
                          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-disc list-inside"><li>Mallas de polipropileno TOT/TVT</li><li>Agujas de colocación de slings</li><li>Pinzas de tracción</li><li>Instrumental de ajuste de tensión</li><li>Cistoscopios 30° y 70° (Karl Storz)</li></ul>
                      </TabsContent>
                  </Card>
              </Tabs>
          </div>
      </section>

       {/* 3. Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Tu Proveedor Integral en Urología</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card><CardHeader><List className="h-10 w-10 text-primary"/><CardTitle>Catálogo Completo</CardTitle></CardHeader><CardContent>Más de 500 referencias de marcas premium: Karl Storz, Cook Medical, Laborie, Boston Scientific.</CardContent></Card>
                <Card><CardHeader><Users className="h-10 w-10 text-primary"/><CardTitle>Servicio Integral</CardTitle></CardHeader><CardContent>Asesoría especializada, logística express y soporte técnico 24/7.</CardContent></Card>
                <Card><CardHeader><Package className="h-10 w-10 text-primary"/><CardTitle>Flexibilidad</CardTitle></CardHeader><CardContent>Renta por procedimiento, paquetes mensuales o venta de consumibles.</CardContent></Card>
                <Card><CardHeader><ShieldCheck className="h-10 w-10 text-primary"/><CardTitle>Calidad Garantizada</CardTitle></CardHeader><CardContent>Certificación COFEPRIS para todo nuestro material. Trazabilidad completa.</CardContent></Card>
            </div>
        </div>
      </section>

      {/* 4. Champions Program Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Conviértete en Nuestro Aliado Estratégico</h2>
            <p className="mt-2 text-lg text-muted-foreground">Únete a nuestro Programa de Champions y obtén beneficios exclusivos que potencian tu práctica.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {championsBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-muted rounded-full h-16 w-16 flex items-center justify-center">{benefit.icon}</div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>{benefit.description}</CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild><a href="/contacto?program=champions">Unirme al Programa</a></Button>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-16">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Médicos que Confían en Urologik</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="p-6">
                          <CardContent>
                              <p className="text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                              <p className="mt-4 font-bold text-right">- {testimonial.name}, <span className="font-normal text-primary">{testimonial.specialty}</span></p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. Process Section */}
      <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Tu Instrumental en 3 Simples Pasos</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-4">1</div>
                      <h3 className="font-bold text-xl mb-2">Solicita tu Catálogo o Cotización</h3>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-4">2</div>
                      <h3 className="font-bold text-xl mb-2">Agenda tu Procedimiento</h3>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-4">3</div>
                      <h3 className="font-bold text-xl mb-2">Recibe tu Instrumental en 24h</h3>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default LpInstrumentalConsumibles;
