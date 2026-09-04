# EventHub

Plataforma web para la **exploración y gestión de eventos**, diseñada para centralizar la creación, consulta y administración de eventos desde una interfaz moderna, responsive y orientada a la experiencia de usuario.

EventHub está siendo desarrollado como un **proyecto personal full-stack**, con una arquitectura modular y una evolución progresiva desde el frontend hasta la implementación del backend, persistencia de datos y funcionalidades de reportería.

## Características principales

* Exploración pública de eventos.
* Búsqueda de eventos por nombre o ciudad.
* Filtrado por categorías.
* Visualización detallada de eventos.
* Registro e inicio de sesión de usuarios.
* Rutas protegidas para usuarios autenticados.
* Dashboard para la gestión de eventos.
* Componentes reutilizables.
* Diseño responsive.
* Reportería y métricas para el análisis de eventos.

## Capturas de pantalla

> Agrega aquí las principales capturas del proyecto.

<img width="1892" height="830" alt="image" src="https://github.com/user-attachments/assets/da599ad3-fc39-407e-9e4d-10529c797170" />


<img width="1297" height="825" alt="image" src="https://github.com/user-attachments/assets/32f660ee-f7cb-4824-8f8f-03c06cb7727c" />


<img width="1907" height="771" alt="image" src="https://github.com/user-attachments/assets/4e420bd1-d220-4d8b-a679-10abe9c43a85" />


## Para empezar

### Prerequisitos

* [Node.js](https://nodejs.org/)
* npm

### Instalación

Clona el repositorio:

```bash
git clone https://github.com/Saraa56/eventhub.git
```

Accede al proyecto:

```bash
cd eventhub
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

## Arquitectura

El frontend está organizado mediante una **arquitectura modular y basada en componentes**, buscando mantener una separación clara de responsabilidades y facilitar la escalabilidad del proyecto.

```text
src/
├── components/
├── pages/
├── layouts/
├── routes/
├── services/
├── utils/
└── ...
```

La aplicación utiliza componentes reutilizables para formularios, inputs, botones, tarjetas y elementos de navegación.

Además, se mantiene una separación entre la interfaz, la lógica de negocio, los servicios y las utilidades para facilitar la futura integración con el backend.

## Stack

### Frontend

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Lucide React**

### Backend

* **Node.js**
* **Express**
* **TypeScript**

### Base de datos

* **PostgreSQL**

### Herramientas

* **Git**
* **GitHub**
* **Figma**
* **NPM**

## Reportería

Como parte de la evolución de EventHub, el proyecto incorporará un módulo de **reportería y análisis de datos**, orientado a obtener información útil sobre el comportamiento de los eventos.

Entre las funcionalidades contempladas se encuentran:

* Métricas generales de eventos.
* Reporte de asistencia.
* Nivel de ocupación.
* Eventos por categoría.
* Eventos por ciudad.
* Registros por rango de fechas.
* Filtros para consulta de información.
* Exportación de reportes.

## Estado del proyecto

**MVP en desarrollo.**

Actualmente se está construyendo el frontend y los principales flujos de navegación, autenticación y exploración de eventos.

La siguiente etapa contempla la integración del backend con Node.js y Express, PostgreSQL, autenticación, persistencia de información y posteriormente el módulo de reportería.

## Próximas funcionalidades

* Integración frontend + backend.
* API REST.
* Persistencia de usuarios y eventos.
* Autenticación y autorización.
* Gestión completa de eventos.
* Registro de asistentes.
* Dashboard de métricas.
* Reportes de asistencia y ocupación.
* Filtros avanzados.
* Exportación de datos.
* Pruebas automatizadas.
* CI/CD.
* Despliegue.

## Sobre el proyecto

El diseño de la plataforma fue planteado previamente en **Figma** y el desarrollo se realiza de manera incremental, priorizando código mantenible, componentes reutilizables y una arquitectura preparada para crecer.

## Autor

**Sara Otero**

Ingeniería de Software
