import EspecialidadPage from '@/pages/servicios/EspecialidadPage';
import { servicesData } from '@/lib/servicios-data.jsx';

const PediatriaPage = () => {
  return (
    <EspecialidadPage
      title="Urología Pediátrica"
      description="Diagnósticos precisos y adaptados a las necesidades de los más pequeños, utilizando equipos de tamaño pediátrico y protocolos especializados."
      estudios={servicesData.pediatriaResumen}
      especialidad="pediatria"
    />
  );
};

export default PediatriaPage;
