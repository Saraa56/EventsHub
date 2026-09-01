EventHub

EventHub es una plataforma web para explorar, descubrir y gestionar eventos. El proyecto está enfocado en ofrecer una experiencia de usuario sencilla, moderna y responsive, utilizando una arquitectura basada en componentes reutilizables.

<img width="1907" height="774" alt="image" src="https://github.com/user-attachments/assets/25986cee-18b8-441d-b2d8-400a7e10e019" />


## Tabla de contenidos

* [Características principales](#características-principales)
* [Capturas de pantalla](#capturas-de-pantalla)
* [Tecnologías](#tecnologías)
* [Instalación](#instalación)
* [Estructura del proyecto](#estructura-del-proyecto)
* [Estado del proyecto](#estado-del-proyecto)
* [Autora](#autora)

## Características principales

* 🔐 **Autenticación:** registro e inicio de sesión de usuarios.
* 🛡️ **Rutas protegidas:** acceso controlado a las secciones privadas de la aplicación.
* 🔎 **Búsqueda:** permite buscar eventos por nombre o ciudad.
* 🏷️ **Filtros:** filtrado de eventos por categorías.
* 📅 **Exploración de eventos:** visualización de diferentes eventos disponibles.
* 🧩 **Componentes reutilizables:** componentes diseñados para facilitar el mantenimiento y escalabilidad.
* 📱 **Diseño responsive:** adaptado a diferentes tamaños de pantalla.
* 🎨 **UI/UX:** interfaz diseñada teniendo en cuenta jerarquía visual, usabilidad y consistencia.

## Capturas de pantalla

### Inicio de sesión

![Login](./public/screenshots/login.png)

### Registro

![Register](./public/screenshots/register.png)

### Exploración de eventos

![Explorer](./public/screenshots/explorer.png)

### Dashboard

![Dashboard](./public/screenshots/dashboard.png)

## Tecnologías

Este proyecto fue desarrollado utilizando:

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vite.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)
* [Lucide React](https://lucide.dev/)
* [Git](https://git-scm.com/)
* [Figma](https://www.figma.com/)

## Instalación

### Requisitos previos

* Node.js
* NPM
* Git

### Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/eventshub.git
```

### Acceder al proyecto

```bash
cd eventshub
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar el proyecto

```bash
npm run dev
```

La aplicación estará disponible en la URL proporcionada por Vite.

## Estructura del proyecto

```text
src/
├── components/
│   ├── Button/
│   ├── Input/
│   ├── Navbar/
│   └── ...
│
├── layouts/
│   ├── AuthLayout/
│   ├── LandingLayout/
│   └── MainLayout/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   ├── Dashboard/
│   └── Explorer/
│
├── routes/
│   ├── AppRouter/
│   └── ProtectedRoute/
│
├── services/
│   └── authServices/
│
├── utils/
│   └── validators/
│
├── App.tsx
└── main.tsx
```

## Estado del proyecto

🚧 **En desarrollo**

Actualmente se encuentra implementada la estructura principal del frontend, incluyendo autenticación, navegación, layouts, rutas protegidas, exploración y filtrado de eventos.

### Próximamente

* [ ] Integración con backend.
* [ ] Base de datos.
* [ ] Autenticación real.
* [ ] Creación de eventos.
* [ ] Edición y eliminación de eventos.
* [ ] Registro de usuarios en eventos.
* [ ] Persistencia de información.
* [ ] Filtros avanzados.
* [ ] Despliegue de la aplicación.

## Objetivo

El objetivo de EventHub es desarrollar una aplicación completa de gestión y exploración de eventos, aplicando buenas prácticas de desarrollo frontend, diseño UI/UX, componentización y una arquitectura preparada para crecer.

Este proyecto forma parte de mi portafolio como estudiante de Ingeniería de Software.

## Autora

**Saris**

Ingeniería de Software

---

⭐ Si el proyecto te parece interesante, considera darle una estrella al repositorio.
