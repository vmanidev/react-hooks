import React from "react";

export default function TodoList({ todos, setTodos }) {
  const renderTodos = () =>
    todos.map(({ id, todo }) => <li key={id}>{todo}</li>);

  return renderTodos();
}
