# Máster Front End XVII - Laboratorio Angular "Layout completo de mini-aplicación"

# Proyecto Momentum

Este proyecto es una aplicación llamada **Momentum**, desarrollada con Angular. Su objetivo principal es permitir a los usuarios capturar, atesorar y revivir sus recuerdos más preciados a través de una cápsula digital personal. La aplicación presenta una estructura de layout adaptable que cambia dinámicamente según el estado de autenticación del usuario, ofreciendo diferentes vistas y funcionalidades.

## Características Principales

- **Framework:** Angular
- **Estilo:** SCSS, con uso de Angular Material para componentes de UI.
- **Autenticación:**
  - Sistema de login simple (credenciales de demostración: `lemoncoder` / `1234`).
  - El estado de autenticación se gestiona mediante `localStorage`.
  - `AuthService` para la lógica de autenticación.
  - `AuthGuard` para proteger rutas y gestionar redirecciones.
- **Layout Dinámico:**
  - Cabecera pública para usuarios no autenticados.
  - Cabecera privada para usuarios autenticados.
  - Pie de página persistente.
- **Enrutamiento:** Gestión de navegación entre diferentes páginas públicas y privadas.

## Estructura del Proyecto

El código fuente principal se encuentra dentro de la carpeta `layout-mini-app/src/app/`:

- `core/`: Contiene la lógica central de la aplicación, como `AuthService.ts` y `AuthGuard.ts`.
- `layout/`: Componentes visuales reutilizables que conforman la estructura de la página:
  - `header-public/`: Cabecera para la sección pública.
  - `header-private/`: Cabecera para la sección privada (usuarios autenticados).
  - `public-menu/`: Contiene los elementos del menú para la cabecera pública.
  - `private-menu/`: Contiene los elementos del menú para la cabecera privada.
  - `footer/`: Pie de página común.
- `pages/`: Componentes que representan las distintas vistas/páginas de la aplicación:
  - `home/`: Página de inicio y bienvenida.
  - `login/`: Página de inicio de sesión.
  - `about/`: Página informativa "Acerca de Momentum".
  - `dashboard/`: Panel principal para usuarios autenticados, mostrando los tres últimos recuerdos.
  - `create/`: Editor para crear nuevos recuerdos.
  - `gallery/`: Galería visual de los recuerdos guardados.
  - `profile/`: Página de perfil del usuario (en desarrollo).
- `shared/`: Componentes compartidos que pueden ser utilizados en diversas partes de la aplicación.
  - `memory-card/`: Define la estructura visual de cada tarjeta de recuerdo que se muestra en la aplicación (por ejemplo, en la Galería o el Dashboard).
- `app.component.ts` y `app.component.html`: Componente raíz de la aplicación, gestiona el layout principal y la inclusión de cabeceras según el estado de autenticación.
- `app.routes.ts`: Define las rutas de navegación de la aplicación.
- `styles.scss`: Estilos globales de la aplicación.
- `_mixins.scss`: Mixins de SASS para utilidades de estilo.

## Funcionalidades Detalladas

### Concepto de la Aplicación: Momentum

Momentum está diseñada para ser una cápsula digital personal donde los usuarios pueden guardar y revivir sus momentos más significativos. Se enfoca en la importancia de atesorar recuerdos.

### Autenticación

El sistema de autenticación es básico y está diseñado para fines de demostración.

- **Login**: Se accede a través de la ruta `/login`. Las credenciales hardcodeadas son:
  - Usuario: `lemoncoder`
  - Contraseña: `1234`
- **Protección de Rutas**:
  - Las rutas como `/dashboard`, `/create`, `/gallery`, y `/profile` requieren que el usuario esté autenticado. Si un usuario no autenticado intenta acceder, es redirigido a `/home`.
  - Si un usuario ya autenticado intenta acceder a `/login` o `/home`, es redirigido a `/dashboard`.
- **Persistencia**: El estado de autenticación y el nombre de usuario se almacenan en `localStorage`.

### Navegación y Layout

La aplicación adapta su interfaz y opciones de navegación según si el usuario ha iniciado sesión o no.

#### Menú Público (Visible para usuarios no autenticados)

- **Home**:
  - Mensaje de bienvenida: "Keep your moments alive."
  - Descripción: "Capture your memories and relive them anytime you want."
- **Login**:
  - Llamada a la acción: "Accede a tu cápsula digital."
- **Acerca de**:
  - Contenido: Explicación de la app Momentum.

#### Menú Privado (Visible para usuarios autenticados)

- **Dashboard**:
  - Propósito: Muestra los tres recuerdos más recientes.
  - Futura implementación: Frases como "Hoy hace 2 años de…" o una grilla visual de recuerdos.
- **Galería**:
  - Propósito: Presenta una grid visual de los recuerdos del usuario.
  - Detalles: Incluye fotos, títulos y fechas de cada recuerdo.
- **Create**:
  - Propósito: Editor para agregar.
  - Campos disponibles:
    - Título
    - Fecha
    - Descripción
    - Emoción (dropdown para seleccionar hasta 3 emojis representativos)
    - Imagen (subida de archivo)
- **Perfil** (todavía no implementado):
  - Mensaje de bienvenida: "Welcome back, [nombre_usuario]" (ej: "Welcome back, lemoncoder")
  - Información mostrada:
    - "First memory on: [fecha_primer_recuerdo]" (ej: "2023-05-19")
    - "Total memories: [numero_total_recuerdos]" (ej: "28")
    - "Most used emoji: (ej: "😊")

### Pie de Página

- **Pie de Página**: Contiene información de copyright y es visible en todas las páginas.

## Scripts Disponibles

Dentro de `layout-mini-app/package.json` (el `package.json` específico de la app Angular), puedes encontrar los siguientes scripts:

- `ng serve`: Inicia el servidor de desarrollo. Accede a la app en `http://localhost:4200/`.
- `ng build`: Compila la aplicación para producción.
- `ng test`: Ejecuta las pruebas unitarias (actualmente por implementar).
- `ng build --watch --configuration development`: Compila en modo desarrollo y observa los cambios.

## Implementaciones Futuras

- **Memory Time Machine**: Una funcionalidad para "viajar en el tiempo" y revisitar recuerdos de fechas específicas o periodos.
- **Memory Prompts**: Sugerencias o preguntas para inspirar al usuario a recordar y registrar nuevos momentos.
- **Edición de Recuerdos**: Permitir a los usuarios modificar los recuerdos existentes (actualmente, el editor `Create` solo permite agregar nuevos).
- **Implementación de Testing exhaustivo**: Desarrollar y ejecutar pruebas unitarias, de integración y end-to-end para asegurar la calidad y estabilidad de la aplicación.
- **Búsqueda y Filtrado de Recuerdos**: Implementar funcionalidad para buscar recuerdos por palabras clave, fechas, emociones u otros criterios, y filtrarlos correspondientemente.
- **Organización por Carpetas**: Permitir a los usuarios organizar sus recuerdos en carpetas personalizadas para una mejor gestión.

## Autores

- Guste Gaubaite - Proyecto del Laboratorio de Angular "Layout completo de mini-aplicación" del Máster Frontend de Lemoncode
