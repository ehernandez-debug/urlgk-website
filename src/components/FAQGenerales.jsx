import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FAQGenerales = () => {
  const faqs = [
    {
      question: '¿Dónde están ubicados exactamente?',
      answer:
        'Nuestra sede central de diagnóstico está en Colonia del Valle y tenemos una unidad en el Hospital Infantil Privado (para pediatría). Contamos con una red de médicos asociados en Lindavista. Al agendar, te confirmaremos la sucursal más cercana a ti con equipo disponible.',
    },
    {
      question: '¿Tienen estacionamiento?',
      answer:
        'Sí, ambas sedes cuentan con estacionamiento (con costo por hora) y servicio de Valet Parking. Recomendamos llegar 15 minutos antes para evitar contratiempos.',
    },
    {
      question: '¿Aceptan tarjeta o solo efectivo?',
      answer: 'Aceptamos tarjetas de crédito/débito, transferencias y efectivo. Emitimos factura electrónica.',
    },
    {
      question: '¿Entregan los resultados al momento?',
      answer:
        'Uroflujometrías: Se entregan inmediatamente al terminar (digital), tanto al médico referidor como al paciente. Urodinamias: El reporte técnico completo se envía a tu médico y a ti por WhatsApp/Email en un lapso máximo de 48 horas, ya que requiere interpretación especializada.',
    },
    {
      question: '¿Es un consultorio o un laboratorio?',
      answer:
        'Somos un Centro de Diagnóstico Urológico Especializado. No somos un laboratorio general (como Chopo), somos especialistas enfocados 100% en vías urinarias, supervisados por urólogos certificados.',
    },
    {
      question: '¿Atienden urgencias?',
      answer:
        'Nuestros estudios son programados. Si tienes dolor agudo o sangrado intenso, por favor acude a urgencias hospitalarias. Nosotros nos enfocamos en diagnóstico funcional.',
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
        <CardDescription>Información sobre logística, ubicación y proceso de atención</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-base font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQGenerales;
