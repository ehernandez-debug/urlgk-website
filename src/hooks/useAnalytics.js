import { useCallback } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

/**
 * Custom Hook para tracking de eventos de Analytics
 * 
 * Proporciona una interfaz limpia y tipada para registrar eventos
 * en Google Analytics 4 y Firebase Analytics.
 * 
 * @example
 * const { trackLead, trackCTAClick, trackCalculation } = useAnalytics();
 * 
 * // Registrar un lead de paciente
 * trackLead('paciente', 'whatsapp');
 * 
 * // Registrar un clic en CTA
 * trackCTAClick('medico_homepage_cta', '/medicos');
 */
export const useAnalytics = () => {
  /**
   * Registra un evento genérico en Analytics
   * @param {string} eventName - Nombre del evento
   * @param {Object} eventParams - Parámetros del evento
   */
  const trackEvent = useCallback((eventName, eventParams = {}) => {
    if (!analytics) {
      console.warn('⚠️ Analytics not initialized, event not tracked:', eventName);
      return;
    }

    try {
      logEvent(analytics, eventName, eventParams);
      console.log('📊 Event tracked:', eventName, eventParams);
    } catch (error) {
      console.error('❌ Error tracking event:', error);
    }
  }, []);

  /**
   * Registra un lead (conversión principal)
   * @param {string} leadType - Tipo de lead: 'paciente' o 'medico'
   * @param {string} channel - Canal de conversión: 'whatsapp', 'calendly', etc.
   * @param {Object} additionalParams - Parámetros adicionales opcionales
   */
  const trackLead = useCallback((leadType, channel, additionalParams = {}) => {
    trackEvent('generate_lead', {
      lead_type: leadType,
      channel: channel,
      timestamp: new Date().toISOString(),
      ...additionalParams
    });
  }, [trackEvent]);

  /**
   * Registra un clic en un Call-to-Action
   * @param {string} ctaName - Nombre identificador del CTA
   * @param {string} destination - URL o página de destino
   */
  const trackCTAClick = useCallback((ctaName, destination) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      destination: destination,
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  /**
   * Registra una interacción con la calculadora de honorarios
   * @param {string} servicioId - ID del servicio calculado
   * @param {number} numeroEstudios - Número de estudios calculados
   * @param {number} honorarios - Monto de honorarios calculado
   */
  const trackCalculation = useCallback((servicioId, numeroEstudios, honorarios) => {
    trackEvent('calculate_honorarios', {
      servicio_calculado: servicioId,
      estudios_calculados: numeroEstudios,
      honorarios_calculados: honorarios,
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  /**
   * Registra la visualización de detalles de un servicio
   * @param {string} serviceName - Nombre del servicio
   * @param {string} serviceCategory - Categoría del servicio ('adultos' o 'pediatricos')
   */
  const trackServiceView = useCallback((serviceName, serviceCategory) => {
    trackEvent('view_service_details', {
      service_name: serviceName,
      service_category: serviceCategory,
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  /**
   * Registra un clic en un enlace de red social
   * @param {string} platform - Plataforma: 'instagram', 'facebook', etc.
   * @param {string} location - Ubicación del enlace en el sitio
   */
  const trackSocialClick = useCallback((platform, location) => {
    trackEvent('social_click', {
      platform: platform,
      location: location,
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  /**
   * Registra el inicio de una sesión de Calendly
   * @param {string} eventType - Tipo de evento de Calendly
   * @param {string} source - Fuente desde donde se abrió Calendly
   */
  const trackCalendlyOpen = useCallback((eventType, source) => {
    trackEvent('calendly_open', {
      event_type: eventType,
      source: source,
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackLead,
    trackCTAClick,
    trackCalculation,
    trackServiceView,
    trackSocialClick,
    trackCalendlyOpen
  };
};

export default useAnalytics;
