import { useState } from 'react';
import { X, FileCheck, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Analytics se importa de forma lazy para evitar errores si no está inicializado
let analyticsInstance = null;
const getAnalytics = async () => {
  if (analyticsInstance) return analyticsInstance;
  try {
    const { getAnalytics: getFA, isSupported, logEvent } = await import('firebase/analytics');
    const { app } = await import('@/lib/firebase');
    const supported = await isSupported();
    if (supported) {
      analyticsInstance = { instance: getFA(app), logEvent };
    }
  } catch (e) {
    console.warn('Analytics no disponible:', e);
  }
  return analyticsInstance;
};

const PdfDownloadModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  // Descarga directa del PDF — siempre se ejecuta independientemente de Firestore/Analytics
  const downloadPDF = () => {
    try {
      const link = document.createElement('a');
      link.href = '/urologik-onepager-colaboracion-v4.pdf';
      link.download = 'Urologik-OnePager-Colaboracion.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      // Fallback: abrir en nueva pestaña
      window.open('/urologik-onepager-colaboracion-v4.pdf', '_blank');
    }
  };

  // Guardar lead en Firestore (no bloquea la descarga si falla)
  const saveLeadToFirestore = async (emailVal, nombreVal) => {
    try {
      if (!db) {
        console.error('❌ Firestore db no inicializado — lead NO guardado');
        return;
      }
      await addDoc(collection(db, 'pdf_downloads'), {
        email: emailVal,
        nombre: nombreVal,
        downloadedAt: serverTimestamp(),
        pdfName: 'urologik-onepager-colaboracion-v4.pdf',
        source: 'para-medicos-page',
        pdfVersion: 'v4',
        userAgent: navigator.userAgent,
      });
      console.log('✅ Lead guardado en Firestore');
    } catch (e) {
      console.error('❌ Error al guardar lead en Firestore:', e.code, e.message);
    }
  };

  // Registrar evento en GA4 (no bloquea la descarga si falla)
  const logAnalyticsEvent = async (emailVal, nombreVal) => {
    try {
      const analytics = await getAnalytics();
      if (analytics) {
        analytics.logEvent(analytics.instance, 'pdf_download_lead', {
          event_category: 'lead_generation',
          event_label: 'guia_colaboracion_medicos',
          pdf_name: 'urologik-onepager-colaboracion-v4',
          source: 'para-medicos-page',
          // No enviar PII a GA4 — solo metadata
          has_email: !!emailVal,
          has_nombre: !!nombreVal,
        });
        console.log('✅ Evento GA4 registrado: pdf_download_lead');
      }
    } catch (e) {
      console.warn('⚠️ Analytics no disponible:', e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (!nombre || nombre.trim().length < 2) {
      setError('Por favor ingresa tu nombre completo');
      return;
    }
    if (!email || !validateEmail(email)) {
      setError('Por favor ingresa un email profesional válido');
      return;
    }

    setIsSubmitting(true);

    const emailVal = email.toLowerCase().trim();
    const nombreVal = nombre.trim();

    // PASO 1: Descargar el PDF PRIMERO — esto no puede fallar
    downloadPDF();

    // PASO 2: Mostrar éxito inmediatamente
    setSuccess(true);

    // PASO 3: Guardar en Firestore y Analytics en paralelo (sin bloquear)
    Promise.all([
      saveLeadToFirestore(emailVal, nombreVal),
      logAnalyticsEvent(emailVal, nombreVal),
    ]).catch(() => {
      // Silencioso — la descarga ya ocurrió
    });

    // PASO 4: Cerrar modal después de 2s para que el usuario vea el mensaje de éxito
    setTimeout(() => {
      onClose();
      setEmail('');
      setNombre('');
      setSuccess(false);
      setIsSubmitting(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          /* Estado de éxito */
          <div className="text-center py-6">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              ¡Descarga iniciada!
            </h2>
            <p className="text-muted-foreground text-sm">
              La guía se está descargando. Si no inicia automáticamente,
              revisa tu carpeta de descargas.
            </p>
          </div>
        ) : (
          <>
            {/* Icono y título */}
            <div className="text-center mb-6">
              <FileCheck className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Guía Completa del Programa de Colaboración
              </h2>
              <p className="text-muted-foreground text-sm">
                Honorarios por nivel, requisitos de avance y ejemplos de ingresos mensuales.
                Ingresa tus datos para descargar.
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Nombre */}
              <div>
                <label htmlFor="pdf-nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="pdf-nombre"
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value); setError(''); }}
                    placeholder="Dr. Juan Pérez"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    autoFocus
                    disabled={isSubmitting}
                    autoComplete="name"
                  />
                </div>
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="pdf-email" className="block text-sm font-medium text-foreground mb-2">
                  Email profesional
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="pdf-email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="tu.email@hospital.com"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    disabled={isSubmitting}
                    autoComplete="email"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                    <span>⚠</span> {error}
                  </p>
                )}
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2 inline-block">⏳</span>
                    Iniciando descarga...
                  </>
                ) : (
                  <>
                    <FileCheck className="mr-2 h-5 w-5" />
                    Descargar Guía Completa
                  </>
                )}
              </Button>
            </form>

            {/* Nota de privacidad */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              Tu información solo se usará para enviarte contenido relevante sobre el programa.
              Ver{' '}
              <a href="/aviso-privacidad" className="text-primary hover:underline">
                Aviso de Privacidad
              </a>.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PdfDownloadModal;
