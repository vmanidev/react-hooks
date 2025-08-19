import React, { useRef } from "react";

export default function AddTodo({ setTodos }) {
  const inputRef = useRef(null);

  const addTodo = () => {
    if (!inputRef.current.value) return;
    const todo = inputRef.current.value;
    setTodos((prev) => [...prev, { id: prev.length + 1, todo }]); // update todo list
    inputRef.current.value = ""; // reset input field
  };

  return (
    <div id="add-todo-container">
      <input ref={inputRef} type="text" id="add-todo-input" name="addTodo" />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
