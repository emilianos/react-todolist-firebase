import React, {
  createContext,
  useReducer,
  useState,
  useEffect,
  useRef
} from "react";
import firebase from "../firebase";
import TodoReducer from "./TodoReducer";

const initialState = {
  todos: []
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const inputRef = useRef(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [currentTodo, setCurrentTodo] = useState(null);

  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db.collection("todos").onSnapshot((snapshot) => {
      const todosData = [...state.todos];
      snapshot.forEach((doc) => todosData.push({ ...doc.data(), id: doc.id }));

      inputRef.current.focus();

      dispatch({
        type: "UPDATE_TODOS",
        payload: todosData
      });
    });

    return unsubscribe;
  }, [db]);


  const addTodo = (todo) => {
    const newTodo = db.collection("todos").add(todo);

    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    });
  };

  const editTodo = (updatedTodo) => {
    const getPosition = state.todos.findIndex(el => el.id === updatedTodo.id)
    const newArray = state.todos.splice(getPosition,1,{id: updatedTodo.id, text: updatedTodo.text, completed: updatedTodo.completed})
    dispatch({
      type: "EDIT_TODO",
      payload: newArray
    });
  };
  
  const checkTodo = (checkedTodo) => {
    const getPosition = state.todos.findIndex(el => el.id === checkedTodo.id)
    const newArray = state.todos.splice(getPosition,1,{id: checkedTodo.id, text: checkedTodo.text, completed: !checkedTodo.completed})

    dispatch({
      type: "CHECK_TODO",
      payload: newArray
    });

    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    const delTodo = db.collection("todos").doc(id).delete();

    dispatch({
      type: "DELETE_TODO",
      payload: delTodo
    });

    inputRef.current.focus();
  };

  return (
    <div>
      <TodoContext.Provider
        value={{
          todos: state.todos,
          inputRef,
          inputValue,
          setInputValue,
          isEditing,
          setIsEditing,
          addTodo,
          editTodo,
          checkTodo,
          deleteTodo,
          currentTodo,
          setCurrentTodo
        }}
      >
        {children}
      </TodoContext.Provider>
    </div>
  );
};
