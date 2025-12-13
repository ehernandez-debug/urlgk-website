import { Button } from '@/components/ui/button';
import useAnalytics from '@/hooks/useAnalytics';

/**
 * Componente de Botón de WhatsApp con Tracking Integrado
 * 
 * Este componente envuelve un botón estándar y automáticamente registra
 * un evento `generate_lead` cuando el usuario hace clic.
 * 
 * @param {Object} props
 * @param {string} props.phoneNumber - Número de teléfono de WhatsApp (formato: 5215535055983)
 * @param {string} props.message - Mensaje predefinido para WhatsApp
 * @param {string} props.leadType - Tipo de lead: 'paciente' o 'medico'
 * @param {string} props.source - Identificador de la fuente del clic (ej: 'homepage_hero', 'navbar')
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {string} props.variant - Variante del botón (default, outline, etc.)
 * @param {string} props.size - Tamaño del botón
 * @param {string} props.className - Clases CSS adicionales
 */
export const WhatsAppButton = ({
  phoneNumber = '5215535055983',
  message = 'Hola, me interesa conocer más sobre Urologik',
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
      phone_number: phoneNumber
    });

    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
