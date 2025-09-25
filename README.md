# React Hooks

This repository demonstrates implementations of both fundamental and advanced React hooks, showing their usage in various scenarios and practical applications.

🌐 Demo: [All React Hooks Index Page](https://react-hooks-theta-one.vercel.app/)

---

## useState
**State Management in Functional Components**  
useState is a React hook that allows you to add state to functional components. It returns a stateful value and a function to update it.

🔗 Repository: [react-hooks/useState](https://github.com/vmanidev/react-hooks/tree/main//useState)  
🌐 Demo: [Todo App](https://use-state-todo.vercel.app/)

---

## useEffect
**Handling Side Effects in Components**  
useEffect is a React hook that performs side effects in functional components. It runs after every render by default but can be configured to run only when certain values change.

🔗 Repository: [react-hooks/useEffect](https://github.com/vmanidev/react-hooks/tree/main//useEffect)  
🌐 Demo: [Countdown](https://use-effect-countdown.vercel.app/)

---

## useContext / Context API
**Global State Management with Context**  
useContext is a React hook that allows you to access the value of a context directly, without needing to wrap components in a Consumer. It's commonly used with the Context API for global state management.

🔗 Repository: [react-hooks/useContext](https://github.com/vmanidev/react-hooks/tree/main//useContext)  
🌐 Demo: [Theme Toggle](https://context-api-theme-toggle.vercel.app/)

---

## useRef
**Accessing DOM Elements and Persisting Values**  
useRef is a React hook that provides a mutable reference object. It’s often used to access DOM elements directly, persist values across renders, and manage uncontrolled components without re-rendering.

🔗 Repository: [react-hooks/useRef](https://github.com/vmanidev/react-hooks/tree/main//useRef)  

---

## useReducer
**Complex State Management with Reducers**  
useReducer is a React hook used for managing complex state logic. It’s similar to useState but is preferable when state transitions depend on the previous state or when multiple state values are managed together. It takes a reducer function and an initial state, returning the current state and a dispatch function to trigger state updates.

🔗 Repository: [react-hooks/useReducer](https://github.com/vmanidev/react-hooks/tree/main//useReducer)  
🌐 Demo: [Todo App](https://use-reducer-beta.vercel.app/)
