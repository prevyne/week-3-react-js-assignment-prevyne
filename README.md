# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

React & Tailwind CSS Task Management App
This project is a modern, responsive React application built to demonstrate key front-end development concepts. It includes a feature-rich task manager, an API data viewer, and a theme switcher, all styled with Tailwind CSS. The application is built using Vite for a fast development experience.

Features
Component-Based Architecture: Built with reusable and modular components like Button, Card, Navbar, and Layout.

Advanced State Management: Utilizes core React hooks (useState, useEffect, useContext) for efficient state management.

Custom Hooks: Includes a useLocalStorage custom hook to persist data (tasks and theme) in the browser.

API Integration: Fetches data from a public API (JSONPlaceholder) with clear loading and error states.

Client-Side Functionality: Implements pagination and a real-time search filter for the fetched API data.

Responsive Design: Fully responsive layout for mobile, tablet, and desktop screens using Tailwind CSS.

Light/Dark Mode: A theme switcher that toggles between light and dark modes, with the user's preference saved to local storage.

Tech Stack
React.js: A JavaScript library for building user interfaces.

Vite: A next-generation front-end tooling for fast development.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

PostCSS: A tool for transforming CSS with JavaScript plugins.

Project Structure
The project follows a conventional and scalable file structure:

/src
├── components/   # Reusable UI components (Button, Card, etc.)
├── context/      # React Context providers (ThemeProvider)
├── hooks/        # Custom React hooks (useLocalStorage)
├── pages/        # Main page components (TaskManager, ApiDataViewer)
├── App.jsx       # Main application component and routing logic
├── main.jsx      # Application entry point
└── index.css     # Global styles and Tailwind directives

Setup and Installation
Follow these steps to get the project up and running on your local machine.

1. Clone the repository:

git clone <your-repository-url>
cd <repository-folder>

2. Install dependencies:

This project uses npm for package management. Run the following command in the project's root directory to install all the necessary dependencies.

npm install

3. Run the development server:

Once the installation is complete, you can start the Vite development server.

pnpm run dev

The application will now be running on http://localhost:5173 (or the next available port).

Available Scripts
In the project directory, you can run:

pnpm run dev: Runs the app in development mode.

pnpm run build: Builds the app for production to the dist folder.

pnpm run lint: Lints the project files using ESLint.

pnpm run preview: Serves the production build locally to preview it.

## The live site's link
https://plp-mern-react.netlify.app/
