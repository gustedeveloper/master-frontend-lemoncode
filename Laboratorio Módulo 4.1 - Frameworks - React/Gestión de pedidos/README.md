# Master Front End XVII - React Laboratory

# Order Management System

A React-based order management system built with TypeScript and Material-UI.

## Project Overview

This application provides a solution for managing orders, featuring a clean and intuitive user interface. The system allows users to view, create, and manage orders.

## Features

- **Orders List View**

  - Orders display in a table with:
    - Order number
    - Supplier
    - Date
    - Total
    - Status (Approved/Pending)
  - Access to order details
  - Order editing
  - Order deletion

- **Order Detail View**
  - Order items display with:
    - Status (Validated/Pending)
    - Description
    - Amount
  - Features:
    - Validate/Invalidate items
    - Edit item description
    - Edit item price
    - Delete items

## Technical Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **UI Components**: Material-UI (MUI)
- **Routing**: React Router v7
- **Build Tool**: Vite
- **State Management**: React Context API
- **Styling**: Emotion (CSS-in-JS)

## Project Structure

```
src/
├── assets/         # Static assets
├── core/           # Shared components and utilities
│   ├── components/ # Reusable UI components
│   ├── context/    # React context providers
│   ├── utils/      # Utility functions
│   ├── data.tsx    # Mock data
│   └── model.ts    # TypeScript interfaces
├── pods/           # Feature-specific components
│   ├── orders-list/
│   ├── order-detail/
│   └── table-header/
├── scenes/         # Page components
│   ├── orders-list.tsx
│   └── order-detail.tsx
└── routes/         # Routing configuration
```

## Key Components

### Core Components

- **Table**: Custom table component for displaying orders and items
- **OrderContext**: Global state management for orders
- **Debounced Updates**: Real-time total amount updates when editing item prices

### Feature Components

- **OrdersList**: Main view displaying all orders
- **OrderDetail**: Detailed view of a single order with item management
- **TableHeader**: Table header component for consistent column display

## Future Enhancements

- [ ] Add user authentication
- [ ] Implement read-only mode for basic users
- [ ] Implement edit mode for advanced users
- [ ] Implement order history tracking
- [ ] Add notification system for status changes

## Contributing

This project is part of a submission for the Lemoncode Frontend Master program.

### Additional Features Implemented

Beyond the basic requirements of the exercise, this implementation has been extended to a complete CRUD (Create, Read, Update, Delete) system for orders, including:

- Full order and item management (creation, editing, deletion)
- Improved state management using React Context
