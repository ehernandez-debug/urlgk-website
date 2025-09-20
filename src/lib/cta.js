
// src/lib/cta.js
export function getServiceLabel(slug) {
  const map = {
    'uroflujometria': 'Uroflujometría',
    'urodinamia': 'Urodinamia',
    'renta-equipos': 'Renta de Equipos',
    'consulta': 'Consulta Especializada',
  };
  return map[slug] ?? slug;
}

export function getWhatsAppUrl(serviceSlug) {
  const label = getServiceLabel(serviceSlug);
  const msg = `Hola, deseo agendar el servicio de ${label}.`;
  const base = 'https://wa.me/525552132072';
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export function getAgendarUrl(serviceSlug, utmSearch = '') {
  const q = new URLSearchParams(utmSearch);
  q.set('service', serviceSlug);
  return `/agendar?${q.toString()}`;
}
