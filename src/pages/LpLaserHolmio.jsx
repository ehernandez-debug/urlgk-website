import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Star, Award, Zap, Users, Package } from 'lucide-react';

// Mock data for champions program
const championsBenefits = [
  { title: 'Comisiones por Referido', description: 'Gana una comisión por cada nuevo médico que rente gracias a tu recomendación.', icon: <Award className="h-8 w-8 text-primary" /> },
  { title: 'Acceso Prioritario', description: 'Disfruta de prioridad en la agenda para la renta de equipos, incluso en temporada alta.', icon: <Zap className="h-8 w-8 text-primary" /> },
  { title: 'Tarifas Preferenciales', description: 'Accede a descuentos exclusivos en la renta de equipos y consumibles.', icon: <Star className="h-8 w-8 text-primary" /> },
];

// Adjusted comparison data for clarity
const comparisonData = [
    { feature: 'Inversión Inicial en Equipo', urologik: 'Sin Inversión', competencia: 'Elevada' },
    { feature: 'Costo de Mantenimiento y Reparación', urologik: 'Incluido*', competencia: 'Costo Adicional' },
    { feature: 'Soporte Técnico en Quirófano', urologik: true, competencia: false },
    { feature: 'Capacitación de Personal Incluida', urologik: true, competencia: false },
    { feature: 'Logística y Traslado del Equipo', urologik: true, competencia: false },
    { feature: 'Integración con Estudios de Urodinamia', urologik: true, competencia: false },
];

const LpLaserHolmio = () => {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero Section (Adjusted) */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Láser de Holmio para Urología: Renta por Procedimiento con Soporte Integral</h1>
                  <p className="mt-4 text-lg md:text-xl text-muted-foreground">Realiza procedimientos de HoLEP y litiasis con tecnología de punta. <strong className="text-primary">Complementa tu diagnóstico con nuestros estudios de urodinamia.</strong> Sin inversión, sin mantenimiento, con asistencia técnica in-situ.</p>
                  <div className="mt-8 flex gap-4 justify-center md:justify-start">
                      <Button size="lg" asChild><a href="/contacto?service=demo-laser-holmio">Agendar Demo</a></Button>
                      <Button size="lg" variant="outline" asChild><a href="/contacto?service=cotizacion-laser-holmio">Solicitar Cotización</a></Button>
                  </div>
              </div>
              <div>
                  <img src="/images/equipos/laser_holmio_lumenis_pulse100h_1.jpg" alt="Láser de Holmio para urología" className="rounded-lg shadow-xl mx-auto" />
              </div>
          </div>
      </section>

      {/* 2. Rental Model Section (Adjusted) */}
      <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">Más que una Renta, una Alianza Estratégica</h2>
                  <p className="mt-2 text-lg text-muted-foreground">Nuestro modelo de renta está diseñado para maximizar tu eficiencia y capacidad diagnóstica.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                  <Card><CardHeader><Package className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Equipo Completo</CardTitle></CardHeader><CardContent>Láser Lumenis Pulse 100H listo para tu procedimiento.</CardContent></Card>
                  <Card><CardHeader><Users className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Asistencia Técnica In-Situ</CardTitle></CardHeader><CardContent>Ingeniero biomédico presente durante todo el procedimiento.</CardContent></Card>
                  <Card><CardHeader><Award className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Capacitación Incluida</CardTitle></CardHeader><CardContent>Entrenamiento especializado para tu equipo de quirófano.</CardContent></Card>
                  <Card><CardHeader><Zap className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Logística Integral</CardTitle></CardHeader><CardContent>Entrega y recolección en 24h en tu hospital.</CardContent></Card>
                  <Card className="border-primary border-2"><CardHeader><CheckCircle className="h-10 w-10 mx-auto text-primary" /><CardTitle className="mt-2">Diagnóstico Complementario</CardTitle></CardHeader><CardContent>Acceso preferencial a nuestros estudios de urodinamia para adultos y niños.</CardContent></Card>
              </div>
              <p className="text-center mt-8 text-xl font-semibold">Desde <span className="text-primary">$15,000 MXN</span> para CDMX y Área Metropolitana (sin IVA)</p>
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

      {/* 4. Comparison Section (Adjusted) */}
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
              <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">*Aplica bajo condiciones normales de uso y con supervisión de nuestro equipo técnico biomédico.</p>
          </div>
      </section>

      {/* 5. Additional Sections Placeholder */}
      <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">¿Por Qué el Láser de Holmio?</h2>
                  <p className="text-muted-foreground mb-4">El Láser de Holmio es el estándar de oro para procedimientos de HoLEP y litotricia. Su versatilidad, potencia y precisión garantizan resultados clínicos superiores, menor tiempo de quirófano y una recuperación más rápida para el paciente.</p>
                  <ul className="list-disc list-inside space-y-2">
                      <li>Máxima eficiencia en ablación y hemostasia.</li>
                      <li>Configuraciones personalizables para cada caso.</li>
                      <li>Reducción significativa del sangrado y tiempo de recuperación.</li>
                  </ul>
              </div>
              <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">Proceso de Renta en 3 Pasos</h2>
                  <ol className="list-decimal list-inside space-y-4">
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

export default LpLaserHolmio;
