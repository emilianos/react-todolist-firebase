export default (state, action) => {
  switch (action.type) {
    case "UPDATE_TODOS":
      return {
        ...state,
        todos: [...action.payload]
      };
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
        todos: [...state.todos]
      };
    default:
      return state;
  }
};
