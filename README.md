# Pablo Cerrajero Shop - Proyecto final React + Firebase

# Proyecto E-commerce Cerrajería

Este proyecto es una Single Page Application (SPA) desarrollada con ** React**, que funciona como un **e-commerce de servicios y productos de cerrajería**
Permite navegar un catálogo, ver detalles, agregar al carrito, finalizar la compra y guardar órdenes en **Firestore**

Este README describe el funcionamiento, instalación y despliegue del proyecto desarrollado con React + Firebase.

## 🚀 Tecnologías utilizadas

- **React + Vite**
- **React Router DOM**
- **Firebase Firestore**
- **Context API** para el carrito
- **CSS modularizado** (index.css / App.css)

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/MartaAgM10/ProyectoFinalAguirreM.git
```

2. Entrar al proyecto:

```bash
cd -repoMartaAgM10
ProyectoFinalAguirreM
```

3. Instalar dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

---

## 🔥 Configuración de Firebase

Crear un archivo en:

```
src/services/firebase.js
```

Agregar tu configuración:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 🛒 Funcionalidades del proyecto según la consigna

- Listado de productos desde Firestore
- Filtro por categoría
- Detalle de producto
- Agregar al carrito
- Carrito persistente mientras se navega
- Eliminación de productos
- Checkout con generación de orden en Firestore

---

## 📁 Estructura del proyecto

```
src/
 ├── components/
 │    ├── Navbar/
 │    ├── ItemListContainer/
 │    ├── ItemDetail/
 │    ├── Cart/
 │    └── Checkout/
 │
 ├── context/
 │    └── CartContext.jsx
 │
 ├── services/
 │    └── firebase.js
 │
 ├── App.jsx
 ├── App.css
 ├── index.css
 └── main.jsx
```

---

## 🌐 Deploy en Vercel

1. Crear repositorio en GitHub

2. Subir el proyecto

3. Ir a: [https://vercel.com](https://vercel.com)

4. "Add New Project"

5. Importar el repositorio

6. Configuración:

   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

7. Deploy automático 🎉

---

### ✔ Funcionalidad

- [ ] Productos cargan desde Firestore
- [ ] Filtro por categoría funciona
- [ ] Detalle de producto correcto
- [ ] Agregar al carrito
- [ ] Eliminar del carrito
- [ ] Checkout genera orden

### ✔ Código

- [ ] No hay errores en consola
- [ ] Archivos CSS separados correctamente
- [ ] Firebase configurado

### ✔ Deploy

- [ ] `npm run build` funciona sin errores
- [ ] Vercel levantó el proyecto

## 👩‍💻 Autora

**Marta A.** — Proyecto final React

---
