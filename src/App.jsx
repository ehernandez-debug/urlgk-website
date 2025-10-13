import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import PacientesPage from './pages/PacientesPage';
import MedicosPage from './pages/MedicosPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import ServicioPage from './pages/servicios/ServicioPage';
import AgendarPage from './pages/AgendarPage';
import PediatriaPage from './pages/servicios/PediatriaPage';
import AdultosPage from './pages/servicios/AdultosPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="servicios">
              <Route index element={<ServiciosPage />} />
              <Route path="pediatria" element={<PediatriaPage />} />
              <Route path="adultos" element={<AdultosPage />} />
              <Route path=":especialidad/:serviceSlug" element={<ServicioPage />} />
            </Route>
            <Route path="pacientes" element={<PacientesPage />} />
            <Route path="medicos" element={<ErrorBoundary><MedicosPage /></ErrorBoundary>} />
            <Route path="nosotros" element={<NosotrosPage />} />
            <Route path="contacto" element={<ContactoPage />} />
            <Route path="agendar" element={<AgendarPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
