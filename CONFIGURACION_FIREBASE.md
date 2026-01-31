# Configuración de Firebase para Urologik Website

## Problema Identificado

El sitio web no se carga correctamente en desarrollo local debido a la falta de variables de entorno de Firebase. El error mostrado es:

```
Missing Firebase configuration. Set VITE_FIREBASE_* variables in your .env.local file.
```

## Solución

### 1. Crear Archivo `.env.local`

El repositorio incluye un archivo `.env.example` con las variables necesarias. Para configurar el proyecto localmente:

**Opción A: Desarrollo Local (Mock)**

Si solo necesitas probar el sitio sin funcionalidades de Firebase (Analytics, Firestore), puedes usar valores mock:

```bash
cp .env.example .env.local
```

Luego edita `.env.local` con valores de desarrollo:

```env
VITE_FIREBASE_API_KEY=AIzaSyDEVELOPMENT_MOCK_KEY_12345
VITE_FIREBASE_AUTH_DOMAIN=urologik-dev.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=urologik-dev
VITE_FIREBASE_STORAGE_BUCKET=urologik-dev.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_RECAPTCHA_V3_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
VITE_APPCHECK_DEBUG=true
```

**Opción B: Producción/Staging (Firebase Real)**

Para usar Firebase real, obtén las credenciales de Firebase Console:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona el proyecto "Urologik" (o créalo si no existe)
3. Ve a **Project Settings** > **General** > **Your apps**
4. Copia los valores de configuración
5. Pega los valores en `.env.local`

### 2. Reiniciar el Servidor de Desarrollo

Después de crear/modificar `.env.local`, reinicia el servidor:

```bash
pnpm run dev
```

## Archivos Afectados

### `src/lib/firebase.js`

Este archivo inicializa Firebase y requiere las siguientes variables de entorno:

- `VITE_FIREBASE_API_KEY` - API Key de Firebase
- `VITE_FIREBASE_AUTH_DOMAIN` - Dominio de autenticación
- `VITE_FIREBASE_PROJECT_ID` - ID del proyecto (requerido)
- `VITE_FIREBASE_STORAGE_BUCKET` - Bucket de almacenamiento
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - ID del remitente de mensajería
- `VITE_FIREBASE_APP_ID` - ID de la aplicación (requerido)
- `VITE_FIREBASE_MEASUREMENT_ID` - ID de medición para Analytics
- `VITE_RECAPTCHA_V3_KEY` - Clave de reCAPTCHA v3 para App Check
- `VITE_APPCHECK_DEBUG` - Habilitar modo debug de App Check

### Validación de Configuración

El código valida que al menos `apiKey` y `projectId` estén presentes:

```javascript
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error(
    "Missing Firebase configuration. Set VITE_FIREBASE_* variables in your .env.local file."
  );
}
```

## Funcionalidades que Dependen de Firebase

### 1. Google Analytics (GA4)
- **Archivo:** `src/lib/firebase.js`
- **Función:** Tracking de eventos y conversiones
- **Impacto si falta:** No se registran eventos, pero el sitio funciona

### 2. Firestore Database
- **Archivo:** `src/lib/firebase.js`
- **Función:** Almacenamiento de datos (si se usa)
- **Impacto si falta:** Funcionalidades de base de datos no funcionan

### 3. App Check (reCAPTCHA v3)
- **Archivo:** `src/lib/firebase.js`
- **Función:** Protección contra bots y abuso
- **Impacto si falta:** Menor seguridad, pero el sitio funciona

### 4. Analytics Hooks
- **Archivo:** `src/hooks/useAnalytics.js`
- **Función:** Hook personalizado para tracking
- **Impacto si falta:** Eventos no se registran

## Mejora Implementada: Configuración Opcional

Para evitar que el sitio falle completamente sin Firebase, se recomienda hacer la configuración opcional:

### Modificación Sugerida en `src/lib/firebase.js`

```javascript
// Configuración opcional con valores por defecto
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'mock-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'mock.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'mock-project',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'mock.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789:web:mock',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-MOCK',
};

// Solo advertir, no bloquear
if (!import.meta.env.VITE_FIREBASE_API_KEY) {
  console.warn(
    "⚠️ Using mock Firebase configuration. Set VITE_FIREBASE_* variables in .env.local for production."
  );
}
```

## Seguridad

### ⚠️ Importante: `.env.local` en `.gitignore`

El archivo `.env.local` **NO debe** subirse a Git. Verifica que esté en `.gitignore`:

```bash
# .gitignore
.env.local
.env*.local
```

### Variables de Entorno en Producción

Para despliegue en Firebase Hosting, las variables se configuran automáticamente desde Firebase Console. **No es necesario** configurar variables de entorno en el hosting.

## Troubleshooting

### Error: "Missing Firebase configuration"

**Causa:** No existe el archivo `.env.local` o está vacío.

**Solución:** Crear `.env.local` siguiendo la Opción A o B arriba.

### Error: "Analytics not supported"

**Causa:** Valores de configuración incorrectos o mock.

**Solución:** 
- Si usas valores mock, este error es esperado y no afecta la funcionalidad del sitio
- Si necesitas Analytics real, usa la Opción B con credenciales reales

### Error: "Installations: Missing App configuration value"

**Causa:** `projectId` o `appId` están vacíos o incorrectos.

**Solución:** Verifica que `.env.local` tenga valores para:
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

## Checklist de Configuración

- [ ] Archivo `.env.local` creado
- [ ] Variables de Firebase configuradas
- [ ] Servidor de desarrollo reiniciado
- [ ] Sitio carga sin errores en consola
- [ ] Analytics funciona (si se usan credenciales reales)
- [ ] `.env.local` está en `.gitignore`

## Recursos Adicionales

- [Firebase Console](https://console.firebase.google.com/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Firebase Web Setup](https://firebase.google.com/docs/web/setup)

---

**Última actualización:** 31 de enero de 2026
