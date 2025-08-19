import React from "react";
import DeleteTodo from "./DeleteTodo";

export default function TodoList({ todos, setTodos }) {
  const renderTodos = () =>
    todos.map(({ id, todo }) => (
      <li key={id}>
        {todo} <DeleteTodo currentTodoId={id} setTodos={setTodos} />
      </li>
    ));

  return renderTodos();
}
