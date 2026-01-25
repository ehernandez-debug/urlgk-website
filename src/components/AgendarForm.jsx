
import { useState } from 'react';
import { getServiceLabel, getWhatsAppUrl } from '../lib/cta';

export default function AgendarForm({ service }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: getServiceLabel(service),
    datetime: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola, deseo agendar el servicio de ${formData.service}.\n` +
                `Nombre: ${formData.name}\n` +
                `Teléfono: ${formData.phone}\n` +
                `Email: ${formData.email}\n` +
                `Fecha/hora preferida: ${formData.datetime}\n` +
                `Notas: ${formData.notes}`;
    const url = `https://wa.me/5215535055983?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input type="tel" name="phone" id="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Servicio</label>
        <input type="text" name="service" id="service" disabled value={formData.service} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-gray-100" />
      </div>
      <div>
        <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">Fecha y hora preferida</label>
        <input type="datetime-local" name="datetime" id="datetime" value={formData.datetime} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notas</label>
        <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange} rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Enviar Solicitud por WhatsApp
      </button>
    </form>
  );
}
