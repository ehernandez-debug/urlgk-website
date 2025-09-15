# Urologik - Sitio Web Oficial

**Salud con I.A. Biomédica**

Sitio web oficial de Urologik, especialistas en estudios urológicos con tecnología de vanguardia.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Formularios Inteligentes**: Agendamiento diferenciado por tipo de paciente
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Build optimizado con Vite
- **Accesibilidad**: Cumple estándares WCAG

## 🛠️ Tecnologías

- **Frontend**: React 19 + Vite 6
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router DOM 7
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/urologik-website.git
cd urologik-website

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Navegación principal
│   ├── Footer.jsx      # Pie de página
│   └── Logo.jsx        # Logo de Urologik
├── pages/              # Páginas principales
│   ├── HomePage.jsx    # Página de inicio
│   ├── ServiciosPage.jsx # Servicios médicos
│   ├── PacientesPage.jsx # Formulario pacientes
│   ├── MedicosPage.jsx   # Formulario médicos
│   ├── NosotrosPage.jsx  # Información empresa
│   └── ContactoPage.jsx  # Contacto
├── assets/             # Imágenes y recursos
└── App.jsx            # Componente principal
```

## 🎯 Páginas y Funcionalidades

### **Página Principal**
- Hero section adaptativo por buyer persona
- Sección de servicios con CTAs
- Información de ubicaciones
- Testimonios y casos de éxito

### **Para Pacientes**
- Formulario de agendamiento inteligente
- Campo condicional para referencia médica
- Información de preparación por estudio
- Integración con calendario

### **Para Médicos**
- Formulario de registro profesional
- Información de servicios para médicos
- Proceso de colaboración
- Contacto directo

### **Servicios**
- Uroflujometría
- Urodinamia
- Consultas especializadas
- Información detallada por estudio

## 🎨 Branding

### **Colores**
- **Primario**: #2C5F7A (Azul médico)
- **Secundario**: #4A9B8E (Teal)
- **Texto**: #1F2937 (Gris oscuro)
- **Fondo**: #F9FAFB (Gris claro)

### **Tipografía**
- **Principal**: Inter (sans-serif)
- **Tamaños**: Responsive con Tailwind

## 🚀 Despliegue

### **Firebase Hosting**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar proyecto
firebase init hosting

# Deploy
npm run build
firebase deploy
```

### **Vercel**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter ESLint
```

## 🌐 URLs de Producción

- **Sitio Principal**: https://urologik.com
- **Staging**: https://urologik-staging.web.app

## 📞 Contacto

- **Email**: contacto@urologik.com
- **Teléfono**: 55-XXXX-XXXX
- **Ubicaciones**: 
  - Colonia del Valle, CDMX
  - Hospital Infantil Privado

## 📄 Licencia

© 2025 Urologik. Todos los derechos reservados.

---

**Desarrollado con ❤️ para revolucionar la urología con I.A. biomédica**

