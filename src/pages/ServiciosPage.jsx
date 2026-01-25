import { Link } from 'react-router-dom';
import { Stethoscope, Shield, Users, Activity, ArrowRight, Heart, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData } from '@/lib/servicios-data.jsx';

const ServicioCard = ({ servicio, especialidad }) => (
  <Card className="flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <CardHeader>
      <div className="mb-4">{servicio.icon}</div>
      <CardTitle className="text-xl">{servicio.title}</CardTitle>
      <CardDescription className="pt-2">{servicio.subtitle}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
        <Link to={`/servicios/${especialidad}/${servicio.id}`}>
          Ver Detalles <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const ServiciosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Servicios Urológicos de Vanguardia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Utilizamos tecnología de punta y la experiencia de nuestros especialistas para ofrecer diagnósticos urológicos precisos y confiables en la Ciudad de México.
          </p>
        </div>
      </section>

      {/* Sección de Urología de Adultos */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Urología de Adultos</h2>
            <p className="text-md text-muted-foreground mt-2">Servicios de uroflujometría diseñados para el diagnóstico y seguimiento de patologías urológicas en adultos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.adultosResumen.map((servicio) => (
              <ServicioCard key={servicio.id} servicio={servicio} especialidad="adultos" />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Urología Pediátrica */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Baby className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Urología Pediátrica</h2>
            <p className="text-md text-muted-foreground mt-2">Diagnósticos precisos y adaptados a las necesidades de los más pequeños, utilizando equipos de tamaño pediátrico y protocolos especializados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.pediatriaResumen.map((servicio) => (
              <ServicioCard key={servicio.id} servicio={servicio} especialidad="pediatria" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
