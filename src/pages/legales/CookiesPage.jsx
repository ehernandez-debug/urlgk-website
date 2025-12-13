import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie } from 'lucide-react';

const CookiesPage = () => {
  const secciones = [
    {
      id: "que-son",
      numero: "1",
      titulo: "¿Qué son las Cookies?",
      contenido: [
        "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra."
      ]
    },
    {
      id: "como-usamos",
      numero: "2",
      titulo: "¿Cómo Utilizamos las Cookies?",
      contenido: [
        "Urologik utiliza cookies para mejorar su experiencia en nuestro sitio web. Las cookies nos ayudan a:",
        "• Recordar sus preferencias y configuraciones",
        "• Entender cómo utiliza nuestro sitio web",
        "• Mejorar la funcionalidad y el rendimiento del sitio",
        "• Proporcionar contenido relevante y personalizado",
        "• Analizar el tráfico y el uso del sitio web"
      ]
    },
    {
      id: "tipos",
      numero: "3",
      titulo: "Tipos de Cookies que Utilizamos",
      contenido: []
    },
    {
      id: "control",
      numero: "4",
      titulo: "Control de Cookies",
      contenido: [
        "Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen.",
        "Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen correctamente."
      ]
    },
    {
      id: "terceros",
      numero: "5",
      titulo: "Cookies de Terceros",
      contenido: [
        "Algunos servicios de terceros que utilizamos en nuestro sitio web pueden establecer sus propias cookies. Estos incluyen:",
        "• Google Analytics: Para análisis de tráfico web",
        "• Calendly: Para la programación de citas",
        "• Firebase: Para funcionalidades de backend",
        "",
        "Estos terceros tienen sus propias políticas de privacidad y no tenemos control sobre sus cookies."
      ]
    },
    {
      id: "actualizaciones",
      numero: "6",
      titulo: "Actualizaciones de esta Política",
      contenido: [
        "Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias.",
        "Le recomendamos que revise esta política periódicamente para estar informado sobre cómo utilizamos las cookies."
      ]
    },
    {
      id: "contacto",
      numero: "7",
      titulo: "Contacto",
      contenido: [
        "Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:",
        "• Correo electrónico: contactourologik@gmail.com",
        "• Teléfono: 55-3505-5983",
        "• Sitio web: https://urologik.com"
      ]
    }
  ];

  const tiposCookies = [
    {
      tipo: "Cookies Estrictamente Necesarias",
      descripcion: "Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus funciones. Sin estas cookies, no se pueden proporcionar los servicios solicitados.",
      ejemplos: "Cookies de sesión, cookies de seguridad"
    },
    {
      tipo: "Cookies de Rendimiento",
      descripcion: "Estas cookies recopilan información sobre cómo los visitantes utilizan un sitio web, por ejemplo, qué páginas visitan con más frecuencia. Estos datos nos ayudan a optimizar nuestro sitio web.",
      ejemplos: "Google Analytics"
    },
    {
      tipo: "Cookies de Funcionalidad",
      descripcion: "Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su nombre de usuario o idioma) y proporcionen características mejoradas y más personales.",
      ejemplos: "Preferencias de idioma, configuraciones de accesibilidad"
    },
    {
      tipo: "Cookies de Terceros",
      descripcion: "Estas cookies son establecidas por servicios de terceros que aparecen en nuestras páginas. Se utilizan para proporcionar funcionalidades específicas como programación de citas o análisis.",
      ejemplos: "Calendly, Firebase, Google Analytics"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Política de Cookies | UROLOGIK</title>
        <meta name="description" content="Política de Cookies de Urologik. Conozca cómo utilizamos las cookies en nuestro sitio web y cómo puede controlarlas." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Política de Cookies</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">UROLOGIK</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Información sobre cómo utilizamos las cookies en nuestro sitio web.
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
                  {seccion.id === "tipos" ? (
                    <div className="space-y-4">
                      {tiposCookies.map((cookie, idx) => (
                        <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold mb-2">{cookie.tipo}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{cookie.descripcion}</p>
                          <p className="text-xs text-muted-foreground">
                            <strong>Ejemplos:</strong> {cookie.ejemplos}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="prose prose-sm max-w-none">
                      {seccion.contenido.map((parrafo, idx) => (
                        <p key={idx} className="mb-2 text-muted-foreground whitespace-pre-line">
                          {parrafo}
                        </p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guía de Control de Cookies */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Cómo Controlar las Cookies en su Navegador</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</p>
                <p><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</p>
                <p><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</p>
                <p><strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies y datos del sitio</p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Al continuar utilizando este sitio web, usted acepta el uso de cookies de acuerdo con esta Política de Cookies. 
              Puede cambiar la configuración de cookies en cualquier momento a través de su navegador.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
