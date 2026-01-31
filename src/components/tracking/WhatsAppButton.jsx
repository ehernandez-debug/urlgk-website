import { Button } from '@/components/ui/button';
import useAnalytics from '@/hooks/useAnalytics';
import { getWhatsAppUrl } from '@/lib/cta'; // Import the centralized function

/**
 * Componente de Botón de WhatsApp con Tracking Integrado
 * 
 * Este componente envuelve un botón estándar y automáticamente registra
 * un evento `generate_lead` cuando el usuario hace clic. Utiliza la función
 * centralizada `getWhatsAppUrl` para generar el enlace.
 * 
 * @param {Object} props
 * @param {string} [props.serviceSlug] - El slug del servicio para generar un mensaje contextual.
 * @param {string} props.leadType - Tipo de lead: 'paciente' o 'medico'
 * @param {string} props.source - Identificador de la fuente del clic (ej: 'homepage_hero', 'navbar')
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {string} props.variant - Variante del botón (default, outline, etc.)
 * @param {string} props.size - Tamaño del botón
 * @param {string} props.className - Clases CSS adicionales
 */
export const WhatsAppButton = ({
  serviceSlug,
  leadType = 'paciente',
  source = 'unknown',
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) => {
  const { trackLead } = useAnalytics();

  const handleClick = () => {
    // Registrar el evento de conversión
    trackLead(leadType, 'whatsapp', {
      source: source,
      service: serviceSlug || 'general', // Track the service slug
    });

    // Generar y abrir la URL de WhatsApp
    const whatsappUrl = getWhatsAppUrl(serviceSlug);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

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

export default WhatsAppButton;
