import React from "react";
import DeleteTodo from "./DeleteTodo";
import MarkTodoAsDone from "./markAsDone";

export default function TodoList({ todos, setTodos }) {
  const renderTodos = () =>
    todos.map(({ id, todo, isDone }) => (
      <li key={id}>
        <MarkTodoAsDone currentTodoId={id} setTodos={setTodos} />
        <span className={isDone ? "isDone" : undefined}>{todo} </span>
        <DeleteTodo currentTodoId={id} setTodos={setTodos} />
      </li>
    ));

  return renderTodos();
}
