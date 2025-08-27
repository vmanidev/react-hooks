import React from "react";

export default function EditTodoBtn({ currentTodoId, setTodos }) {
  const editTodo = () =>
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === currentTodoId) todo.edit = true;
        return todo;
      })
    );

  return <button className="button edit-btn" onClick={editTodo}>Edit</button>;
}
