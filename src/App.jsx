import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'

// Pages
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import PacientesPage from './pages/PacientesPage'
import MedicosPage from './pages/MedicosPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {!isHomePage && <Breadcrumbs />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/medicos" element={<MedicosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
