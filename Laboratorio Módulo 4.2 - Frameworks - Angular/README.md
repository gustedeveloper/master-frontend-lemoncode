# Momentum Project

This project is an application called **Momentum**, developed with Angular. Its main goal is to allow users to capture, cherish, and relive their most precious memories through a personal digital capsule. The application features an adaptive layout structure that dynamically changes based on the user's authentication status, offering different views and functionalities.

## Main Features

- **Framework:** Angular
- **Styling:** SCSS, using Angular Material for UI components.
- **Authentication:**
  - Simple login system (demo credentials: `lemoncoder` / `1234`).
  - Authentication state is managed using `localStorage`.
  - `AuthService` for authentication logic.
  - `AuthGuard` to protect routes and manage redirects.
- **Dynamic Layout:**
  - Public header for unauthenticated users.
  - Private header for authenticated users.
  - Persistent footer.
- **Routing:** Manages navigation between different public and private pages.

## Project Structure

The main source code is located within the `layout-mini-app/src/app/` folder:

- `core/`: Contains the core logic of the application, such as `AuthService.ts` and `AuthGuard.ts`.
- `layout/`: Reusable visual components that make up the page structure:
  - `header-public/`: Header for the public section.
  - `header-private/`: Header for the private section (authenticated users).
  - `public-menu/`: Contains menu items for the public header.
  - `private-menu/`: Contains menu items for the private header.
  - `footer/`: Common footer.
- `pages/`: Components representing the different views/pages of the application:
  - `home/`: Homepage and welcome page.
  - `login/`: Login page.
  - `about/`: Informational page "About Momentum".
  - `dashboard/`: Main panel for authenticated users, displaying the last three memories.
  - `create/`: Editor to create new memories.
  - `gallery/`: Visual gallery of saved memories.
  - `profile/`: User profile page (under development).
- `shared/`: Shared components that can be used in various parts of the application.
  - `memory-card/`: Defines the visual structure of each memory card displayed in the application (e.g., in the Gallery or Dashboard).
- `app.component.ts` and `app.component.html`: Root component of the application, manages the main layout and ahe inclusion of headers based on authentication status.
- `app.routes.ts`: Defines the application's navigation routes.
- `styles.scss`: Global application styles.
- `_mixins.scss`: SASS mixins for style utilities.

## Detailed Functionalities

### Application Concept: Momentum

Momentum is designed to be a personal digital capsule where users can save and relive their most significant moments. It focuses on the importance of treasuring memories.

### Authentication

The authentication system is basic and designed for demonstration purposes.

- **Login**: Accessed via the `/login` route. Hardcoded credentials are:
  - User: `lemoncoder`
  - Password: `1234`
- **Route Protection**:
  - Routes like `/dashboard`, `/create`, `/gallery`, and `/profile` require the user to be authenticated. If an unauthenticated user tries to access them, they are redirected to `/home`.
  - If an already authenticated user tries to access `/login` or `/home`, they are redirected to `/dashboard`.
- **Persistence**: Authentication state and username are stored in `localStorage`.

### Navigation and Layout

The application adapts its interface and navigation options based on whether the user is logged in or not.

#### Public Menu (Visible to unauthenticated users)

- **Home**:
  - Welcome message: "Keep your moments alive."
  - Description: "Capture your memories and relive them anytime you want."
- **Login**:
  - Call to action: "Access your digital capsule."
- **About**:
  - Content: Explanation of the Momentum app.

#### Private Menu (Visible to authenticated users)

- **Dashboard**:
  - Purpose: Displays the three most recent memories.
  - Future implementation: Phrases like "Today 2 years ago…" or a visual grid of memories.
- **Gallery**:
  - Purpose: Presents a visual grid of the user's memories.
  - Details: Includes photos, titles, and dates for each memory.
- **Create**:
  - Purpose: Editor to add memories.
  - Available fields:
    - Title
    - Date
    - Description
    - Emotion (dropdown to select up to 3 representative emojis)
    - Image (file upload)
- **Profile** (not yet implemented):
  - Welcome message: "Welcome back, [username]" (e.g., "Welcome back, lemoncoder")
  - Information displayed:
    - "First memory on: [date_first_memory]" (e.g., "2023-05-19")
    - "Total memories: [total_number_memories]" (e.g., "28")
    - "Most used emoji: (e.g., "😊")

### Footer

- **Footer**: Contains copyright information and is visible on all pages.

## Available Scripts

Inside `layout-mini-app/package.json` (the Angular app's specific `package.json`), you can find the following scripts:

- `ng serve`: Starts the development server. Access the app at `http://localhost:4200/`.
- `ng build`: Compiles the application for production.
- `ng test`: Runs unit tests (currently to be implemented).
- `ng build --watch --configuration development`: Compiles in development mode and watches for changes.

## Possible Future Implementations

- **Memory Time Machine**: A feature to "travel in time" and revisit memories from specific dates or periods.
- **Memory Prompts**: Suggestions or questions to inspire the user to remember and record new moments.
- **Memory Editing**: Allow users to modify existing memories (currently, the `Create` editor only allows adding new ones).
- **Comprehensive Testing Implementation**: Develop and run unit, integration, and end-to-end tests to ensure application quality and stability.

## Authors

- Guste Gaubaite - Angular Laboratory Project "Complete mini-application layout" from the Lemoncode Frontend Master.
