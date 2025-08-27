import React, { useEffect, useState } from "react";

export default function MarkTodoAsDone({ isDone, currentTodoId, setTodos }) {
  const [checked, setChecked] = useState(isDone);

  useEffect(() => {
    setChecked(isDone);
  }, [isDone]);

  const markAsDone = (isChecked) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === currentTodoId) {
          todo.isDone = isChecked ? true : false;
        }
        return todo;
      })
    );
    setChecked(isChecked);
  };

  return (
    <input
      type="checkbox"
      name="mark-as-done"
      checked={checked}
      onChange={(e) => markAsDone(e.target.checked)}
    />
  );
}
