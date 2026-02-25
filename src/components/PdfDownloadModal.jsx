import { useState } from 'react';
import { X, FileCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { analytics, db } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PdfDownloadModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Función para descargar el PDF
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/urologik-modelo-colaboracion.pdf';
    link.download = 'Urologik-Modelo-Colaboracion.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para guardar en Firestore (con manejo de errores)
  const saveToFirestore = async (emailValue, nombreValue) => {
    try {
      if (!db) {
        console.warn('Firestore no está inicializado. Saltando guardado.');
        return false;
      }

      await addDoc(collection(db, 'pdf_downloads'), {
        email: emailValue.toLowerCase().trim(),
        nombre: nombreValue.trim(),
        downloadedAt: serverTimestamp(),
        pdfName: 'urologik-modelo-colaboracion.pdf',
        source: 'para-medicos-page',
        userAgent: navigator.userAgent,
      });

      console.log('✅ Lead guardado en Firestore:', emailValue);
      return true;
    } catch (error) {
      console.error('⚠️ Error al guardar en Firestore:', error);
      return false;
    }
  };

  // Función para loguear en Analytics (con manejo de errores)
  const logToAnalytics = (eventName, params) => {
    try {
      if (analytics) {
        logEvent(analytics, eventName, params);
        console.log('✅ Evento logueado en Analytics:', eventName);
      } else {
        console.warn('Analytics no está inicializado. Saltando log.');
      }
    } catch (error) {
      console.error('⚠️ Error al loguear en Analytics:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validar nombre
    if (!nombre || nombre.trim().length < 2) {
      setError('Por favor ingresa tu nombre');
      return;
    }

    // Validar email
    if (!email) {
      setError('Por favor ingresa tu email profesional');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailValue = email.toLowerCase().trim();
      const nombreValue = nombre.trim();

      // 1. Guardar lead en Firestore
      await saveToFirestore(emailValue, nombreValue);

      // 2. Loguear en Analytics
      logToAnalytics('pdf_download', {
        email: emailValue,
        nombre: nombreValue,
        pdf_name: 'urologik-modelo-colaboracion',
        source: 'para-medicos-page',
      });

      // 3. Descargar PDF
      downloadPDF();

      // 4. Cerrar modal después de 500ms
      setTimeout(() => {
        onClose();
        setEmail('');
        setNombre('');
      }, 500);

    } catch (error) {
      console.error('Error inesperado:', error);
      // Incluso si hay error, intentar descargar el PDF
      downloadPDF();
      setTimeout(() => {
        onClose();
        setEmail('');
        setNombre('');
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Icono y título */}
        <div className="text-center mb-6">
          <FileCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Guía Completa del Programa de Colaboración
          </h2>
          <p className="text-muted-foreground text-sm">
            Ingresa tus datos para recibir los detalles completos del modelo de participación progresiva, honorarios por nivel y beneficios del programa.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setError('');
              }}
              placeholder="Dr. Juan Pérez"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              autoFocus
              disabled={isSubmitting}
            />
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email profesional
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="tu.email@ejemplo.com"
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 mt-2">{error}</p>
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
                <span className="animate-spin mr-2">⏳</span>
                Preparando descarga...
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
          Tu información solo se usará para enviarte contenido relevante sobre el programa de colaboración.
          Ver <a href="/aviso-privacidad" className="text-primary hover:underline">Aviso de Privacidad</a>.
        </p>
      </div>
    </div>
  );
};

export default PdfDownloadModal;
