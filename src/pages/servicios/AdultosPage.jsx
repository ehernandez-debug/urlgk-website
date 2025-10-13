import EspecialidadPage from '@/pages/servicios/EspecialidadPage';
import { servicesData } from '@/lib/servicios-data.jsx';

const AdultosPage = () => {
  return (
    <EspecialidadPage
      title="Urología de Adultos"
      description="Servicios de uroflujometría diseñados para el diagnóstico y seguimiento de patologías urológicas en adultos."
      estudios={servicesData.adultosResumen}
      especialidad="adultos"
    />
  );
};

export default AdultosPage;
