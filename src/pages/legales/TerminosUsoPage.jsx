import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const TerminosUsoPage = () => {
  const secciones = [
    {
      id: "aceptacion",
      numero: "1",
      titulo: "Aceptación de los Términos",
      contenido: [
        "Al acceder y utilizar el sitio web de Urologik (https://urologik.com), usted acepta estar sujeto a estos Términos de Uso y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar este sitio.",
        "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web."
      ]
    },
    {
      id: "uso",
      numero: "2",
      titulo: "Uso del Sitio Web",
      contenido: [
        "Este sitio web es proporcionado únicamente con fines informativos sobre los servicios médicos especializados que ofrece Urologik.",
        "La información contenida en este sitio no constituye asesoramiento médico, diagnóstico o tratamiento. Siempre debe consultar con un profesional de la salud calificado para cualquier pregunta relacionada con una condición médica.",
        "Usted se compromete a utilizar este sitio únicamente con fines legales y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso del sitio por parte de otros."
      ]
    },
    {
      id: "propiedad",
      numero: "3",
      titulo: "Propiedad Intelectual",
      contenido: [
        "Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Urologik o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual de México y tratados internacionales.",
        "El uso no autorizado de cualquier material de este sitio puede violar las leyes de derechos de autor, marcas registradas y otras leyes aplicables."
      ]
    },
    {
      id: "limitacion",
      numero: "4",
      titulo: "Limitación de Responsabilidad",
      contenido: [
        "Urologik no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de este sitio web, incluso si Urologik ha sido advertido de la posibilidad de tales daños.",
        "La información en este sitio se proporciona 'tal cual' sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo pero no limitado a garantías de comerciabilidad, idoneidad para un propósito particular o no infracción."
      ]
    },
    {
      id: "enlaces",
      numero: "5",
      titulo: "Enlaces a Sitios de Terceros",
      contenido: [
        "Este sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por Urologik. No tenemos control sobre el contenido, políticas de privacidad o prácticas de sitios web de terceros y no asumimos ninguna responsabilidad por ellos.",
        "La inclusión de cualquier enlace no implica respaldo por parte de Urologik del sitio vinculado."
      ]
    },
    {
      id: "privacidad",
      numero: "6",
      titulo: "Privacidad",
      contenido: [
        "Su uso de este sitio web también está sujeto a nuestro Aviso de Privacidad, que describe cómo recopilamos, usamos y protegemos su información personal.",
        "Le recomendamos que lea nuestro Aviso de Privacidad para comprender nuestras prácticas de manejo de datos."
      ]
    },
    {
      id: "jurisdiccion",
      numero: "7",
      titulo: "Ley Aplicable y Jurisdicción",
      contenido: [
        "Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos.",
        "Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes de la Ciudad de México."
      ]
    },
    {
      id: "contacto",
      numero: "8",
      titulo: "Información de Contacto",
      contenido: [
        "Si tiene alguna pregunta sobre estos Términos de Uso, puede contactarnos en:",
        "• Correo electrónico: contactourologik@gmail.com",
        "• Teléfono: 55-3505-5983",
        "• Sitio web: https://urologik.com"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Términos de Uso | UROLOGIK</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Urologik. Conozca las reglas y regulaciones que rigen el uso de nuestros servicios en línea." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Términos de Uso</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">UROLOGIK</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Por favor, lea estos términos de uso cuidadosamente antes de utilizar nuestro sitio web.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Última actualización: Diciembre 2025
            </p>
          </div>

          {/* Secciones */}
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

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Al continuar utilizando este sitio web, usted reconoce que ha leído, entendido y aceptado estos Términos de Uso. 
              Si no está de acuerdo con estos términos, debe dejar de utilizar el sitio inmediatamente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminosUsoPage;
