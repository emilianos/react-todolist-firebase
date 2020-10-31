export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: [...state.todos]
      };
    case "CHECK_TODO":
      return {
        ...state,
        todos: [...state.todos]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload)
      };
    default:
      return state;
  }
};
