# Daily Sprouts - Gestor de Tareas Pixel Art

¡Bienvenido a Daily Sprouts! Un gestor de tareas con una encantadora estética pixel art. En este proyecto, el progreso de tus tareas se visualiza de una manera única: cada tarea comienza como un pequeño brote, crece a medida que avanzas y florece completamente al completarse.

Desarrollado con Vue.js, Daily Sprouts te ayuda a organizar tu día a día de una forma visual y motivadora.

## 🖼️ Vistas de la Aplicación

<table>
  <tr>
    <td align="center"><strong>Página de Inicio</strong></td>
    <td align="center"><strong>Gestión de Tareas</strong></td>
  </tr>
  <tr>
    <td><img src="/screenshots/home" alt="Página de Inicio"></td>
    <td><img src="/screenshots/task-list" alt="Gestión de Tareas"></td>
  </tr>
  <tr>
    <td align="center"><strong>Jardín</strong></td>
    <td align="center"><strong>Archivo</strong></td>
  </tr>
  <tr>
    <td><img src="/screenshots/garden" alt="Jardín"></td>
    <td><img src="/screenshots/archive" alt="Archivo"></td>
  </tr>
</table>

## ✨ Características Principales

- **Creación de Tareas:** Añade nuevas tareas con un título y elige una flor para representarla.
- **Gestión de Estado:** Las tareas pueden tener tres estados: "Recién empezada", "En progreso" y "Completada". El estado se puede cambiar fácilmente desde una lista desplegable.
- **Visualización Progresiva:** La imagen de la flor de cada tarea cambia reflejando su estado actual, desde un brote hasta una flor completa.
- **Jardín Personalizado:** Envía tus tareas más importantes a tu "jardín" para tener una visualización de tus logros. Hay un límite de 10 plantas en el jardín.
- **Edición y Eliminación:** Edita el título de tus tareas directamente en la lista o elimínalas cuando ya no las necesites.
- **Filtrado y Archivo:** Filtra tus tareas por estado o por las que están en el jardín. También puedes archivar tareas para ocultarlas de la lista principal y consultarlas más tarde.
- **Persistencia de Datos:** Tus tareas se guardan en el `localStorage` del navegador, para que no pierdas tu progreso al recargar la página.
- **Diseño Responsive:** La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla.

## 🛠️ Detalles Técnicos

### Stack Tecnológico

- **Framework:** [Vue 3](https://vuejs.org/) (usando `<script setup>`)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Gestión de Estado:** [Pinia](https://pinia.vuejs.org/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Estilos:** CSS con variables para theming.

### Estructura del Proyecto

El proyecto sigue una estructura modular para facilitar el mantenimiento y la escalabilidad:

```
public/           # Iconos e imágenes
src/
├── common/       # Componentes genéricos reutilizables (selectores, checkboxes, etc.)
├── components/   # Componentes principales de la aplicación (TaskForm, TaskList, Garden)
├── router/       # Configuración de Vue Router
├── stores/       # Módulos de Pinia para la gestión del estado (tasks, garden)
├── types/        # Definiciones de tipos de TypeScript
├── utils/        # Funciones de utilidad (ej. datos de las flores)
├── views/        # Vistas principales de la aplicación (Home, TaskManagement, Garden)
└── App.vue       # Componente raíz de la aplicación
```

### Gestión de Estado con Pinia

La aplicación utiliza **Pinia** para una gestión de estado centralizada y reactiva.

- **`tasks.ts`:** Gestiona todo lo relacionado con las tareas: lista de tareas, añadir, eliminar, actualizar, archivar, etc. También se suscribe a los cambios para persistir el estado en `localStorage`.
- **`garden.ts`:** Gestiona el estado del jardín, como el fondo de pantalla seleccionado, que también se persiste en `localStorage`.

### Componentes Reutilizables

Se ha puesto un fuerte énfasis en la reutilización de componentes, que se encuentran en la carpeta `src/common/`. Algunos ejemplos clave son:

- `CustomImageSelector.vue`: Un selector genérico que muestra imágenes como opciones.
- `CustomStatusDropdown.vue`: El desplegable para cambiar el estado de las tareas.
- `EditableTitle.vue`: Un componente que permite la edición de texto en línea.
- `TaskImage.vue`: Muestra la imagen correcta de la flor según el estado de la tarea.
