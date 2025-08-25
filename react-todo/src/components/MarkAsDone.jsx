import React from "react";

export default function MarkTodoAsDone({ currentTodoId, setTodos }) {
  const markAsDone = (isChecked) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === currentTodoId) {
          todo.isDone = isChecked ? true : false;
        }
        return todo;
      })
    );
  };

  return (
    <input
      type="checkbox"
      name="mark-as-done"
      onClick={(e) => markAsDone(e.target.checked)}
    />
  );
}
