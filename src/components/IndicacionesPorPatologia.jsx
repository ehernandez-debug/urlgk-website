import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const patologiasData = {
  pediatria: [
    { patologia: 'Enuresis y Vejiga Neurogénica', estudioRecomendado: 'Urodinamia Multicanal con EMG' },
    { patologia: 'Incontinencia Urinaria de Esfuerzo', estudioRecomendado: 'Urodinamia con EMG y UPP' },
    { patologia: 'Infecciones Urinarias Recurrentes', estudioRecomendado: 'Uroflujometría Pediátrica con EMG' },
    { patologia: 'Reflujo Vesicoureteral', estudioRecomendado: 'Urodinamia Multicanal' },
  ],
  adultos: [
    { patologia: 'Vaciamiento Incompleto', estudioRecomendado: 'Uroflujometría con Ultrasonido' },
    { patologia: 'Hiperplasia Prostática Benigna (HPB)', estudioRecomendado: 'Uroflujometría con Ultrasonido' },
    { patologia: 'Síntomas del Tracto Urinario Inferior (LUTS)', estudioRecomendado: 'Uroflujometría Básica' },
    { patologia: 'Estrechez Uretral', estudioRecomendado: 'Uroflujometría con Ultrasonido' },
  ],
};

const IndicacionesPorPatologia = ({ especialidad }) => {
  const data = patologiasData[especialidad] || [];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Indicaciones por Patología</h2>
          <p className="text-md text-muted-foreground mt-2">
            Estudios recomendados para las patologías más comunes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{item.patologia}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-md text-muted-foreground">Estudio recomendado:</p>
                <p className="text-lg font-semibold text-primary">{item.estudioRecomendado}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndicacionesPorPatologia;
