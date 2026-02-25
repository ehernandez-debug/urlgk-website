/**
 * Catálogo de Servicios de Urologik
 * Precios actualizados con IVA incluido - Febrero 2026
 * Fuente: CatalogoServicios_v1_ene2026.xlsx
 * Todos los precios incluyen IVA (16%)
 */

export const catalogoServicios = {
  adultos: [
    {
      id: 'uroflujometria-basica',
      nombre: 'Uroflujometría Básica',
      categoria: 'adultos',
      precio: 2260,
      descripcion: 'La forma más sencilla y rápida de conocer cómo está funcionando el flujo urinario. Ideal para una primera revisión sin molestias ni invasión.',
      incluye: [
        'Prueba de antígeno prostático para brindar tranquilidad sobre la salud de la próstata',
        'Estudio de uroflujometría',
        'Reporte de resultados'
      ],
      duracion: '30 minutos',
      ubicacion: 'Centro Médico del Valle, Amores 942-Consultorio 15, Col del Valle Centro',
      tipo: 'basico'
    },
    {
      id: 'uroflujometria-premium',
      nombre: 'Uroflujometría Premium',
      categoria: 'adultos',
      precio: 3716,
      descripcion: 'Un estudio más completo para entender a detalle cómo se vacía la vejiga. Combina flujometría + ultrasonido de residuo post-miccional e incluye un informe claro con interpretación de un especialista.',
      incluye: [
        'Uroflujometría con ultrasonido de residuo post-miccional',
        'Interpretación médica especializada',
        'Prueba de antígeno prostático para una evaluación más confiable',
        'Reporte completo de resultados'
      ],
      duracion: '45 minutos',
      ubicacion: 'Centro Médico del Valle, Amores 942-Consultorio 15, Col del Valle Centro',
      tipo: 'premium',
      destacado: true
    }
  ],
  pediatricos: [
    {
      id: 'uroflujometria-pediatrica',
      nombre: 'Uroflujometría Pediátrica con EMG',
      categoria: 'pediatricos',
      precio: 2544,
      descripcion: 'Mide el flujo y volumen de la orina, con electromiografía para analizar la actividad muscular durante la micción. Es un estudio no invasivo clave para el diagnóstico inicial.',
      incluye: [
        'Estudio de uroflujometría con electromiografía (EMG)',
        'Análisis de actividad muscular durante la micción',
        'Interpretación médica especializada incluida',
        'Reporte completo de resultados'
      ],
      indicaciones: [
        'Enuresis nocturna',
        'Infecciones urinarias recurrentes',
        'Patrón de micción anormal'
      ],
      duracion: '45 minutos',
      ubicacion: 'Star Medica Hospital Infantil Privado, C. Nueva York 7, Nápoles, Consultorio 406, 03810, CDMX',
      tipo: 'pediatrico'
    },
    {
      id: 'urodinamia-pediatrica',
      nombre: 'Urodinamia Multicanal (3 Canales)',
      categoria: 'pediatricos',
      precio: 12927,
      descripcion: 'Estudio de 3 canales (abdominal, vesical y uretral) para evaluar la función del tracto urinario inferior. Ideal para patologías complejas como vejiga neurogénica.',
      incluye: [
        'Estudio completo de 3 canales (abdominal, vesical y uretral)',
        'Evaluación de función del tracto urinario inferior',
        'Interpretación médica especializada incluida',
        'Reporte detallado de resultados'
      ],
      indicaciones: [
        'Vejiga neurogénica',
        'Enuresis resistente a tratamiento',
        'Disfunción miccional compleja'
      ],
      duracion: '60-90 minutos',
      ubicacion: 'Star Medica Hospital Infantil Privado, C. Nueva York 7, Nápoles, Consultorio 406, 03810, CDMX',
      tipo: 'avanzado',
      destacado: true
    }
  ]
};

/**
 * Obtener todos los servicios
 */
export const obtenerTodosLosServicios = () => {
  return [...catalogoServicios.adultos, ...catalogoServicios.pediatricos];
};

/**
 * Obtener servicios por categoría
 */
export const obtenerServiciosPorCategoria = (categoria) => {
  return catalogoServicios[categoria] || [];
};

/**
 * Obtener servicio por ID
 */
export const obtenerServicioPorId = (id) => {
  const todosLosServicios = obtenerTodosLosServicios();
  return todosLosServicios.find(servicio => servicio.id === id);
};

/**
 * Calcular honorarios de colaboración para médicos
 * Porcentaje base: 20% del precio del estudio
 */
export const calcularHonorariosColaboracion = (precioEstudio, numeroEstudios = 1) => {
  const porcentajeHonorarios = 0.20; // 20%
  const honorariosPorEstudio = precioEstudio * porcentajeHonorarios;
  const honorariosTotales = honorariosPorEstudio * numeroEstudios;
  
  return {
    porcentaje: porcentajeHonorarios * 100,
    honorariosPorEstudio: Math.round(honorariosPorEstudio),
    numeroEstudios,
    honorariosTotales: Math.round(honorariosTotales)
  };
};

export default catalogoServicios;
