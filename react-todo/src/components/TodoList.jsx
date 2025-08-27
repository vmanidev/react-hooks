import React from "react";
import DeleteTodo from "./DeleteTodo";
import MarkTodoAsDone from "./markAsDone";
import EditTodoBtn from "./EditTodoBtn";
import EditTodo from "./EditTodo";

export default function TodoList({ todos, setTodos }) {
  const renderTodos = () =>
    todos.map(({ id, todo, isDone, edit }, index) => (
      <li key={id}>
        <span>{index + 1}.</span>
        {edit ? (
          <>
            <EditTodo
              currentTodoValue={todo}
              currentTodoId={id}
              setTodos={setTodos}
            />
          </>
        ) : (
          <>
            <MarkTodoAsDone currentTodoId={id} setTodos={setTodos} />
            <span className={isDone ? "isDone" : undefined}>{todo} </span>
            <EditTodoBtn currentTodoId={id} setTodos={setTodos} />
            <DeleteTodo currentTodoId={id} setTodos={setTodos} />
          </>
        )}
      </li>
    ));

  return renderTodos();
}
