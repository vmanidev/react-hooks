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
  return <div>App</div>;
}
