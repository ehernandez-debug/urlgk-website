import { Button } from '@/components/ui/button';
import useAnalytics from '@/hooks/useAnalytics';

/**
 * Componente de Botón de Calendly con Tracking Integrado
 * 
 * Este componente envuelve un botón estándar y automáticamente registra
 * un evento `generate_lead` cuando el usuario hace clic para abrir Calendly.
 * 
 * @param {Object} props
 * @param {string} props.calendlyUrl - URL completa de Calendly
 * @param {string} props.leadType - Tipo de lead: 'paciente' o 'medico'
 * @param {string} props.source - Identificador de la fuente del clic (ej: 'contacto_page', 'medicos_hero')
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {string} props.variant - Variante del botón (default, outline, etc.)
 * @param {string} props.size - Tamaño del botón
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.asChild - Si es true, renderiza como enlace <a>
 */
export const CalendlyButton = ({
  calendlyUrl = 'https://calendly.com/urologik/30min',
  leadType = 'paciente',
  source = 'unknown',
  children,
  variant = 'default',
  size = 'default',
  className = '',
  asChild = false,
  ...props
}) => {
  const { trackLead, trackCalendlyOpen } = useAnalytics();

  const handleClick = (e) => {
    // Registrar el evento de conversión
    trackLead(leadType, 'calendly', {
      source: source,
      calendly_url: calendlyUrl
    });

    // Registrar apertura de Calendly
    trackCalendlyOpen('30min', source);

    // Si es un enlace <a>, dejar que el navegador maneje la navegación
    // Si no, abrir en nueva pestaña
    if (!asChild) {
      e.preventDefault();
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (asChild) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        asChild
        {...props}
      >
        <a 
          href={calendlyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CalendlyButton;
