# Máster Front End XVII - Laboratorio React "Básico"

Este proyecto es una aplicación web desarrollada con React que muestra dos funcionalidades principales:

1. Lista de miembros de organizaciones de GitHub
2. Lista de personajes de Rick and Morty

## 🚀 Características

- **Autenticación de Usuario**: Sistema de login básico
- **Lista de Miembros de GitHub**:
  - Búsqueda de organizaciones
  - Visualización de miembros con avatares
  - Paginación de resultados
- **Rick and Morty**:
  - Lista de personajes con estado (vivo/muerto)
  - Búsqueda de personajes
  - Carga infinita de resultados
  - Vista detallada de personajes

## 🛠️ Tecnologías Utilizadas

- React
- TypeScript
- Material-UI
- React Router
- Context API

## 🔑 Credenciales de Acceso

Para acceder a la aplicación, utiliza las siguientes credenciales:

- Usuario: `rick`
- Contraseña: `morty`

## 📁 Estructura del Proyecto

```
src/
├── core/                # Configuración global y contexto
├── pods/                # Componentes principales
│   ├── characters-ram/  # Módulo de Rick and Morty
│   ├── character-ram-detail/ # Detalle de personajes
|   ├── detail/          # Detalle de miembros
│   ├── list/            # Lista de miembros de GitHub
│   ├── login/           # Módulo de autenticación
│   └── navbar/          # Barra de navegación
├── scenes/              # Páginas principales
└── app.tsx              # Componente principal
```

## 🔄 Flujo de la Aplicación

1. El usuario inicia en la página de login
2. Tras autenticarse, puede acceder a:
   - Lista de miembros de organizaciones de GitHub
   - Lista de personajes de Rick and Morty
3. En cada sección puede:
   - Realizar búsquedas
   - Ver detalles de elementos
   - Navegar entre diferentes vistas

## 📝 Notas Adicionales

- La aplicación utiliza la API pública de GitHub para obtener información de organizaciones
- Los datos de Rick and Morty se obtienen de la API pública de Rick and Morty
- El diseño es responsive y se adapta a diferentes tamaños de pantalla

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Autores

- Guste Gaubaite - Proyecto del Laboratorio de React "Básico" del Máster Frontend de Lemoncode
