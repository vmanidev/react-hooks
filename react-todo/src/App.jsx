import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]); // state that manages todos data
  return (
    <>
      <ul>
        {todos.length > 0 && <TodoList todos={todos} setTodos={setTodos} />}
      </ul>
    </>
  );
}
