# Pablo Cerrajero Shop - Proyecto final React + Firebase

Este proyecto es una Single Page Application (SPA) desarrollada con ** React**, que funciona como un **e-commerce de servicios y productos de cerrajería**
Permite navegar un catálogo, ver detalles, agregar al carrito, finalizar la compra y guardar órdenes en **Firestore**

# Tecnologias utilizadas

- React JS
- React Router DOM
- Firebase / Firestore
- Context API
- CSS / SCSS
- Vite

# Estructura del proyecto

src/
├── components/
│ ├── NavBar/
│ ├── ItemListContainer/
│ ├── ItemDetailContainer/
│ ├── Cart/
│ └── Checkout/
├── context/
├── firebase/
├── data/
├── App.jsx
├── main.jsx
└── index.css

# Instalación

1. Clonar el repositorio
   git clone(https://github.com/MartaAgM10/ProyectoFinalAguirreM.git)
2. Instalar dependencias:
   `npm install`
3. Crear `.env.local`con variables de Fiberase
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_SENDER_ID=
   VITE_FIREBASE_APP_ID=
4. Ejecutar modo desarrollo:
   `npm run dev`

# Fiberbase

### Coleccion: `productos`

Cada documento debe tener:
| Campo | Tipo | Ejemplo |
|--------------|----------|---------|
| nombre | string | "Cerradura doble paleta" |
| precio | number | 15000 |
| categoria | string | "cerraduras" |
| stock | number | 8 |
| imagen | string | URL de imagen |
| descripcion | string | "Cerradura reforzada..." |

### Colección: `ordenes`

Se genera al finalizar la compra desde CheckoutForm.

## Funcionalidades principales

- Catálogo dinámico desde Firestore
- Filtro por categorías
- Vista de detalle
- Carrito global con Context
- Checkout con validación
- Generación de orden y feedback del ID

## Buenas prácticas aplicadas

- Componentes presentacionales y contenedores separados
- Context limpio sin UI
- Fetch dentro de contenedores
- Navegación SPA sin recargas
- Manejo de errores y renderizado condicional
- Código limpio sin debuggers

---

## Deploy

Se puede desplegar en:

- Netlify
- Vercel

---

## Autor Marta A

Proyecto Final – React JS

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
