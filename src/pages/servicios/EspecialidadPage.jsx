import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import IndicacionesPorPatologia from '@/components/IndicacionesPorPatologia';

const EspecialidadPage = ({ title, description, estudios, especialidad }) => {
  const gridLayout = estudios.length === 2
    ? 'grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl mx-auto'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-section bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Estudios Disponibles</h2>
          </div>
          <div className={gridLayout}>
            {estudios.map((estudio) => (
              <Card key={estudio.slug} className="flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{estudio.title}</CardTitle>
                  <CardDescription className="pt-2">{estudio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {estudio.precio && <p className="text-lg font-semibold text-primary mb-4">{estudio.precio}</p>}
                  <ul className="space-y-2 mb-4">
                    {estudio.indicaciones.map((indicacion, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{indicacion}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Link to={`/servicios/${especialidad}/${estudio.slug}`}>
                      Ver Detalles <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <IndicacionesPorPatologia especialidad={especialidad} />
    </div>
  );
};

export default EspecialidadPage;
