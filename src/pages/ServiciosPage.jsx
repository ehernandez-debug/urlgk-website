import { Link } from 'react-router-dom';
import { Stethoscope, Shield, Users, Activity, ArrowRight, Heart, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServiciosPage = () => {
  const serviciosCategorias = [
    {
      title: 'Urología Pediátrica',
      slug: '/pediatria',
      description: 'Estudios especializados para el diagnóstico y tratamiento de patologías urológicas en niños y adolescentes.',
      icon: <Baby className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Urología de Adultos',
      slug: '/adultos',
      description: 'Servicios de diagnóstico para adultos, enfocados en la detección y manejo de trastornos urinarios.',
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ];

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

      {/* Servicios Principales */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Nuestros Estudios y Consultas</h2>
            <p className="text-md text-muted-foreground mt-2">Seleccione una categoría para ver los servicios disponibles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviciosCategorias.map((categoria) => (
              <Card key={categoria.slug} className="flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{categoria.icon}</div>
                  <CardTitle className="text-xl">{categoria.title}</CardTitle>
                  <CardDescription className="pt-2">{categoria.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Link to={`/servicios${categoria.slug}`}>
                      Ver Estudios <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
