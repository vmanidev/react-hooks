import React from "react";

export default function DeleteTodo({ currentTodoId, setTodos }) {
  const deleteTodo = () =>
    setTodos((prev) => prev.filter(({ id }) => id !== currentTodoId));

  return <button onClick={deleteTodo}>Delete</button>;
}
