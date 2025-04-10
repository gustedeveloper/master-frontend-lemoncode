# Sistema de Gestión de Pedidos

Un sistema de gestión de pedidos basado en React, construido con TypeScript y Material-UI.

## Visión General del Proyecto

Esta aplicación proporciona una solución para la gestión de pedidos, presentando una interfaz de usuario limpia e intuitiva. El sistema permite a los usuarios visualizar, crear y gestionar pedidos.

## Características

- **Vista de Lista de Pedidos**

  - Visualización de pedidos en una tabla con:
    - Número de pedido
    - Proveedor
    - Fecha
    - Total
    - Estado (Aprobado/Pendiente)
  - Acceso a detalles del pedido
  - Edición de pedidos
  - Eliminación de pedidos

- **Vista de Detalle de Pedido**
  - Visualización de items del pedido con:
    - Estado (Validado/Pendiente)
    - Descripción
    - Cantidad
  - Funcionalidades:
    - Validar/Invalidar items
    - Editar descripción de items
    - Editar precio de items
    - Eliminar items

## Stack Tecnológico

- **Framework Frontend**: React 19
- **Lenguaje**: TypeScript
- **Componentes UI**: Material-UI (MUI)
- **Enrutamiento**: React Router v7
- **Herramienta de Build**: Vite
- **Gestión de Estado**: React Context API
- **Estilos**: Emotion (CSS-in-JS)

## Estructura del Proyecto

```
src/
├── assets/         # Recursos estáticos
├── core/           # Componentes y utilidades compartidas
│   ├── components/ # Componentes UI reutilizables
│   ├── context/    # Proveedores de contexto React
│   ├── utils/      # Funciones de utilidad
│   ├── data.tsx    # Datos de prueba
│   └── model.ts    # Interfaces TypeScript
├── pods/           # Componentes específicos de funcionalidades
│   ├── orders-list/
│   ├── order-detail/
│   └── table-header/
├── scenes/         # Componentes de página
│   ├── orders-list.tsx
│   └── order-detail.tsx
└── routes/         # Configuración de rutas
```

## Componentes Principales

### Componentes Core

- **Table**: Componente de tabla para visualizar pedidos e items
- **OrderContext**: Gestión de estado global para pedidos
- **Actualizaciones Debounceadas**: Actualización en tiempo real del importe total al editar precios de items

### Componentes de Funcionalidad

- **OrdersList**: Vista principal que muestra todos los pedidos
- **OrderDetail**: Vista detallada de un pedido con gestión de items
- **TableHeader**: Componente de encabezado de tabla para visualización consistente de columnas

## Mejoras Futuras

- [ ] Añadir autenticación de usuarios
- [ ] Implementar modo de solo lectura para usuarios básicos
- [ ] Implementar modo de edición para usuarios avanzados
- [ ] Implementar historial de pedidos
- [ ] Añadir sistema de notificaciones para cambios de estado

## Contribuciones

Este proyecto forma parte de una entrega del Máster Frontend de Lemoncode.

### Características Adicionales Implementadas

Más allá de los requisitos básicos del ejercicio, esta implementación ha sido extendida a un sistema CRUD (Create, Read, Update, Delete) completo para pedidos, incluyendo:

- Gestión completa de pedidos e items (creación, edición, eliminación)
- Mejor gestión del estado usando React Context
