import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Welcome from "./components/Welcome";

export default function App() {
  const [todos, setTodos] = useState([]); // state that manages todos data

  const renderApp = () => {
    if (todos.length < 1) {
      return <Welcome />;
    } else {
      return (
        <ul>
          <TodoList todos={todos} setTodos={setTodos} />
        </ul>
      );
    }
  };
  return (
    <div id="main">
      <AddTodo setTodos={setTodos} />
      {renderApp()}
    </div>
  );
}
