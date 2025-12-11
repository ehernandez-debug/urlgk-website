
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
  const msg = "Hola! me interesa conocer mas sobre Urologik";
  const base = 'https://wa.me/5215535055983';
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export function getAgendarUrl(serviceSlug, utmSearch = '') {
  const q = new URLSearchParams(utmSearch);
  q.set('service', serviceSlug);
  return `/agendar?${q.toString()}`;
}
