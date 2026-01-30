import { servicesData } from '../lib/servicios-data';

// --- Funciones para obtener datos de servicios ---

/**
 * Obtiene todos los servicios para una especialidad dada (pediatria o adultos).
 * @param {string} especialidad - 'pediatria' o 'adultos'.
 * @returns {object} - Un objeto con los servicios de esa especialidad.
 */
export const getServiciosByEspecialidad = (especialidad) => {
  return servicesData[especialidad] || null;
};

/**
 * Obtiene los resúmenes de servicios para pediatría o adultos.
 * @param {string} tipo - 'pediatria' o 'adultos'.
 * @returns {Array} - Un array con los resúmenes de servicios.
 */
export const getServiciosResumen = (tipo) => {
  const key = `${tipo}Resumen`;
  return servicesData[key] || [];
};

/**
 * Obtiene un servicio específico por su slug y especialidad.
 * @param {string} especialidad - 'pediatria' o 'adultos'.
 * @param {string} slug - El slug del servicio.
 * @returns {object|null} - El objeto del servicio o null si no se encuentra.
 */
export const getServicioBySlug = (especialidad, slug) => {
  if (servicesData[especialidad] && servicesData[especialidad][slug]) {
    return servicesData[especialidad][slug];
  }
  return null;
};

/**
 * Obtiene todos los servicios (pediatría y adultos) de forma combinada.
 * @returns {object} - Un objeto con todos los servicios.
 */
export const getAllServicios = () => {
    return {
        ...servicesData.pediatria,
        ...servicesData.adultos,
    };
};


// --- Funciones para Blog (Integración con Notion a futuro) ---

// Datos mockeados para el blog
const mockBlogPosts = [
  {
    slug: 'bienvenidos-al-blog',
    title: 'Bienvenidos al Blog de Urologik',
    author: 'Dr. Equipo Urologik',
    date: '2024-07-29',
    excerpt: 'En este primer post, estamos emocionados de lanzar nuestro blog. Aquí compartiremos noticias, avances en urología y consejos para pacientes y médicos...',
    content: '<p>Contenido completo del primer post del blog...</p>',
  },
  {
    slug: 'que-es-la-urodinamia',
    title: '¿Qué es la Urodinamia y por qué es importante?',
    author: 'Dra. especialista',
    date: '2024-08-05',
    excerpt: 'La urodinamia es un estudio clave para entender cómo funciona la vejiga. En este artículo, explicamos en qué consiste y para quién está indicado...',
    content: '<p>Contenido detallado sobre la urodinamia...</p>'
  },
];

/**
 * Obtiene todos los posts del blog.
 * A futuro, esta función se conectará a la API de Notion.
 * @returns {Promise<Array>} - Una promesa que resuelve a un array de posts.
 */
export const getBlogPosts = async () => {
  // Simula una llamada a API
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockBlogPosts);
    }, 500); // Simula un pequeño retraso de red
  });
};

/**
 * Obtiene un post del blog por su slug.
 * A futuro, se conectará a la API de Notion.
 * @param {string} slug - El slug del post a buscar.
 * @returns {Promise<object|null>} - Una promesa que resuelve al objeto del post o null.
 */
export const getBlogPostBySlug = async (slug) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const post = mockBlogPosts.find(p => p.slug === slug);
      resolve(post || null);
    }, 300);
  });
};