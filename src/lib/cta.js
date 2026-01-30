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

/**
 * Genera una URL de WhatsApp con un mensaje pre-llenado según el slug del servicio.
 * @param {string} [serviceSlug] - El slug del servicio para personalizar el mensaje.
 * @returns {string} - La URL completa de WhatsApp.
 */
export function getWhatsAppUrl(serviceSlug) {
  const base = 'https://wa.me/5215535055983';
  let msg = '¡Hola! Quiero saber más sobre Urologik.'; // Mensaje por defecto

  const serviceMessages = {
    'uroflujometria-pediatrica-emg': 'Estoy interesado en el estudio Uroflujometría Pediátrica con EMG ID:0007',
    'urodinamia-multicanal': 'Estoy interesado en el estudio Urodinamia Multicanal y EMG ID:0006',
    'uroflujometria-premium': 'Estoy interesado en el estudio Uroflujometría Premium ID:0004',
    'uroflujometria-basica': 'Estoy interesado en el estudio Uroflujometría Básica ID:0003',
    'check-up-total': 'Estoy interesado en el estudio check-up-total ID:0005',
    // ...puedes agregar más slugs y mensajes aquí
  };

  if (serviceSlug && serviceMessages[serviceSlug]) {
    msg = serviceMessages[serviceSlug];
  }
  
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export function getAgendarUrl(serviceSlug, utmSearch = '') {
  const q = new URLSearchParams(utmSearch);
  if (serviceSlug) {
    q.set('service', serviceSlug);
  }
  return `/agendar?${q.toString()}`;
}
