import { Activity, Shield, Stethoscope, Video } from 'lucide-react';

export const servicesData = {
  pediatria: {
    'urodinamia-multicanal': {
        title: 'Urodinamia Multicanal y EMG',
        subtitle: 'Evaluación detallada de la función vesical y uretral.',
        icon: <Shield className="h-12 w-12 text-primary" />,
        description: 'Este estudio mide las presiones en la vejiga (cistometría), el abdomen y la uretra para evaluar de forma integral cómo funciona el tracto urinario inferior. Es el estándar de oro para diagnosticar problemas complejos. Incluye electromiografía (EMG) para evaluar la coordinación de los músculos del piso pélvico',
        duracion: '45 minutos - 2 horas',
        preparacion: 'Llegar con ganas de orinar. Se le pedirá que suspenda ciertos medicamentos. Traer estudios previos si los tiene.',
        precio: '$10,000 MXN',
        indicaciones: [
            'Vejiga neurogénica (mielomeningocele, parálisis cerebral).',
            'Enuresis (mojar la cama) que no responde a tratamiento.',
            'Incontinencia urinaria diurna o nocturna.',
            'Disfunción miccional severa.',
            'Vejiga hiperactiva que no responde a tratamiento inicial.',
            'Evaluación pre y postquirúrgica de vías urinarias.',
            'Anomalías congénitas del tracto urinario.'
        ],
        proceso: [
            'Entrevista y preparación del paciente.',
            'Colocación de catéteres de pequeño calibre (pediátricos) en la vejiga y el recto.',
            'Llenado de la vejiga con solución salina a través del catéter, registrando sensaciones y presiones.',
            'Fase de micción donde se retira el catéter y el paciente orina para medir flujo y presiones.',
            'Análisis de los gráficos y elaboración del informe médico.',
        ],
        ventajas: [
            'Diagnóstico preciso de patologías complejas.',
            'Equipo 100% pediátrico para máxima comodidad y seguridad.',
            'Personal entrenado en el manejo de niños.',
            'Permite un plan de tratamiento altamente personalizado.',
            'Información objetiva sobre la función neuromuscular.',
        ],
        faq: [
            {
                question: '¿Es un procedimiento doloroso para mi hijo?',
                answer: 'Utilizamos catéteres pediátricos muy delgados y lubricante con anestésico local para minimizar la molestia. Nuestro personal está especializado en hacer que la experiencia sea lo menos estresante posible para el niño.'
            },
            {
                question: '¿Qué tan seguro es el estudio?',
                answer: 'Es un procedimiento muy seguro. El riesgo principal, aunque bajo, es una infección urinaria. Se realiza bajo estrictas condiciones de asepsia y en algunos casos se puede indicar un antibiótico profiláctico.'
            }
        ]
    },
    'videourodinamia-multicanal': {
        title: 'Videourodinamia Multicanal',
        subtitle: 'El estándar de oro con visualización fluoroscópica en tiempo real.',
        icon: <Video className="h-12 w-12 text-primary" />,
        description: 'Este estudio avanzado combina la urodinamia multicanal con fluoroscopia (rayos X en tiempo real) para visualizar la anatomía y función de la vejiga y la uretra durante el llenado y vaciado. Permite correlacionar los hallazgos de presión y flujo con imágenes radiológicas directas, ofreciendo el diagnóstico más completo posible para casos complejos.',
        duracion: '1 - 2.5 horas',
        preparacion: 'Requiere preparación intestinal leve el día anterior. Llegar con ganas de orinar. Traer estudios previos.',
        precio: 'Desde $18,000 MXN',
        indicaciones: [
            'Reflujo vesicoureteral (RVU).',
            'Incontinencia urinaria compleja o post-quirúrgica.',
            'Obstrucción de la salida vesical de causa desconocida.',
            'Anomalías anatómicas como válvulas de uretra posterior.',
            'Diverículos vesicales.',
            'Evaluación precisa antes de cirugías reconstructivas.'
        ],
        proceso: [
            'Preparación y colocación de catéteres pediátricos y electrodos de EMG.',
            'Colocación del equipo de fluoroscopia para visualización en tiempo real con rayos X.',
            'Llenado de la vejiga con medio de contraste radiopaco a través del catéter, permitiendo la visualización fluoroscópica.',
            'Registro simultáneo de presiones, flujo, actividad muscular e imágenes de video.',
            'Fase de micción para evaluar la apertura del cuello vesical y la uretra.',
            'Análisis integral de los datos y el video para el informe final.'
        ],
        ventajas: [
            'Diagnóstico simultáneo de problemas funcionales y anatómicos.',
            'Máxima precisión diagnóstica para casos complejos.',
            'Permite identificar obstrucciones o reflujo en tiempo real.',
            'Guía de forma definitiva las decisiones quirúrgicas.',
            'Reduce la necesidad de realizar múltiples estudios por separado.'
        ],
        faq: [
            {
                question: '¿El estudio es doloroso para mi hijo?',
                answer: 'Utilizamos catéteres pediátricos muy delgados y lubricante con anestésico local para minimizar la molestia. El procedimiento puede generar sensación de llenado vesical, pero no es doloroso. Nuestro personal está especializado en hacer que la experiencia sea lo menos estresante posible para el niño.'
            },
            {
                question: '¿Este estudio utiliza radiación?',
                answer: 'Sí, la videourodinamia utiliza fluoroscopia (rayos X en tiempo real) para visualizar el tracto urinario durante el estudio. La dosis de radiación es mínima y está controlada, siguiendo estrictamente los protocolos de seguridad pediátrica. Los beneficios diagnósticos superan ampliamente el riesgo mínimo de exposición.'
            },
            {
                question: '¿Cuándo se recomienda este estudio en lugar de una urodinamia convencional?',
                answer: 'La videourodinamia está indicada cuando se necesita visualizar la anatomía del tracto urinario simultáneamente con las mediciones de presión y flujo. Es especialmente útil en casos de reflujo vesicoureteral, anomalías anatómicas complejas, o cuando se planea una cirugía reconstructiva.'
            }
        ]
    },
    'uroflujometria-pediatrica-emg': {
        title: 'Uroflujometría Pediátrica con EMG',
        subtitle: 'Estudio no invasivo de la micción con análisis muscular.',
        icon: <Activity className="h-12 w-12 text-primary" />,
        description: 'Mide la cantidad de orina, la velocidad del flujo y el patrón de la micción, mientras que la Electromiografía (EMG) de superficie registra la actividad de los músculos del piso pélvico. Es ideal como primer paso diagnóstico por no ser invasivo.',
        duracion: '30 minutos - 1 hora',
        preparacion: 'El niño debe llegar con muchas ganas de orinar. No requiere ayuno.',
        precio: '$3,000 MXN',
        indicaciones: [
            'Estudio inicial de enuresis (mojar la cama).',
            'Infecciones urinarias de repetición.',
            'Patrones de micción anormales (pujo, intermitencia).',
            'Constipación crónica asociada a problemas para orinar.',
            'Seguimiento de tratamiento para disfunción miccional.',
        ],
        proceso: [
            'El niño llega al consultorio con la vejiga llena.',
            'Se le colocan electrodos de superficie (stickers) en la piel de los glúteos o perineo.',
            'Se le pide que orine en un inodoro especial que contiene el flujómetro.',
            'Un software registra simultáneamente la curva de flujo y la actividad muscular.',
            'Opcional: se puede complementar con un ultrasonido para medir la orina residual.',
        ],
        ventajas: [
            'Totalmente no invasivo e indoloro.',
            'Proporciona información valiosa sobre la coordinación vejiga-esfínter.',
            'Rápido y fácil de realizar en niños.',
            'Ideal para el seguimiento y ajuste de tratamiento.',
        ],
        faq: [
            {
                question: '¿Mi hijo sentirá algo durante el estudio?',
                answer: 'Absolutamente nada. El niño solo tiene que orinar como lo haría normalmente en casa. Los electrodos no se sienten una vez que están puestos.'
            },
            {
                question: '¿Qué pasa si mi hijo no quiere orinar?',
                answer: 'Es importante que llegue con ganas de orinar. Podemos esperar un tiempo prudente y ofrecerle líquidos. La clave es crear un ambiente relajado y sin presiones para el niño.'
            }
        ]
    },
  },
  adultos: {
    'uroflujometria-basica': {
        title: 'Uroflujometría Básica',
        subtitle: 'Análisis inicial y rápido del flujo urinario.',
        icon: <Activity className="h-12 w-12 text-primary" />,
        description: 'La forma más sencilla y rápida de conocer cómo está funcionando el flujo urinario.',
        duracion: '30 minutos - 1 hora',
        preparacion: 'Asistir con la vejiga confortablemente llena (ganas de orinar).',
        precio: '$1,900 MXN',
        indicaciones: [
            'Síntomas del tracto urinario inferior (LUTS).',
            'Chorro urinario débil o intermitente.',
            'Dificultad para iniciar la micción.',
            'Evaluación de crecimiento prostático (HPB).',
            'Monitoreo post-operatorio de próstata o uretra.',
        ],
        proceso: [
            'El paciente llega con la vejiga llena.',
            'Se le solicita que orine en un embudo conectado a un flujómetro.',
            'El equipo registra el volumen y la velocidad del flujo en tiempo real.',
            'Se genera una gráfica que es analizada por el médico.',
        ],
        ventajas: [
            'No invasivo e indoloro.',
            'Resultado objetivo e inmediato.',
            'Rápido y sencillo de realizar.',
            'Costo-efectivo para un primer diagnóstico.',
        ],
        faq: [
            {
                question: '¿El estudio duele?',
                answer: 'No, es completamente indoloro. El único requisito es orinar en el equipo como lo haría en un baño normal.'
            },
            {
                question: '¿Qué tan llena debe estar mi vejiga?',
                answer: 'Debe tener una sensación normal y cómoda de ganas de orinar. No es recomendable aguantar la orina hasta sentir dolor, ya que esto puede alterar el resultado.'
            }
        ]
    },
    'uroflujometria-premium': {
        title: 'Uroflujometría Premium',
        subtitle: 'Evaluación del flujo y del vaciamiento vesical.',
        icon: <Activity className="h-12 w-12 text-primary" />,
        description: 'Un estudio más completo para entender a detalle cómo se vacía la vejiga.',
        duracion: '30 minutos - 1 hora',
        preparacion: 'Vejiga llena, sin necesidad de ayuno.',
        precio: '$3,500 MXN',
        indicaciones: [
            'Sospecha de vaciamiento incompleto de la vejiga.',
            'Hiperplasia Prostática Benigna (HPB).',
            'Estrechez (estenosis) de uretra.',
            'Evaluación de vejiga hipoactiva o atónica.',
            'Infecciones urinarias recurrentes.',
        ],
        proceso: [
            'Con la vejiga llena, se realiza un primer ultrasonido abdominal para medir el volumen pre-miccional.',
            'El paciente orina en el uroflujómetro.',
            'Inmediatamente después, se realiza un segundo ultrasonido para medir el volumen de orina residual.',
            'Se analizan la curva de flujo y el volumen residual en conjunto.',
        ],
        ventajas: [
            'Información mucho más completa que la flujometría sola.',
            'Cuantifica objetivamente el vaciamiento de la vejiga.',
            'Sigue siendo un procedimiento no invasivo.',
            'Ayuda a tomar decisiones sobre la necesidad de otros estudios o tratamientos.',
        ],
        faq: [
            {
                question: '¿El ultrasonido es incómodo?',
                answer: 'No, es un ultrasonido abdominal externo. Se aplica un gel sobre la parte baja del abdomen y se desliza un transductor. Es el mismo tipo de ultrasonido que se usa en el embarazo.'
            },
            {
                question: '¿Por qué es importante medir el residuo?',
                answer: 'Un residuo elevado indica que la vejiga no se vacía bien, lo que puede aumentar el riesgo de infecciones, formación de cálculos, y con el tiempo, daño a la función renal. Es un indicador muy importante de la salud del tracto urinario.'
            }
        ]
    },
    'check-up-total': {
        title: 'Check Up Total',
        subtitle: 'El estudio completo con análisis y reporte por un especialista.',
        icon: <Stethoscope className="h-12 w-12 text-primary" />,
        description: 'La experiencia más completa en una sola visita.',
        duracion: '30 minutos - 1 hora, reporte en 24-48h.',
        preparacion: 'Vejiga llena.',
        indicaciones: [
            'Cuando se requiere una segunda opinión experta.',
            'Para pacientes con casos complejos o múltiples patologías.',
            'Cuando el médico tratante solicita un reporte formal.',
            'Para tener un documento diagnóstico claro y accionable.',
        ],
        proceso: [
            'Se realiza el procedimiento de Uroflujometría con Ultrasonido.',
            'Los resultados (gráfica de flujo, volumen pre y post miccional) son enviados a nuestro urólogo especialista.',
            'El especialista analiza los datos, los correlaciona con la información clínica del paciente y redacta un informe.',
            'El informe incluye la interpretación de los hallazgos y una conclusión diagnóstica.',
            'Se entrega el reporte completo al paciente y/o a su médico tratante.',
        ],
        ventajas: [
            'Análisis experto de los resultados.',
            'Informe médico formal, válido para cualquier especialista.',
            'Aporta claridad diagnóstica.',
            'Guía de forma más precisa los siguientes pasos del tratamiento.',
        ],
        faq: [
            {
                question: '¿Puedo llevarle este reporte a mi propio médico?',
                answer: 'Sí, por supuesto. El propósito de este servicio es proporcionar un diagnóstico experto que puede ser utilizado por su médico de cabecera o cualquier otro especialista para decidir el mejor tratamiento.'
            },
            {
                question: '¿La interpretación incluye una consulta?',
                answer: 'Este servicio incluye el reporte escrito. Si desea discutir los resultados en una consulta completa, puede agendar una Consulta Especializada por separado.'
            }
        ]
    },
  },
  pediatriaResumen: [
    {
      title: 'Videourodinamia Multicanal',
      id: 'videourodinamia-multicanal',
      icon: <Video className="h-12 w-12 text-primary" />,
      subtitle: 'Combina la urodinamia con video en tiempo real para el diagnóstico más completo de problemas anatómicos y funcionales.',
      precio: 'Desde $18,000 MXN',
      indicaciones: ['Reflujo vesicoureteral', 'Anomalías anatómicas', 'Casos quirúrgicos complejos'],
    },
    {
      title: 'Uroflujometría Pediátrica con EMG',
      id: 'uroflujometria-pediatrica-emg',
      description: 'Mide el flujo y volumen de la orina, con electromiografía para analizar la actividad muscular durante la micción. Es un estudio no invasivo clave para el diagnóstico inicial.',
      precio: '$3,000 MXN',
      indicaciones: ['Enuresis nocturna', 'Infecciones urinarias recurrentes', 'Patrón de micción anormal'],
    },
    {
      title: 'Urodinamia Multicanal y EMG',
      id: 'urodinamia-multicanal',
      description: 'Estudio de 3 canales (abdominal, vesical y uretral) para evaluar la función del tracto urinario inferior. Ideal para patologías complejas como vejiga neurogénica.',
      precio: '$10,000 MXN',
      indicaciones: ['Vejiga neurogénica', 'Enuresis resistente a tratamiento', 'Disfunción miccional compleja'],
    },
  ],
  adultosResumen: [
    {
      title: 'Uroflujometría Básica',
      id: 'uroflujometria-basica',
      description: 'La forma más sencilla y rápida de conocer cómo está funcionando el flujo urinario.',
      precio: '$1,900 MXN',
      indicaciones: ['Análisis de síntomas del tracto urinario inferior (LUTS)', 'Monitoreo de tratamiento'],
    },
    {
      title: 'Uroflujometría Premium',
      id: 'uroflujometria-premium',
      description: 'Un estudio más completo para entender a detalle cómo se vacía la vejiga.',
      precio: '$3,500 MXN',
      indicaciones: ['Sospecha de vaciamiento incompleto', 'Hiperplasia prostática benigna (HPB)', 'Estrechez uretral'],
    },
    {
      title: 'Check Up Total',
      id: 'check-up-total',
      description: 'La experiencia más completa en una sola visita.',
      indicaciones: ['Resultados que requieren análisis experto', 'Casos complejos', 'Segunda opinión'],
    },
  ],
};
