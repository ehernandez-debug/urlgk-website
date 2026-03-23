# Urologik Web Application

Este es el repositorio oficial del sitio web de **Urologik** (urologik.com), una plataforma integral de servicios urológicos que provee infraestructura tecnológica para hospitales y médicos, así como estudios diagnósticos especializados.

El proyecto está construido con **Vite + React + Tailwind CSS** y desplegado en **Firebase Hosting**.

## 🏗️ Arquitectura y Estrategia de Negocio

El sitio web refleja el modelo de negocio estratégico de Urologik, enfocado en ser una empresa B2B de servicios integrales. El análisis de facturación revela que el **85% de los ingresos provienen de la renta de equipo médico**, mientras que los estudios de urodinamia funcionan como un "lead magnet" estratégico.

### Líneas de Negocio Principales:

1. **Renta de Equipo Médico (B2B - 85% Ingresos):** Provisión de infraestructura tecnológica (Láser de Holmio, Torre de Urología, Instrumental) para hospitales y médicos sin inversión CAPEX.
2. **Estudios Diagnósticos (10% Ingresos):** Servicios especializados de urodinamia, uroflujometría y videourodinamia para pacientes y médicos referentes.

### Audiencias Clave:

- **Hospitales e Instituciones (Prioridad #1):** Enfoque en renta de equipo de última generación y reducción de costos (CAPEX).
- **Médicos Urólogos (Prioridad #2):** Enfoque en modelo de colaboración progresiva, renta de equipo y referencia de estudios.
- **Pacientes (Prioridad #3):** Enfoque educativo y agendamiento de estudios diagnósticos.

## 📂 Estructura del Proyecto

El código fuente principal se encuentra en el directorio `src/`:

```text
src/
├── App.jsx                 # Enrutador principal (React Router)
├── main.jsx                # Punto de entrada de la aplicación
├── components/             # Componentes reutilizables (UI, Layout, Navbar, Footer)
│   ├── ui/                 # Componentes base (shadcn/ui)
│   └── tracking/           # Componentes con tracking integrado (WhatsApp, Calendly)
├── pages/                  # Páginas principales de la aplicación
│   ├── HomePage.jsx        # Landing principal
│   ├── ContactoPage.jsx    # Formulario dinámico B2B y B2C
│   ├── Lp*.jsx             # Landing Pages de Renta de Equipo (Láser, Torre, Instrumental)
│   ├── LpUro*.jsx          # Landing Pages de Estudios (Uroflujometría, Urodinamia, etc.)
│   └── legales/            # Páginas de compliance (Aviso de Privacidad, Términos)
├── lib/                    # Utilidades, configuración de Firebase y datos estáticos
└── hooks/                  # Custom hooks (ej. useAnalytics para GA4)
```

## 🚀 Guía de Desarrollo y Despliegue

### Requisitos Previos
- Node.js (v18 o superior)
- pnpm (recomendado) o npm
- Firebase CLI (`npm install -g firebase-tools`)

### Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ehernandez-debug/urlgk-website.git
   cd urlgk-website
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   ```

3. Configurar variables de entorno:
   Copiar el archivo `.env.example` a `.env.local` y agregar las credenciales de Firebase.

4. Iniciar el servidor de desarrollo:
   ```bash
   pnpm run dev
   ```
   El sitio estará disponible en `http://localhost:5173`.

### Scripts Disponibles
- `pnpm run dev`: Inicia el servidor de desarrollo.
- `pnpm run build`: Compila la aplicación para producción en la carpeta `dist/`.
- `pnpm run lint`: Ejecuta ESLint para encontrar y corregir problemas en el código.
- `pnpm run preview`: Sirve la versión compilada localmente para pruebas.

### ☁️ Despliegue a Firebase Hosting

El sitio está configurado para desplegarse en Firebase Hosting bajo el proyecto `urologik-mainwebsite`.

**Despliegue Automático (CI/CD):**
El repositorio cuenta con GitHub Actions configurado para desplegar automáticamente a Firebase Hosting cada vez que se hace un push a la rama `main`.

**Despliegue Manual:**
Para desplegar manualmente desde la CLI:
1. Autenticarse en Firebase: `firebase login`
2. Compilar el proyecto: `pnpm run build`
3. Desplegar a producción: `firebase deploy --only hosting`

## 📊 Tracking y Analytics

El proyecto incluye integración nativa con Google Analytics 4 (GA4) a través de Firebase Analytics. Se utiliza un custom hook `useAnalytics.js` para registrar eventos clave:
- `trackLead`: Generación de leads (WhatsApp, Calendly, Formularios).
- `trackEvent`: Eventos genéricos (clics en CTAs, descargas de PDF).
- `trackServiceView`: Visualización de detalles de servicios.

## 🛡️ Compliance y Legal

El sitio cumple con los lineamientos de COFEPRIS, incluyendo secciones claras para el Aviso de Privacidad, Términos de Uso y Política de Cookies, ubicadas en `src/pages/legales/`.
