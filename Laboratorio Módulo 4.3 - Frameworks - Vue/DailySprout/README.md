# Daily Sprouts - Pixel Art Task Manager

Welcome to Daily Sprouts! A task manager with a charming pixel art aesthetic. In this project, your task progress is uniquely visualized: each task starts as a small sprout, grows as you advance, and fully blooms upon completion.

Developed with Vue.js, Daily Sprouts helps you organize your day-to-day in a visual and motivating way.

## 🖼️ Application Views

<table>
  <tr>
    <td align="center"><strong>Home Page</strong></td>
    <td align="center"><strong>Task Management</strong></td>
  </tr>
  <tr>
    <td><img src="/screenshots/home" alt="Home Page"></td>
    <td><img src="/screenshots/task-list" alt="Task Management"></td>
  </tr>
  <tr>
    <td align="center"><strong>Garden</strong></td>
    <td align="center"><strong>Responsive View</strong></td>
  </tr>
  <tr>
    <td><img src="/screenshots/garden" alt="Garden"></td>
    <td><img src="/screenshots/archive" alt="Archivo"></td>
  </tr>
</table>

## ✨ Key Features

- **Task Creation:** Add new tasks with a title and choose a flower to represent it.
- **Status Management:** Tasks can have three statuses: "Just started," "In progress," and "Completed." The status can be easily changed from a dropdown list.
- **Progressive Visualization:** The flower image for each task changes to reflect its current status, from a sprout to a full flower.
- **Custom Garden:** Send your most important tasks to your "garden" for a visual representation of your achievements. There is a limit of 10 plants in the garden.
- **Editing and Deletion:** Edit your task titles directly in the list or delete them when they are no longer needed.
- **Filtering and Archiving:** Filter your tasks by status or by those in the garden. You can also archive tasks to hide them from the main list and view them later.
- **Data Persistence:** Your tasks are saved in the browser's `localStorage`, so you won't lose your progress when you reload the page.
- **Responsive Design:** The application is designed to adapt to different screen sizes.

## 🛠️ Technical Details

### Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (using `<script setup>`)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Styling:** CSS with variables for theming.

### Project Structure

The project follows a modular structure to facilitate maintenance and scalability:

```
public/           # Icons and images
src/
├── common/       # Reusable generic components (selectors, checkboxes, etc.)
├── components/   # Main application components (TaskForm, TaskList, Garden)
├── router/       # Vue Router configuration
├── stores/       # Pinia modules for state management (tasks, garden)
├── types/        # TypeScript type definitions
├── utils/        # Utility functions (e.g., flower data)
├── views/        # Main application views (Home, TaskManagement, Garden)
└── App.vue       # Root application component
```

### State Management with Pinia

The application uses **Pinia** for centralized and reactive state management.

- **`tasks.ts`:** Manages everything related to tasks: task list, adding, deleting, updating, archiving, etc. It also subscribes to changes to persist the state in `localStorage`.
- **`garden.ts`:** Manages the garden's state, such as the selected background, which is also persisted in `localStorage`.

### Reusable Components

A strong emphasis has been placed on component reusability, which can be found in the `src/common/` folder. Some key examples are:

- `CustomImageSelector.vue`: A generic selector that displays images as options.
- `CustomStatusDropdown.vue`: The dropdown for changing task statuses.
- `EditableTitle.vue`: A component that allows for inline text editing.
- `TaskImage.vue`: Displays the correct flower image according to the task's status.
