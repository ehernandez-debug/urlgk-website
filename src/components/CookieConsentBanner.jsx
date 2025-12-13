import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('urologik-cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('urologik-cookie-consent', 'accepted');
    localStorage.setItem('urologik-cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('urologik-cookie-consent', 'declined');
    localStorage.setItem('urologik-cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="bg-primary/10 p-3 rounded-full">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2">
                Utilizamos Cookies
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Utilizamos cookies propias y de terceros para mejorar su experiencia en nuestro sitio web, 
                analizar el tráfico y proporcionar funcionalidades como la programación de citas. 
                Al hacer clic en "Aceptar", acepta el uso de cookies de acuerdo con nuestra{' '}
                <a 
                  href="/politica-de-cookies" 
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Cookies
                </a>
                {' '}y{' '}
                <a 
                  href="/aviso-de-privacidad" 
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aviso de Privacidad
                </a>
                .
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handleAccept}
                  className="transition-transform hover:scale-105"
                >
                  Aceptar Cookies
                </Button>
                <Button 
                  onClick={handleDecline}
                  variant="outline"
                >
                  Rechazar
                </Button>
                <Button 
                  asChild
                  variant="ghost"
                  size="sm"
                >
                  <a href="/politica-de-cookies" target="_blank" rel="noopener noreferrer">
                    Más Información
                  </a>
                </Button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleDecline}
              className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsentBanner;
