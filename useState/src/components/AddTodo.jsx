import React, { useRef } from "react";

export default function AddTodo({ setTodos }) {
  const inputRef = useRef(null);

  const addTodo = () => {
    if (!inputRef.current.value) return;
    const todo = inputRef.current.value;
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, todo, isDone: false, edit: false },
    ]); // update todo list
    inputRef.current.value = ""; // reset input field
  };

  const handleKeyDown = (code) => {
    if (code === "Enter") addTodo();
  };

  return (
    <div id="add-todo-container">
      <input
        ref={inputRef}
        maxLength="100"
        type="text"
        id="add-todo-input"
        name="addTodo"
        onKeyDown={(e) => handleKeyDown(e.code)}
      />
      <button className="button" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}
