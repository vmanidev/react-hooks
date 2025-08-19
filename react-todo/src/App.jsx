import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]); // state that manages todos data

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <ul>
        {todos.length > 0 && <TodoList todos={todos} setTodos={setTodos} />}
      </ul>
    </>
  );
}
