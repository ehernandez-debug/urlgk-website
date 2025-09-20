import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary';

// Pages
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import PacientesPage from './pages/PacientesPage'
import MedicosPage from './pages/MedicosPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import ServicioPage from './pages/servicios/ServicioPage'
import AgendarPage from './pages/AgendarPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <MainLayout />
      </Router>
    </HelmetProvider>
  )
}

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Hide breadcrumbs on service pages, as they have their own
  const isServicioPage = location.pathname.startsWith('/servicios/') && location.pathname.length > '/servicios/'.length;


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/servicios/:serviceSlug" element={<ServicioPage />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/medicos" element={<ErrorBoundary><MedicosPage /></ErrorBoundary>} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/agendar" element={<AgendarPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
