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
    <div className="grid grid-rows-[50px,1fr] gap-6 p-6">
      <div className="flex items-center gap-4">
        <input
          id="title"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="title"
          type="text"
          onChange={handleFormChange}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
          type="submit"
          onClick={formSubmit}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
