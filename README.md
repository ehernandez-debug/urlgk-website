# Urologik Web Application

This is a Vite + React + Tailwind CSS project for Urologik, a company providing urological diagnostic services.

## Project Structure

The main files are located in the `src` directory:

- `main.jsx`: The entry point of the application.
- `App.jsx`: The main router, defining all the application routes.
- `components/`: Reusable components used throughout the application.
- `pages/`: The main pages of the application.
- `lib/`: Utility functions and data.

## Managing Services

To add or modify services, you need to edit the `src/lib/servicios-data.js` file. This file contains an object with two main keys: `pediatria` and `adultos`. Each of these keys contains an object with the services for that category.

To add a new service, you need to add a new key to the corresponding category object. The key should be the service slug, and the value should be an object with the following structure:

```javascript
{
  title: 'Service Title',
  subtitle: 'Service Subtitle',
  icon: <IconComponent />,
  description: 'Service description.',
  duracion: 'Service duration',
  preparacion: 'Service preparation',
  precio: 'Service price',
  indicaciones: ['Indication 1', 'Indication 2'],
  proceso: ['Step 1', 'Step 2'],
  ventajas: ['Advantage 1', 'Advantage 2'],
  faq: [
    {
      question: 'Frequently asked question?',
      answer: 'Answer to the question.'
    }
  ]
}
```

## Managing Commissions

To adjust the commission rates for the operational models, you need to edit the `src/pages/MedicosPage.jsx` file. Inside the `OperationalModels` component, you will find two `CommissionTable` components. You can edit the `data` prop of these components to adjust the commission rates.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run lint`

Lints the code to find and fix problems.

### `npm run preview`

Serves the production build locally.

31/10/2015