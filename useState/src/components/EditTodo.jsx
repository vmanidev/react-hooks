import React, { useEffect, useRef } from "react";

export default function EditTodo({
  currentTodoValue,
  currentTodoId,
  setTodos,
}) {
  const inputRef = useRef(currentTodoValue);

  useEffect(() => {
    inputRef.current.value = currentTodoValue;
  }, [currentTodoValue]);

  const editDone = () => {
    if (!inputRef.current.value) return;
    setTodos((prev) =>
      prev.map(({ id, todo, edit, ...rest }) => {
        if (id === currentTodoId) {
          edit = false;
          todo = inputRef.current.value;
        }
        return { id, todo, edit, ...rest };
      })
    );
  };
  return (
    <>
      <input
        id="edit-input"
        type="text"
        name="editInput"
        maxLength="100"
        ref={inputRef}
      />
      <button className="button done-btn" onClick={editDone}>
        Done
      </button>
    </>
  );
}
