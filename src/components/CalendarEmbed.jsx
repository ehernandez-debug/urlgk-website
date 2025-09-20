import { useMemo } from 'react';

export default function CalendarEmbed({ baseUrl, service, utmSearch }) {
  const url = useMemo(() => {
    const u = new URL(baseUrl);
    // Propaga UTMs y el servicio
    const src = new URLSearchParams(utmSearch);
    src.forEach((v, k) => u.searchParams.set(k, v));
    u.searchParams.set('service', service);
    return u.toString();
  }, [baseUrl, service, utmSearch]);

  return (
    <div className="calendly-inline-widget" style={{ minWidth: 320, height: 760 }}>
      <iframe title="Calendario de citas" src={url} width="100%" height="760" frameBorder="0"></iframe>
    </div>
  );
}
