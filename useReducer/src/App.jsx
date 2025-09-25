import { useReducer, useState } from "react";
import "./index.css";

const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add": {
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, ...payload }],
      };
    }
    case "edit": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) todo = payload;
          return todo;
        }),
      };
    }
    case "delete": {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== payload.id),
      };
    }
  }
};

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });
  const [formData, setFormData] = useState({
    title: "",
    isDone: false,
  });

  const addTodo = (payload) => {
    dispatch({ type: "add", payload });
  };

  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (event) => {
    addTodo(formData);
  };

  return (
    <div>
      <div>
        <input
          id="todoTitle"
          name="todoTitle"
          type="text"
          onChange={handleFormChange}
        />
        <button onClick={formSubmit}>Add Todo</button>
      </div>
    </div>
  );
}
