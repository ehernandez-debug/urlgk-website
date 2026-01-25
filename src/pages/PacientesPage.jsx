import { Helmet } from 'react-helmet-async';
import { Calendar, CreditCard, FileCheck, Hospital, MessageCircleQuestion } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: 'Agenda tu Cita',
    description: 'Elige la fecha y hora que mejor te convenga en nuestro portal seguro.',
    icon: Calendar,
  },
  {
    title: 'Realiza tu Pago',
    description:
      'Paga en línea con tarjeta o transferencia. Facturamos si lo necesitas para tu seguro o trabajo.',
    icon: CreditCard,
  },
  {
    title: 'Asiste al Estudio',
    description: 'Nosotros coordinamos todo con el hospital. Tú solo tienes que presentarte.',
    icon: Hospital,
  },
  {
    title: 'Resultados Rápidos',
    description:
      'Tu médico recibirá los resultados de tu estudio en formato digital en menos de 48 horas.',
    icon: FileCheck,
  },
];

const faqs = [
  {
    question: '¿Qué incluye el costo del estudio?',
    answer: 'TODO. Coordinación, equipo, personal, insumos y reporte.',
  },
  {
    question: '¿Tengo que pagar algo adicional en el hospital?',
    answer: 'No, el pago que realizas con nosotros cubre el 100% del servicio.',
  },
  {
    question: '¿Cómo puedo pagar?',
    answer: 'Aceptamos transferencia bancaria y tarjetas de crédito/débito.',
  },
  {
    question: '¿Pueden darme una factura para mi seguro o trabajo?',
    answer: 'Sí, al momento de pagar podrás solicitar tu factura con los datos fiscales correspondientes.',
  },
];

const formatDoctorName = (slug) => {
  if (!slug) return 'tu médico';
  const cleanSlug = slug.replace(/[-_]+/g, ' ').trim();
  return cleanSlug
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ''))
    .join(' ');
};

const PacientesPage = () => {
  const { medico } = useParams();
  const doctorName = formatDoctorName(medico);

  return (
    <>
      <Helmet>
        <title>Urologik | Pacientes Referidos</title>
        <meta
          name="description"
          content="Página para pacientes referidos. Agenda tu estudio con un proceso claro, rápido y sin fricciones."
        />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <section className="bg-slate-50 py-16 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Experiencia de guante blanco
            </p>
            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Bienvenido a Urologik, el socio tecnológico de tu médico.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              El Dr. {doctorName} nos ha confiado la realización de tu estudio. Aquí te explicamos cómo
              funciona nuestro servicio de guante blanco.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="px-10 py-6 text-base">
                <Link to="/agendar">Agendar mi Estudio Ahora</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Tu Experiencia en 4 Sencillos Pasos</h2>
              <p className="mt-3 text-muted-foreground">
                Todo está diseñado para que agendes rápido y con total tranquilidad.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="border border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Paso {index + 1}</p>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">{step.description}</CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircleQuestion className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Preguntas Frecuentes</h2>
              <p className="mt-3 text-muted-foreground">
                Resolvemos lo más importante antes de que agendes.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <Card key={faq.question} className="border border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{faq.answer}</CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="px-12 py-6 text-base">
                <Link to="/agendar">Agendar mi Estudio Ahora</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PacientesPage;
