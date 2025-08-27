import React from "react";

export default function EditTodo({ currentTodoId, setTodos }) {
  const editDone = () =>
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === currentTodoId) todo.edit = false;
        return todo;
      })
    );
  return (
    <>
      <input id="edit-input" type="text" name="editInput" />
      <button className="button done-btn" onClick={editDone}>Done</button>
    </>
  );
}
