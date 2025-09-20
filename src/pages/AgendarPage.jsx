
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import CalendarEmbed from '../components/CalendarEmbed';
import AgendarForm from '../components/AgendarForm';
import { getServiceLabel } from '../lib/cta';

const VITE_CALENDAR_URL = import.meta.env.VITE_CALENDAR_URL;

export default function AgendarPage() {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const service = searchParams.get('service') || 'consulta';
  const serviceLabel = getServiceLabel(service);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Agenda {serviceLabel}</h1>
      </div>
      {VITE_CALENDAR_URL ? (
        <CalendarEmbed baseUrl={VITE_CALENDAR_URL} service={service} utmSearch={location.search} />
      ) : (
        <AgendarForm service={service} />
      )}
    </div>
  );
}
