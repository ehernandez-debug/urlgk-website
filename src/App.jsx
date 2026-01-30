import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Layout from './components/Layout';

// Fallback Component for Suspense
const Loading = () => <div style={{ textAlign: 'center', padding: '50px' }}>Cargando...</div>;

// --- Page Imports (Lazy Loaded) ---

// Core Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const PacientesPage = lazy(() => import('./pages/PacientesPage')); // Reused for /para-pacientes

// New Structure Pages & Placeholders
const ParaMedicos = lazy(() => import('./pages/ParaMedicos'));
const LpLaserHolmio = lazy(() => import('./pages/LpLaserHolmio'));
const LpTorreUrologia = lazy(() => import('./pages/LpTorreUrologia'));
const LpInstrumentalConsumibles = lazy(() => import('./pages/LpInstrumentalConsumibles'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

// Legal Pages
const AvisoPrivacidadPage = lazy(() => import('./pages/legales/AvisoPrivacidadPage'));
const TerminosUsoPage = lazy(() => import('./pages/legales/TerminosUsoPage'));
const CookiesPage = lazy(() => import('./pages/legales/CookiesPage'));

// Deprecated pages that might be removed soon
const ServiciosPage = lazy(() => import('./pages/ServiciosPage'));
const ServicioPage = lazy(() => import('./pages/servicios/ServicioPage'));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage'));
const AgendarPage = lazy(() => import('./pages/AgendarPage'));


function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* New Portal Structure */}
              <Route index element={<HomePage />} />
              <Route path="para-pacientes" element={<PacientesPage />} />
              <Route path="para-medicos" element={<ParaMedicos />} />
              
              <Route path="renta">
                <Route path="laser-holmio-lumenis" element={<LpLaserHolmio />} />
                <Route path="torre-urologia-stryker" element={<LpTorreUrologia />} />
                <Route path="instrumental-y-consumibles" element={<LpInstrumentalConsumibles />} />
              </Route>

              <Route path="blog">
                <Route index element={<BlogPage />} />
                <Route path=":slug" element={<BlogPostPage />} />
              </Route>
              
              <Route path="contacto" element={<ContactoPage />} />

              {/* --- Deprecated routes, kept for now until content is migrated --- */}
              <Route path="servicios">
                  <Route index element={<ServiciosPage />} />
                  <Route path=":especialidad/:serviceSlug" element={<ServicioPage />} />
              </Route>
              <Route path="nosotros" element={<NosotrosPage />} />
              <Route path="agendar" element={<AgendarPage />} />

              {/* Legal Pages */}
              <Route path="aviso-de-privacidad" element={<AvisoPrivacidadPage />} />
              <Route path="terminos-de-uso" element={<TerminosUsoPage />} />
              <Route path="politica-de-cookies" element={<CookiesPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
