import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ComisionesRepresentantesPage = () => {
  const comisionesModelo = [
    {
      rango: '$0 - $50,000',
      comision: '8%',
      ejemplo: '$4,000 MXN',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      rango: '$50,001 - $150,000',
      comision: '10%',
      ejemplo: '$15,000 MXN',
      color: 'bg-green-100 text-green-800'
    },
    {
      rango: '$150,001 - $300,000',
      comision: '12%',
      ejemplo: '$36,000 MXN',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      rango: '$300,001+',
      comision: '15%',
      ejemplo: '$45,000+ MXN',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const beneficiosAdicionales = [
    {
      title: 'Sin Límite de Ingresos',
      description: 'Mientras más vendas, más ganas. No hay tope en tus comisiones.',
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      title: 'Comisiones Exponenciales',
      description: 'Tu porcentaje aumenta conforme creces tu facturación mensual.',
      icon: <DollarSign className="h-8 w-8 text-primary" />
    },
    {
      title: 'Autonomía Total',
      description: 'Trabaja a tu ritmo, define tu estrategia y gestiona tu cartera.',
      icon: <Target className="h-8 w-8 text-primary" />
    },
    {
      title: 'Soporte Comercial',
      description: 'Acceso a materiales de venta, capacitación técnica y respaldo del equipo.',
      icon: <Award className="h-8 w-8 text-primary" />
    }
  ];

  const perfilIdeal = [
    'Experiencia en ventas B2B, preferentemente en sector médico o tecnología',
    'Red de contactos con hospitales, clínicas o médicos urólogos',
    'Capacidad de negociación y cierre de contratos de alto valor',
    'Orientación a resultados y metas comerciales',
    'Disponibilidad para visitas presenciales en CDMX y área metropolitana'
  ];

  const ejemploCalculo = {
    mes1: { facturacion: 80000, comision: 8000, porcentaje: 10 },
    mes2: { facturacion: 180000, comision: 21600, porcentaje: 12 },
    mes3: { facturacion: 350000, comision: 52500, porcentaje: 15 }
  };

  return (
    <div className="min-h-screen page-transition">
      <Helmet>
        <title>Modelo de Comisiones para Representantes Médicos | Urologik</title>
        <meta 
          name="description" 
          content="Únete al equipo de Urologik como representante médico. Modelo de comisiones exponenciales del 8% al 15% sobre facturación de alquiler de equipo médico. Sin límite de ingresos." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Briefcase className="h-12 w-12 text-primary" />
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Oportunidad de Negocio
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Modelo de Comisiones Exponenciales para Representantes Médicos
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conviértete en socio comercial de Urologik y genera ingresos ilimitados representando nuestra línea de alquiler de equipo médico de alta especialidad. Sin inversión inicial, sin inventario, solo tu talento comercial.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/urologik/representantes-medicos" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="cta-button text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform">
                    Agendar Entrevista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/contacto">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                    Enviar Consulta
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="medical-card p-8 bg-gradient-to-br from-white to-secondary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Potencial de Ingresos Mensuales
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Facturación: $100K</span>
                    <span className="text-xl font-bold text-primary">$10,000 MXN</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Facturación: $200K</span>
                    <span className="text-xl font-bold text-primary">$24,000 MXN</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg border-2 border-accent">
                    <span className="text-sm font-medium text-foreground">Facturación: $400K</span>
                    <span className="text-2xl font-bold text-accent">$60,000 MXN</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  *Ejemplos ilustrativos basados en el modelo de comisiones exponenciales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Comisiones */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Modelo A: Comisión Exponencial Pura
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sin sueldo fijo. Sin límites. Tu esfuerzo define tu recompensa. Ideal para representantes con cartera consolidada y experiencia en ventas B2B.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {comisionesModelo.map((nivel, index) => (
              <Card key={index} className="medical-card hover:shadow-lg transition-all">
                <CardHeader>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${nivel.color}`}>
                    {nivel.comision}
                  </div>
                  <CardTitle className="text-lg">Facturación Mensual</CardTitle>
                  <CardDescription className="text-base font-semibold text-foreground">
                    {nivel.rango}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Ejemplo de comisión:</p>
                  <p className="text-2xl font-bold text-primary mt-1">{nivel.ejemplo}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="medical-card p-8 bg-gradient-to-br from-accent/5 to-primary/5">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-accent" />
              Ejemplo de Crecimiento Progresivo
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Mes</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Facturación</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Porcentaje</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Comisión</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Mes 1</td>
                    <td className="py-3 px-4 font-semibold">${ejemploCalculo.mes1.facturacion.toLocaleString()} MXN</td>
                    <td className="py-3 px-4 text-green-600 font-bold">{ejemploCalculo.mes1.porcentaje}%</td>
                    <td className="py-3 px-4 text-primary font-bold">${ejemploCalculo.mes1.comision.toLocaleString()} MXN</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Mes 2</td>
                    <td className="py-3 px-4 font-semibold">${ejemploCalculo.mes2.facturacion.toLocaleString()} MXN</td>
                    <td className="py-3 px-4 text-green-600 font-bold">{ejemploCalculo.mes2.porcentaje}%</td>
                    <td className="py-3 px-4 text-primary font-bold">${ejemploCalculo.mes2.comision.toLocaleString()} MXN</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Mes 3</td>
                    <td className="py-3 px-4 font-semibold">${ejemploCalculo.mes3.facturacion.toLocaleString()} MXN</td>
                    <td className="py-3 px-4 text-green-600 font-bold">{ejemploCalculo.mes3.porcentaje}%</td>
                    <td className="py-3 px-4 text-accent font-bold">${ejemploCalculo.mes3.comision.toLocaleString()} MXN</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              *Las comisiones se calculan sobre la facturación mensual de alquiler de equipo médico (láser de holmio, torre de urología, instrumental, etc.)
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir Urologik?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más que comisiones atractivas, ofrecemos un ecosistema completo para tu éxito comercial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficiosAdicionales.map((beneficio, index) => (
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

      {/* Perfil Ideal */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perfil del Representante Ideal
            </h2>
            <p className="text-lg text-muted-foreground">
              Buscamos profesionales con visión comercial y pasión por el sector salud.
            </p>
          </div>
          
          <Card className="medical-card">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {perfilIdeal.map((requisito, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">{requisito}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            ¿Listo para Impulsar tu Carrera Comercial?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una entrevista con nuestro equipo comercial y descubre cómo puedes formar parte de la red de representantes de Urologik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/urologik/representantes-medicos" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-button text-lg px-8 py-4 w-full sm:w-auto transform hover:scale-105 transition-transform">
                Agendar Entrevista Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                Enviar Consulta por Email
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComisionesRepresentantesPage;
