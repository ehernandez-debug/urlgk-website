# Urologik Web Application

Este es el repositorio oficial del sitio web de **Urologik** (urologik.com), una plataforma integral de servicios urológicos que provee infraestructura tecnológica para hospitales y médicos, así como estudios diagnósticos especializados.

El proyecto está construido con **Vite + React + Tailwind CSS** y desplegado en **Firebase Hosting**.

## 🏗️ Arquitectura y Estrategia de Negocio

El sitio web refleja el modelo de negocio balanceado (50/50) de Urologik, dividido en dos pilares principales:

1. **Renta de Equipo Médico (B2B):** Provisión de infraestructura tecnológica (Láser de Holmio, Torre de Urología, Instrumental) para hospitales y médicos sin inversión CAPEX.
2. **Estudios Diagnósticos:** Servicios especializados de urodinamia, uroflujometría y videourodinamia para pacientes y médicos referentes.

La navegación y estructura de la página principal (`HomePage`) están diseñadas para atender a tres audiencias clave:
- **Hospitales e Instituciones (Prioridad #1):** Enfoque en renta de equipo y reducción de costos.
- **Médicos Urólogos (Prioridad #2):** Enfoque en colaboración, renta de equipo y referencia de estudios.
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
│   ├── HomePage.jsx        # Landing principal (Balance 50/50)
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
- npm o yarn
- Firebase CLI (`npm install -g firebase-tools`)

### Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ehernandez-debug/urlgk-website.git
   cd urlgk-website
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   Copiar el archivo `.env.example` a `.env.local` y agregar las credenciales de Firebase.

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:5173`.

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción en la carpeta `dist/`.
- `npm run lint`: Ejecuta ESLint para encontrar y corregir problemas en el código.
- `npm run preview`: Sirve la versión compilada localmente para pruebas.

### ☁️ Despliegue a Firebase Hosting

El sitio está configurado para desplegarse en Firebase Hosting bajo el proyecto `urologik-mainwebsite`.

Para desplegar manualmente desde la CLI:

1. Autenticarse en Firebase (si no lo has hecho):
   ```bash
   firebase login
   ```

2. Compilar el proyecto:
   ```bash
   npm run build
   ```

3. Desplegar a producción:
   ```bash
   firebase deploy --only hosting
   ```

## 📊 Tracking y Analytics

El proyecto incluye integración nativa con Google Analytics 4 (GA4) a través de Firebase Analytics. Se utiliza un custom hook `useAnalytics.js` para registrar eventos clave:

- `trackLead`: Generación de leads (WhatsApp, Calendly, Formularios).
- `trackEvent`: Eventos genéricos (clics en CTAs, descargas de PDF).
- `trackServiceView`: Visualización de detalles de servicios.

## 🛡️ Compliance y Legal

El sitio cumple con los lineamientos de COFEPRIS, incluyendo secciones claras para el Aviso de Privacidad, Términos de Uso y Política de Cookies, ubicadas en `src/pages/legales/`.
