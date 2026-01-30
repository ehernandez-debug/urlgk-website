import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Star, Award, Zap, Users, Package, Video, Wrench } from 'lucide-react';

// Mock data for champions program
const championsBenefits = [
  { title: 'Comisiones por Referido', description: 'Gana una comisión por cada nuevo médico que rente gracias a tu recomendación.', icon: <Award className="h-8 w-8 text-primary" /> },
  { title: 'Acceso Prioritario', description: 'Disfruta de prioridad en la agenda para la renta de equipos, incluso en temporada alta.', icon: <Zap className="h-8 w-8 text-primary" /> },
  { title: 'Tarifas Preferenciales', description: 'Accede a descuentos exclusivos en la renta de equipos y consumibles.', icon: <Star className="h-8 w-8 text-primary" /> },
];

// Adapted comparison data for the Urology Tower
const comparisonData = [
    { feature: 'Inversión Inicial en Equipo', urologik: 'Sin Inversión', competencia: 'Elevada' },
    { feature: 'Costo de Mantenimiento', urologik: 'Incluido', competencia: 'Costo Adicional' },
    { feature: 'Soporte Técnico en Procedimiento', urologik: true, competencia: false },
    { feature: 'Capacitación de Personal Incluida', urologik: true, competencia: false },
    { feature: 'Logística y Traslado del Equipo', urologik: true, competencia: false },
    { feature: 'Integración con Estudios de Urodinamia', urologik: true, competencia: false },
];

const LpTorreUrologia = () => {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Torre de Urología Stryker: Visualización HD para tus Procedimientos</h1>
                  <p className="mt-4 text-lg md:text-xl text-muted-foreground">Sistema completo de video-endoscopia. Ideal para diagnósticos precisos y procedimientos guiados por imagen. Soporte técnico integral.</p>
                  <div className="mt-8 flex gap-4 justify-center md:justify-start">
                      <Button size="lg" asChild><a href="/contacto?service=demo-torre-urologia">Agendar Demo</a></Button>
                      <Button size="lg" variant="outline" asChild><a href="/contacto?service=cotizacion-torre-urologia">Solicitar Cotización Institucional</a></Button>
                  </div>
              </div>
              <div>
                  <img src="/images/equipos/torre_urologia_stryker_1588_1.jpg" alt="Torre de Urología Stryker 1588" className="rounded-lg shadow-xl mx-auto" />
              </div>
          </div>
      </section>

      {/* 2. Integral Solution Section */}
      <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">Una Solución de Diagnóstico y Tratamiento Completa</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                  <Card><CardHeader><Video className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Torre Completa</CardTitle></CardHeader><CardContent>Sistema Stryker 1588/1688 con todos sus componentes.</CardContent></Card>
                  <Card><CardHeader><Wrench className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Instrumental Complementario</CardTitle></CardHeader><CardContent>Cistoscopios, ureteroscopios y accesorios disponibles.</CardContent></Card>
                  <Card><CardHeader><Users className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Asistencia Técnica In-Situ</CardTitle></CardHeader><CardContent>Ingeniero biomédico presente en tu procedimiento.</CardContent></Card>
                  <Card><CardHeader><Award className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Capacitación y Soporte</CardTitle></CardHeader><CardContent>Entrenamiento para tu personal médico y de enfermería.</CardContent></Card>
                  <Card className="border-primary border-2"><CardHeader><CheckCircle className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Sinergia Diagnóstica</CardTitle></CardHeader><CardContent>Combina la visualización de la torre con la funcionalidad de nuestros estudios de urodinamia.</CardContent></Card>
              </div>
              <p className="text-center mt-8 text-xl font-semibold">Desde <span className="text-primary">$9,000 MXN</span> dependiendo procedimiento en CDMX y Area metropolitana.</p>
          </div>
      </section>

      {/* 3. Champions Program Section */}
      <section className="py-16">
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

      {/* 4. Comparison Section */}
      <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">La Diferencia Urologik</h2>
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                              <th className="p-4 font-semibold text-sm">Característica</th>
                              <th className="p-4 font-semibold text-center text-sm text-primary">UROLOGIK</th>
                              <th className="p-4 font-semibold text-center text-sm">COMPETENCIA</th>
                          </tr>
                      </thead>
                      <tbody>
                          {comparisonData.map(({ feature, urologik, competencia }, index) => (
                              <tr key={feature} className="dark:bg-gray-800/50">
                                  <td className="p-4 font-medium">{feature}</td>
                                  <td className="p-4 text-center">
                                    {typeof urologik === 'boolean' ?
                                      (urologik ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-gray-400 mx-auto" />) :
                                      <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">{urologik}</span>
                                    }
                                  </td>
                                  <td className="p-4 text-center">
                                    {typeof competencia === 'boolean' ?
                                      (competencia ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />) :
                                      <span className="font-semibold text-muted-foreground text-sm">{competencia}</span>
                                    }
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                </div>
              </Card>
          </div>
      </section>

      {/* 5. Additional Sections */}
      <section className="py-16">
          <div className="container mx-auto px-4 space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">¿Por Qué la Torre Stryker?</h2>
                    <p className="text-muted-foreground mb-4">La plataforma de cámara Stryker 1588 y 1688 AIM es el estándar de oro en visualización endoscópica. Ofrece una calidad de imagen superior y una funcionalidad avanzada que son cruciales para procedimientos urológicos de precisión.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold">Calidad de Imagen HD:</span> Claridad excepcional para una mejor anatomía y diagnóstico.</li>
                        <li><span className="font-semibold">Iluminación LED Brillante:</span> Visualización clara y consistente sin el calor de las fuentes de Xenón.</li>
                        <li><span className="font-semibold">Compatibilidad Universal:</span> Se adapta a una amplia gama de endoscopios rígidos y flexibles.</li>
                    </ul>
                </div>
                <img src="/images/equipos/stryker-1588-aim-cam.jpg" alt="Cámara Stryker 1588 AIM" className="rounded-lg shadow-lg mx-auto"/>
              </div>
              <div className="text-center bg-muted p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-4">Ideal para Médicos que Operan en Múltiples Hospitales</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">Con nuestro servicio de renta, garantizas que siempre trabajarás con el mismo equipo de alta calidad, sin importar la infraestructura del hospital. Ofrece un estándar de atención consistente a todos tus pacientes.</p>
              </div>
              <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4 text-center">Proceso de Renta en 3 Pasos</h2>
                  <ol className="list-decimal list-inside space-y-4 md:w-3/4 mx-auto">
                    <li><span className="font-semibold">Contacto y Cotización:</span> Solicita una cotización y agenda las fechas para tu procedimiento.</li>
                    <li><span className="font-semibold">Logística y Preparación:</span> Coordinamos la entrega del equipo en tu hospital 24h antes y preparamos el quirófano.</li>
                    <li><span className="font-semibold">Procedimiento y Recolección:</span> Nuestro ingeniero te asiste durante el procedimiento y nosotros nos encargamos de retirar el equipo.</li>
                  </ol>
              </div>
          </div>
      </section>

    </div>
  );
};

export default LpTorreUrologia;
