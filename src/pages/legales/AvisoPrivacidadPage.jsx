import { Helmet } from 'react-helmet-async';
import { avisoPrivacidadContent } from '@/lib/aviso-privacidad-content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Phone, Mail, Globe } from 'lucide-react';

const AvisoPrivacidadPage = () => {
  const { titulo, subtitulo, introduccion, secciones, sedes, contacto, tagline, fechaActualizacion } = avisoPrivacidadContent;

  return (
    <>
      <Helmet>
        <title>Aviso de Privacidad | UROLOGIK</title>
        <meta name="description" content="Aviso de Privacidad de Urologik - Centro Urodinámico. Conoce cómo protegemos tus datos personales conforme a la Ley Federal de Protección de Datos Personales." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-2">{titulo}</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">{subtitulo}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {introduccion}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Última actualización: {fechaActualizacion}
            </p>
          </div>

          {/* Secciones del Aviso */}
          <div className="space-y-6">
            {secciones.map((seccion) => (
              <Card key={seccion.id} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {seccion.numero}
                    </span>
                    <span>{seccion.titulo}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    {seccion.contenido.map((parrafo, idx) => (
                      <p key={idx} className="mb-2 text-muted-foreground whitespace-pre-line">
                        {parrafo}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Información de Contacto y Sedes */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Sedes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nuestras Sedes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sedes.map((sede, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-sm">{sede.nombre}</p>
                    <p className="text-sm text-muted-foreground">{sede.direccion}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${contacto.telefono}`} className="text-sm hover:text-primary transition-colors">
                    {contacto.telefono}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${contacto.email}`} className="text-sm hover:text-primary transition-colors">
                    {contacto.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a href={contacto.web} className="text-sm hover:text-primary transition-colors">
                    {contacto.web}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-primary italic">
              "{tagline}"
            </p>
          </div>

          {/* Disclaimer Legal */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Este Aviso de Privacidad cumple con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento. 
              UROLOGIK se reserva el derecho de modificar este aviso en cualquier momento. Las modificaciones serán publicadas en este sitio web.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvisoPrivacidadPage;
