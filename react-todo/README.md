# Todo App: Demonstrating Props and useState

This Todo app demonstrates the usage of **props** and **useState** in React.  
It shows how state and its updater function can be passed down to child components as props.  
Child components do not mutate the state directly; instead, they use the provided updater function to lift state changes back up to the parent.  

The app includes core functionalities such as **adding** and **deleting** todos.

## 🚀 Demo

[![Demo](https://img.shields.io/badge/Live%20Demo-React%20Todo-blue?style=for-the-badge&logo=vercel)](https://react-todo-lake-mu.vercel.app/)

# Screenshot
<img width="1440" height="751" alt="todo" src="https://github.com/user-attachments/assets/8491e821-28aa-4323-b5c5-b0cd32dd8a9a" />

# Install and Configuration

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
