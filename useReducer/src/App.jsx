import { useReducer, useState } from "react";
import "./index.css";
import Modal from "./ui-components/Modal";

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
  const [closeModal, setCloseModal] = useState(false);

  const addTodo = (payload) => {
    dispatch({ type: "add", payload });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete", payload: { id } });
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
      <ul className="space-y-2">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center"
          >
            <span>{todo.title}</span>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition"
              onClick={(e) => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {closeModal && <Modal onCloseModal={setCloseModal(true)}></Modal>}
    </div>
  );
}
